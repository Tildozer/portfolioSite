-- CreateTable
CREATE TABLE "Accomplishments" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT,

    CONSTRAINT "Accomplishments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FunFacts" (
    "id" SERIAL NOT NULL,
    "details" TEXT,

    CONSTRAINT "FunFacts_pkey" PRIMARY KEY ("id")
);
