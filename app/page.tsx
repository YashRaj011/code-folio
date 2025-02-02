"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import waveHand from "@/Assets/Images/waving-hand-skin-2-svgrepo-com.svg"

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Flip every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-rows-[1fr] min-h-screen min-w-screen p-4 bg-[#1a1a1a]">
      <div className="flex flex-col h-full gap-2 w-full ">
        <div
          id="Navbar"
          className="bg-red-300 w-[98%] sm:w-[95%] mx-auto mt-8 h-20 rounded-xl"
        ></div>
        <div id="content" className=" w-[95%] mx-auto h-full pt-8 pb-8">
          <div
            id="inner-content"
            className="flex flex-row flex-wrap w-full h-full pt-5 pb-5"
          >
            <div
              id="text-content"
              className="flex flex-col flex-wrap md:w-[60%] w-full pt-2 pb-2"
            >
              {/* Last stopped here -> Was looking for fonts */}
              <p
                id="text-line-1"
                className="flex flex-row text-3xl sm:text-4xl font-extralight"
              >
                <span>Hello World!</span>
                <span>
                  <Image
                    src={waveHand}
                    alt="wave hand svg"
                    className="ml-1 -mt-1"
                    width={40}
                    height={40}
                  />
                </span>
              </p>
              <p
                id="text-line-2"
                className="text-3xl sm:text-5xl md:text-6xl w-full mt-6 font-light"
              >
                I'm Yash Raj Varma
              </p>
              <div
                id="flippable-text-container"
                className={`flip-container text-3xl w-full sm:text-5xl md:text-6xl mt-5 flex flex-wrap flex-row ${
                  isFlipped ? "flipped" : ""
                }`}
              >
                <span>a</span>
                <div className="flipper ml-4">
                  <div
                    id="text-1"
                    className="front bg-[#c392ec] text-[#1a1a1a] whitespace-nowrap p-2 rounded-lg -mt-2 font-medium"
                  >
                    <span>Software Developer</span>
                  </div>
                  <div
                    id="text-2"
                    className="back bg-[#85d5c8] text-[#1a1a1a] whitespace-nowrap p-2 -mt-2 rounded-lg font-medium"
                  >
                    Tech Freelancer
                  </div>
                </div>
              </div>
              <p id="text-line-4">This is text line 4</p>
            </div>
            <div
              id="image-content"
              className="hidden md:block md:w-[40%] md:bg-amber-400"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
