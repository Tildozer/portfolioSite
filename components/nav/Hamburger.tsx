import React from "react";

interface Props {}

const Hamburger = (props: Props) => {
  return (
    <label className='hamburger flex flex-col gap-2 border-2 border-mountainBatten p-2 bg-onyx absolute top-2 left-1 z-10 cursor-pointer before:rounded-full before:content-[""] before:w-16 before:h-2 before:bg-mountainBatten before:origin-left-center before:transition-[width,opacity,rotate,translate,background-color] before:duration-200 before:ease-in-out after:content-[""] after:w-16 after:h-2 after:bg-mountainBatten after:rounded-full after:origin-left-center after:transition-[width,opacity,rotate,translate,background-color] after:duration-200 after:ease-in-out hover:animate-pulse active:translate-y-1 active:animate-none rounded-md'>
      <input
        type="checkbox"
        className='content-[""] w-16 h-2 bg-mountainBatten rounded-full appearance-none outline-none pointer-events-none checked:opacity-0 checked:w-0  transition-[width,opacity,rotate,translate,background-color] duration-200 ease-in-out origin-left-center'
      />
    </label>
  );
};

export default Hamburger;
