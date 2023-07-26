alter table public.profiles alter column username set default 'anonymous';
alter table public.profiles alter column full_name set default null;
alter table public.profiles alter column bio set default null;
alter table public.profiles alter column avatar_url set default 'https://ahihbpdewjvyhhbglaym.supabase.co/storage/v1/object/sign/avatars/diet_coke.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhdmF0YXJzL2RpZXRfY29rZS5qcGciLCJpYXQiOjE2ODY3MTAzMzAsImV4cCI6MTcxODI0NjMzMH0.XrUySl8Tw9A6xJVk-4bWFpBzL5Jg-7I8_pagvsFKbP0&t=2023-06-14T02%3A38%3A50.997Z';

alter table public.profiles drop constraint profiles_username_key;