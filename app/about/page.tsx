import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Nav } from '@/components'
// import './globals.css';

export default async function About() {
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