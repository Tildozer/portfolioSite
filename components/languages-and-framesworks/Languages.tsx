import Link from "next/link";
import React from "react";
import { languages } from "@prisma/client";
import {
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiPostgresql, 
  SiDeno,
} from "react-icons/si"
// import knownLanguages from "./knownLanguages";
interface Props {
  languages: languages[]
}

const pictureSwitch = (language: string) => {
  switch (language) {
    case "TypeScript":
      return <SiTypescript/>
    case "JavaScript":
      return <SiJavascript />
    case "HTML":
      return <SiHtml5 />
    case "CSS":
      return <SiCss3 />
    case "Postgresql":
      return <SiPostgresql />
    default:
      <SiDeno />
  }
}


const Languages = (props: Props) => {
  const {languages} = props;

  const mapLanguages = languages.map(({ id, language }) => {
    return (
      <div key={id} className="flex">
        <Link href="">
          <h2>{language}</h2>
          {pictureSwitch(language)}
        </Link>
      </div>
    );
  });
  
  return <div className="flex">{mapLanguages}</div>;
};

export default Languages;
