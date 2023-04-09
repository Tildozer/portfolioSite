import Link from "next/link";
import React from "react";
import knownLanguages from "./knownLanguages";
interface Props {}

const mapLanguages = knownLanguages.map(({ id, language, Picture }) => {
  return (
    <div key={id} className="flex">
      <Link href="">
        <h2>{language}</h2>
        <div>{<Picture className=" text-red-600" />}</div>
      </Link>
    </div>
  );
});

const Languages = (props: Props) => {
  knownLanguages;
  return <div className="flex">{mapLanguages}</div>;
};

export default Languages;
