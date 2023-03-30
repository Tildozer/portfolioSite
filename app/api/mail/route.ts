import { type NextRequest } from 'next/server'
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
    console.log(request.body)
    // sendMail("Anthony's resume", req?.body)
    
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