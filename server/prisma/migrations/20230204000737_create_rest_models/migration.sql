/*
  Warnings:

  - Added the required column `email` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `message` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `postal_code` to the `adresses` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "admins" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "cargo" TEXT
);

-- CreateTable
CREATE TABLE "services" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "admin_id" INTEGER NOT NULL,
    "date" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changes" TEXT NOT NULL,
    "others" TEXT NOT NULL,
    CONSTRAINT "logs_admin_id_fkey" FOREIGN KEY ("admin_id") REFERENCES "admins" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "images" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "publicId" TEXT NOT NULL,
    "format" TEXT NOT NULL,
    "version" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_clients" ("created_at", "id", "name") SELECT "created_at", "id", "name" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE UNIQUE INDEX "clients_email_key" ON "clients"("email");
CREATE TABLE "new_adresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "postal_code" TEXT NOT NULL,
    "client_id" TEXT NOT NULL,
    CONSTRAINT "adresses_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_adresses" ("complement", "district", "id", "number", "street") SELECT "complement", "district", "id", "number", "street" FROM "adresses";
DROP TABLE "adresses";
ALTER TABLE "new_adresses" RENAME TO "adresses";
CREATE UNIQUE INDEX "adresses_client_id_key" ON "adresses"("client_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "images_publicId_key" ON "images"("publicId");
