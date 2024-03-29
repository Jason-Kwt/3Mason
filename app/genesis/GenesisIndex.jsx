'use client';
import React from 'react';
import Section7 from '@/sections/section7';
import SubSection7 from '@/sections/sub_section7';
import Section8 from '@/sections/section8';
import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

export default function GenesisIndex() {
  const [section7Ref, section7InView] = useInView({ threshold: 0.5 });
  const [section8Ref, section8InView] = useInView({ threshold: 0.5 });

  return (
    <div>
      <Navbar
        textColor={
          section7InView ? 'white' : section8InView ? 'black' : 'black'
        }
        bgColor={
          section7InView ? 'transparent' : section8InView ? 'white' : 'white'
        }
      />
      <main className="overflow-hidden h-screen w-screen  overflow-y-scroll snap-y snap-mandatory scroll-smooth">

        <section ref={section8Ref}>
          <Section8 />
        </section>
      </main>
    </div>
  );
}

