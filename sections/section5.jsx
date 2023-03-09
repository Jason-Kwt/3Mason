'use client';
'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import section5_title from '../assets/section5/section5_title.png';
import section5_title2 from '../assets/section5/section5_title2.png';
import section5_button from '../assets/section5/section5_button.png';

function section5() {
  return (
    <section
      id="section5"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative bg-section5_2 lg:bg-section5"
    >
      {/* container part */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto h-full w-full py-24 px-8"
      >
        {/*       left side title img */}
        <div className="w-full h-full top-0 flex flex-col xl:flex-row  sm:justify-start md:justify-around xl:justify-between xl:items-end items-center">
          <motion.div
            variants={fadeIn('right', 'tween', 0.2, 1)}
            className="hidden xl:block  flex-initial lg:order-1"
          >
            <Image
              src={section5_title}
              alt=""
              unoptimized
              quality={70}
              className="w-[0%] xl:w-[80%] 2xl:w-[90%]"
            />
          </motion.div>
          <div className="block xl:hidden  flex-initial lg:order-1 mt-[100px]">
            <Image
              src={section5_title2}
              alt=""
              unoptimized
              quality={70}
              className="w-[212px] md:w-[425px] lg:w-[549px]"
            />
          </div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative text-justify text-white w-full xl:w-2/5 p-8 xl:order-2 order-3"
          >
            <p className="font-thin text-sm lg:text-lg md:text-md sm:text-md">
              I, as a 3MASON, pledge to apply my best expertise and enthusiasm
              towards improving the Web3 ecosystem and to consistently act with
              accountability and integrity in all my endeavours.
              <br></br>
              <br></br>I acknowledge the trust invested in 3MASON and pledge to
              uphold the utmost ethical and responsible conduct. I am devoted to
              the development and success of 3MASON and will exert every effort
              to achieve our shared goals.
              <br></br>
              <br></br> By taking this oath, I demonstrate my allegiance and
              dedication to 3MASON and our mission of creating a better Web3
              world.
            </p>

            <button>
              <Image
                src={section5_button}
                alt=""
                unoptimized
                quality={70}
                className="w-[0%] xl:w-[80%] 2xl:w-[90%] mt-8"
              />
            </button>
          </motion.div>
        </div>{' '}
        {/* end of left side title img */}
      </motion.div>{' '}
      {/*  end of the container part */}
    </section>
  );
}

export default section5;
