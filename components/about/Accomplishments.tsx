"use client";
import React, { useState, useEffect } from "react";
import { accomplishments } from "@prisma/client";
type Props = {
  accomplishments: accomplishments[]
};

const Accomplishments = (props: Props) => {
  const {accomplishments} = props
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const show = [show1, show2, show3];

  useEffect(() => {
    setTimeout(() => {
      setShow1(true);
      setTimeout(() => {
        setShow2(true);
        // setTimeout(() => {
        //   setShow3(true);
        // }, 1000);
      }, 1000);
    }, 600);
  }, []);

  return (
    <>
      <h1 className="underline underline-offset-4 text-mountainBatten">
        Accomplishments:
      </h1>
      <ul className="flex flex-col">
        {accomplishments.slice().reverse().map(({id, name, content}, idx) => {
          return (
            <li
              key={id}
              className={`m-2 p-2 max-w-[40rem] border-2 rounded-lg border-mountainBatten shadow-md shadow-mountainBatten ${
                idx % 2 !== 0 ? "xs:self-end xl:mr-48 2xl:self-center " : ""
              }${show[idx] ? "animate-fadeInOnce" : "hidden"}`}
            >
              <h1 className="bg-mountainBatten w-fit rounded-full pl-2 pr-2 text-onyx">
                {name}
              </h1>
              <div className="highlight">{content}</div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Accomplishments;
