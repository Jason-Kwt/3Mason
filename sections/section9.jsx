"use client";
import React, { useState } from "react";
import Image from "next/image";

import { motion } from 'framer-motion';
import { staggerContainer } from '../utils/motion';

import NFTCard from "@/components/NFTCard";
import { exploreNFTs } from "@/constants";

import section3_Origin from '../assets/section3/section3_Origin.png'
import section3_Origin2 from '../assets/section3/section3_Origin2.png'

function section9() {

    const [active, setActive] = useState('nft-2');

    return (
        <section
            id="section9"
            className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat"
        >
            {/* container part */}
            <div className="container mx-auto h-full w-full" >


                {/*       left side title img */}
                <div className="w-full h-full top-0 flex flex-col xl:flex-row xl:p-8 p-4 xl:justify-between xl:items-end justify-center items-center gap-2 lg:gap-8">

                    <div className="hidden xl:block  flex-initial lg:order-1">
                        <Image src={section3_Origin} alt="" unoptimized quality={100} className="w-[50%] lg:w-[50%] xl:w-[100%]" />
                    </div>
                    <div className="block xl:hidden  flex-initial lg:order-1 mt-[100px]">
                        <Image src={section3_Origin2} alt="" unoptimized quality={100} className="w-[325px] lg:w-[325px] xl:w-[649px]" />
                    </div>

                    <div className=" flex-1 order-2">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className="w-full min-w-[500px] xl:max-w-[1280px] mx-auto flex flex-col"
                        >
                            <div className="nt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-1">
                                {exploreNFTs.map((nft, index) => (
                                    <NFTCard
                                        key={nft.id}
                                        {...nft}
                                        index={index}
                                        active={active}
                                        handleClick={setActive}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>  {/* end of left side title img */}



                {/* <div className="w-full h-full flex flex-col xl:p-8 p-4 justify-end items-start">
                    <div className="text-left text-white border-2">
                        <h1 className="lg:text-9xl md:text-7xl text-4xl tracking-[0.1em] font-black">Section9</h1>

                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: false, amount: 0.25 }}
                            className="2xl:max-w-[1280px] w-full mx-auto flex flex-col border-2 border-red-600`"
                        >
                            <div className="nt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-1">
                                {exploreNFTs.map((nft, index) => (
                                    <NFTCard
                                        key={nft.id}
                                        {...nft}
                                        index={index}
                                        active={active}
                                        handleClick={setActive}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>  */}
            </div>
        </section>
    );
}

export default section9;
