import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const Nav = (props: Props) => {
  const [show, setShow] = useState(false) 
  return (
    <div className='box-border'>
      <label
        // onClick={(ev: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
        //   console.log(ev.target)
        // }}
        className='hamburger flex flex-col gap-2 absolute top-1 left-1 z-10 cursor-pointer before:rounded-full before:content-[""] before:w-16 before:h-2 before:bg-black before:origin-left-center before:transition-[width,opacity,rotate,translate,background-color] before:duration-200 before:ease-in-out after:content-[""] after:w-16 after:h-2 after:bg-black after:rounded-full after:origin-left-center after:transition-[width,opacity,rotate,translate,background-color] after:duration-200 after:ease-in-out'
      >
        <input type="checkbox" 
          className='content-[""] w-16 h-2 bg-black rounded-full appearance-none outline-none pointer-events-none checked:opacity-0 checked:w-0  transition-[width,opacity,rotate,translate,background-color] duration-200 ease-in-out origin-left-center'
        />
      </label>
         <aside className='sidebar pt-14 pl-4 bg-black text-white min-w-[8rem] max-w-[10rem] min-h-vhf transition-[translate] duration-200'>
           <nav className='flex flex-col'>
             <Link href="/about">about</Link>
             <Link href="/portfolio">portfolio</Link>
             <Link href="/">home</Link>
          </nav>
        </aside> 
    </div>
  )
}

export default Nav