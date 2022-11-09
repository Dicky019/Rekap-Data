-- CreateTable
CREATE TABLE "RekapData" (
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
    "total" TEXT NOT NULL,
    "keterangan" TEXT NOT NULL
);
