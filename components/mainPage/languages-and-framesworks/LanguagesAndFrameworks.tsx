import React from "react";
import { Frameworks, Languages } from "@/components/";
import { frameworks, languages } from "@prisma/client";

interface Props {
  languages: languages[];
  frameworks: frameworks[];
}

const LanguagesAndFrameworks = (props: Props) => {
  const { frameworks, languages } = props;
  return (
    <section className="min-h-[30rem] flex flex-col justify-center xs:items-center p-4 xs:p-0">
      <h1>Languages</h1>
      <div className="">
        <Languages languages={languages} />
      </div>
      <h1>Frameworks</h1>
      <Frameworks frameworks={frameworks} />
    </section>
  );
};

export default LanguagesAndFrameworks;
