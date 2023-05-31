alter table public.profiles alter column avatar_url drop not null;
alter table public.profiles alter column full_name drop not null;
alter table public.profiles alter column bio drop not null;
alter table public.profiles alter column username drop not null;