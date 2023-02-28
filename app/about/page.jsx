import React from "react";
import Section1 from "@/sections/section1";
import Section2 from "@/sections/section2";

export const metadata = {
  title: "About page",
  description: "this is about page",
};

function aboutPage() {
  return (
    <main className="overflow-hidden h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"></main>
  );
}

export default aboutPage;
