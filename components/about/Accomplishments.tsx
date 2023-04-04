"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const Accomplishments = (props: Props) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);

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

  interface accomplishmentsObj {
    name: string,
    paragraph: string
    show: boolean
  }

  const accomplishments: accomplishmentsObj[] = [
    // {name: Algo Expert, paragraph: "", show: show1}
    {
      name: "Fullstack Academy",
      paragraph: "I Completed their Web Development bootcamp, giving me the expertise to build Fullstack applications with the PERN stack. Collaberated on multiple projects with other students and learned valuabale lessons with each other.",
      show: show1
    },
    {
      name: "Panera Bread",
      paragraph: "I became Baker of the period in just under a year. I kept bread loaves and sweets consitent, assuring quality control. Helping managers know when something wasn't working properly, or when we were low on ingredients.",
      show: show2
    }
  ]
  
  return (
    <>
      <h1 className="underline underline-offset-4 text-mountainBatten">
        Accomplishments:
      </h1>
      <ul className="flex flex-col">
        {accomplishments.map((accomplishment, idx) => {
          return (
            <li 
              key={idx}
              className={`m-2 p-2 max-w-[40rem] border-2 rounded-lg border-mountainBatten shadow-md shadow-mountainBatten ${idx % 2 !== 0 ? "xs:self-end xl:mr-48 " : ""}${accomplishment.show ? "animate-fadeInOnce" : "hidden"}`}
            >
              <h1 className="bg-mountainBatten w-fit rounded-full pl-2 pr-2 text-onyx">
                {accomplishment.name}
              </h1>
              <div className="highlight">
                {accomplishment.paragraph}
              </div>
            </li>
          )
        })}
      </ul>
    </>
  );
};

export default Accomplishments;
