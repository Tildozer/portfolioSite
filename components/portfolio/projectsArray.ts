import reKANstructed from "@/public/image.png"
import StrangersThings from "@/public/strangersThings.png"
import { StaticImageData } from 'next/image'
interface Project {
  link: string
  name: string
  about: string[]
  imgLocation: StaticImageData
 }
 
const projects: Project[] = [
   {
     link: "http://rekanstructed.onrender.com/",
     name: "reKANstructed",
     about: [""],
     imgLocation: reKANstructed,   
   }, 
   {
     link: "https://strangersproj.netlify.app",
     name: "Strangers Things",
     about: ["hello", "this", "is"],
     imgLocation: StrangersThings,
   }, 
   // {link: "", name: "Pokedex", about: ""}
 ]

 export default projects