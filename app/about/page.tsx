import { Accomplishments, Footer, Nav, FunFacts } from "@/components";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "300"],
  style: "normal",
  subsets: ["latin"],
});


export default function About() {
  return (
    <main className={`${roboto.className} bg-onyx min-h-vhf text-white min-w-[300px]`}>
      <Nav />
      <header className="flex">
        <h1 className="ml-0 mt-20 xs:ml-28 xs:mt-0 pt-4 animate-fadeInOnce text-6xl text-mountainBatten">
          About me
        </h1>
      </header>
      <section className="min-h-[20rem] xs:ml-24 xs:mr-2 mb-12">
        <Accomplishments />
      </section>
      <section className="min-h-[30rem] ml-0 mt-20 xs:ml-28">
        <FunFacts />
      </section>
      <Footer />
    </main>
  );
}
