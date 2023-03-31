import axios, { AxiosHeaders } from "axios";

export async function emailFetch(email: string, name: string) {
  const emailSent: AxiosHeaders = await axios.post(
    "/api/mail/",
    JSON.stringify({
      email,
      name,
      htmlStr: `<h1>tester</h1>`,
    })
  );
}
