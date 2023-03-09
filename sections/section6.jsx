'use client';
import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';

import section6_title from '../assets/section6/section6_title.png';
import section6_polygon from '../assets/section6/section6_polygon.png';

function section6() {
  return (
    <section
      id="section6"
      className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat bg-section6"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
          <Image
            src={section6_polygon}
            alt=""
            unoptimized
            quality={70}
            className="absolute m-16 p-20"
          />
          <div className="text-white text-center p-8">
            <motion.div
              variants={textVariant(0.2)}
              className="lg:text-9xl md:text-7xl text-3xl tracking-[0.1em] font-black"
            >
              <Image
                src={section6_title}
                alt=""
                unoptimized
                quality={70}
                className="w-[600px] md:w-[800px] lg:w-[1280px]"
              />
            </motion.div>
            <motion.h2
              variants={textVariant(0.5)}
              className="mt-8 lg:mt-16 text-white font-thin lg:text-2xl tracking-widest leading-loose"
            >
              <p>TENACITY</p>
              <p>AUDACITY</p>
              <p>ACCOUNTABILITY</p>
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default section6;
