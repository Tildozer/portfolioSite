"use client"
import { Nav } from '@/components'
// import './globals.css';

export default function About() {
  return (
    <main className='bg-orange-500 min-h-[100vh]'>
      <div className="flex min-h-vhf">
        <div>
          <Nav />
        </div>
        <div className='text-gray-800'>
          about
        </div>
      </div>
    </main>
  )
}