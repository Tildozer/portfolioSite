import { Footer, Nav } from "@/components";
import Link from "next/link";

export default function portfolio() {
  return (
    <main className="bg-coolGray">
      <Nav />
      <header className="text-gray-800 ml-24 mb-14">portfolio</header>
      <section className="ml-24 text-onyx">
        {/* <div>
          <Link href="https://glittery-starlight-2496a2.netlify.app"></Link>        
          <br />
          <p></p>
        </div> */}
        <div>
          <Link
            className="cursor-pointer w-24 underline underline-offset-2 hover:text-black"
            href="http://rekanstructed.onrender.com/"
          >
            reKANstructed
          </Link>
          <br />
          <p></p>
        </div>
        <div>
          <Link
            className="cursor-pointer w-24 underline underline-offset-2 hover:text-black"
            href="https://strangersproj.netlify.app"
          >
            Strangers Things
          </Link>
          <br />
          <p></p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
