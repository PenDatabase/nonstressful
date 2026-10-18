-- CreateEnum
CREATE TYPE "FileType" AS ENUM ('COURSE_REG', 'JAMB_RESULT', 'BIRTH_CERTIFICATE', 'COURSE_DUES');

-- CreateEnum
CREATE TYPE "SubmissionStatus" AS ENUM ('NOT_PAID', 'PAID', 'REVIEWED', 'SUBMITTED');

-- CreateTable
CREATE TABLE "User" (
    "id" UUID NOT NULL,
    "regNo" TEXT NOT NULL,
    "name" TEXT,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Submission" (
    "id" UUID NOT NULL,
    "userId" UUID NOT NULL,
    "status" "SubmissionStatus" NOT NULL DEFAULT 'NOT_PAID',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Submission_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "File" (
    "id" UUID NOT NULL,
    "type" "FileType" NOT NULL,
    "uri" TEXT NOT NULL,
    "copies" INTEGER NOT NULL DEFAULT 1,
    "submissionId" UUID NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_regNo_key" ON "User"("regNo");

-- CreateIndex
CREATE UNIQUE INDEX "User_password_key" ON "User"("password");

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_submissionId_fkey" FOREIGN KEY ("submissionId") REFERENCES "Submission"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
