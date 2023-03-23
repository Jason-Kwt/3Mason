'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';

import bg_section6 from '../assets/section6/bg_section6.png';

function section6() {
  return (
    <section
      id="section6"
      className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${bg_section6.src})` }}
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
          <div className="text-black text-center p-8">
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
      </motion.div>
    </section>
  );
}

export default section6;
