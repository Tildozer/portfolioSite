const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const dropAndCreateTables = async () => {
  await prisma.$queryRaw`DROP TABLE IF EXISTS "funFacts"`;
  await prisma.$queryRaw`DROP TABLE IF EXISTS about`;
  await prisma.$queryRaw`DROP TABLE IF EXISTS accomplishments`;
  await prisma.$queryRaw`DROP TABLE IF EXISTS projects`;

  await prisma.$queryRaw`CREATE TABLE "funFacts" (
    "id" SERIAL NOT NULL,
    "details" TEXT,

    CONSTRAINT "funFacts_pkey" PRIMARY KEY ("id")
  );`;

  await prisma.$queryRaw`CREATE TABLE about (
    "id" SERIAL NOT NULL,
    "projectsId" INTEGER NOT NULL,
    "info" VARCHAR(255) NOT NULL,

    CONSTRAINT "about_pkey" PRIMARY KEY ("id")
  );`;

  await prisma.$queryRaw`CREATE TABLE accomplishments(
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "content" TEXT,
    
    CONSTRAINT "accomplishments_pkey" PRIMARY KEY ("id")
  );`;

  await prisma.$queryRaw`CREATE TABLE "projects" (
    "id" SERIAL NOT NULL,
    "link" VARCHAR(255) NOT NULL,
    "githubLink" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "imgUrl" VARCHAR(255) NOT NULL,
    "projectType" VARCHAR(50) NOT NULL,

    CONSTRAINT "projects_pkey" PRIMARY KEY ("id")
  );`;

  await prisma.$queryRaw`ALTER TABLE "about" ADD CONSTRAINT "about_projectsId_fkey" FOREIGN KEY ("projectsId") REFERENCES "projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;`;
};

const syncFacts = async () => {
  const facts = await Promise.all([
    prisma.funFacts.create({
      data: {
        details:
          "I once went on a week and a half backpacking trip down in New Mexico, where we hicked 75 miles. We carried in all the food for the whole trip and succesfully made it through the trip. You can say I am devoted and won't quit even when it gets tough!",
      },
    }),
    prisma.funFacts.create({
      data: {
        details:
          "I find coding to be one of my biggest passions. ever since I started learning it is all I can focus on! I find perfecting my skills and learning new languges and frameworks, to be fun and the challenge I was looking for.",
      },
    }),
    prisma.funFacts.create({
      data: {
        details:
          "I am an advid pokemon fan who loves pikachu, and thinks their world building is top notch!",
      },
    }),
  ]);
  console.log("---- facts ----");
  console.log(facts);
};

const syncAccomplisments = async () => {
  const accomplisments = await Promise.all([
    prisma.accomplishments.create({
      data: {
        name: "Panera Bread",
        content:
          "I became Baker of the period in just under a year. I kept bread loaves and sweets consitent, assuring quality control. Helping managers know when something wasn't working properly, or when we were low on ingredients.",
      },
    }),
    prisma.accomplishments.create({
      data: {
        name: "Fullstack Academy",
        content:
          "I Completed their Web Development bootcamp, giving me the expertise to build Fullstack applications with the PERN stack. Collaberated on multiple projects with other students and learned valuabale lessons with each other.",
      },
    }),
  ]);
  console.log("----Accomplisments----");
  console.log(accomplisments);
};

const syncProjects = async () => {
  const project1 = await prisma.projects.create({
    data: {
      link: "http://rekanstructed.onrender.com/",
      githubLink: "https://github.com/Team-Kan/Lego-shopper",
      name: "strangers Things",
      projectType: "Group Project",
      imgUrl: "https://i.imgur.com/R0Obbyl.png",
    },
  });
  const project2 = await prisma.projects.create({
    data: {
      link: "https://strangersproj.netlify.app",
      githubLink: "https://github.com/Tildozer/strangersThngs",
      name: "Strangers Things",
      projectType: "Solo Project",
      imgUrl: "https://i.imgur.com/6w1RdZa.png",
    },
  });
  const aboutProjects = await prisma.about.createMany({
    data: [
      {
        info: "This was my first introduction to React and JSON web tokens.",
        projectsId: project1.id,
      },
      {
        info: "I learned how to make components, how to trade in credentials for a token, and how to validate the token for actions on the site.",
        projectsId: project1.id,
      },
      {
        info: "Successfully incorporated react-router-DOM to navigate visitors between 'pages' on this single-page application",
        projectsId: project1.id,
      },
      {
        info: "This project was my final project for Fullstack Academy, my two partners and I were tasked with making an Ecommerce website, and we went with a buyback Lego site.",
        projectsId: project2.id,
      },
      {
        info: "In the development process, we decided to use Jest to test our back-end routes, and our database calls to ensure they were working, helping assure that our functions were properly working before we got to the front end.",
        projectsId: project2.id,
      },
      {
        info: "We used Exalidraw to plan out our front end before coding that way we were all on the same page about what to do. This helped make development smooth thus letting us do some extra stuff at the end such as email confirmation with NodeMailer",
        projectsId: project2.id,
      },
    ],
  });
  console.log("----Projects----");
  console.log(project1, project2);
  console.log("----ProjectsAbout----");
  console.log(aboutProjects);
};

const syncAndSeed = async () => {
  await dropAndCreateTables();
  await syncFacts();
  await syncAccomplisments();
  await syncProjects();
};

syncAndSeed();
