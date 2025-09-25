-- CreateTable
CREATE TABLE "public"."User" (
    "id" TEXT NOT NULL,
    "email_address" TEXT,
    "first_name" TEXT,
    "last_name" TEXT,
    "image_url" TEXT,
    "banner_url" TEXT,
    "banner_id" TEXT,
    "username" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_address_key" ON "public"."User"("email_address");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "public"."User"("username");
