"use client";
import React, { useState, useEffect } from "react";
import {default as funFacts} from "./funFactArray"
type Props = {};

const FunFacts = (props: Props) => {
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  const [show3, setShow3] = useState(false);
  const show = [show1, show2, show3]
  funFacts
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
                idx % 2 !== 0 ? "xs:self-end xl:mr-48 2xl:self-center " : ""
              }${show[idx] ? "animate-fadeInOnce" : "hidden"}`}
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
