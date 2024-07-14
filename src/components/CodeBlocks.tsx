"use client";
import React, { ReactNode } from "react";
import CTAButton from "./Button";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";

interface CodeBlocksProps {
  position: string;
  heading: ReactNode;
  subheading: ReactNode;
  ctabtn1: {
    active: boolean;
    link: string;
    btnText: ReactNode;
  };
  ctabtn2: {
    active: boolean;
    link: string;
    btnText: ReactNode;
  };
  codeblock: string;
  backgroundGradient: ReactNode;
  codeColor: string;
}

const CodeBlocks: React.FC<CodeBlocksProps> = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  backgroundGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} justify-between flex-col lg:gap-10 gap-10`}>

      {/* Section 1 */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base  w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-fit code-border rounded-md flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px]">
        {backgroundGradient}

        {/* Indexing */}
        <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold">
          {Array.from(Array(11), (_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>

        {/* Codes */}
        <div className={`w-[90%] flex flex-col gap-2 rounded-md  font-mono ${codeColor} pr-1`}>
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;
