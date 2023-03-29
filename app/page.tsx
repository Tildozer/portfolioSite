"use client";
import { Exo } from "next/font/google";
import "./globals.css";
import { Button, Nav } from "@/components/";

const exo = Exo({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const sendEmail = async (ev: React.MouseEvent<HTMLButtonElement>) => {
  ev.preventDefault();
};

export default function Home() {
  return (
    <main className={exo.className}>
      <div className="flex bg-slate-800 min-h-vhf">
        <Nav />
        <section className="text-orange-500">
          <h1 className="text-4xl md:text-6xl">Anthony Thibodeaux</h1>

          <Button callback={sendEmail} message="send email" />
        </section>
      </div>
    </main>
  );
}
