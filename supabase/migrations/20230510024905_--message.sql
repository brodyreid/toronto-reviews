drop policy "Public profiles are viewable by everyone." on "public"."profiles";

drop policy "Users can insert their own profile." on "public"."profiles";

drop policy "Users can update own profile." on "public"."profiles";

alter table "public"."profiles" drop constraint "profiles_user_id_fkey";

alter table "public"."profiles" drop constraint "profiles_username_key";

alter table "public"."profiles" drop constraint "username_length";

alter table "public"."reviews" drop constraint "reviews_author_id_fkey";

alter table "public"."profiles" drop constraint "profiles_pkey";

drop index if exists "public"."profiles_pkey";

drop index if exists "public"."profiles_username_key";

drop table "public"."profiles";

create table "public"."profile" (
    "user_id" uuid not null,
    "updated_at" timestamp with time zone default now(),
    "username" text not null default ''::text,
    "full_name" text not null default ''::text,
    "avatar_url" text not null default ''::text
);


alter table "public"."profile" enable row level security;

CREATE UNIQUE INDEX profiles_user_id_key ON public.profile USING btree (user_id);

CREATE UNIQUE INDEX profiles_pkey ON public.profile USING btree (user_id);

CREATE UNIQUE INDEX profiles_username_key ON public.profile USING btree (username);

alter table "public"."profile" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."profile" add constraint "profile_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profile" validate constraint "profile_user_id_fkey";

alter table "public"."profile" add constraint "profiles_user_id_key" UNIQUE using index "profiles_user_id_key";

alter table "public"."profile" add constraint "profiles_username_key" UNIQUE using index "profiles_username_key";

alter table "public"."profile" add constraint "username_length" CHECK ((char_length(username) >= 3)) not valid;

alter table "public"."profile" validate constraint "username_length";

alter table "public"."reviews" add constraint "reviews_author_id_fkey" FOREIGN KEY (author_id) REFERENCES profile(user_id) ON DELETE SET NULL not valid;

alter table "public"."reviews" validate constraint "reviews_author_id_fkey";

create policy "Public profiles are viewable by everyone."
on "public"."profile"
as permissive
for select
to public
using (true);


create policy "Users can insert their own profile."
on "public"."profile"
as permissive
for insert
to public
with check ((auth.uid() = user_id));


create policy "Users can update own profile."
on "public"."profile"
as permissive
for update
to public
using ((auth.uid() = user_id));



