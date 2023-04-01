import React from "react";
import Link from "next/link";
import { Hamburger } from ".";

type Props = {};

const Nav = (props: Props) => {
  return (
    <section>
      <div className="box-border absolute">
        <Hamburger />
        <aside className="sidebar pt-14 pl-1 bg-black text-white min-h-vhf text-opacity-0 transition-[translate] duration-200 w-full bg-no-repeat bg-center bg-cover svg-background bg-opacity-0 overflow-y-hidden">
          <nav className="flex flex-col">
            <Link
              className="mt-4 md:text-2xl hover:underline text-black hover:text-slate-600"
              href="/about"
            >
              about
            </Link>
            <Link
              className="mt-4 md:text-2xl hover:underline text-black hover:text-slate-600"
              href="/portfolio"
            >
              portfolio
            </Link>
            <Link
              className="mt-4 md:text-2xl hover:underline text-black hover:text-slate-600"
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
