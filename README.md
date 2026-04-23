This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contact Form Setup

The contact form saves submissions to Supabase and sends notification emails
with Nodemailer from the Next.js API route.

1. Create a Supabase project and apply the migration in
   `supabase/migrations/20260423000000_create_contact_messages.sql`.
2. Add these environment variables to your local `.env.local` and production
   hosting environment:

```bash
SUPABASE_URL="https://your-project.supabase.co"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"
NEXT_PUBLIC_SITE_URL="https://himnexsolutions.com"
EMAIL_LOGO_URL="https://himnexsolutions.com/images/email-logo.png"
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="465"
SMTP_SECURE="true"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
CONTACT_OWNER_EMAIL="himnexsolutions.np@gmail.com"
CONTACT_FROM_EMAIL="Himnex Solutions <your-email@gmail.com>"
```

For Gmail, use an app password for `SMTP_PASSWORD`. Use
`SMTP_PORT="465"` with `SMTP_SECURE="true"`, or `SMTP_PORT="587"` with
`SMTP_SECURE="false"` if your SMTP provider requires STARTTLS.

`EMAIL_LOGO_URL` must be a publicly accessible HTTPS image URL. Gmail cannot
load a logo from `localhost`, a private network URL, or a URL that has not been
deployed yet.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
