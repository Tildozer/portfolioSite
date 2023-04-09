import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET() {
    try {
      const projects = await prisma.projects.findMany({
        include: {about: true}
      })
      
      return new Response(JSON.stringify(projects))
    } catch (error: any) {
      return new Response(error, {
        status: 500
      })
    }
}