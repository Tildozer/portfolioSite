import { NextApiRequest, NextApiResponse } from "next";

interface Err {
  error: boolean,
  status: number,
  message: string,
}

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    
    sendMail("Anthony's resume", req.body)
    
    return res.send(req.body)
  } catch (error: Err | any) {
    res.status(error.status = 500).send({message: error?.message, error : error?.error})
  }
}