'use client';
import React from 'react';
import Image from 'next/image';

import section2_Lodge from '../assets/section2/section2_Lodge.png';

function section2() {
  return (
    <section
      id="section2"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* container part */}
      <div className="container mx-auto h-full w-full py-24 px-8">
        {/*       left side title img */}
        <div className="w-full h-full flex flex-col justify-end items-start">
          <div className="text-left text-white">
            <p className="mb-8 tracking-[0.2em] font-bold text-lg md:text-2xl xl:text-4xl ">
              WELCOME TO
            </p>
            <Image
              src={section2_Lodge}
              alt=""
              quality={70}
              className="w-[50%] lg:w-[70%] xl:w-[100%]"
            />
          </div>
        </div>{' '}
        {/* end of left side title img */}
      </div>
    </section>
  );
}

export default section2;
