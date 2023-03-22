import Image from 'next/image'
import { Roboto } from 'next/font/google'
// import './globals.css';


const roboto = Roboto({
  weight: '400',
  style:"italic",
  subsets: ["cyrillic"],
})
export default function Home() {
  return (
    <main className={roboto.className}>
      <div className='text-orange-500'>
        home
      </div>
    </main>
  )
}
