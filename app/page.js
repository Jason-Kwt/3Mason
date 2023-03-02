import Section1 from "@/sections/section1";
import Section2 from "@/sections/section2";
import Section3 from "@/sections/section3";
import Section4 from "@/sections/section4";

export default function Home() {
  return (
    <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      <Section4 />
      <Section3 />
      <Section2 />
      <Section1 />
    </main>
  );
}
