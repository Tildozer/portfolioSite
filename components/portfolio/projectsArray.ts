import reKANstructed from "@/public/image.png"
import StrangersThings from "@/public/strangersThings.png"
import { StaticImageData } from 'next/image'
interface Project {
  link: string
  githubLink: string
  name: string
  about: string[]
  imgLocation: StaticImageData
  projectType: string
 }
//  I Stored my projects in a seprate file to help declutter my component
const projects: Project[] = [
   {
     link: "http://rekanstructed.onrender.com/",
     githubLink: "https://github.com/Team-Kan/Lego-shopper",
     name: "reKANstructed",
     about: [
      "This project was my final project for Fullstack Academy, my two partners and I were tasked with making an Ecommerce website, and we went with a buyback Lego site.",
      "In the development process, we decided to use Jest to test our back-end routes, and our database calls to ensure they were working, helping assure that our functions were properly working before we got to the front end.",
      "",
    ],
     imgLocation: reKANstructed, 
     projectType: "Group Project"
   }, 
   {
     link: "https://strangersproj.netlify.app",
     githubLink: "https://github.com/Tildozer/strangersThngs",
     name: "Strangers Things",
     about: [
      "This was my first introduction to React and JSON web tokens.", 
      "I learned how to make components, how to trade in credentials for a token, and how to validate the token for actions on the site.", 
      "Successfully incorporated react-router-DOM to navigate visitors between 'pages' on this single-page application",
    ],
     imgLocation: StrangersThings,
     projectType: "Solo Project"
   }, 
   // {link: "", name: "Pokedex", about: ""}
 ]

 export default projects