-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "hashedPassword" TEXT NOT NULL DEFAULT '',
    "salt" TEXT NOT NULL DEFAULT '',
    "resetToken" TEXT,
    "resetTokenExpiresAt" TIMESTAMP(3),
    "webAuthnChallenge" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserCredential" (
    "id" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "publicKey" BYTEA NOT NULL,
    "transports" TEXT,
    "counter" BIGINT NOT NULL,

    CONSTRAINT "UserCredential_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RekapData" (
    "id" SERIAL NOT NULL,
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
    "keterangan" TEXT NOT NULL,

    CONSTRAINT "RekapData_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_webAuthnChallenge_key" ON "User"("webAuthnChallenge");

-- AddForeignKey
ALTER TABLE "UserCredential" ADD CONSTRAINT "UserCredential_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
