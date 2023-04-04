import React from "react";
import { Volkhov } from "next/font/google";
import "./globals.css";
import { EmailForm, Footer, Nav, TypeEffect } from "@/components/";
import Ladybug from "../public/ladybug.png";
import Image from "next/image";

const volkhov = Volkhov({
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
export default function Home() {
  return (
    <main
      className={`${volkhov.className} flex flex-col text-black bg-cadetGray min-h-vhf min-w-[300px]`}
    >
      <Nav />
      <header className="">
        <div>
          <h1 className="mt-4 text-6xl">
            <span className="ml-24 animate-fadeInOnce">Anthony</span>{" "}
            <span className="animate-fadeInOnce">Thibodeaux</span>
          </h1>
        </div>
      </header>
      <section className="mt-4 mb-4">
        <h2 className="flex justify-center items-center bg-onyx text-white text-lg md:text-2xl h-24">
          <span>I am</span>
          &nbsp;
          <TypeEffect
            words={words}
            textColor="text-teal-200"
            options={options}
          />
        </h2>
      </section>
      <section className="flex flex-col text-onyx justify-center items-center ">
        <EmailForm />
      </section>
      <section className=" self-center">
        <div className="flex justify-center border-4 border-b-0 rounded-t-lg border-onyx max-w-[800px]">
          <Image
            src={Ladybug}
            alt="A tree that is growing out of a foregin planent"
            width={800}
            height={1000}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
