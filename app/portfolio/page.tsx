import { Footer, Nav, Projects } from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
});

export default function portfolio() {
  return (
    <main className={`${roboto.className} bg-coolGray min-h-vhf min-w-[fit-content] flex flex-col`}>
      <Nav />
      <header className="text-gray-800 text-4xl xs:text-6xl animate-fadeInOnce ml-24 mb-14">
        Portfolio
      </header>
      <section className=" flex flex-col xs:items-center text-onyx min-h-[78.7vh]">
        <Projects />
      </section>
      <Footer />
    </main>
  );
}
