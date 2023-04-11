'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';
import { FaAngleDown } from "react-icons/fa";

export default function section6() {
  return (
    <section className="h-full w-screen snap-start snap-always scroll-m-0 overscroll-none overflow-hidden">

      <div className='overflow-hidden h-screen w-screen  overflow-y-scroll snap-y snap-mandatory scroll-smooth'>

        <section
          id="section6"
          className="h-full w-screen snap-start snap-always scroll-m-0 overscroll-none overflow-hidden bg-black relative"
        >
          {/* container part */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
              <div className="text-white text-center">
                <motion.h3
                  variants={textVariant(0.25)}
                  className="xl:text-5xl  lg:text-4xl md:text-3xl text-2xl tracking-[0.1em] font-black font-syncopate uppercase flex flex-col justify-center items-center"
                >
                  THE IIIMASONS Values
                  <FaAngleDown className='text-2xl mt-16 animate-bounce opacity-50' />
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </section>

        <section
          id="sub_section6"
          className="relative h-full w-screen snap-start snap-always scroll-m-0 overscroll-none overflow-hidden bg-black"
        >
          {/* container part */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
          >
            <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
              <div className="text-white text-center leading-9 tracking-[0.1em] uppercase flex flex-col gap-8">
                <motion.h3
                  variants={textVariant(0.5)}
                  className="xl:text-xl  lg:text-base text-sm font-thin font-raleway uppercase"
                >
                  THE IIIMASONS Values
                </motion.h3>
                <motion.h3
                  variants={textVariant(0.5)}
                  className="2xl:text-5xl xl:text-4xl  lg:text-3xl text-2xl  font-black font-syncopate"
                >
                  Tenacity
                </motion.h3>
                <motion.h3
                  variants={textVariant(0.7)}
                  className="2xl:text-5xl xl:text-4xl  lg:text-3xl text-2xl  font-black font-syncopate"
                >
                  Audacity
                </motion.h3>
                <motion.h3
                  variants={textVariant(0.9)}
                  className="2xl:text-5xl xl:text-4xl  lg:text-3xl text-2xl  font-black font-syncopate"
                >
                  Accountability
                </motion.h3>
              </div>
            </div>
          </motion.div>
        </section>

      </div>
    </section>
  );
}

