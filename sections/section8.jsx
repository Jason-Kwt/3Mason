'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';

function section8() {
  return (
    <section
      id="section8"
      className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat overflow-hidden bg-white"
    >
      {/* container part */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto h-full w-full py-24 px-8 border-2  "
      >
        <div className="w-full h-screen top-0 flex flex-col p-4 justify-center items-center border-2">
          <div className="text-black   text-center">
            <h1 className="2xl:text-7xl xl:text-6xl  lg:text-5xl md:text-4xl text-2xl tracking-[0.1em] font-black font-syncopate">
              I I I M A S O N S
            </h1>
            <p className="mt-8 font-thin text-base font-raleway">
              We see ourselves as the masons for Web3.
              <br />
              <br />
              Web3 is the future we believe in.
              <br />
              Despite all disagreements, we are here standing up against doubts,
              guarding our future and building the utopia we believe in.
              <br />
              <br />
              The wolsymbolizeses our spirit.
              <br />
              <br />
              The wolf on the top of the hill is never as hungry as the wolf
              climbing the hill.
              <br />
              We 3MASONS are a pack of starving wolves in the Web3 world -
              ambitious, enduring and steadfast, looking to claim our territory
              in the digital future.
              <br />
              <br />
              {`We don’t play in the circus.`}
              <br />
              We are born to lead when others are in doubt, to create a path
              when hope is lost, and bring out the light when there is darkness.
              <br />
              <br />
              During this challenging time of Web3,
              <br />
              we keep our head low, maintain our composure and do what we should
              do.
              <br />
              <br />
              When the time comes... we will howl, take the plunge and fight for
              our land.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default section8;
