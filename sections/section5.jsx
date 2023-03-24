'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

function section5() {
  return (
    <section
      id="section5"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative bg-section5_2 lg:bg-section5 overflow-hidden"
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
        <div className="w-full h-full top-0 flex flex-col xl:flex-row  sm:justify-start md:justify-around xl:justify-between  items-center ">
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative text-justify text-white w-full xl:w-3/6 p-8 "
          >
            <h1 className="2xl:text-4xl   lg:text-3xl md:text-3xl text-2xl tracking-[0.1em] font-black font-syncopate">
              THE IIIMASONS OATH
            </h1>
            <p className="mt-8 font-thin text-base font-raleway">
              I, as a IIIMASON, pledge to apply my best expertise and enthusiasm
              towards improving the Web3 ecosystem and to consistently act with
              accountability and integrity in all my endeavours.
              <br></br>
              <br></br>I acknowledge the trust invested in IIIMASON and pledge
              to uphold the utmost ethical and responsible conduct. I am devoted
              to the development and success of IIIMASON and will exert every
              effort to achieve our shared goals.
              <br></br>
              <br></br> By taking this oath, I demonstrate my allegiance and
              dedication to IIIMASON and our mission of creating a better Web3
              world.
            </p>

            <button className="mt-8 bg-white px-[9rem] py-2 rounded-lg">
              <p className="text-cent text-black font-bold text-sm tracking-[0.2em]">
                BECOME A IIIMASON
              </p>
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
