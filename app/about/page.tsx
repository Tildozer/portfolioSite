import { Footer, Nav } from "@/components";
// import './globals.css';

export default function About() {
  return (
    <main className="bg-onyx h-vhf text-mountainBatten min-w-[300px]">
      <Nav />
      <header className="flex">
        <h1 className="ml-0 mt-20 xs:ml-28 xs:mt-0 pt-4 animate-fadeInOnce text-6xl">
          About me
        </h1>
      </header>
      <section className="h-80 ml-24">
        <h1 className="underline underline-offset-4">Accomplishments:</h1>
        <ul className="flex flex-col">
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </section>
      <section className="h-80 ml-24">
        <h1 className="underline underline-offset-4">Fun facts:</h1>
        <ul className="flex flex-col">
          <li>item</li>
          <li>item</li>
          <li>item</li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
