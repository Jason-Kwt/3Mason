"use client";
import React from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import bg_section4 from '../assets/section4/bg_section4.png'
import section3_group from '../assets/section4/section3_group.png'
import group_01 from '../assets/section4/group_01.png'
import group_black from '../assets/section4/group_black.png'
import section3_title from '../assets/section4/section3_title.png'
import section3_text from '../assets/section4/section3_text.png'

function section4() {
    return (
        <section
            id="section4"
            className="h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bg_section4.src})` }}
        >
            {/* container part */}
            <div className="container mx-auto h-full w-full" >

                {/*       left side title img */}
                <div className="w-full h-full top-0 flex flex-col xl:flex-row xl:p-8 p-4 xl:justify-center xl:items-center justify-center items-center gap-2">

                    <div className="w-[500px] md:w-[640px] xl:w-[900px] h-[450px] md:h-[550px] order-first mt-16 grid grid-rows-3 justify-center justify-items-center items-center content-center relative">

                        <div className="h-full w-full">
                            {/* ROW 1 */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute left-0 top-0" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_black} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[5.5rem] md:left-[7rem]" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[11rem] md:left-[14rem]" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_black} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[16.5rem] md:left-[21rem]" />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[22rem] md:left-[28rem]
                            " />
                            </motion.div>
                            {/* ROW 2 */}
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[9rem] md:top-[11rem] left-[5.5rem] md:left-[6rem]
                            " />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_black} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[9rem] md:top-[11rem] left-[11rem] md:left-[14rem]
                            " />
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[9rem] md:top-[11rem] left-[16.5rem] md:left-[22rem]
                            " />
                            </motion.div>
                            {/* ROW 3 */}

                            <motion.div
                                initial="hidden"
                                whileInView="show"
                                whileHover={{ opacity: 0 }}
                            >
                                <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[18rem] md:top-[22rem] left-[11rem] md:left-[14rem]
                             " />
                            </motion.div>



                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="">
                            <Image src={section3_title} alt="" unoptimized quality={100} className="object-cover w-[450px] lg:w-[550px] xl:w-[970px]" />
                        </div>
                        <div className="">
                            <Image src={section3_text} alt="" unoptimized quality={100} className="object-cover w-[325px] lg:w-[325px] xl:w-[970px]" />
                        </div>
                    </div>

                </div>  {/* end of left side title img */}


            </div> {/*  end of the container part */}

        </section>
    );
}

export default section4;
