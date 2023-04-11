'use client';
import Section1 from '@/sections/section1';
import Section2 from '@/sections/section2';
import Section3 from '@/sections/section3';
import Section4 from '@/sections/section4';
import Section5 from '@/sections/section5';
import Section6 from '@/sections/section6';

import SubSection7 from '@/sections/sub_section7';

import SubSection3 from '@/sections/sub_section3';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useInView } from 'react-intersection-observer';

export default function HomeIndex() {
  const [section1Ref, section1InView] = useInView({ threshold: 0.5 });
  const [section2Ref, section2InView] = useInView({ threshold: 0.5 });
  const [section3Ref, section3InView] = useInView({ threshold: 0.5 });
  const [section4Ref, section4InView] = useInView({ threshold: 0.5 });
  const [section5Ref, section5InView] = useInView({ threshold: 0.5 });
  const [section6Ref, section6InView] = useInView({ threshold: 0.5 });
  const [section7Ref, section7InView] = useInView({ threshold: 0.5 });

  return (
    <>
      <Navbar
        textColor={section2InView ? 'black' : 'white'}
        bgColor={section2InView ? 'transparent' : 'transparent'}
      />
      <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <section ref={section1Ref}>
          <Section1 />
        </section>
        <section ref={section2Ref} className={section2InView ? 'bg-white' : 'bg-black'}>
          <Section2 />
        </section>
        <section ref={section3Ref}>
          <SubSection3 />
        </section>
        <section ref={section4Ref}>
          <Section4 />
        </section>
        <section ref={section5Ref}>
          <Section5 />
        </section>
        <section ref={section6Ref}>
          <Section6 />
        </section>
        <section ref={section7Ref}>
          <SubSection7 />
        </section>
        <Footer />
      </main>
    </>
  );
}
