'use client'
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "./background-gradient-animation";
import { GlobeDemo } from "./GridGlobe";
import { div } from "three/examples/jsm/nodes/Nodes.js";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { techStack } from "@/data";
//import Carousel from "./Carousel";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  id,
  img,
  titleClassName,
  imgClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id: number;
  img?: string;
  titleClassName?: string;
  imgClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);
  const leftStackList = ['ASP.Net', '.Net Core', 'Angular'];
  const rightStackList = ['SQL', 'Git', 'React'];

  const handleCopy = () => {
    navigator.clipboard.writeText("abishekmadhu27@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full relative`}>
        <div className="w-full h-full absolute">
          {/* here this mean if an image exists */}
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center absolute')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80 flex justify-center object-center item-center"}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover, object-center, w-full, h-full'}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex justify-center item-center font-bold text-white" />
          </BackgroundGradientAnimation>
        )}


        <div className={cn(
          titleClassName, 'relative group-hover/bento:translate-x-2 transition duration-200 md:h-full min-h-40 flex flex-col px-5 lg:p-10'
        )}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:test-base z-10">
            {description}
          </div>
          <div className={`font-sans font-bold text-lg lg:text-3xl max-w-96 z-50`}>
            {title}
          </div>

          {id === 2 && (
            <GlobeDemo />
          )}

          {id === 3 && (

            <div className="bottom-3 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
              <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 animate-infiniteScroll">
                {techStack.map((item, index) => (
                  <li key={index} className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                      <img src={item.img} alt={item.img} className="max-w-full max-h-full" />
                    </div>
                  </li>
                ))}
                {techStack.map((item, index) => (
                  <li key={index + techStack.length} className="flex-shrink-0">
                    <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center">
                      <img src={item.img} alt={item.img} className="max-w-full max-h-full" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={{
                  loop: copied,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: 'xMidyMid slice'
                  }
                }} />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
