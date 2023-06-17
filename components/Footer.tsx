import Image from "next/image";
import Link from "next/link";
import React from "react";
import Github from "../public/github-mark.svg";
import Linkedin from "../public/LI-In-Bug.png";
import Rekanstructed from "../public/image.png";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer className="flex justify-center h-24 pt-4 pb-4 bg-mountainBatten border-t-2 border-onyx">
      <section className="flex justify-end">
        <Link
          href="https://www.linkedin.com/in/anthony-thibodeaux/"
          className="mt-1"
          target="_blank"
        >
          <Image priority height={45} src={Linkedin} alt="LinkedIn Profile" />
        </Link>
        <Link href="https://github.com/Tildozer" target="_blank">
          <Image height={45} src={Github} alt="Github Profile" />
        </Link>
        <Link
          className="mt-6 ml-2"
          href="https://rekanstructed.onrender.com/"
          target="_blank"
        >
          <Image width={75} src={Rekanstructed} alt="Github Profile" />
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
