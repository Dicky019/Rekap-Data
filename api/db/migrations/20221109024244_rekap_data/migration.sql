/*
  Warnings:

  - You are about to alter the column `total` on the `RekapData` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_RekapData" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "namaPerusahaan" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "tenagaKerjaDisabilitas" TEXT NOT NULL,
    "tenagaKerjaMuda" TEXT NOT NULL,
    "tenagaKerjaLansia" TEXT NOT NULL,
    "akad" TEXT NOT NULL,
    "akal" TEXT NOT NULL,
    "pmi" TEXT NOT NULL,
    "tka" TEXT NOT NULL,
    "tenagaKerjaPria" TEXT NOT NULL,
    "tenagaKerjaWanita" TEXT NOT NULL,
    "total" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL
);
INSERT INTO "new_RekapData" ("akad", "akal", "alamat", "id", "keterangan", "namaPerusahaan", "pmi", "tenagaKerjaDisabilitas", "tenagaKerjaLansia", "tenagaKerjaMuda", "tenagaKerjaPria", "tenagaKerjaWanita", "tka", "total") SELECT "akad", "akal", "alamat", "id", "keterangan", "namaPerusahaan", "pmi", "tenagaKerjaDisabilitas", "tenagaKerjaLansia", "tenagaKerjaMuda", "tenagaKerjaPria", "tenagaKerjaWanita", "tka", "total" FROM "RekapData";
DROP TABLE "RekapData";
ALTER TABLE "new_RekapData" RENAME TO "RekapData";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
