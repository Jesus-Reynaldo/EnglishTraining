-- Reading Comprehension tables (UUID primary keys, auto-generated)

create table if not exists reading_tests (
  id          uuid        primary key default gen_random_uuid(),
  title       text        not null
);

alter table reading_tests enable row level security;
create policy "allow_all_anon" on reading_tests for all using (true) with check (true);

create table if not exists reading_passages (
  id          uuid        primary key default gen_random_uuid(),
  test_id     uuid        not null references reading_tests(id) on delete cascade,
  order_index integer     not null default 0,
  title       text        not null,
  text        text        not null
);

alter table reading_passages enable row level security;
create policy "allow_all_anon" on reading_passages for all using (true) with check (true);

create table if not exists reading_questions (
  id          uuid        primary key default gen_random_uuid(),
  test_id     uuid        not null references reading_tests(id) on delete cascade,
  passage_id  uuid        not null references reading_passages(id) on delete cascade,
  order_index integer     not null default 0,
  text        text        not null,
  options     jsonb       not null,
  answer      text        not null check (answer in ('A','B','C','D'))
);

alter table reading_questions enable row level security;
create policy "allow_all_anon" on reading_questions for all using (true) with check (true);
