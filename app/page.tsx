"use client";
import { Exo } from "next/font/google";
import "./globals.css";
import { EmailForm, Footer, Nav } from "@/components/";

const exo = Exo({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main className={exo.className}>
      <div className="flex flex-col text-teal-400 bg-slate-800 min-h-vhf min-w-[300px]">
        <header>
          <Nav />
          <div className="h-60">
            <h1 className="text-4xl ml-20 md:text-6xl">Anthony Thibodeaux</h1>
          </div>
        </header>
        <section className="text-teal-400">
          <EmailForm />
        </section>
      </div>
      <Footer />
    </main>
  );
}
