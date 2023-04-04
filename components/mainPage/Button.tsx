import React, { MouseEventHandler } from "react";

interface Props {
  callback: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  message: string;
}

const Button = (props: Props) => {
  const { callback, message } = props;
  return (
    <button
      className="bg-slate-200 ml-2 mr-2 pr-2 pl-2 text-teal-700 rounded-sm shadow-teal-700 shadow-md hover:animate-pulse active:translate-y-1 active:animate-none active:bg-slate-400 active:text-black"
      onClick={(ev: React.MouseEvent<HTMLButtonElement>) => callback(ev)}
    >
      {message}
    </button>
  );
};

export default Button;
