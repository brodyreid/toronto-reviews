alter table "public"."reviews" drop constraint "reviews_author_id_fkey";

alter table "public"."reviews" add constraint "reviews_author_id_fkey" FOREIGN KEY (author_id) REFERENCES profiles(user_id) ON DELETE SET NULL not valid;

alter table "public"."reviews" validate constraint "reviews_author_id_fkey";


