import React from "react";
import Link from "next/link";

type Props = {
  link: string;
  name: string;
  githubLink: string;
};

const ProjectLinks = (props: Props) => {
  const { link, name, githubLink } = props;
  return (
    <div>
      <Link
        className="cursor-pointer w-24 underline underline-offset-2 hover:text-black ml-2 text-2xl"
        href={link}
      >
        {name}
      </Link>
      &nbsp;|
      <Link
        className="cursor-pointer w-24 underline underline-offset-2 hover:text-black ml-2 text-2xl"
        href={githubLink}
      >
        Github Link
      </Link>
    </div>
  );
};

export default ProjectLinks;
