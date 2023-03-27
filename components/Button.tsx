import React, { MouseEventHandler } from 'react'


interface Props {
  callback: (ev: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = (props: Props) => {
    const { callback } = props
    return (
        <button
        className='bg-slate-200 ml-2 mr-2 pr-2 pl-2 text-orange-700 rounded-sm shadow-orange-700 shadow-sm hover:animate-pulse active:translate-y-1 active:animate-none active:bg-slate-400 active:text-black'
        onClick={(ev: React.MouseEvent<HTMLButtonElement>) => callback(ev)}
      >
        send email
      </button>
    )
}

export default Button;
