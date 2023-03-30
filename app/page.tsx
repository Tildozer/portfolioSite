"use client";
import { Exo } from "next/font/google";
import "./globals.css";
import { EmailForm, Nav } from "@/components/";

const exo = Exo({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});


export default function Home() {
 
  return (
    <main className={exo.className}>
      <div className="flex bg-slate-800 min-h-vhf">
        <Nav />
        <section className="text-teal-400">
          <div className=" h-60">
            <h1 className="text-4xl md:text-6xl">Anthony Thibodeaux</h1>
          </div>
          <div>
            <EmailForm />
          </div>
        </section>
      </div>
    </main>
  );
}
