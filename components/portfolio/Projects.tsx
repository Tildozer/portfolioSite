
import React from 'react'
import {default as projects} from './projectsArray'
import Image from 'next/image'
import {Points, ProjectLinks} from '.'




type Props = {}

const Projects = (props: Props) => {
  projects

  return (
    <>
      {projects.map((project, idx) => {
        return (
          <div key={idx} className='mb-24'>
            <ProjectLinks name={project.name} link={project.link} githubLink={project.githubLink}/>
            <br />
            <ul className='list-disc flex flex-col sm:flex-row border-2 border-onyx shadow-md max-w-[40rem] min-h-[20rem] p-4 pl-6 rounded-md m-4'>
              <div>
                <Image priority height={200} width={400} src={project.imgLocation} alt={`${project.name}'s Logo`}/>
                <div className='text-xl'>
                  {project.projectType}
                </div>
              </div>
              <div className='flex flex-col'>
                <Points about={project.about}/>
              </div>
            </ul>
          </div>
        )
      })}
    </>
  )
}

export default Projects;