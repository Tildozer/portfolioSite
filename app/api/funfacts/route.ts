import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
  try {
    const funFacts = await prisma.funFacts.findMany({})
    const accomplishments = await prisma.accomplishments.findMany({})
    return new Response(JSON.stringify({
         funFacts: funFacts,
         accomplishments: accomplishments
    }))
  } catch (error: any) {
    return new Response(error, {
      status: 500,
    })
  }
    
}