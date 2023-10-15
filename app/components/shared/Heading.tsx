import React from "react";

interface MyComponentProps {
  title: string; // Define the type of the title prop
}

const Heading: React.FC<MyComponentProps> = ({ title }) => {
  return <h2 className="font-bold text-2xl">{title}</h2>;
};

export default Heading;
