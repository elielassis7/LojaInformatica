/*
  Warnings:

  - You are about to alter the column `number` on the `adresses` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - Added the required column `created_at` to the `clients` table without a default value. This is not possible if the table is not empty.
  - Added the required column `complement` to the `adresses` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_clients" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL
);
INSERT INTO "new_clients" ("id", "name") SELECT "id", "name" FROM "clients";
DROP TABLE "clients";
ALTER TABLE "new_clients" RENAME TO "clients";
CREATE TABLE "new_adresses" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "street" TEXT NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" TEXT NOT NULL,
    "district" TEXT NOT NULL
);
INSERT INTO "new_adresses" ("district", "id", "number", "street") SELECT "district", "id", "number", "street" FROM "adresses";
DROP TABLE "adresses";
ALTER TABLE "new_adresses" RENAME TO "adresses";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
