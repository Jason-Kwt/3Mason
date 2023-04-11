'use client';
import React from 'react';

export default function section9() {
  return (
    <section
      id="section9"
      className=" h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat overflow-hidden bg-black  "
    >
      <div className="container mx-auto w-full h-screen  flex flex-col p-4 justify-end items-center py-24 px-8">
        <div className="text-white text-center">
          <p className="font-thin text-sm font-raleway tracking-[0.3em] uppercase leading-9">Collaborate with NEW CIGAR BRAND</p>
          <h2 className="2xl:text-5xl xl:text-4xl  lg:text-3xl md:text-2xl text-xl tracking-[0.1em] font-black font-syncopate">
            CIGAR BRAND
          </h2>
        </div>

        <div className='group'>
          <div className='bg-white rounded-2xl w-[1400px] h-[560px] mt-8 flex justify-center items-center  group-hover:bg-gray-300'>
            <p className='hidden group-hover:flex text-black text-center font-black text-xl font-raleway tracking-[0.3em] uppercase leading-9'>
              about cigarrrrr
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

