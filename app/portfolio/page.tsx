"use client"
import { Nav } from '@/components'
// import './globals.css';

export default function portfolio() {
  return (
    <main className='bg-green-500 min-h-[100vh]'>
      <div className="flex min-h-vhf">
        <section className=''>
          <Nav />
        </section>
        <section className='text-gray-800'>
          portfolio
        </section>
      </div>
    </main>
  )
}