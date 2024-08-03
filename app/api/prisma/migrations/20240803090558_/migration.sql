-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER', 'DOCTOR');

-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_avatar_url" TEXT,
    "user_password" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "role" "Role" NOT NULL DEFAULT 'USER',

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "doctor" (
    "doctor_id" TEXT NOT NULL,
    "doctor_name" TEXT NOT NULL,
    "doctor_email" TEXT NOT NULL,
    "doctor_description" TEXT NOT NULL,
    "doctor_phone_number" TEXT NOT NULL,
    "created" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "doctor_password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'DOCTOR',

    CONSTRAINT "doctor_pkey" PRIMARY KEY ("doctor_id")
);

-- CreateTable
CREATE TABLE "horaire" (
    "horaire_id" TEXT NOT NULL,
    "horaire_title" TEXT NOT NULL,
    "horaire_description" TEXT NOT NULL,
    "repetition_jour" INTEGER NOT NULL,
    "heures" TEXT NOT NULL,

    CONSTRAINT "horaire_pkey" PRIMARY KEY ("horaire_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_user_email_key" ON "user"("user_email");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_doctor_id_key" ON "doctor"("doctor_id");

-- CreateIndex
CREATE UNIQUE INDEX "doctor_doctor_email_key" ON "doctor"("doctor_email");

-- CreateIndex
CREATE UNIQUE INDEX "horaire_horaire_id_key" ON "horaire"("horaire_id");
