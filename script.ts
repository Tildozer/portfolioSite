import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const dropAndCreateTables = async () => {

    await Promise.all([
      prisma.funFacts.deleteMany({}),
      prisma.accomplishments.deleteMany({}),
      prisma.about.deleteMany({}),
    ])
    await prisma.projects.deleteMany({})
  }

const syncFacts = async () => {
  const facts = await Promise.all([
    prisma.funFacts.create({data: {details: "I once went on a week and a half backpacking trip down in New Mexico, where we hicked 75 miles. We carried in all the food for the whole trip and succesfully made it through the trip. You can say I am devoted and won't quit even when it gets tough!"}}),
    prisma.funFacts.create({data: {details: "I find coding to be one of my biggest passions. ever since I started learning it is all I can focus on! I find perfecting my skills and learning new languges and frameworks, to be fun and the challenge I was looking for."}}),
    prisma.funFacts.create({data: {details: "I am an advid pokemon fan who loves pikachu, and thinks their world building is top notch!"}})
  ])
  console.log("---- facts ----")
  console.log(facts)
  }

const syncAccomplisments = async () => {
  const accomplisments = await Promise.all([
    prisma.accomplishments.create({data: {
      name: "Panera Bread",
      content: "I became Baker of the period in just under a year. I kept bread loaves and sweets consitent, assuring quality control. Helping managers know when something wasn't working properly, or when we were low on ingredients."
    }}),
    prisma.accomplishments.create({data: {
      name: "Fullstack Academy",
      content: "I Completed their Web Development bootcamp, giving me the expertise to build Fullstack applications with the PERN stack. Collaberated on multiple projects with other students and learned valuabale lessons with each other."
    }})
  ])
  console.log("----Accomplisments----")
  console.log(accomplisments)
}

const syncProjects = async () => {
  const [project1, project2] = await Promise.all([
    prisma.projects.create({data: {
      link: "http://rekanstructed.onrender.com/",
      githubLink: "https://github.com/Team-Kan/Lego-shopper",
      name: "strangers Things",
      projectType: "Group Project",
      imgUrl: "https://i.imgur.com/R0Obbyl.png"
    }}),
    prisma.projects.create({data: {
      link: "https://strangersproj.netlify.app",
      githubLink: "https://github.com/Tildozer/strangersThngs",
      name: "Strangers Things",
      projectType: "Solo Project",
      imgUrl: "https://i.imgur.com/6w1RdZa.png"
    }})
  ])
  const aboutProjects = await prisma.about.createMany({data: [
    {
      info: "This project was my final project for Fullstack Academy, my two partners and I were tasked with making an Ecommerce website, and we went with a buyback Lego site.",
      projectsId: project1.id,
    }, 
    {
      info: "In the development process, we decided to use Jest to test our back-end routes, and our database calls to ensure they were working, helping assure that our functions were properly working before we got to the front end.",
      projectsId: project1.id,
    },
    {
      info: "We used Exalidraw to plan out our front end before coding that way we were all on the same page about what to do. This helped make development smooth thus letting us do some extra stuff at the end such as email confirmation with NodeMailer",
      projectsId: project1.id,
    },
    {
      info: "This was my first introduction to React and JSON web tokens.",
      projectsId: project2.id,
    },
    {
      info: "I learned how to make components, how to trade in credentials for a token, and how to validate the token for actions on the site.",
      projectsId: project2.id,
    },
    {
      info: "Successfully incorporated react-router-DOM to navigate visitors between 'pages' on this single-page application",
      projectsId: project2.id,
    },
  ]})
  console.log("----Projects----")
  console.log(project1, project2)
  console.log("----ProjectsAbout----")
  console.log(aboutProjects)
}

const syncAndSeed = async () => {
  await dropAndCreateTables();
  await syncFacts();
  await syncAccomplisments();
  await syncProjects();
}

syncAndSeed()