"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/images/logosaas.png";
import { useRouter } from 'next/navigation';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const router = useRouter();

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="py-4 flex items-center justify-between">
          <div className="relative">
            <div
              style={{
                background:
                  "linear-gradient(to right, #F87BFF, #FB92CF, #FFDD9B, #C2F0B1, #2FD8FE)",
              }}
              className="absolute w-full top-2 bottom-0 blur-md"
            ></div>
            <Image src={logo} alt="logo" className="h-12 w-12 relative" />
          </div>
          <div
            className="h-10 w-10 inline-flex justify-center items-center cursor-pointer border border-white border-opacity-30 rounded-md sm:hidden"
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <FaTimes className="text-white text-2xl" />
            ) : (
              <FaBars className="text-white text-2xl" />
            )}
          </div>
          <nav className="gap-6 items-center hidden sm:flex">
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Courses
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Contact
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Features
            </a>
            <a
              href="#"
              className="text-opacity-60 text-white hover:text-opacity-100 transition"
            >
              Help
            </a>
            <button className="bg-white py-2 px-4 rounded-lg" onClick={()=>router.push('/login')}>Login</button>
          </nav>
        </div>
        <div className={`sm:hidden ${menuOpen ? "block" : "hidden"}`}>
          <div className="fixed inset-y-0 right-0 w-48 bg-gradient-to-b from-black via-gray-900 to-purple-900 h-fit pb-10 border border-t-0 border-r-0 border-l-white border-b-white p-4 rounded-l-lg shadow-lg transform transition-transform duration-300 ease-in-out z-50">
            <div className="flex items-center justify-end">
              <div
                className="h-10 w-10 inline-flex justify-center mt-1 items-center cursor-pointer border border-white border-opacity-30 rounded-md"
                onClick={toggleMenu}
              >
                <FaTimes className="text-white text-2xl" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
              <a
                href="#"
                className="text-white text-lg font-semibold text-opacity-80 border-b border-opacity-30 hover:text-opacity-100 transition"
              >
                About
              </a>
              <a
                href="#"
                className="text-white text-lg font-semibold text-opacity-80 border-b border-opacity-30 hover:text-opacity-100 transition"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-white text-lg font-semibold text-opacity-80 border-b border-opacity-30 hover:text-opacity-100 transition"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-white text-lg font-semibold text-opacity-80 border-b border-opacity-30 hover:text-opacity-100 transition"
              >
                Features
              </a>
              <a
                href="#"
                className="text-white text-lg font-semibold text-opacity-80 border-b border-opacity-30 hover:text-opacity-100 transition"
              >
                Help
              </a>
              <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-200 transition" onClick={()=>{console.log('hi'); router.push('/login')}}>
                Login
              </button>
            </div>
          </div>
          <div
            className={`${menuOpen ? "opacity-40 fixed inset-0 bg-black z-40 blur-3xl" : "hidden"
              }`}
            onClick={toggleMenu}
          ></div>
        </div>
      </div>
    </div>
  );
};
