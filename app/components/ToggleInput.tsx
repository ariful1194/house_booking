import React from "react";
interface MyComponentProps {
  name: string;
  title: string;
}
const ToggleInput: React.FC<MyComponentProps> = ({ name, title }) => {
  return (
    <div className=" w-[47%] flex items-center justify-between   px-8 my-4 bg-white py-4">
      <div className="ml-3 text-gray-700 font-medium">{title}</div>
      <label htmlFor={name} className="flex items-center cursor-pointer">
        <div className="relative">
          <input id={name} type="checkbox" className="sr-only" />

          <div className="w-10 h-4 bg-gray-400 rounded-full shadow-inner"></div>

          <div className="dot absolute w-6 h-6 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
        </div>
      </label>
    </div>
  );
};

export default ToggleInput;
