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
          <div key={idx}>
            <li className='ml-10 min-w-[10rem]'>
              {point}
            </li>
            <br/>
          </div>
        )
      })}
    </>
  )
}

export default Points
