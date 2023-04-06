import { Footer, Frameworks, Languages, Nav } from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "300"],
  style: "normal",
  subsets: ["latin"],
});


export default function About() {
  return (
    <main className={`${roboto.className} bg-onyx text-white min-w-[300px]`}>
      <Nav />
      <section
        className="min-h-vhf flex flex-col justify-center xs:items-center p-4 xs:p-0"
      >
        <h1>Languages</h1>
        <Languages />
        <h1>Frameworks</h1>
        <Frameworks />
      </section>
      <Footer />
    </main>
  );
}
