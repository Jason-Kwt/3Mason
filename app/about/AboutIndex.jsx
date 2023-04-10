'use client';
import React from 'react';
import Section5 from '@/sections/section5';
import Section6 from '@/sections/section6';

import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

function AboutIndex() {
  const [section5Ref, section5InView] = useInView({ threshold: 0.5 });
  const [section6Ref, section6InView] = useInView({ threshold: 0.5 });
  return (
    <>
      <Navbar
        textColor={section6InView ? 'white' : 'white'}
        bgColor={section6InView ? 'transparent' : 'transparent'}
      />
      <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section ref={section5Ref}>
          <Section5 />
        </section>
        <section ref={section6Ref}>
          <Section6 />
        </section>
      </main>
    </>
  );
}

export default AboutIndex;
