import { Accomplishments, Footer, Nav, FunFacts } from "@/components";
import { Roboto } from "next/font/google";
import { PrismaClient, funFacts, accomplishments } from "@prisma/client";
const prisma = new PrismaClient();

const roboto = Roboto({
  weight: ["400", "300"],
  style: "normal",
  subsets: ["latin"],
});

async function getData() {
  'use server'
  const facts: funFacts[] = await prisma.funFacts.findMany({});
  const accomplishments: accomplishments[] = await prisma.accomplishments.findMany({});
  return {
    facts,
    accomplishments,
  };
}

export default async function About() {
  const { facts, accomplishments } = await getData();
  return (
    <main
      className={`${roboto.className} bg-onyx min-h-vhf text-white min-w-[300px]`}
    >
      <Nav />
      <header className="flex">
        <h1 className="ml-0 mt-20 xs:ml-28 xs:mt-0 pt-4 animate-fadeInOnce text-6xl text-mountainBatten">
          About me
        </h1>
      </header>
      <section className="min-h-[20rem] xs:ml-24 xs:mr-2 mb-12">
        <Accomplishments accomplishments={accomplishments} />
      </section>
      <section className="min-h-[30rem] ml-0 mt-20 xs:ml-28">
        <FunFacts facts={facts} />
      </section>
      <Footer />
    </main>
  );
}
