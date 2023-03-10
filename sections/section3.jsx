'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import bg_section3 from '../assets/section3/bg_section3.png';
import bg_section3_01 from '../assets/section3/bg_section3_01.png';
import section3_Origin from '../assets/section3/section3_Origin.png';
import section3_Origin2 from '../assets/section3/section3_Origin2.png';
import { exploreSlide } from '@/constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function section3() {
  const [activeSlide, setActiveSlide] = useState('slide-1');

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
        <div className="w-full h-full top-0 flex flex-col xl:flex-row xl:justify-start xl:items-end justify-center items-center border-2">
          <motion.div
            variants={fadeIn('right', 'tween', 0.1, 0.5)}
            className="hidden xl:block  flex-initial lg:order-1"
          >
            <Image
              src={section3_Origin}
              alt=""
              unoptimized
              quality={70}
              className="w-[0%] xl:w-[80%] 2xl:w-[100%]"
            />
          </motion.div>
          <div className="block xl:hidden  flex-initial lg:order-first pb-8">
            <Image
              src={section3_Origin2}
              alt=""
              unoptimized
              quality={70}
              className="w-[212px] md:w-[325px] lg:w-[500px]"
            />
          </div>

          <motion.div
            variants={fadeIn('up', 'tween', 0.1, 0.5)}
            className=" text-white order-last md:p-8 w-full xl:w-1/2 border-2"
          >
            <div className="flex flex-row w-full h-full justify-center items-center">
              <div className="border-2  md:m-2 md:p-2">
                <button
                  onClick={() => {
                    if (activeSlide === 'slide-1') {
                      console.log(`This is the first :${activeSlide}`);
                    } else {
                      setActiveSlide('slide-3');
                      console.log(activeSlide);
                    }
                  }}
                >
                  <FaChevronLeft size={40} />
                </button>
              </div>
              <div>
                <h3 className="text-center xl:text-left font-bold text-lg md:text-2xl xl:text-4xl mb-2 lg:mb-6 leading-6 md:leading-10 font-syncopate">
                  THE LEGEND OF IIIMASONS
                </h3>
                <p className="font-thin text-sm lg:text-lg md:text-md sm:text-md text-justify font-raleway">
                  Behind the facade of Web3 lies a digital wild west where
                  desires have been ruthlessly bred, and the greedy seek to
                  manipulate and abuse the technology.Under a full moon, a pack
                  of wolves moves forward in the wilderness, amidst the swirling
                  dust of greed and fear. We are 3MASONS, ambitious, determined
                  and fearless like the wolf. We are a cohort of Web3 warriors
                  who never back down.We stand united in our quest to build a
                  new digital civilisation on the Web3 frontier. We are on a
                  mission to create a promised land in the Web3 world, where
                  technology serves the greater good and empowers mankind.
                </p>
              </div>
              <div className="border-2 md:m-2 md:p-2">
                <button>
                  <FaChevronRight size={40} />
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
            src={bg_section3_01}
            alt=""
            quality={100}
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
