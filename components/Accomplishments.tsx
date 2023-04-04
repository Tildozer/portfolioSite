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
        setTimeout(() => {
          setShow3(true);
        }, 1400);
      }, 1200);
    }, 600);
  }, []);

  const liClass: string =
    "m-2 p-2 max-w-[40rem] border-2 rounded-lg border-mountainBatten shadow-md shadow-mountainBatten ";
  return (
    <>
      <h1 className="underline underline-offset-4 text-mountainBatten">
        Accomplishments:
      </h1>
      <ul className="flex flex-col">
        {/* <li className={`m-1 p-3 ${show3 ? "animate-fadeInOnce" : "text-onyx"}`}>
          Algo Expert: 
        </li> */}
        <li className={`${liClass}${show1 ? "animate-fadeInOnce" : "hidden"}`}>
          <h1 className="bg-mountainBatten w-fit rounded-full pl-2 pr-2 text-onyx">
            Fullstack Academy:
          </h1>
          <div className="highlight">
            I Completed their Web Development bootcamp, giving me the expertise
            to build Fullstack applications with the PERN stack. Collaberated on
            multiple projects with other students and learned valuabale lessons
            with each other.
          </div>
        </li>
        <li
          className={`${liClass} xs:self-end xl:mr-48 ${
            show2 ? "animate-fadeInOnce" : "hidden"
          }`}
        >
          <h1 className="bg-mountainBatten w-fit rounded-full pl-2 pr-2 text-onyx">
            Panera Bread:
          </h1>
          <div className="highlight">
            I became Baker of the period in just under a year. I kept bread
            loaves and sweets consitent, assuring quality control. Helping
            managers know when something wasn't working properly, or when we
            were low on ingredients.
          </div>
        </li>
      </ul>
    </>
  );
};

export default Accomplishments;
