import { Footer, Frameworks, Languages, Nav } from "@/components";
import { Roboto } from "next/font/google";
import { PrismaClient, frameworks, languages } from "@prisma/client";
const prisma = new PrismaClient();

const roboto = Roboto({
  weight: ["400", "300"],
  style: "normal",
  subsets: ["latin"],
});

async function getData(){
  const frameworks: frameworks[] = await prisma.frameworks.findMany({});

  const languages: languages[] = await prisma.languages.findMany({});

  return {
    frameworks,
    languages
  }
}

export default async function About() {
  const {languages, frameworks} = await getData();

  return (
    <main className={`${roboto.className} bg-onyx text-white min-w-[300px]`}>
      <Nav />
      <section className="min-h-vhf flex flex-col justify-center xs:items-center p-4 xs:p-0">
        <h1>Languages</h1>
        <Languages languages={languages}/>
        <h1>Frameworks</h1>
        <Frameworks frameworks={frameworks}/>
      </section>
      <Footer />
    </main>
  );
}
