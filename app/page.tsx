"use client"
import { Roboto } from 'next/font/google'
import './globals.css';
import { Button } from '@/components/Button';


const roboto = Roboto({
  weight: '400',
  style:"italic",
  subsets: ["cyrillic"],
})

const sendEmail = async (ev: any) => {
  ev.preventDefault()
}

export default function Home() {
  return (
    <main className={roboto.className}>
      <div className='text-orange-500 bg-slate-800 min-h-[100vh]'>
        <h1>Anthony Thibodeaux</h1>
        <Button callback={sendEmail}/>
      </div>
    </main>
  )
}
