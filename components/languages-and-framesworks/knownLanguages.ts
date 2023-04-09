import { IconType } from "react-icons";
import { SiTypescript, SiJavascript } from "react-icons/si";

interface languages {
  id: string;
  language: string;
  Picture: IconType;
}

interface framesworks {
  id: string;
  framework: string;
  picture: IconType;
}

const knownLanguages: languages[] = [
  {
    id: "1",
    language: "JavaScript",
    Picture: SiJavascript,
  },
  {
    id: "2",
    language: "TypeScript",
    Picture: SiTypescript,
  },
];

export default knownLanguages;
