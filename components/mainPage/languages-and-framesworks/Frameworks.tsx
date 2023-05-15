import React, { ReactNode } from "react";
import { frameworks } from "@prisma/client";
import { RiReactjsLine, RiFlutterFill } from "react-icons/ri";
import { TbBrandNextjs, TbBrandPrisma } from "react-icons/tb";
import Link from "next/link";

interface Props {
  frameworks: frameworks[];
}

const renderPictures = (framework: string) => {
  const iconClassName = "h-20 w-20";
  switch (framework) {
    case "React.js":
      return <RiReactjsLine className={`${iconClassName} text-cyan-400`} />;
    case "Next.js":
      return <TbBrandNextjs className={`${iconClassName} text-white`} />;
    case "Prisma":
      return <TbBrandPrisma className={`${iconClassName} text-white`} />;
    case "Flutter":
      return <RiFlutterFill className={`${iconClassName} text-blue-400`} />;
    default:
      break;
  }
};

function renderFrameworks(frameworks: frameworks[]) {
  return frameworks.map(({ id, framework, link }) => {
    return (
      <Link
        href={link}
        key={id}
        className="m-5 bg-onyx p-5 rounded-md text-cadetGray hover:-translate-y-1 hover:shadow-md hover:shadow-onyx"
      >
        {framework}
        <div className="m-5">{renderPictures(framework)}</div>
      </Link>
    );
  });
}

const Frameworks = (props: Props) => {
  const { frameworks } = props;

  return (
    <div className="text-white flex flex-wrap justify-center">
      {renderFrameworks(frameworks)}
    </div>
  );
};

export default Frameworks;
