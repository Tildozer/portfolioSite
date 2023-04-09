import React from "react";
import { about } from "@prisma/client";

interface Props {
  about: about[];
}

const Points = (props: Props) => {
  const { about } = props;
  return (
    <>
      {about.map(({info, id}) => {
        return (
          <div key={id}>
            <li className="ml-10 min-w-[10rem]">{info}</li>
            <br />
          </div>
        );
      })}
    </>
  );
};

export default Points;
