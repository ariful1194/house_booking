"use client";
import React, { useState } from "react";

interface MyComponentProps {
  labelText?: String;
  value: String; // Define the type of the title prop
}

const YoutubeInput: React.FC<MyComponentProps> = ({
  labelText,
  value: input,
}) => {
  const [inputValue, setInputValue] = useState(input);

  const copyClipBoard = () => {
    navigator.clipboard
      .writeText(inputValue.toString())
      .then(() => alert("URL Copied to ClipBoard!"));
  };
  return (
    <>
      <label className="font-bold text-sm" htmlFor="">
        {labelText}
      </label>
      {/* <div className="infoValue py-4 px-6 mt-2">{inputValue}</div> */}
      <div className="flex">
        <input
          className="infoValue py-4 px-6 mt-2  w-full outline-none"
          type="text"
          value={inputValue.toString()}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="bg-black text-white px-6" onClick={copyClipBoard}>
          Copy
        </button>
      </div>
      <p className="pt-3 text-sm">
        Here you can add a link to a video of the property on youtube
      </p>
    </>
  );
};

export default YoutubeInput;
