"use client";
import React from "react";
import { Volkhov } from "next/font/google";
import "./globals.css";
import { EmailForm, Footer, Nav, TypeEffect } from "@/components/";

const volkhov = Volkhov({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

const words = ["devoted.", "motivated.", "productive.", "resorceful.", "ready to join your team!", "take on any challenge standing in my way."]

export default function Home() {
  return (
    <main
      className={`${volkhov.className} flex flex-col text-black bg-cadetGray min-h-vhf min-w-[300px]`}
    >
      <header>
        <Nav />
        <div>
          <h1 className="mt-4 text-6xl">
            <span className="ml-20">Anthony</span> <span>Thibodeaux</span>
          </h1>
        </div>
      </header>
      <section className="min-h-[26rem]">
        <div className="flex text-black">
          <span>I am</span>&nbsp;<TypeEffect words={words} textColor="text-auqamarine" />
        </div>
      </section>
      <section className="flex text-onyx justify-center">
        <EmailForm />
      </section>
      <Footer />
    </main>
  );
}
