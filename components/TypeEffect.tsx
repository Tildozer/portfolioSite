import React from "react";
import Typewriter from "typewriter-effect";

type Props = {
  words: string[];
  textColor: string;
};

const TypeEffect = (props: Props) => {
  const { words, textColor } = props;
  return (
    <span className={`${textColor}`}>
      <Typewriter
        options={{
          strings: words,
          autoStart: true,
          loop: true
        }}
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
