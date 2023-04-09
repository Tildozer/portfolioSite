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

-- CreateTable
CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "githubLink" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "imgUrl" VARCHAR(255) NOT NULL,
    "projectType" VARCHAR(50) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "about" (
    "id" SERIAL NOT NULL,
    "projectsId" INTEGER NOT NULL,
    "info" VARCHAR(255) NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "languages" (
    "id" SERIAL NOT NULL,
    "language" VARCHAR(50) NOT NULL,
    "link" VARCHAR(200) NOT NULL,

    CONSTRAINT "languages_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "frameworks" (
    "id" SERIAL NOT NULL,
    "framework" VARCHAR(50) NOT NULL,
    "link" VARCHAR(200) NOT NULL,

    CONSTRAINT "frameworks_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "about" ADD CONSTRAINT "about_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
