create type "public"."user_role" as enum ('admin');

create table "public"."reviews" (
    "id" bigint generated by default as identity not null,
    "created_at" timestamp with time zone not null default now(),
    "author_id" uuid,
    "restaurant" text not null,
    "body" text not null,
    "rating" smallint not null
);


alter table "public"."reviews" enable row level security;

create table "public"."user_roles" (
    "user_id" uuid not null,
    "role" user_role not null
);


alter table "public"."user_roles" enable row level security;

CREATE UNIQUE INDEX reviews_pkey ON public.reviews USING btree (id);

CREATE UNIQUE INDEX user_roles_pkey ON public.user_roles USING btree (user_id);

alter table "public"."reviews" add constraint "reviews_pkey" PRIMARY KEY using index "reviews_pkey";

alter table "public"."reviews" add constraint "reviews_author_id_fkey" FOREIGN KEY (author_id) REFERENCES auth.users(id) ON DELETE SET NULL not valid;

alter table "public"."reviews" validate constraint "reviews_author_id_fkey";

alter table "public"."user_roles" add constraint "user_roles_pkey" PRIMARY KEY using index "user_roles_pkey";

alter table "public"."user_roles" add constraint "fk_user_id" FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE not valid;

alter table "public"."user_roles" validate constraint "fk_user_id";

set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.has_role(name user_role)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    select exists(select 1 from user_roles where user_id = auth.uid() and role = $1)
$function$
;

create policy "Admins can do anything to reviews"
on "public"."reviews"
as permissive
for all
to authenticated
using (has_role('admin'::user_role))
with check (has_role('admin'::user_role));


create policy "Enable read access for all users"
on "public"."reviews"
as permissive
for select
to public
using (true);


create policy "Admins can manage any role"
on "public"."user_roles"
as permissive
for all
to authenticated
using (has_role('admin'::user_role))
with check (has_role('admin'::user_role));


create policy "Anyone can see their own role"
on "public"."user_roles"
as permissive
for select
to authenticated
using ((auth.uid() = user_id));



