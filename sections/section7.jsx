'use client';
import React, { useState } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

import NFTCard from '@/components/NFTCard';
import { exploreNFTs } from '@/constants';

import section3_Origin from '../assets/section3/section3_Origin.png';
import section3_Origin2 from '../assets/section3/section3_Origin2.png';

function section7() {
  const [active, setActive] = useState('nft-1');

  return (
    <section
      id="section7"
      className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat overflow-hidden"
    >
      {/* container part */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className=" container mx-auto h-full w-full py-24 px-8"
      >
        {/*       left side title img */}
        <div className=" w-full h-full top-0 flex flex-col xl:flex-row xl:justify-between xl:items-end justify-center items-center gap-2 lg:gap-8">
          <div className=" flex-1">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.25 }}
              className="w-full min-w-[350px] md:min-w-[500px] lg:max-w-[1200px]  xl:max-w-[1280px] mx-auto flex flex-col"
            >
              <div className="nt-[50px] flex lg:flex-row flex-col min-h-[60vh] gap-1">
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
        </div>
      </motion.div>
    </section>
  );
}

export default section7;
