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
    "projectId" INTEGER NOT NULL,
    "projectsId" INTEGER NOT NULL,
    "info" VARCHAR(255) NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "about" ADD CONSTRAINT "about_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
