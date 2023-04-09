import { type NextRequest } from "next/server";
import { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(request: NextRequest, response: NextApiResponse) {
  try {
    const funFacts = await prisma.funFacts.findMany({})
    return new Response(JSON.stringify(funFacts))
  } catch (error: any) {
    return new Response(error, {
      status: 500,
    })
  }
    
}