create table if not exists public.contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  company text,
  project_type text,
  budget text,
  message text not null,
  notification_status text not null default 'pending'
    check (notification_status in ('pending', 'sent', 'failed')),
  notification_sent_at timestamptz,
  notification_error text,
  created_at timestamptz not null default now()
);

alter table public.contact_messages enable row level security;

create index if not exists contact_messages_created_at_idx
  on public.contact_messages (created_at desc);

create index if not exists contact_messages_email_idx
  on public.contact_messages (email);
