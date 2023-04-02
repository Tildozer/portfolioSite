"use client"
import React from "react";
import Typewriter from "typewriter-effect";

type Props = {
  words: string[];
  textColor: string;
  options: {
    strings?: string | string[]
    cursor?: string
    delay?: "natural" | number
    deleteSpeed?: "natural" | number
    loop?: boolean
    autoStart?: boolean
    pauseFor?: number
    devMode?: boolean
    skipAddStyles?: boolean
    wrapperClassName?: string
    cursorClassName?: string
  }
};

const TypeEffect = (props: Props) => {
  const { words, textColor, options } = props;
  return (
    <span className={`${textColor}`}>
      <Typewriter
        options={options}
        onInit={(typewriter) => {
          typewriter
            .typeString("")
            .callFunction(() => {
              console.log("String typed out!");
            })
            .pauseFor(2500)
            .callFunction(() => {
              console.log("All strings were deleted");
            })
            .start();
        }}
      />
    </span>
  );
};

export default TypeEffect;
