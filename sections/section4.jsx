"use client";
import React from "react";
import Image from "next/image";

import bg_section4 from '../assets/section4/bg_section4.png'
import section3_group from '../assets/section4/section3_group.png'
import group_01 from '../assets/section4/group_01.png'
import group_black from '../assets/section4/group_black.png'
import section3_title from '../assets/section4/section3_title.png'
import section3_text from '../assets/section4/section3_text.png'

function section4() {
    return (
        <section
            id="section3"
            className="border-2 border-blue-500 h-screen w-screen snap-start snap-always bg-cover bg-center bg-no-repeat relative"
            style={{ backgroundImage: `url(${bg_section4.src})` }}
        >
            {/* container part */}
            <div className="border-2 border-red-700 container mx-auto h-full w-full" >

                {/*       left side title img */}
                <div className="w-full h-full top-0 flex flex-col xl:flex-row xl:p-8 p-4 xl:justify-center xl:items-center justify-center items-center gap-2">

                    <div className="w-[500px] md:w-[640px] xl:w-[900px] h-[450px] md:h-[550px] border-2 order-first mt-16 grid grid-rows-3 justify-center justify-items-center items-center content-center relative">
                        {/* <Image src={section3_group} alt="" unoptimized quality={100} className="w-[550px] lg:w-[600px] xl:w-[900px]" /> */}
                        <div className="h-full w-full">
                            {/* ROW 1 */}
                            <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute left-0 top-0" />
                            <Image src={group_black} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[5.5rem] md:left-[7rem]" />
                            <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[11rem] md:left-[14rem]" />
                            <Image src={group_black} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[16.5rem] md:left-[21rem]" />
                            <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-0 left-[22rem] md:left-[28rem]
                            " />
                            {/* ROW 2 */}
                            <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[9rem] md:top-[11rem] left-[5.5rem] md:left-[6rem]
                            " />
                            <Image src={group_black} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[9rem] md:top-[11rem] left-[11rem] md:left-[14rem]
                            " />
                            <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[9rem] md:top-[11rem] left-[16.5rem] md:left-[22rem]
                            " />
                            {/* ROW 3 */}
                            <Image src={group_01} alt="" unoptimized quality={100} className="w-[150px] md:w-[180px] absolute top-[18rem] md:top-[22rem] left-[11rem] md:left-[14rem]
                            " />
                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="border-2 ">
                            <Image src={section3_title} alt="" unoptimized quality={100} className="object-cover w-[450px] lg:w-[550px] xl:w-[970px]" />
                        </div>
                        <div className="border-2 ">
                            <Image src={section3_text} alt="" unoptimized quality={100} className="object-cover w-[325px] lg:w-[325px] xl:w-[970px]" />
                        </div>
                    </div>

                </div>  {/* end of left side title img */}


            </div> {/*  end of the container part */}

        </section>
    );
}

export default section4;
