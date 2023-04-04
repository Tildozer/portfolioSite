"use client";
import React from "react";
import Link from "next/link";
import { Hamburger } from ".";

type Props = {};

const Nav = (props: Props) => {
  return (
    <section className="sticky top-0 z-10 nav">
      <div className="box-border absolute">
        <Hamburger />
        <aside className="sidebar pt-14 pl-1 bg-black text-white min-h-vhf text-opacity-0 transition-[translate] duration-200 w-full bg-no-repeat bg-cover bg-[url('../public/haikeiPeaks.svg')] bg-opacity-0 ">
          <nav className="flex flex-col text-teal-200">
            <Link
              className="mt-4 md:text-2xl hover:underline hover:text-mountainBatten"
              href="/about"
            >
              about
            </Link>
            <Link
              className="mt-4 md:text-2xl hover:underline hover:text-mountainBatten"
              href="/portfolio"
            >
              portfolio
            </Link>
            <Link
              className="mt-4 md:text-2xl hover:underline hover:text-mountainBatten"
              href="/"
            >
              home
            </Link>
          </nav>
        </aside>
      </div>
    </section>
  );
};

export default Nav;
