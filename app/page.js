'use client';
import Section1 from '@/sections/section1';
import Section2 from '@/sections/section2';
import Section3 from '@/sections/section3';
import Section4 from '@/sections/section4';

import Navbar from '@/components/Navbar';
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 });
  return (
    <>
      <Navbar
        textColor={section2InView ? 'black' : 'white'}
        bgColor={section2InView ? 'white' : 'black'}
      />
      <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section ref={section1Ref}>
          <Section1 />
        </section>
        <section ref={section2Ref}>
          <Section2 />
        </section>
        <section ref={section3Ref}>
          <Section3 />
        </section>
        <section ref={section4Ref}>
          <Section4 />
        </section>
      </main>
    </>
  );
}
