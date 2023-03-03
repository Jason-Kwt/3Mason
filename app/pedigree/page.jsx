import React from 'react'
import Section7 from "@/sections/section7";
import Section8 from "@/sections/section8";

export const metadata = {
    title: 'pedigreePage',
    description: 'this is pedigreePage',
}

function pedigreePage() {
    return (
        <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Section7 />
            <Section8 />
        </main>
    )
}

export default pedigreePage