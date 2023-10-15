"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
function HeroSection() {
  return (
    <div className="flex gap-[4px] relative">
      <motion.div
        initial={{ opacity: 0, x: -250 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="w-[45%] bg-slate-500"
      >
        <div style={{ width: "100%", height: "600px", position: "relative" }}>
          <Image
            alt="Mountains"
            src="/images/img1.png"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </motion.div>
      <div className="w-[55%] flex gap-[4px] ">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="left w-[50%] flex flex-col gap-[4px]"
        >
          <div style={{ width: "100%", height: "298px", position: "relative" }}>
            <Image
              alt="Mountains"
              src="/images/img2.png"
              fill
              objectFit="cover"
            />
          </div>
          <div style={{ width: "100%", height: "298px", position: "relative" }}>
            <Image
              alt="Mountains"
              src="/images/img3.png"
              fill
              objectFit="cover"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 250 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="left w-[50%] flex flex-col gap-[4px]"
        >
          <div style={{ width: "100%", height: "298px", position: "relative" }}>
            <Image
              alt="Mountains"
              src="/images/img4.png"
              fill
              objectFit="cover"
            />
          </div>
          <div style={{ width: "100%", height: "298px", position: "relative" }}>
            <Image
              alt="Mountains"
              src="/images/img5.png"
              fill
              objectFit="cover"
            />
          </div>
        </motion.div>
      </div>
      {/* absoulate Button */}
      <Link
        className="see_all absolute right-8 bottom-4 bg-white flex px-6 py-4 gap-2"
        href="/see-all"
      >
        <Image src="/images/Icons/1.png" height={16} width={16} alt="icon" />
        <span className="font-bold">Sell All</span>
      </Link>
    </div>
  );
}

export default HeroSection;
