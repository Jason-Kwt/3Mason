'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import bg_section4 from '../assets/section4/bg_section4.png';

import group_01 from '../assets/section4/group_01.png';
import group_02 from '../assets/section4/group_02.png';
import group_03 from '../assets/section4/group_03.png';
import group_04 from '../assets/section4/group_04.png';
import group_05 from '../assets/section4/group_05.png';
import group_06 from '../assets/section4/group_06.png';
import group_07 from '../assets/section4/group_07.png';
import group_08 from '../assets/section4/group_08.png';
import group_09 from '../assets/section4/group_09.png';
import section3_title from '../assets/section4/section3_title.png';
import section3_text from '../assets/section4/section3_text.png';

function section4() {
  return (
    <section
      id="section4"
      className="h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bg_section4.src})` }}
    >
      {/* container part */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto h-full w-full pt-24 pb-16 px-8"
      >
        {/*       left side title img */}
        <div className=" w-full h-full top-0 flex flex-col xl:flex-row xl:justify-center xl:items-center justify-center items-center gap-2">
          <motion.div
            variants={fadeIn('right', 'tween', 0.1, 0.5)}
            className=" w-[360px] md:w-[510px] lg:w-[510px] xl:w-[850px] h-[350px] md:h-[550px] order-first mt-16 grid grid-rows-3 justify-center justify-items-center items-center content-center relative"
          >
            <div className="h-full w-full">
              {/* ROW 1 */}
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_01}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute left-0 top-0"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_02}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[4rem] md:left-[5.5rem] xl:left-[7rem]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_03}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[8rem] md:left-[11rem] xl:left-[14rem]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_04}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[12rem] md:left-[16.5rem] xl:left-[21rem]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_05}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[16rem] md:left-[22rem] xl:left-[28rem]"
                />
              </motion.div>
              {/* ROW 2 */}
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_06}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[6rem] md:top-[9rem] xl:top-[11rem] 
                  left-[4rem] md:left-[5.5rem] xl:left-[6rem]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_07}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[6rem] md:top-[9rem] xl:top-[11rem] 
                  left-[8rem] md:left-[11rem] xl:left-[14rem]"
                />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_08}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[6rem] md:top-[9rem] xl:top-[11rem] 
                  left-[12rem] md:left-[16.5rem] xl:left-[22rem]"
                />
              </motion.div>
              {/* ROW 3 */}

              <motion.div
                initial="hidden"
                whileInView="show"
                whileHover={{ opacity: 0 }}
              >
                <Image
                  src={group_09}
                  alt=""
                  unoptimized
                  quality={100}
                  className="w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[12rem] md:top-[18rem] xl:top-[22rem] 
                  left-[8rem] md:left-[11rem] xl:left-[14rem]"
                />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 'tween', 0.1, 0.5)}
            className="flex flex-col gap-4"
          >
            <div className="">
              <Image
                src={section3_title}
                alt=""
                unoptimized
                quality={100}
                className="object-cover w-[450px] lg:w-[550px] xl:w-[970px]"
              />
            </div>
            <div className="">
              <Image
                src={section3_text}
                alt=""
                unoptimized
                quality={100}
                className="object-cover w-[325px] lg:w-[325px] xl:w-[970px]"
              />
            </div>
          </motion.div>
        </div>{' '}
        {/* end of left side title img */}
      </motion.div>{' '}
      {/*  end of the container part */}
    </section>
  );
}

export default section4;
