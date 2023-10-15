"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
interface MyComponentProps {
  labelText?: String;
  value: String; // Define the type of the title prop
}

const Info: React.FC<MyComponentProps> = ({ labelText, value: input }) => {
  const [inputValue, setInputValue] = useState(input);
  return (
    <motion.div
      initial={{ opacity: 0, x: -150 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
    >
      <label className="font-bold text-sm" htmlFor="">
        {labelText}
      </label>
      {/* <div className="infoValue py-4 px-6 mt-2">{inputValue}</div> */}
      <input
        className="infoValue py-4 px-6 mt-2 block w-full"
        type="text"
        value={inputValue.toString()}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </motion.div>
  );
};

export default Info;
