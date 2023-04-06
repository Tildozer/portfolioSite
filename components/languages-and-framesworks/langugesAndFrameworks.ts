import { IconType } from "react-icons"
import { SiTypescript, SiJavascript } from "react-icons/si"



interface languages{
    id:string
    language: string
    picture: IconType
}

interface framesworks{
    id: string
    framework: string
    picture: IconType
}



const knownLanguages: languages[] = [
  {
    id: "1",
    language: "JavaScript",
    picture: SiJavascript,
  },
  {
    id: "2",
    language: "TypeScript",
    picture: SiTypescript
  }
]