'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import { exploreSlide } from '@/constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import bg_slide from '../public/bg_slide.png';

export default function section3() {
  const [slideNumber, setSlideNumber] = useState(0);

  const handleSlideLeft = () => {
    if (slideNumber === 0) {
      console.log(`This is the first one + ${slideNumber}`);
      setSlideNumber(exploreSlide.length - 1);
    } else {
      setSlideNumber(slideNumber - 1);
      console.log(`The next number is: ${slideNumber}`);
    }
  };
  const handleSlideRight = () => {
    if (slideNumber === exploreSlide.length - 1) {
      console.log(`This is the last one + ${slideNumber}`);
      setSlideNumber(0);
    } else {
      setSlideNumber(slideNumber + 1);
      console.log(`The next number is: ${slideNumber}`);
    }
  };

  useEffect(() => { }, [slideNumber]);

  return (
    <section
      id="section3"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative overflow-hidden bg-black  "
    >
      {/* container part */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto h-full w-full py-24 px-8 overflow-hidden relative"
      >
        {/*       left side title img */}
        <div className="w-full h-full top-0 flex justify-between items-start  ">
          <div className="mt-24">
            <button onClick={handleSlideLeft}>
              <FaChevronLeft className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] text-white" />
            </button>
          </div>
          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className=" text-white w-[600px]  self-end"
          >
            <Image
              // src={bg_section3_01}
              src={exploreSlide[slideNumber].imgUrl}
              width="600"
              height="800"
              alt=""
              quality={70}
              className=" h-auto w-screen overflow-hidden"
              priority
            />
          </motion.div>
          <div className="mt-24">
            <button onClick={handleSlideRight}>
              <FaChevronRight className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] text-white" />
            </button>
          </div>
        </div>

        {/* <div className=" flex flex-row w-full h-full justify-center items-center border-2">
              <div>
                <h3 className="text-center xl:text-left font-bold text-lg md:text-2xl xl:text-4xl mb-2 lg:mb-6 leading-6 md:leading-10 font-syncopate">
                  {exploreSlide[slideNumber].title}
                </h3>

                <p className="font-thin text-sm lg:text-base text-justify font-raleway whitespace-pre-line leading-tight">
                  {exploreSlide[slideNumber].text}
                </p>
              </div>
            </div> */}
        {/* end of left side title img */}

        <div className="-z-10  h-full w-full absolute bottom-0 inset-x-0 bg-[url('/bg_slide.png')] bg-no-repeat bg-contain bg-bottom"></div>

        <div className="absolute bottom-0 inset-x-0 mb-48 ml-20 w-[800px]">
          <div className="text-white flex-row w-full">
            <p className="font-thin text-base text-justify font-raleway whitespace-pre-line leading-tight w-1/2 ">
              {exploreSlide[slideNumber].text}
            </p>
            <h3 className="mt-8 text-center xl:text-left font-bold text-lg md:text-2xl xl:text-4xl leading-6 md:leading-10 font-syncopate">
              {exploreSlide[slideNumber].title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/*  end of the container part */}
    </section>
  );
}

