import React from 'react'
import Section9 from "@/sections/section9";
import Section10 from "@/sections/section10";

export const metadata = {
    title: 'biblePage',
    description: 'this is biblePage',
}

function biblePage() {
    return (
        <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
            <Section9 />
            <Section10 />
        </main>
    );
}

export default biblePage