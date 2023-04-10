'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';


export default function sub_section3() {
  return (
    <section
      id="section5"
      className=" h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative bg-section3 overflow-hidden"
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
        <div className="w-full h-full top-0 flex flex-col xl:flex-row  sm:justify-start md:justify-around xl:justify-between  items-center">
          <motion.div
            variants={fadeIn('left', 'tween', 0.2, 1)}
            className="relative text-justify text-white w-full xl:w-2/5 p-8 "
          >
            <h1 className="2xl:text-4xl lg:text-3xl md:text-3xl text-2xl tracking-[0.1em] font-black font-syncopate">
              THE ORIGIN OF IIIMASONS
            </h1>
            <p className="mt-8 font-thin text-base font-raleway ">
              Behind the facade of Web3 lies a digital wild west where desires have been ruthlessly bred, and the greedy seek to manipulate and abuse the technology.
              <br /><br />
              Under a full moon, a pack of wolves moves forward in the wilderness, amidst the swirling dust of greed and fear. We are 3MASONS, ambitious, determined and fearless like the wolf. We are a cohort of Web3 warriors who never back down.<br /><br />
              We stand united in our quest to build a new digital civilisation on the Web3 frontier. We are on a mission to create a promised land in the Web3 world, where technology serves the greater good and empowers mankind.
            </p>

          </motion.div>
        </div>{' '}
        {/* end of left side title img */}
      </motion.div>{' '}
      {/*  end of the container part */}
    </section>
  );
}


