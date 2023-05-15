// THIS IS JUST A BACK UP SCRIPT TO RELAUNCH MY DATABASE.
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
import {
  languages,
  about,
  funFacts,
  projects,
  frameworks,
} from "@prisma/client";
// dropTable is only for a hard reset, but is here just incase
const deleteTables = async () => {
  await prisma.funFacts.deleteMany({});
  await prisma.about.deleteMany({});
  await prisma.projects.deleteMany({});
  await prisma.languages.deleteMany({});
  await prisma.frameworks.deleteMany({});
  await prisma.accomplishments.deleteMany({});
};

const syncFacts = async () => {
  const facts: funFacts[] = await Promise.all([
    prisma.funFacts.create({
      data: {
        details:
          "I once went on a week and a half backpacking trip down in New Mexico, where we hicked 75 miles. We carried in all the food for the whole trip and succesfully made it through the trip. You can say I am devoted and won't quit even when it gets tough!",
      },
    }),
    prisma.funFacts.create({
      data: {
        details:
          "I find coding to be one of my biggest passions. Ever since I started learning it is all I can focus on! I find perfecting my skills and learning new languages and frameworks to be fun and the challenge I was looking for.",
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
    prisma.accomplishments.create({
      data: {
        name: "AlgoExpert.io",
        content:
          "I Completed 100 interview questions, covering topics such as Recursion, Binary Search Trees, Linked List, Suffix Tries, and famous Algorithms.",
      },
    }),
  ]);
  console.log("----Accomplisments----");
  console.log(accomplisments);
};

const syncProjects = async () => {
  const project1: projects = await prisma.projects.create({
    data: {
      link: "http://rekanstructed.onrender.com/",
      githubLink: "https://github.com/Team-Kan/Lego-shopper",
      name: "strangers Things",
      projectType: "Group Project",
      imgUrl: "https://i.imgur.com/R0Obbyl.png",
    },
  });
  const project2: projects = await prisma.projects.create({
    data: {
      link: "https://strangersproj.netlify.app",
      githubLink: "https://github.com/Tildozer/strangersThngs",
      name: "Strangers Things",
      projectType: "Solo Project",
      imgUrl: "https://i.imgur.com/6w1RdZa.png",
    },
  });
  const aboutProjects: about[] = await prisma.about.createMany({
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

const syncLanguages = async () => {
  const languages: languages[] = await prisma.languages.createMany({
    data: [
      {
        language: "JavaScript",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        language: "TypeScript",
        link: "https://www.typescriptlang.org/",
      },
      {
        language: "Postgresql",
        link: "https://www.postgresql.org/",
      },
      {
        langauge: "Dart",
        link: "https://dart.dev/",
      },
      {
        language: "CSS",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      },
      {
        language: "HTML",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      },
    ],
  });
  console.log("----Languages----");
  console.log(languages);
};

const syncFrameworks = async () => {
  const frameworks: frameworks[] = await prisma.frameworks.createMany({
    data: [
      {
        framework: "React.js",
        link: "https://react.dev/",
      },
      {
        framework: "Next.js",
        link: "https://nextjs.org/",
      },
      {
        framework: "Prisma",
        link: "https://www.prisma.io/",
      },
      {
        framework: "Flutter",
        link: "https://docs.flutter.dev/",
      },
    ],
  });
  console.log("----frameworks----");
  console.log(frameworks);
};

const syncAndSeed = async () => {
  await deleteTables();
  await syncFacts();
  await syncAccomplisments();
  await syncProjects();
  await syncLanguages();
  await syncFrameworks();
};

syncAndSeed();
