-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" DATETIME,
    "webAuthnChallenge" TEXT
);

-- CreateTable
CREATE TABLE "UserCredential" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" INTEGER NOT NULL,
    "publicKey" BLOB NOT NULL,
    "transports" TEXT,
    "counter" BIGINT NOT NULL,
    CONSTRAINT "UserCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

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
    "total" INTEGER NOT NULL,
    "keterangan" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_webAuthnChallenge_key" ON "User"("webAuthnChallenge");
