import { Footer, Nav, Projects } from "@/components";
import { Roboto } from "next/font/google";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
type projects = {
  id: number;
  link: string;
  githubLink: string;
  name: string;
  imgUrl: string;
  projectType: string;
  about: about[];
};

type about = {
  id: number;
  projectsId: number;
  info: string;
};
const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

async function getData() {
  "use server";
  const projects: projects[] = await prisma.projects.findMany({
    include: { about: true },
  });

  return projects;
}

export default async function portfolio() {
  const projects = await getData();
  return (
    <main
      className={`${roboto.className} bg-coolGray min-h-vhf min-w-[fit-content] flex flex-col`}
    >
      <Nav />
      <header className="text-gray-800 text-4xl xs:text-6xl animate-fadeInOnce ml-24 mb-14">
        Portfolio
      </header>
      <section className=" flex flex-col xs:items-center text-onyx min-h-[78.7vh]">
        <Projects projects={projects} />
      </section>
      <Footer />
    </main>
  );
}
