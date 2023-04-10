'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';

import bg_section6 from '../assets/section6/bg_section6.png';

function Section6() {
  return (
    <section
      id="section6"
      className=" h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat overflow-hidden bg-section6"
    //style={{ backgroundImage: `url(${bg_section6.src})` }}
    >
      {/* animation ball */}
      {/*       <div
        className="absolute top-[4rem] left-[2rem] w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply  opacity-70 
        animate-blob blur-2xl
      "
      ></div>
      <div
        className="absolute top-[24rem] left-[30rem] w-64 h-64 bg-blue-300 rounded-full 
      mix-blend-multiply  opacity-70   animation-delay-2000 animate-blob2 animation-delay-2000 blur-2xl
      "
      ></div>
      <div
        className="absolute right-[36rem] bottom-96 w-64 h-64 bg-blue-300 rounded-full 
      mix-blend-multiply  opacity-70 animate-blob blur-2xl
      "
      ></div>
      <div
        className="absolute right-4 bottom-2 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply  opacity-70  animate-blob2 animation-delay-2000 blur-2xl
      "
      ></div> */}

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="absolute w-full h-screen top-0 overflow-hidden">

          <div className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth border-2 ">
            <div className='h-screen w-screen snap-start snap-always relative  flex flex-col p-4 justify-center items-center'>
              <div className="text-white text-center p-8">
                <motion.h2
                  variants={textVariant(0.5)}
                  className=" font-black text-4xl tracking-[0.5em] leading-loose"
                >
                  <p>THE IIIMASONS Values</p>
                </motion.h2>
              </div>
            </div>
            <div className='h-screen w-screen snap-start snap-always relative  flex flex-col p-4 justify-center items-center'>
              <div className="text-white text-center p-8">
                <p className="font-base text-lg tracking-[0.3em] my-8">
                  THE IIIMASONS VALUES
                </p>
                <motion.h2
                  variants={textVariant(0.5)}
                  className=" font-black text-4xl tracking-[0.5em] leading-loose"
                >
                  <p>TENACITY</p>
                  <p>AUDACITY</p>
                  <p>ACCOUNTABILITY</p>
                </motion.h2>
              </div>
            </div>
          </div>
          {/*           <div className="text-white text-center p-8">
            <p className="font-base text-lg tracking-[0.3em] my-8">
              THE IIIMASONS VALUES
            </p>
            <motion.h2
              variants={textVariant(0.5)}
              className=" font-black text-4xl tracking-[0.5em] leading-loose"
            >
              <p>TENACITY</p>
              <p>AUDACITY</p>
              <p>ACCOUNTABILITY</p>
            </motion.h2>
          </div> */}
        </div>
      </motion.div>
    </section>
  );
}

export default Section6;
