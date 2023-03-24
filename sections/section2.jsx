'use client';
import React from 'react';
import Image from 'next/image';

import section2_Lodge from '../assets/section2/section2_Lodge.png';

function section2() {
  return (
    <section
      id="section2"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat overflow-hidden bg-white"
    >
      {/* container part */}
      <div className="container mx-auto h-full w-full py-24 px-8">
        {/*       left side title img */}
        <div className="w-full h-full flex flex-col justify-end items-center content-center ">
          <div className="text-center  text-black ">
            <p className=" tracking-[0.5em] font-bold  text-xl ">
              UNLOCK IIIMASONS
            </p>
            <h2 className="text-right tracking-[5rem] -mr-[5rem] font-bold text-2xl md:text-4xl xl:text-[350px] leading-none">
              LODGE
            </h2>
          </div>
        </div>{' '}
        {/* end of left side title img */}
      </div>
    </section>
  );
}

export default section2;
