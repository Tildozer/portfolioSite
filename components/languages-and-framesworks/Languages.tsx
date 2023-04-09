import Link from "next/link";
import React from "react";
import { languages } from "@prisma/client";
// import knownLanguages from "./knownLanguages";
interface Props {
  languages: languages[]
}


const Languages = (props: Props) => {
  const {languages} = props;

  const mapLanguages = languages.map(({ id, language }) => {
    return (
      <div key={id} className="flex">
        <Link href="">
          <h2>{language}</h2>
          {/* <div>{<Picture className=" text-red-600" />}</div> */}
        </Link>
      </div>
    );
  });
  
  return <div className="flex">{mapLanguages}</div>;
};

export default Languages;
