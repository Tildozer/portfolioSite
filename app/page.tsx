"use client";
import { Exo, Volkhov } from "next/font/google";
import "./globals.css";
import { EmailForm, Footer, Nav } from "@/components/";

const volkhov = Volkhov({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={`${volkhov.className} flex flex-col text-black bg-cadetGray min-h-vhf min-w-[300px]`}>
        <header>
          <Nav />
          <div className="h-60">
            <h1 className="mt-4 text-6xl"><span className="ml-20">Anthony</span> <span>Thibodeaux</span></h1>
          </div>
        </header>
        <section className=" min-h-[24rem]">

        </section>
        <section className="flex text-onyx justify-center">
          <EmailForm />
        </section>
      <Footer />
    </main>
  );
}
