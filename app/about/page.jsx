import React from "react";
import Section5 from "@/sections/section5";

export const metadata = {
  title: "About page",
  description: "this is about page",
};

function aboutPage() {
  return (
    <main className="overflow-hidden h-screen w-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      <Section5 />

    </main>
  );
}

export default aboutPage;
