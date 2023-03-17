'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import section3_Origin from '../assets/section3/section3_Origin.png';
import section3_Origin2 from '../assets/section3/section3_Origin2.png';
import { exploreSlide } from '@/constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function section3() {
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

  useEffect(() => {}, [slideNumber]);

  return (
    <section
      id="section3"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative overflow-hidden"
    >
      {/* container part */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto h-full w-full py-24 px-8 overflow-hidden"
      >
        {/*       left side title img */}
        <div className="w-full h-full top-0 flex flex-col xl:flex-row xl:justify-start xl:items-end justify-start items-center border-2">
          {/* <motion.div
            variants={fadeIn('right', 'tween', 0.1, 0.5)}
            className="hidden xl:block  flex-initial lg:order-1"
          >
            <Image
              src={section3_Origin}
              alt=""
              priority
              quality={70}
              className="w-[0%] xl:w-[80%] 2xl:w-[100%]"
            />
          </motion.div>
          <div className="block xl:hidden  flex-initial lg:order-first py-4">
            <Image
              src={section3_Origin2}
              alt=""
              quality={70}
              className="w-[212px] md:w-[325px] lg:w-[500px]"
            />
          </div> */}

          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className=" text-white order-last md:p-8 w-full xl:w-1/2 h-4/6"
          >
            <div className=" flex flex-row w-full h-full justify-center items-center">
              <div className="  md:m-2 md:p-2">
                <button onClick={handleSlideLeft}>
                  <FaChevronLeft className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] text-gray-600" />
                </button>
              </div>
              <div>
                <h3 className="text-center xl:text-left font-bold text-lg md:text-2xl xl:text-4xl mb-2 lg:mb-6 leading-6 md:leading-10 font-syncopate">
                  {exploreSlide[slideNumber].title}
                </h3>

                <p className="font-thin text-sm lg:text-base text-justify font-raleway whitespace-pre-line leading-tight">
                  {exploreSlide[slideNumber].text}
                </p>
              </div>
              <div className=" md:m-2 md:p-2">
                <button onClick={handleSlideRight}>
                  <FaChevronRight className="w-[25px] h-[25px] lg:w-[40px] lg:h-[40px] text-gray-600" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
        {/* end of left side title img */}
        <motion.div
          variants={fadeIn('left', 'tween', 0.1, 0.5)}
          className="absolute -z-10 right-0 bottom-0"
        >
          <Image
            // src={bg_section3_01}
            src={exploreSlide[slideNumber].imgUrl}
            width="1920"
            height="1080"
            alt=""
            quality={70}
            className=" h-auto w-screen overflow-hidden"
            priority
          />
        </motion.div>
      </motion.div>

      {/*  end of the container part */}
    </section>
  );
}

export default section3;
