import React from 'react'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer>
            <section id="sectionFooter" className='bg-black h-screen w-screen overflow-hidden snap-start snap-always relative '>
                <div className='h-full container mx-auto my-16'>

                    <div className="h-full text-white text-center flex flex-col justify-center items-center">
                        <div>
                            <h4
                                className="2xl:text-5xl lg:text-4xl md:text-3xl text-2xl tracking-[0.1em] font-black font-syncopate"
                            >
                                "IN 3MASON WE BUIDL"
                            </h4>
                        </div>
                        <div className='flex gap-32 justify-center items-center my-16'>
                            <Image src="/footerImage_01.png" alt="" width={200} height={200}></Image>
                            <Image src="/footerImage_02.png" alt="" width={300} height={300}></Image>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
