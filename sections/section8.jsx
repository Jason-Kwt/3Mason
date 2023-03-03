"use client";
import React from "react";
import Typewriter from 'typewriter-effect';

function section8() {
    return (
        <section
            id="section8"
            className="h-screen w-screen snap-start snap-always relative bg-cover bg-center bg-no-repeat"
        >
            <div className="absolute w-full h-screen top-0 flex flex-col p-4 justify-center items-center">
                <div className="text-white text-center">
                    <h1 className="lg:text-9xl md:text-7xl text-4xl tracking-[0.1em] font-black">Section8</h1>
                    <div className="mt-8 lg:mt-16">
                        <Typewriter
                            options={{
                                strings: [
                                    "MASONS IN WEB3",
                                    "IN TRUST WE BUILD"
                                ],
                                changeDelay: 2,
                                ChangeDeleteSpeed: 20,
                                autoStart: true,
                                loop: true,
                                wrapperClassName: "text-2xl lg:text-4xl  tracking-[0.2em] font-semibold",
                                cursorClassName: "text-2xl lg:text-4xl  tracking-[0.2em]",
                            }}
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default section8;
