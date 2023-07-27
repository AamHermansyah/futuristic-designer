'use client';

import About from "@/components/pages/home/About";
import Contact from "@/components/pages/home/Contact";
import Hero from "@/components/pages/home/Hero";
import Services from "@/components/pages/home/Services";
import Works from "@/components/pages/home/Works";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Works />
      <div className="container flex items-center justify-center w-full min-h-screen py-20">
        <h1 className="text-4xl sm:text-5xl md:text-7xl uppercase flex flex-col lg:max-h-[150px] gap-2">
          <span className="w-max bg-colorfull-red px-4 sm:px-10">Are</span>
          <span className="self-center bg-colorfull-yellow w-max px-4 sm:px-10">You</span>
          <span className="w-max px-4 sm:px-10 bg-colorfull-blue">Ready?</span>
        </h1>
      </div>
      <Contact />
    </>
  )
}
