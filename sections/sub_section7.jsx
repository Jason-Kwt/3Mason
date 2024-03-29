'use client'
import React from 'react';
import { useState, useRef } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';
import { staggerContainer, textVariant } from '../utils/motion';
import { useInView } from 'react-intersection-observer';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../app/genesis/styles.css";


export default function sub_section7() {

    const [swiper, setSwiper] = useState(null);

    const handleImageClick = (index) => {
        swiper.slideTo(index);
    };

    return (
        <section
            id="section7"
            className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat overflow-hidden bg-section7"
        >
            {/* container part */}
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className=" container mx-auto h-full w-full  py-24 px-8 ">
                {/*       left side title img  flex justify-center items-center*/}
                <motion.div
                    variants={textVariant(0.7)}
                    className=" w-full  flex  justify-center items-start py-8 ">

                    <Swiper
                        onSwiper={setSwiper}
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 30,
                            stretch: 0,
                            depth: 800,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        navigation={true}

                        loop={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className=""

                    >
                        <SwiperSlide >
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide >
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image width={680} height={400} alt='' src="/image1.png" priority />
                        </SwiperSlide>

                    </Swiper>
                </motion.div>

                <motion.div
                    variants={textVariant(0.7)} className='w-full my-8'>
                    <motion.div className="text-white text-center">
                        <p className="font-thin text-sm font-raleway tracking-[0.3em] uppercase leading-9">
                            A PASS TO BE A IIIMASON
                        </p>
                        <h2 className="2xl:text-4xl xl:text-4xl  lg:text-3xl md:text-2xl text-xl tracking-[0.1em] font-black font-syncopate">
                            MASONIC GRAND MASTER
                        </h2>
                        <span className='text-gray-400'>
                            <p className="font-bold text-sm font-raleway tracking-[0.3em] uppercase leading-9">
                                The Architect
                            </p>
                            <p className="font-bold text-sm font-raleway tracking-[0.3em] uppercase leading-9">
                                The Fellowcraft
                            </p>
                            <p className="font-bold text-sm font-raleway tracking-[0.3em] uppercase leading-9">
                                The Artisan
                            </p>
                            <p className="font-bold text-sm font-raleway tracking-[0.3em] uppercase leading-9">
                                The JourneymaN
                            </p>
                            <p className="font-bold text-sm font-raleway tracking-[0.3em] uppercase leading-9">
                                The Apprentice
                            </p>
                        </span>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
};

