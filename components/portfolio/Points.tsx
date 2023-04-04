import React from 'react'

interface Props {
    about: string[]
}

const Points = (props: Props) => {
  const { about } = props
  return (
    <>
      {about.map((point, idx) => {
        return (
          <li key={idx} className='ml-10 min-w-[10rem]'>
            {point}
          </li>
        )
      })}
    </>
  )
}

export default Points
