/*
  Warnings:

  - You are about to drop the `Accomplishments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FunFacts` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Accomplishments";

-- DropTable
DROP TABLE "FunFacts";

-- CreateTable
CREATE TABLE "accomplishments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT,

    CONSTRAINT "accomplishments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "funFacts" (
    "id" SERIAL NOT NULL,
    "details" TEXT,

    CONSTRAINT "funFacts_pkey" PRIMARY KEY ("id")
);
