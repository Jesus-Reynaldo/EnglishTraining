-- TOEFL Study App — Supabase Schema
-- Run this in the Supabase SQL Editor

create table if not exists test_sessions (
  id           uuid        primary key default gen_random_uuid(),
  test_id      integer     not null,
  mode         text        not null check (mode in ('practice', 'exam')),
  answers      jsonb       not null default '{}',
  score        integer,
  total        integer,
  completed_at timestamptz default now(),
  created_at   timestamptz default now()
);

-- Enable Row Level Security
alter table test_sessions enable row level security;

-- Allow anonymous read/write (no auth required)
create policy "allow_all_anon"
  on test_sessions
  for all
  using (true)
  with check (true);
