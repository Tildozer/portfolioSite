"use client";
import React, { useState, useEffect } from "react";

type Props = {};

const FunFacts = (props: Props) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  interface funFact {
    details: string;
    show: boolean;
  }
  const funFacts: funFact[] = [
    { details: "I once went on a week and a half backpacking trip down in New Mexico, where we hicked 75 miles. We carried in all the food for the whole trip and succesfully made it through the trip. You can say I am devoted and won't quit even when it gets tough!", show: show1 },
    { details: "I find coding to be one of my biggest passions. ever since I started learning it is all I can focus on! I find perfecting my skills and learning new languges and frameworks, to be fun and the challenge I was looking for.", show: show2 },
    { details: "I am an advid pokemon fan who loves pikachu, and thinks their world building is top notch!", show: show3 },
  ];

  useEffect(() => {
    setTimeout(() => {
      setShow1(true);
      setTimeout(() => {
        setShow2(true);
        setTimeout(() => {
          setShow3(true);
        }, 1000);
      }, 1000);
    }, 2400);
  }, []);

  return (
    <>
      <h1 className="underline underline-offset-4 text-mountainBatten">
        Fun facts:
      </h1>
      <ul className="flex flex-col">
        {funFacts.map((fact, idx) => {
          return (
            <li
              key={idx}
              className={`m-2 p-2 max-w-[40rem] border-2 rounded-lg border-mountainBatten shadow-md shadow-mountainBatten ${
                idx % 2 !== 0 ? "xs:self-end xl:mr-48 " : ""
              }${fact.show ? "animate-fadeInOnce" : "hidden"}`}
            >
              {fact.details}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FunFacts;
