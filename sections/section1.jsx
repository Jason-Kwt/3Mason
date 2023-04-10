'use client';
import React from 'react';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { slideIn, staggerContainer, textVariant } from '../utils/motion';

function Section1() {
  return (
    <section
      id="section1"
      className=" h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat bg-black"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
          <div className="text-white text-center">
            <motion.h1
              variants={textVariant(0.2)}
              className="2xl:text-7xl xl:text-6xl  lg:text-5xl md:text-4xl text-2xl tracking-[0.1em] font-black font-syncopate"
            >
              I I I M A S O N S
            </motion.h1>
            <motion.div variants={textVariant(0.7)} className="mt-8 lg:mt-16">
              <div className="flex flex-row justify-between text-xl  tracking-[0.2em] font-syncopate font-bold">
                <h2>THE MASONS OF WEB3</h2>
                <h2 className="">IN TRUST WE BUILD</h2>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={textVariant(1)}
            className="absolute w-full h-screen top-0 flex flex-col p-4 justify-end items-center"
          >
            <div className="text-center p-4 text-gray-200 font-thin ">
              <p className="  md:text-base text-sm tracking-[0.2em]">
                UNLOCK YOUR NEW PROFRESSIONAL IDENTITY
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Section1;
