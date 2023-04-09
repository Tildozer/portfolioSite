import { Prisma, PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const dropAndCreateTables = async () => {

    await Promise.all([
      prisma.funFacts.deleteMany({}),
      prisma.accomplishments.deleteMany({})
    ])
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

const syncAndSeed = async () => {
  await dropAndCreateTables();
  await syncFacts();
}

syncAndSeed()