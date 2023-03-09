'use client';
import React from 'react';
import Image from 'next/image';

import bg_section3 from '../assets/section3/bg_section3.png';
import section3_Origin from '../assets/section3/section3_Origin.png';
import section3_Origin2 from '../assets/section3/section3_Origin2.png';
import section3_cat from '../assets/section3/section3_cat.png';

function section3() {
  return (
    <section
      id="section3"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative"
      style={{ backgroundImage: `url(${bg_section3.src})` }}
    >
      {/* container part */}
      <div className="container mx-auto h-full w-full py-24 px-8">
        {/*       left side title img */}
        <div className="w-full h-full top-0 flex flex-col xl:flex-row xl:justify-between xl:items-end justify-center items-center">
          <div className="hidden xl:block  flex-initial lg:order-1">
            <Image
              src={section3_Origin}
              alt=""
              unoptimized
              quality={70}
              className="w-[0%] xl:w-[80%] 2xl:w-[100%]"
            />
          </div>
          <div className="block xl:hidden  flex-initial lg:order-1 mt-[100px]">
            <Image
              src={section3_Origin2}
              alt=""
              unoptimized
              quality={70}
              className="w-[212px] md:w-[325px] lg:w-[649px]"
            />
          </div>

          <div className="text-justify text-white flex-1 2xl:p-8 md:p-8 xl:order-2 order-3">
            <h3 className="font-bold text-lg md:text-2xl xl:text-4xl mb-6">
              THE LEGEND OF IIIMASONS
            </h3>
            <p className="font-thin xl:text-lg md:text-md sm:text-sm text-xs">
              Behind the facade of Web3 lies a digital wild west where desires
              have been ruthlessly bred, and the greedy seek to manipulate and
              abuse the technology.Under a full moon, a pack of wolves moves
              forward in the wilderness, amidst the swirling dust of greed and
              fear. We are 3MASONS, ambitious, determined and fearless like the
              wolf. We are a cohort of Web3 warriors who never back down.We
              stand united in our quest to build a new digital civilisation on
              the Web3 frontier. We are on a mission to create a promised land
              in the Web3 world, where technology serves the greater good and
              empowers mankind.
            </p>
          </div>

          <div className=" flex-initial xl:order-3 order-2">
            <Image
              src={section3_cat}
              alt=""
              unoptimized
              quality={100}
              className="w-[250px] md:w-[450px] lg:w-[450px] xl:w-[700px]"
            />
          </div>
        </div>{' '}
        {/* end of left side title img */}
      </div>{' '}
      {/*  end of the container part */}
    </section>
  );
}

export default section3;
