"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { TypewriterEffectSmoothDemo } from "./TypewriterEffectSmoothDemo";

export function SparklesPreview() {
  return (
    <div className="min-h-screen relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      {/* <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Hi, I'm 
      </h1>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Mohit Raj
      </h1>
      <h1>
        A Passionate Full-Stack Developer Crafting Seamless Digital Experiences
        with React, Next.js, and Node.js
      </h1> */}
      <TypewriterEffectSmoothDemo />
    </div>
  );
}
