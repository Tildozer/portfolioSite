import React from "react";
import { frameworks } from "@prisma/client";

interface Props {
  frameworks: frameworks[]
}

const Frameworks = (props: Props) => {
  return <div className="text-white">Frame</div>;
};

export default Frameworks;
