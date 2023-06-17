import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import Ladybug from "../public/ladybug.png";
import {
  EmailForm,
  Footer,
  Nav,
  TypeEffect,
  LanguagesAndFrameworks,
} from "@/components/";
import { PrismaClient, frameworks, languages } from "@prisma/client";
const prisma = new PrismaClient();
import "./globals.css";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const words = [
  "devoted.",
  "motivated.",
  "resorceful.",
  "Learning every day.",
  "ready to take on any challenge in my way.",
  "",
];
const options = {
  strings: words,
  autoStart: true,
  loop: true,
};

async function getData() {
  "use server";
  const frameworks: frameworks[] = await prisma.frameworks.findMany({});

  const languages: languages[] = await prisma.languages.findMany({});

  return {
    frameworks,
    languages,
  };
}

export default async function Home() {
  const { languages, frameworks } = await getData();
  return (
    <main
      className={`${roboto.className} flex flex-col text-black bg-cadetGray min-h-vhf min-w-[300px]`}
    >
      <Nav />
      <header className="">
        <div>
          <h1 className="mt-10 text-4xl xs:text-6xl">
            <span className="ml-24 animate-fadeInOnce">Anthony</span>{" "}
            <span className="pl-2 xs:pl-0 animate-fadeInOnce">Thibodeaux</span>
          </h1>
        </div>
      </header>
      <section className="mt-4 mb-4">
        <h2 className="flex text-sm justify-center items-center bg-onyx text-white md:text-2xl h-24">
          <span>I am</span>
          &nbsp;
          <TypeEffect
            words={words}
            textColor="text-teal-200"
            options={options}
          />
        </h2>
      </section>
      <section className="flex flex-col text-onyx justify-center items-center  ">
        <EmailForm />
      </section>
      <LanguagesAndFrameworks frameworks={frameworks} languages={languages} />
      <section className="self-center">
        <div className="flex justify-center border-4 border-b-0 rounded-t-lg border-onyx max-w-[800px]">
          <Image
            src={Ladybug}
            alt="A ladybug on top of a flower"
            width={800}
            height={1000}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
