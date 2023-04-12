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
  const style = "h-20 w-20 m-5"
  switch (language) {
    case "TypeScript":
      return <SiTypescript className={`${style} text-blue-500 bg-white rounded-md`}/>
    case "JavaScript":
      return <SiJavascript className={`${style} text-orange-300 bg-white`}/>
    case "HTML":
      return <SiHtml5 className={`${style} text-orange-500`}/>
    case "CSS":
      return <SiCss3 className={`${style} text-blue-600`}/>
    case "Postgresql":
      return <SiPostgresql className={`${style} text-blue-400`}/>
    default:
      <SiDeno className={`${style} `}/>
  }
}


const Languages = (props: Props) => {
  const {languages} = props;

  const mapLanguages = languages.map(({ id, language, link }) => {
    return (
      <div key={id} className="flex flex-row items-center m-5 bg-onyx text-cadetGray p-4 rounded-md hover:-translate-y-1 hover:shadow-md hover:shadow-onyx">
        <Link href={link}>
          <h2>{language}</h2>
          <div>
            {pictureSwitch(language)}
          </div>
        </Link>
      </div>
    );
  });
  
  return <div className="flex flex-wrap justify-center ">{mapLanguages}</div>;
};

export default Languages;
