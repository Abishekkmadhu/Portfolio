import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect';
import { HiChevronRight } from "react-icons/hi";


const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white'/>
            <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple'/>
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue'/>
        </div>
        <div className="h-screen w-full bg-grid-large dark:bg-black-100 bg-white  dark:bg-grid-white/[0.04] 
        bg-grid-black/[0.02] flex items-center justify-center absolute ">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
           bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        </div>
        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-20xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
              Dynamic Web magic using next.js.
            </h2>
            <TextGenerateEffect 
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
            words = "Crafting seamless digital experiences one line of code at a time."/>

            <p className="text-center tracking-wider mb-4 text-blue-100 text-sm md:text-lg 
            lg:text-2xl">
              Hi, I{"'"}m Abishek Madhu, a Web Developer based in India.
            </p>

            <a href="#about">
            <button className="my-3 inline-flex h-12 animate-shimmer items-center justify-center 
            rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
            bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 
            focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Explore More<HiChevronRight />
            </button>
            </a>
            
          </div>
        </div>
    </div>
  );
}

export default Hero