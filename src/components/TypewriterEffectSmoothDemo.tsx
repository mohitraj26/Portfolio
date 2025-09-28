"use client";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Hi, I'm",
      className:
        "text-blue-400 dark:text-purple-400 text-4xl sm:text-5xl md:text-6xl font-bold",
    },
    {
      text: "Mohit Raj",
      className:
        "bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-extrabold",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-start h-[40rem] mt-50 text-center px-6 relative overflow-hidden">
      {/* Background gradient animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-pink-900/20 blur-3xl animate-pulse"></div>

      {/* Animated intro */}
      <TypewriterEffectSmooth words={words} />

      {/* Headline */}
      <p className="relative bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl font-extrabold mt-6 drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] animate-fadeIn">
        Crafting Seamless Digital Experiences 🚀
      </p>

      {/* Subtitle */}
      <p className="relative text-neutral-600 dark:text-neutral-300 text-sm sm:text-lg md:text-xl max-w-2xl mt-5 leading-relaxed animate-fadeIn opacity-90">
        I’m a{" "}
        <span className="text-blue-400 dark:text-cyan-400 font-semibold">
          full-stack developer
        </span>{" "}
        who loves building{" "}
        <span className="text-purple-400 dark:text-purple-300 font-semibold">
          interactive web apps
        </span>{" "}
        using{" "}
        <span className="text-pink-400 dark:text-pink-300 font-semibold">
          React, Next.js, and Node.js
        </span>
        . Always blending{" "}
        <span className="italic text-yellow-400">creativity</span> with{" "}
        <span className="italic text-green-400">functionality</span>.
      </p>

      {/* Call-to-action buttons */}
      <div className="flex gap-4 mt-10">
        <button className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300">
          🚀 View My Work
        </button>
        <button className="px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/20 text-white font-semibold shadow-md border border-white/20 hover:bg-white/20 hover:scale-105 transition-transform duration-300">
          ✨ Contact Me
        </button>
      </div>
    </div>
  );
}
