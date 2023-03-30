import { type NextRequest } from 'next/server'
import sendMail from "./mail"
interface Err {
  error: boolean,
  status: number,
  message: string,
}

interface MailObj {
  email: string
  name: string
  htmlStr: string
}

export async function POST(request: NextRequest) {
  try {
    sendMail("Anthony's resume", await request.json())
    
    return new Response("Email sent")
  } catch (error: Err | any) {
    return new Response(error)
  }
}

export const config = {
  api: {
    bodyParser: true,
  },
}