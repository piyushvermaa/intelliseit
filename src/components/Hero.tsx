"use client"
import Image from "next/image";
import ArrowIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";
import cicon from "../assets/images/c.png";
import cplusplus from "../assets/images/c++.png";
import javaicon from "../assets/images/java.png";
import pythonicon from "../assets/images/python.png";
import cssicon from "../assets/images/css.png";
import htmlicon from "../assets/images/html.png";
import dockericon from "../assets/images/docker.png";
import reacticon from "../assets/images/react.png";
import jsicon from "../assets/images/js.png";
import nextjsicon from "../assets/images/next.png";
import Meteors from "./magicui/meteors";
import TypingAnimation from "./magicui/typewritter";
import { useEffect, useState } from "react";
import Particles from "./magicui/particles";

export const Hero = () => {
  const  theme  = "dark";
  const [color, setColor] = useState("#ffffff");
 
  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);
  return (
    <>
      <div className="bg-black custom-gradient text-white py-[72px] sm:py-24 relative overflow-clip">
        <Meteors number={10} />
        <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
        <div className="absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border-[#B48CDE] radial-gradient-bg top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

        <Image
          src={cplusplus}
          alt="C++ Icon"
          height="100"
          width="100"
          className="absolute right-[376px] top-[30px] hidden sm:inline upanddown glow"
        />
        <Image
          src={javaicon}
          alt="Java Icon"
          height="100"
          width="100"
          className="absolute top-[56px] left-[30px] hidden sm:inline upanddown glow"
        />
        <Image
          src={pythonicon}
          alt="Python Icon"
          height="100"
          width="100"
          className="absolute top-[656px] left-[110px] hidden sm:inline upanddown glow"
        />
        <Image
          src={cicon}
          alt="C Icon"
          height="100"
          width="100"
          className="absolute top-[456px] right-[70px] hidden sm:inline upanddown glow"
        />
        <Image
          src={cssicon}
          alt="CSS Icon"
          height="100"
          width="100"
          className="absolute top-[356px] left-[210px] hidden sm:inline upanddown glow"
        />
        <Image
          src={htmlicon}
          alt="HTML Icon"
          height="100"
          width="100"
          className="absolute top-[106px] left-[410px] hidden sm:inline upanddown glow"
        />
        <Image
          src={dockericon}
          alt="Docker Icon"
          height="100"
          width="100"
          className="absolute top-[656px] right-[110px] hidden sm:inline upanddown glow"
        />
        <Image
          src={reacticon}
          alt="React Icon"
          height="100"
          width="100"
          className="absolute top-[556px] left-[310px] hidden sm:inline upanddown glow"
        />
        <Image
          src={jsicon}
          alt="JavaScript Icon"
          height="100"
          width="100"
          className="absolute top-[556px] right-[310px] hidden sm:inline upanddown"
        />
        <Image
          src={nextjsicon}
          alt="Next.js Icon"
          height="100"
          width="100"
          className="absolute top-[256px] right-[210px] hidden sm:inline upanddown glow"
        />

        <div className="container mx-auto py-16 relative">
          <div className="flex items-center justify-center">
            <a
              href="#"
              className="inline-flex gap-3 border border-white/30 py-1 px-2 rounded-full"
            >
              <span className=" bg-gradient-to-r from-red-500 to-blue-500 text-transparent bg-clip-text [-webkit-background-clip:text]">
                Discover Our New Features
              </span>
              <span className="inline-flex gap-1 items-center">
                <span>Learn More</span>
                <ArrowIcon />
              </span>
            </a>
          </div>
          <div className="flex justify-center">
            <div className="inline-flex relative">
              <h1 className="text-7xl sm:text-9xl font-bold mt-8 text-center tracking-tighter pb-4 inline-flex bg-clip-text   bg-opacity-0 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/90  leading-none text-transparent dark:from-white dark:to-slate-900/30">
                Empower Your <br />
                Coding Skills
              </h1>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-xl text-center mt-8 max-w-md">
              <TypingAnimation
                className="text-xl  text-black dark:text-white"
                text="Join Intellise today and master coding with our expert-led courses.
              Whether you’re a beginner or a pro, we have something for everyone. 
              Start your journey towards coding excellence!"
              />
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <button className="px-5 py-3 bg-white text-black rounded-lg hover:bg-gray-400 font-medium transition-colors">
              Enroll Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
