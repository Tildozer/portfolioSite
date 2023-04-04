import Link from 'next/link'
import React from 'react'
import {default as projects} from './projectsArray'
import Image from 'next/image'




type Props = {}

const Projects = (props: Props) => {
  projects

  return (
    <>
      {projects.map((project, idx) => {
        return (
          <div key={idx}>
            <Link
              className="cursor-pointer w-24 underline underline-offset-2 hover:text-black"
              href={project.link}
            >
              {project.name}
            </Link>
            <br />
            <ul className='list-disc flex flex-col sm:flex-row'>
              <div>
                <Image priority width={200} src={project.imgLocation} alt={`${project.name}'s Logo`}/>
              </div>
              <div className='flex flex-col'>
                {project.about.map((point, idx) => {
                  return (
                    <li key={idx} className='ml-10'>
                      {point}
                    </li>
                  )
                })}
              </div>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Projects;