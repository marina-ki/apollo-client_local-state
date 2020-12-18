CREATE TABLE "public"."group_users"("user_id" integer NOT NULL, "group_id" integer NOT NULL, PRIMARY KEY ("user_id","group_id") , FOREIGN KEY ("group_id") REFERENCES "public"."groups"("id") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE restrict);