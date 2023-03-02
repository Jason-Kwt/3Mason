"use client";
import React from "react";
import Typewriter from 'typewriter-effect';

import bg_section1 from '../assets/bg_section1.png'

function section1() {
  return (
    <section
      id="section1"
      className="border-2 border-blue-500 h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg_section1.src})` }}
    >
      <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
        <div className="text-white text-center">
          <h1 className="lg:text-9xl md:text-7xl text-4xl tracking-[0.1em] font-black">I I I M A S O N S</h1>
          <div className="mt-8 lg:mt-16">
            <Typewriter
              options={{
                strings: [
                  "MASONS IN WEB3",
                  "IN TRUST WE BUILD"
                ],
                changeDelay: 2,
                ChangeDeleteSpeed: 20,
                autoStart: true,
                loop: true,
                wrapperClassName: "text-2xl lg:text-4xl tracking-widest tracking-[0.2em] font-semibold",
                cursorClassName: "text-2xl lg:text-4xl  tracking-[0.2em]",
              }}
            />
          </div>
        </div>

        <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-end items-center">
          <div className="text-center p-4 text-gray-200 font-thin">
            <p className="lg:text-xl md:text-lg text-sm ">UNLOCK YOUR NEW PROFRESSIONAL IDENTITY</p>
          </div>
        </div>
      </div>
    </section >
  );
}

export default section1;
