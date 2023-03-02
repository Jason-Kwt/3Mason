"use client";
import React from "react";
import Image from "next/image";

import section2_Lodge from '../assets/section2/section2_Lodge.png'

function section2() {
  return (
    <section
      id="section2"
      className="border-2 border-blue-500 h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat"
    >
      {/* container part */}
      <div className="border-2 border-red-700 container mx-auto h-full w-full" >
        {/*       left side title img */}
        <div className="w-full h-full flex flex-col xl:p-8 p-4 justify-end items-start">
          <div className="text-left text-white border-2">
            <p className="mb-8 tracking-[0.2em] font-bold text-lg md:text-2xl xl:text-4xl ">
              WELCOME TO
            </p>
            <Image src={section2_Lodge} alt="" unoptimized quality={100} className="w-[50%] lg:w-[70%] xl:w-[100%]" />
          </div>
        </div> {/* end of left side title img */}
      </div> {/*  end of the container part */}

    </section>
  );
}

export default section2;
