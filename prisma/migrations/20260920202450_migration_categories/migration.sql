/*
  Warnings:

  - Added the required column `name` to the `Category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slug` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
CREATE SEQUENCE category_id_seq;
ALTER TABLE "Category" ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "slug" TEXT NOT NULL,
ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE category_id_seq OWNED BY "Category"."id";
