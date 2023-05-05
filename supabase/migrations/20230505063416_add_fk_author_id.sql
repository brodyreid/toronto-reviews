drop policy "Users can insert their own profile." on "public"."profiles";

drop policy "Users can update own profile." on "public"."profiles";

alter table "public"."profiles" drop constraint "profiles_id_fkey";

alter table "public"."profiles" drop constraint "profiles_pkey";

drop index if exists "public"."profiles_pkey";

alter table "public"."profiles" drop column "id";

alter table "public"."profiles" add column "user_id" uuid not null;

alter table "public"."reviews" drop column "author";

alter table "public"."reviews" add column "author_id" uuid;

alter table "public"."reviews" alter column "body" set default ''::text;

alter table "public"."reviews" alter column "restaurant" set default ''::text;

CREATE UNIQUE INDEX profiles_pkey ON public.profiles USING btree (user_id);

alter table "public"."profiles" add constraint "profiles_pkey" PRIMARY KEY using index "profiles_pkey";

alter table "public"."profiles" add constraint "profiles_user_id_fkey" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."profiles" validate constraint "profiles_user_id_fkey";

alter table "public"."reviews" add constraint "reviews_author_id_fkey" FOREIGN KEY (author_id) REFERENCES auth.users(id) ON DELETE SET NULL not valid;

alter table "public"."reviews" validate constraint "reviews_author_id_fkey";

create policy "Users can insert their own profile."
on "public"."profiles"
as permissive
for insert
to public
with check ((auth.uid() = user_id));


create policy "Users can update own profile."
on "public"."profiles"
as permissive
for update
to public
using ((auth.uid() = user_id));



