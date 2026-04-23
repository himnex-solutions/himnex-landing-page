import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import nodemailer from "nodemailer";
import { budgetRanges, projectTypes } from "@/lib/contact-options";

export const runtime = "nodejs";

const MAX_NAME_LENGTH = 120;
const MAX_COMPANY_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 4000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EMAIL_LOGO_PATHNAME = "/images/email-logo.png";

type ContactRequest = {
  name: string;
  email: string;
  company: string | null;
  projectType: string | null;
  budget: string | null;
  message: string;
};

type ContactRow = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  project_type: string | null;
  budget: string | null;
  message: string;
  created_at: string;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null && !Array.isArray(value);

const escapeHtml = (value: string | null | undefined) =>
  String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatHtmlValue = (value: string | null | undefined) =>
  escapeHtml(value || "Not provided");

const formatTextValue = (value: string | null | undefined) =>
  value?.trim() || "Not provided";

const formatSubmittedAt = (value: string) => {
  const submittedAt = new Date(value);

  if (Number.isNaN(submittedAt.getTime())) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kathmandu",
  }).format(submittedAt);
};

const normalizeBaseUrl = (value: string) => value.replace(/\/+$/, "");

const getEmailLogoUrl = (request: Request) => {
  const configuredLogoUrl = process.env.EMAIL_LOGO_URL?.trim();

  if (configuredLogoUrl) {
    return configuredLogoUrl;
  }

  const configuredSiteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "");

  const baseUrl = configuredSiteUrl
    ? normalizeBaseUrl(configuredSiteUrl)
    : new URL(request.url).origin;

  return `${baseUrl}${EMAIL_LOGO_PATHNAME}`;
};

const normalizeOptional = (value: unknown, maxLength: number) => {
  if (typeof value !== "string") return null;

  const normalized = value.trim();
  if (!normalized) return null;

  return normalized.slice(0, maxLength);
};

const parseContactRequest = (body: unknown): ContactRequest => {
  if (!isRecord(body)) {
    throw new Error("Invalid contact form data.");
  }

  const name = normalizeOptional(body.name, MAX_NAME_LENGTH);
  const email = normalizeOptional(body.email, 254)?.toLowerCase() ?? null;
  const company = normalizeOptional(body.company, MAX_COMPANY_LENGTH);
  const projectType = normalizeOptional(body.projectType, 80);
  const budget = normalizeOptional(body.budget, 80);
  const message = normalizeOptional(body.message, MAX_MESSAGE_LENGTH);

  if (!name) {
    throw new Error("Please enter your name.");
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    throw new Error("Please enter a valid email address.");
  }

  if (!message || message.length < 10) {
    throw new Error("Please tell us a little more about your project.");
  }

  if (
    projectType &&
    !(projectTypes as readonly string[]).includes(projectType)
  ) {
    throw new Error("Please choose a valid project type.");
  }

  if (budget && !(budgetRanges as readonly string[]).includes(budget)) {
    throw new Error("Please choose a valid budget range.");
  }

  return {
    name,
    email,
    company,
    projectType,
    budget,
    message,
  };
};

const createSupabaseAdmin = () => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase environment variables are not configured.");
  }

  return createClient(supabaseUrl, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
};

const getSmtpPort = () => {
  const port = Number(process.env.SMTP_PORT || 465);

  if (!Number.isInteger(port) || port <= 0) {
    throw new Error("SMTP_PORT must be a valid port number.");
  }

  return port;
};

const createMailTransport = () => {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASSWORD;
  const port = getSmtpPort();
  const secure =
    process.env.SMTP_SECURE === "true" ||
    (!process.env.SMTP_SECURE && port === 465);

  if (!host) {
    throw new Error("SMTP_HOST is not configured.");
  }

  if ((user && !pass) || (!user && pass)) {
    throw new Error("SMTP_USER and SMTP_PASSWORD must be configured together.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure,
    ...(user && pass
      ? {
          auth: {
            user,
            pass,
          },
        }
      : {}),
  });
};

const getMailConfig = () => {
  const ownerEmail =
    process.env.CONTACT_OWNER_EMAIL || "himnexsolutions.np@gmail.com";
  const fromEmail = process.env.CONTACT_FROM_EMAIL || process.env.SMTP_USER;

  if (!fromEmail) {
    throw new Error("CONTACT_FROM_EMAIL or SMTP_USER is not configured.");
  }

  return {
    ownerEmail,
    fromEmail,
  };
};

const renderEmailShell = ({
  preheader,
  eyebrow,
  title,
  intro,
  children,
  footerNote,
  logoUrl,
}: {
  preheader: string;
  eyebrow: string;
  title: string;
  intro: string;
  children: string;
  footerNote: string;
  logoUrl: string;
}) => `
  <!doctype html>
  <html lang="en">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>${escapeHtml(title)}</title>
    </head>
    <body style="margin:0;padding:0;background:#eef2f7;color:#111827;font-family:Arial,Helvetica,sans-serif">
      <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">
        ${escapeHtml(preheader)}
      </div>
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;background:#eef2f7">
        <tr>
          <td align="center" style="padding:32px 14px">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;max-width:680px;background:#ffffff;border:1px solid #d9e2ec;border-radius:18px;overflow:hidden">
              <tr>
                <td style="background:#111827;padding:30px 30px 28px">
                  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
                    <tr>
                      <td style="vertical-align:top">
                        <div style="font-size:12px;line-height:16px;font-weight:700;letter-spacing:2.4px;text-transform:uppercase;color:#ffb347">
                          ${escapeHtml(eyebrow)}
                        </div>
                        <h1 style="margin:12px 0 0;font-size:30px;line-height:38px;font-weight:800;color:#ffffff">
                          ${escapeHtml(title)}
                        </h1>
                        <p style="margin:14px 0 0;font-size:15px;line-height:24px;color:#d1d5db">
                          ${escapeHtml(intro)}
                        </p>
                      </td>
                      <td align="right" style="width:96px;vertical-align:top">
                        <div style="display:inline-block;background:#ffffff;border:1px solid rgba(255,255,255,0.28);border-radius:16px;padding:9px">
                          <img src="${escapeHtml(logoUrl)}" width="58" height="58" alt="Himnex Solutions" style="display:block;width:58px;height:58px;object-fit:contain;border:0;outline:none;text-decoration:none" />
                        </div>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding:30px">
                  ${children}
                </td>
              </tr>
              <tr>
                <td style="background:#f8fafc;border-top:1px solid #e5e7eb;padding:20px 30px">
                  <p style="margin:0;font-size:12px;line-height:19px;color:#667085">
                    ${escapeHtml(footerNote)}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

const renderDetailRow = (label: string, value: string) => `
  <tr>
    <td style="padding:13px 0;border-bottom:1px solid #edf2f7;color:#667085;font-size:13px;line-height:20px;width:150px;vertical-align:top">
      ${escapeHtml(label)}
    </td>
    <td style="padding:13px 0;border-bottom:1px solid #edf2f7;color:#111827;font-size:14px;line-height:21px;font-weight:700;vertical-align:top">
      ${value}
    </td>
  </tr>
`;

const renderMetricCard = (label: string, value: string) => `
  <td width="33.333%" style="padding:0 6px 12px 0;vertical-align:top">
    <div style="border:1px solid #e5e7eb;border-radius:14px;background:#ffffff;padding:15px 14px;min-height:74px">
      <div style="font-size:11px;line-height:15px;font-weight:800;letter-spacing:1.2px;text-transform:uppercase;color:#98a2b3">
        ${escapeHtml(label)}
      </div>
      <div style="margin-top:7px;font-size:14px;line-height:20px;font-weight:800;color:#111827">
        ${value}
      </div>
    </div>
  </td>
`;

const renderOwnerHtml = (contact: ContactRow, logoUrl: string) => `
  ${renderEmailShell({
    preheader: `New Himnex project inquiry from ${contact.name}`,
    eyebrow: "Himnex Lead Desk",
    title: "New Project Inquiry",
    intro:
      "A qualified website visitor submitted a project brief and is ready for follow-up.",
    footerNote: `Internal notification generated by the Himnex Solutions website. Submission ID: ${contact.id}`,
    logoUrl,
    children: `
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin:0 0 18px">
        <tr>
          ${renderMetricCard("Project Type", formatHtmlValue(contact.project_type))}
          ${renderMetricCard("Budget", formatHtmlValue(contact.budget))}
          ${renderMetricCard("Submitted", escapeHtml(formatSubmittedAt(contact.created_at)))}
        </tr>
      </table>

      <div style="border:1px solid #e5e7eb;border-radius:16px;background:#fbfdff;padding:22px 22px 6px">
        <div style="font-size:12px;line-height:16px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#ff6a00">
          Lead Profile
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:8px">
          ${renderDetailRow("Name", formatHtmlValue(contact.name))}
          ${renderDetailRow(
            "Email",
            `<a href="mailto:${escapeHtml(contact.email)}" style="color:#ff6a00;text-decoration:none">${escapeHtml(contact.email)}</a>`
          )}
          ${renderDetailRow("Company", formatHtmlValue(contact.company))}
        </table>
      </div>

      <div style="margin-top:22px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;overflow:hidden">
        <div style="background:#fff7ed;border-bottom:1px solid #fed7aa;padding:15px 18px">
          <div style="font-size:12px;line-height:16px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#c2410c">
            Project Brief
          </div>
        </div>
        <div style="white-space:pre-wrap;padding:20px 18px;color:#111827;font-size:15px;line-height:25px">${escapeHtml(contact.message)}</div>
      </div>

      <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:24px">
        <tr>
          <td style="border-radius:999px;background:#ff6a00">
            <a href="mailto:${escapeHtml(contact.email)}" style="display:inline-block;padding:13px 20px;color:#ffffff;font-size:14px;font-weight:800;text-decoration:none">
              Reply to ${formatHtmlValue(contact.name)}
            </a>
          </td>
        </tr>
      </table>
    `,
  })}
`.trim();

const renderUserHtml = (contact: ContactRow, logoUrl: string) => `
  ${renderEmailShell({
    preheader:
      "Your Himnex Solutions project brief has been received and is now in review.",
    eyebrow: "Himnex Solutions",
    title: "Your Project Brief Is In Review",
    intro:
      "Thank you for sharing your idea with us. We have received your details and will review them with care.",
    footerNote:
      "You received this confirmation because you submitted the contact form on the Himnex Solutions website.",
    logoUrl,
    children: `
      <p style="margin:0 0 18px;font-size:16px;line-height:26px;color:#111827">
        Hi ${formatHtmlValue(contact.name)},
      </p>
      <p style="margin:0 0 24px;font-size:15px;line-height:25px;color:#475467">
        Your message is safely in our queue. A member of our team will review the context, project goals, and technical notes before replying.
      </p>

      <div style="border:1px solid #e5e7eb;border-radius:16px;background:#fbfdff;padding:22px">
        <div style="font-size:12px;line-height:16px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#ff6a00">
          Summary We Received
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:8px">
          ${renderDetailRow("Project type", formatHtmlValue(contact.project_type))}
          ${renderDetailRow("Budget", formatHtmlValue(contact.budget))}
          ${renderDetailRow("Company", formatHtmlValue(contact.company))}
          ${renderDetailRow("Submitted", escapeHtml(formatSubmittedAt(contact.created_at)))}
        </table>
      </div>

      <div style="margin-top:22px;border:1px solid #e5e7eb;border-radius:16px;background:#ffffff;overflow:hidden">
        <div style="background:#f8fafc;border-bottom:1px solid #e5e7eb;padding:15px 18px">
          <div style="font-size:12px;line-height:16px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#667085">
            Your Message
          </div>
        </div>
        <div style="white-space:pre-wrap;padding:20px 18px;color:#111827;font-size:15px;line-height:25px">${escapeHtml(contact.message)}</div>
      </div>

      <div style="margin-top:24px;border:1px solid #fed7aa;border-radius:16px;background:#fff7ed;padding:20px">
        <div style="font-size:12px;line-height:16px;font-weight:800;letter-spacing:1.5px;text-transform:uppercase;color:#c2410c">
          What Happens Next
        </div>
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;margin-top:14px">
          <tr>
            <td style="width:28px;vertical-align:top;color:#ff6a00;font-size:18px;line-height:24px;font-weight:800">1</td>
            <td style="padding-bottom:12px;color:#475467;font-size:14px;line-height:22px">We review your goals, scope, and technical requirements.</td>
          </tr>
          <tr>
            <td style="width:28px;vertical-align:top;color:#ff6a00;font-size:18px;line-height:24px;font-weight:800">2</td>
            <td style="padding-bottom:12px;color:#475467;font-size:14px;line-height:22px">We prepare clear next questions or a suggested starting plan.</td>
          </tr>
          <tr>
            <td style="width:28px;vertical-align:top;color:#ff6a00;font-size:18px;line-height:24px;font-weight:800">3</td>
            <td style="color:#475467;font-size:14px;line-height:22px">You receive a direct reply from Himnex Solutions within 24 hours.</td>
          </tr>
        </table>
      </div>
    `,
  })}
`.trim();

const renderOwnerText = (contact: ContactRow) => `
New website contact request

Name: ${contact.name}
Email: ${contact.email}
Company: ${formatTextValue(contact.company)}
Project type: ${formatTextValue(contact.project_type)}
Budget: ${formatTextValue(contact.budget)}

Message:
${contact.message}

Submission ID: ${contact.id}
`.trim();

const renderUserText = (contact: ContactRow) => `
Hi ${contact.name},

Thanks for contacting Himnex Solutions. We received your project details and will reply within 24 hours.

Project type: ${formatTextValue(contact.project_type)}
Budget: ${formatTextValue(contact.budget)}
Company: ${formatTextValue(contact.company)}

Message:
${contact.message}

Himnex Solutions
`.trim();

const sendContactEmails = async (contact: ContactRow, logoUrl: string) => {
  const transporter = createMailTransport();
  const { ownerEmail, fromEmail } = getMailConfig();

  await Promise.all([
    transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      replyTo: contact.email,
      subject: `New contact request from ${contact.name}`,
      text: renderOwnerText(contact),
      html: renderOwnerHtml(contact, logoUrl),
    }),
    transporter.sendMail({
      from: fromEmail,
      to: contact.email,
      subject: "We received your Himnex Solutions request",
      text: renderUserText(contact),
      html: renderUserHtml(contact, logoUrl),
    }),
  ]);
};

export async function POST(request: Request) {
  let contactRequest: ContactRequest;

  try {
    contactRequest = parseContactRequest(await request.json());
  } catch (error) {
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Invalid contact form data.",
      },
      { status: 400 }
    );
  }

  let supabase;
  try {
    supabase = createSupabaseAdmin();
  } catch (error) {
    console.error("Supabase contact setup error:", error);

    return NextResponse.json(
      { error: "Contact form is not configured yet." },
      { status: 500 }
    );
  }

  const { data: contact, error: insertError } = await supabase
    .from("contact_messages")
    .insert({
      name: contactRequest.name,
      email: contactRequest.email,
      company: contactRequest.company,
      project_type: contactRequest.projectType,
      budget: contactRequest.budget,
      message: contactRequest.message,
      notification_status: "pending",
    })
    .select(
      "id, name, email, company, project_type, budget, message, created_at"
    )
    .single<ContactRow>();

  if (insertError || !contact) {
    console.error("Supabase contact insert error:", insertError);

    return NextResponse.json(
      { error: "We could not save your message. Please try again." },
      { status: 500 }
    );
  }

  try {
    await sendContactEmails(contact, getEmailLogoUrl(request));
  } catch (error) {
    console.error("Contact email send error:", error);

    await supabase
      .from("contact_messages")
      .update({
        notification_status: "failed",
        notification_error:
          error instanceof Error ? error.message : "Email notification failed.",
      })
      .eq("id", contact.id);

    return NextResponse.json(
      {
        error:
          "Your message was saved, but email notifications could not be sent. Please contact us directly.",
      },
      { status: 502 }
    );
  }

  await supabase
    .from("contact_messages")
    .update({
      notification_status: "sent",
      notification_sent_at: new Date().toISOString(),
      notification_error: null,
    })
    .eq("id", contact.id);

  return NextResponse.json({ ok: true });
}
