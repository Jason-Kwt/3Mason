'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/motion';
import Partner from '@/components/Partner';

function Section8() {
  return (
    <div className="h-full w-screen snap-start snap-always scroll-m-0 overscroll-none overflow-hidden">
      <section
        id="section8"
        className="h-full w-screen relative bg-cover bg-center bg-no-repeat overflow-hidden bg-white"
      >
        {/* container part */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="container mx-auto h-full w-full py-24 px-8"
        >
          <div className="w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
            <div className="text-black   text-center">
              <h2 className="2xl:text-7xl xl:text-6xl  lg:text-5xl md:text-4xl text-2xl tracking-[0.1em] font-black font-syncopate">
                I I I M A S O N S
              </h2>
              <p className="mt-8 font-thin text-base font-raleway">
                We see ourselves as the masons for Web3.
                <br />
                <br />
                Web3 is the future we believe in.
                <br />
                Despite all disagreements, we are here standing up against
                doubts, guarding our future and building the utopia we believe
                in.
                <br />
                <br />
                The wolsymbolizeses our spirit.
                <br />
                <br />
                The wolf on the top of the hill is never as hungry as the wolf
                climbing the hill.
                <br />
                We 3MASONS are a pack of starving wolves in the Web3 world -
                ambitious, enduring and steadfast, looking to claim our
                territory in the digital future.
                <br />
                <br />
                {`We don’t play in the circus.`}
                <br />
                We are born to lead when others are in doubt, to create a path
                when hope is lost, and bring out the light when there is
                darkness.
                <br />
                <br />
                During this challenging time of Web3,
                <br />
                we keep our head low, maintain our composure and do what we
                should do.
                <br />
                <br />
                When the time comes... we will howl, take the plunge and fight
                for our land.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="sub_section8"
        className="h-[300vh] w-screen bg-white scroll-m-0 overscroll-none overflow-hidden"
      >
        <div className="container mx-auto py-24 px-8 ">
          <div className="flex flex-col justify-center items-center">
            <h2 className="mb-6 lg:text-3xl text-2xl tracking-[0.1em] font-black font-syncopate">
              IIIMASONS genesis
            </h2>
            {/* part 1 */}
            <div className="grid grid-cols-4 grid-rows-3 justify-items-stretch content-start w-full p-8 gap-16">
              <Partner
                name={`NICK TANG`}
                title={`COO`}
                intro={`An early blue-chip NFT collector, Nick is a
                    TradFi-turned-Web3 investor, financial advisor and analyst
                    with over 10 years of experience in corporate finance and
                    investment.`}
              />
              <Partner
                name={`Z. Lo`}
                title={`CMO`}
                intro={`Z. Lo, a founding team member of a top 10 GameFi project on BSC, has transitioned from an award-winning ad creative in Hong Kong and New York to a Web3 advocate and crypto hodler.`}
              />
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
              <Partner
                name={`Kelvin Lui`}
                title={`Content Director & UI/UX Writer`}
                intro={`A former content/branding lead for top-tier crypto exchanges and an award-winning creative and UI/UX writer, Kelvin has established himself as a leading voice in the Web3 space as an Instagrammer.`}
              />
              <Partner
                name={`TIN LI`}
                title={`CREATIVE CONTENT CREATOR`}
                intro={`Winner of the Best Screenplay at Hong Kong Screenwriters' Guild Awards and nominee for the Best Screenplay at the Hong Kong Film Awards, Tin is also a supporter of an NFT project Elite Film Club.`}
              />
            </div>
            {/* part 2 */}
            <div className="grid grid-cols-4 grid-rows-3 justify-items-stretch content-start w-full p-8 gap-16">
              <Partner
                name={`Nick Tang`}
                title={`Strategic Advisor`}
                intro={`Nicholas is a rockstar Web3 and blockchain dev who co-founded an NFT creator tools startup. With a product and startup background, he has been in the Web3 space since 2017.`}
              />
              <Partner
                name={`Jason Tin`}
                title={`Marketing Executive`}
                intro={`Jason is a Web3 enthusiast who believes the technology will drastically change the world. As an award-winning marketer, moderator and community manager, he contributes to various NFT projects.`}
              />
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
              <Partner
                name={`HinC`}
                title={`Art Director`}
                intro={`A design allrounder, HinC creates immersive experiences for Web3. He is a Sandbox game experience concept artist and spatial architect, NFT digital artist, graphic designer and illustrator.`}
              />
              <Partner
                name={`Gwyneth Wong`}
                title={`Graphic Designer`}
                intro={`Gwyneth is passionate digital native who welcomes the changes brought by Web3 and the metaverse. Her artistic knack in illustration, web, graphic and UI design creates captive experiences for audiences. `}
              />
            </div>
            {/* part 3 */}
            <div className="grid grid-cols-4 grid-rows-3 justify-items-stretch content-start w-full p-8 gap-16">
              <Partner
                name={`Una Wong`}
                title={`Graphic Designer`}
                intro={`Una embraces everything about the metaverse. She is a graphic and web designer at a leading metaverse agency, well known for producing stunning visuals with her creative flair.`}
              />
              <Partner
                name={`Man Chan`}
                title={`3D Rendering Artist`}
                intro={`With 14+ years of experience in 3D, CG, animation and gaming, Man is a true 3D generalist. He is dedicated to pushing the boundaries of what's possible in the Web3 world.`}
              />
              <div className="col-span-2"></div>
              <div className="col-span-2"></div>
              <Partner
                name={`Austin Cheung`}
                title={`Project Researcher & Product Strategist`}
                intro={`Austin is a seasoned growth marketer in the Web3 space. He was a key product designer in a top-tier crypto exchange and an NFT researcher with an asset management company.`}
              />
              <Partner
                name={`Youta`}
                title={`Community Specialist & Engineer`}
                intro={`Youta is a low-key NFT enthusiast. Not only did he found Kaiju Union HK and PrimalBeast, he also manages communities for NFT projects such as AlphaDogs, LabGrownBeasts and Ancestors.`}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Section8;
