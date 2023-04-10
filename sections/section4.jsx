'use client';
import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, textVariant } from '../utils/motion';

import group_01 from '../assets/section4/group_01.png';
import group_02 from '../assets/section4/group_02.png';
import group_03 from '../assets/section4/group_03.png';
import group_04 from '../assets/section4/group_04.png';
import group_05 from '../assets/section4/group_05.png';
import group_06 from '../assets/section4/group_06.png';
import group_07 from '../assets/section4/group_07.png';
import group_08 from '../assets/section4/group_08.png';
import group_09 from '../assets/section4/group_09.png';

export default function section4() {
  const [isButton1Hovered, setIsButton1Hovered] = useState(false);
  const [isButton2Hovered, setIsButton2Hovered] = useState(false);
  const [isButton3Hovered, setIsButton3Hovered] = useState(false);
  const [isButton4Hovered, setIsButton4Hovered] = useState(false);
  const [isButton5Hovered, setIsButton5Hovered] = useState(false);
  const [isButton6Hovered, setIsButton6Hovered] = useState(false);
  const [isButton7Hovered, setIsButton7Hovered] = useState(false);
  const [isButton8Hovered, setIsButton8Hovered] = useState(false);
  const [isButton9Hovered, setIsButton9Hovered] = useState(false);

  const handleButton1MouseEnter = () => setIsButton1Hovered(true);
  const handleButton2MouseEnter = () => setIsButton2Hovered(true);
  const handleButton3MouseEnter = () => setIsButton3Hovered(true);
  const handleButton4MouseEnter = () => setIsButton4Hovered(true);
  const handleButton5MouseEnter = () => setIsButton5Hovered(true);
  const handleButton6MouseEnter = () => setIsButton6Hovered(true);
  const handleButton7MouseEnter = () => setIsButton7Hovered(true);
  const handleButton8MouseEnter = () => setIsButton8Hovered(true);
  const handleButton9MouseEnter = () => setIsButton9Hovered(true);

  const handleButton1MouseLeave = () => setIsButton1Hovered(false);
  const handleButton2MouseLeave = () => setIsButton2Hovered(false);
  const handleButton3MouseLeave = () => setIsButton3Hovered(false);
  const handleButton4MouseLeave = () => setIsButton4Hovered(false);
  const handleButton5MouseLeave = () => setIsButton5Hovered(false);
  const handleButton6MouseLeave = () => setIsButton6Hovered(false);
  const handleButton7MouseLeave = () => setIsButton7Hovered(false);
  const handleButton8MouseLeave = () => setIsButton8Hovered(false);
  const handleButton9MouseLeave = () => setIsButton9Hovered(false);

  return (
    <section
      id="section4"
      className="h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat overflow-hidden relative "
    //style={{ backgroundImage: `url(${bg_section4.src})` }}
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
        <div className=" w-full h-full top-0 flex flex-col justify-center items-center gap-2 ">
          <div className="text-black text-center">
            <motion.h1
              variants={textVariant(0.2)}
              className="2xl:text-5xl xl:text-4xl  lg:text-3xl md:text-xl text-2xl tracking-[0.1em] font-black font-syncopate my-4"
            >
              THE IIIMASONS PRINCIPLES
            </motion.h1>
            <hr className="w-24 h-px mx-auto  border-0 bg-gray-700 my-4 rounded "></hr>
            <motion.p
              variants={textVariant(0.5)}
              className="text-base tracking-[0.1em] font-thin font-syncopate uppercase"
            >
              NINE commandments
            </motion.p>
          </div>

          <motion.div
            variants={fadeIn('right', 'tween', 0.1, 0.5)}
            className=" w-[360px] md:w-[510px] lg:w-[510px] xl:w-[630px] h-[350px] md:h-[550px] mt-8 grid grid-rows-3 justify-center justify-items-center items-center content-center relative "
          >
            <div className="h-full w-full">
              {/* ROW 1 */}
              <motion.div initial="hidden" whileInView="show">
                <div className="group">
                  <Image
                    src={group_01}
                    alt=""
                    className={`w-[100px] md:w-[150px] xl:w-[180px] absolute left-0 top-0 
                  transform 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton2Hovered ||
                        isButton3Hovered ||
                        isButton4Hovered ||
                        isButton5Hovered ||
                        isButton6Hovered ||
                        isButton7Hovered ||
                        isButton8Hovered ||
                        isButton9Hovered
                        ? 'opacity-0'
                        : 'opacity-100'
                      }
                  `}
                    onMouseEnter={handleButton1MouseEnter}
                    onMouseLeave={handleButton1MouseLeave}
                  />
                </div>
              </motion.div>
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_02}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[4rem] md:left-[5.5rem] xl:left-[7rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300  
                  ${isButton1Hovered ||
                      isButton3Hovered ||
                      isButton4Hovered ||
                      isButton5Hovered ||
                      isButton6Hovered ||
                      isButton7Hovered ||
                      isButton8Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton2MouseEnter}
                  onMouseLeave={handleButton2MouseLeave}
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_03}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[8rem] md:left-[11rem] xl:left-[14rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton4Hovered ||
                      isButton5Hovered ||
                      isButton6Hovered ||
                      isButton7Hovered ||
                      isButton8Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton3MouseEnter}
                  onMouseLeave={handleButton3MouseLeave}
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_04}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[12rem] md:left-[16.5rem] xl:left-[21rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton3Hovered ||
                      isButton5Hovered ||
                      isButton6Hovered ||
                      isButton7Hovered ||
                      isButton8Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton4MouseEnter}
                  onMouseLeave={handleButton4MouseLeave}
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_05}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute top-0 left-[16rem] md:left-[22rem] xl:left-[28rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton3Hovered ||
                      isButton4Hovered ||
                      isButton6Hovered ||
                      isButton7Hovered ||
                      isButton8Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton5MouseEnter}
                  onMouseLeave={handleButton5MouseLeave}
                />
              </motion.div>
              {/* ROW 2 */}
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_06}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[6rem] md:top-[9rem] xl:top-[11rem] 
                  left-[4rem] md:left-[5.5rem] xl:left-[6rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton3Hovered ||
                      isButton4Hovered ||
                      isButton5Hovered ||
                      isButton7Hovered ||
                      isButton8Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton6MouseEnter}
                  onMouseLeave={handleButton6MouseLeave}
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_07}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[6rem] md:top-[9rem] xl:top-[11rem] 
                  left-[8rem] md:left-[11rem] xl:left-[14rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton3Hovered ||
                      isButton4Hovered ||
                      isButton5Hovered ||
                      isButton6Hovered ||
                      isButton8Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton7MouseEnter}
                  onMouseLeave={handleButton7MouseLeave}
                />
              </motion.div>
              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_08}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[6rem] md:top-[9rem] xl:top-[11rem] 
                  left-[12rem] md:left-[16.5rem] xl:left-[22rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton3Hovered ||
                      isButton4Hovered ||
                      isButton5Hovered ||
                      isButton6Hovered ||
                      isButton7Hovered ||
                      isButton9Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton8MouseEnter}
                  onMouseLeave={handleButton8MouseLeave}
                />
              </motion.div>
              {/* ROW 3 */}

              <motion.div initial="hidden" whileInView="show">
                <Image
                  src={group_09}
                  alt=""
                  className={`w-[100px] md:w-[150px] xl:w-[180px] absolute 
                  top-[12rem] md:top-[18rem] xl:top-[22rem] 
                  left-[8rem] md:left-[11rem] xl:left-[14rem]
                  transform hover:top-0 hover:left-0 
                  hover:scale-[3.5] hover:origin-top-left duration-300
                  ${isButton1Hovered ||
                      isButton2Hovered ||
                      isButton3Hovered ||
                      isButton4Hovered ||
                      isButton5Hovered ||
                      isButton6Hovered ||
                      isButton7Hovered ||
                      isButton8Hovered
                      ? 'opacity-0'
                      : 'opacity-100'
                    }
                  `}
                  onMouseEnter={handleButton9MouseEnter}
                  onMouseLeave={handleButton9MouseLeave}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>{' '}
        {/* end of left side title img */}
      </motion.div>{' '}
      {/*  end of the container part */}
      <div className="w-screen h-[80%] md:h-[90%] bg-white -z-20 absolute inset-x-0 bottom-0 rounded-t-[4rem]"></div>
    </section>
  );
}

