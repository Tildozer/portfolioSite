import React, { MouseEventHandler } from 'react'

interface Props {
  callback: (ev: any) => void
}

export const Button = (props: Props) => {
    const { callback } = props
    return (
        <button
        className='bg-slate-200 ml-2 mr-2 pr-2 pl-2 hover:animate-pulse active:translate-y-1 active:animate-none active:bg-slate-400 active:text-black'
        onClick={(ev: any) => callback(ev)}
      >
        send email
      </button>
    )
}
