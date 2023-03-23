'use client';
import React from 'react';
import Section9 from '@/sections/section9';
import Section10 from '@/sections/section10';

import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

function BibleIndex() {
  const [section9Ref, section9InView] = useInView({ threshold: 0.5 });
  const [section10Ref, section10InView] = useInView({ threshold: 0.5 });
  return (
    <>
      <Navbar
        textColor={section9InView ? 'white' : 'white'}
        bgColor={section9InView ? 'transparent' : 'transparent'}
      />
      <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section ref={section9Ref}>
          <Section9 />
        </section>
        <section ref={section10Ref}>
          <Section10 />
        </section>
      </main>
    </>
  );
}

export default BibleIndex;
