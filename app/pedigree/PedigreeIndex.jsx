'use client';
import React from 'react';
import Section7 from '@/sections/Section7';
import SubSection7 from '@/sections/SubSection7';
import Section8 from '@/sections/Section8';
import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

function PedigreeIndex() {
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
        <section ref={section7Ref}>
          <SubSection7 />
        </section>
        <section ref={section8Ref}>
          <Section8 />
        </section>
      </main>
    </div>
  );
}

export default PedigreeIndex;
