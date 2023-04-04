import { Footer, Nav, Projects } from "@/components";
import Link from "next/link";


export default function portfolio() {

  return (
    <main className="bg-coolGray">
      <Nav />
      <header className="text-gray-800 ml-24 mb-14">
        Portfolio
      </header>
      <section className="xs:ml-24 text-onyx">
        <Projects />
      </section>
      <Footer />
    </main>
  );
}
