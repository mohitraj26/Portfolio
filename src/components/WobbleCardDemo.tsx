// "use client";

// import React from "react";
// import { WobbleCard } from "./ui/wobble-card";
// import { GraduationCap, Trophy, Code, Heart, Wrench } from "lucide-react";

// // The tag component now uses slightly brighter text for better readability.
// const SkillTag = ({ children }: { children: React.ReactNode }) => (
//   <div className="bg-white/10 border border-white/20 text-neutral-200 text-sm font-medium px-3 py-1.5 rounded-md">
//     {children}
//   </div>
// );

// export function WobbleCardDemo() {
//   return (
//     <>
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
//         {/* Education Card - Deep Purple */}
//         <WobbleCard
//           containerClassName="col-span-1 md:col-span-2 h-full min-h-[350px] bg-indigo-950 border-indigo-800"
//         >
//           <div className="w-full h-full">
//             <div className="flex items-center gap-2 mb-4">
//               <GraduationCap className="text-indigo-400" />
//               <p className="text-lg font-bold text-white">Education</p>
//             </div>
//             <div className="flex flex-col md:flex-row gap-8">
//               {/* Academic Background Section */}
//               <div>
//                 <h3 className="text-base font-semibold text-neutral-200 mb-3">
//                   Academic Background
//                 </h3>
//                 <div className="space-y-4">
//                   <div>
//                     <p className="text-indigo-300 font-semibold">• Bachelor of Technology</p>
//                     <p className="text-neutral-400 text-sm pl-4">
//                       Motilal Nehru National Institute of Technology, Allahabad
//                     </p>
//                     <p className="text-neutral-500 text-xs pl-4">2023 - 2027</p>
//                   </div>
//                   <div>
//                     <p className="text-indigo-300 font-semibold">• Higher Secondary</p>
//                     <p className="text-neutral-400 text-sm pl-4">PCM</p>
//                     <p className="text-neutral-500 text-xs pl-4">2020 - 2022</p>
//                   </div>
//                 </div>
//               </div>
//               {/* Core Subjects Section */}
//               <div>
//                 <h3 className="text-base font-semibold text-neutral-200 mb-3">
//                   Core Subjects
//                 </h3>
//                 <ul className="space-y-1.5 text-neutral-400 text-sm list-inside">
//                   <li>Data Structures & Algorithms</li>
//                   <li>Database Management</li>
//                   <li>Operating Systems</li>
//                   <li>Computer Networks</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </WobbleCard>

//         {/* Development Skills Card - Cool Teal */}
//         <WobbleCard
//           containerClassName="col-span-1 md:col-span-2 h-full min-h-[350px] bg-teal-950 border-teal-800"
//         >
//           <div className="w-full h-full">
//             <div className="flex items-center gap-2 mb-4">
//               <Code className="text-teal-400" />
//               <p className="text-lg font-bold text-white">Development Skills</p>
//             </div>
//             <div className="space-y-6">
//               {/* Frontend Section */}
//               <div>
//                 <h3 className="text-base font-semibold text-neutral-200 mb-3">
//                   Frontend
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <SkillTag>React</SkillTag>
//                   <SkillTag>Next.js</SkillTag>
//                   <SkillTag>Tailwind</SkillTag>
//                   <SkillTag>Shadcn UI</SkillTag>
//                   <SkillTag>Aceternity UI</SkillTag>
//                 </div>
//               </div>
//               {/* Backend Section */}
//               <div>
//                 <h3 className="text-base font-semibold text-neutral-200 mb-3">
//                   Backend
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <SkillTag>Node.js</SkillTag>
//                   <SkillTag>Express</SkillTag>
//                   <SkillTag>MongoDB</SkillTag>
//                   <SkillTag>JavaScript</SkillTag>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </WobbleCard>

//         {/* Tools & Technologies Card - Rich Blue */}
//         <WobbleCard
//           containerClassName="col-span-1 md:col-span-2 h-full min-h-[350px] bg-blue-950 border-blue-800"
//         >
//           <div className="w-full h-full">
//             <div className="flex items-center gap-2 mb-4">
//               <Wrench className="text-blue-400" />
//               <p className="text-lg font-bold text-white">Tools & Technologies</p>
//             </div>
//             <div className="space-y-6">
//               {/* Development Tools Section */}
//               <div>
//                 <h3 className="text-base font-semibold text-neutral-200 mb-3">
//                   Development Tools
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <SkillTag>Git</SkillTag>
//                   <SkillTag>GitHub</SkillTag>
//                   <SkillTag>VS Code</SkillTag>
//                   <SkillTag>Postman</SkillTag>
//                 </div>
//               </div>
//               {/* Cloud & Design Section */}
//               <div>
//                 <h3 className="text-base font-semibold text-neutral-200 mb-3">
//                   Cloud
//                 </h3>
//                 <div className="flex flex-wrap gap-2">
//                   <SkillTag>AWS</SkillTag>
//                   <SkillTag>Docker</SkillTag>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </WobbleCard>

//         {/* Interests Card - Vibrant Fuchsia */}
//         <WobbleCard containerClassName="col-span-1 min-h-[350px] md:min-h-[150px] bg-fuchsia-950 border-fuchsia-800">
//           <div className="w-full h-full">
//             <div className="flex items-center gap-2 mb-4">
//               <Heart className="text-fuchsia-400" />
//               <p className="text-lg font-bold text-white">Interests</p>
//             </div>
//             <div className="flex flex-wrap gap-2">
//               <SkillTag>Web Development</SkillTag>
//               <SkillTag>Problem Solving</SkillTag>
//             </div>
//           </div>
//         </WobbleCard>

//         {/* Achievements Card - Golden Amber */}
//         <WobbleCard containerClassName="col-span-1 min-h-[350px] md:min-h-[150px] bg-amber-950 border-amber-800">
//           <div className="w-full h-full">
//             <div className="flex items-center gap-2 mb-4">
//               <Trophy className="text-amber-400" />
//               <p className="text-lg font-bold text-white">Achievements</p>
//             </div>
//             <ul className="space-y-1.5 text-neutral-300 text-sm list-disc list-inside">
//               <li>LeetCode Rank 1406 in Weekly contest 467</li>
//               <li>National Semi-Finalist in Flipkart Grid 7.0</li>
//             </ul>
//           </div>
//         </WobbleCard>
//       </div>
//     </>
//   );
// }




"use client";

import React from "react";
import { WobbleCard } from "./ui/wobble-card";
import { GraduationCap, Trophy, Code, Heart, Wrench } from "lucide-react";

// The tag component's styling is versatile and works well with the new palette.
const SkillTag = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-white/10 border border-white/20 text-neutral-200 text-sm font-medium px-3 py-1.5 rounded-md">
    {children}
  </div>
);

export function WobbleCardDemo() {
  return (
    <>
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Education and Skills
        </h1>
      </div>

      {/* 1. Added px-4 to create left/right margins on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto w-full px-4">
        {/* Education Card */}
        <WobbleCard
          containerClassName="col-span-1 md:col-span-2 h-full bg-sky-950 border-sky-800"
        >
          {/* 2. Changed p-4 to p-3 to make the card smaller */}
          <div className="w-full h-full p-3">
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-sky-400" />
              <p className="text-lg font-bold text-white">Education</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-neutral-200 mb-3">
                  Academic Background
                </h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sky-300 font-semibold">• Bachelor of Technology</p>
                    <p className="text-neutral-400 text-sm pl-4">
                      Motilal Nehru National Institute of Technology, Allahabad
                    </p>
                    <p className="text-neutral-500 text-xs pl-4">2023 - 2027</p>
                  </div>
                  <div>
                    <p className="text-sky-300 font-semibold">• Higher Secondary</p>
                    <p className="text-neutral-400 text-sm pl-4">PCM</p>
                    <p className="text-neutral-500 text-xs pl-4">2020 - 2022</p>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-neutral-200 mb-3">
                  Core Subjects
                </h3>
                <ul className="space-y-1.5 text-neutral-400 text-sm list-inside">
                  <li>Data Structures & Algorithms</li>
                  <li>Database Management</li>
                  <li>Operating Systems</li>
                  <li>Computer Networks</li>
                </ul>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Development Skills Card */}
        <WobbleCard
          containerClassName="col-span-1 md:col-span-2 h-full bg-cyan-950 border-cyan-800"
        >
          <div className="w-full h-full p-3">
            <div className="flex items-center gap-3 mb-4">
              <Code className="text-cyan-400" />
              <p className="text-lg font-bold text-white">Development Skills</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-neutral-200 mb-3">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillTag>React</SkillTag>
                  <SkillTag>Next.js</SkillTag>
                  <SkillTag>Tailwind</SkillTag>
                  <SkillTag>Shadcn UI</SkillTag>
                  <SkillTag>Aceternity UI</SkillTag>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-200 mb-3">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillTag>Node.js</SkillTag>
                  <SkillTag>Express</SkillTag>
                  <SkillTag>MongoDB</SkillTag>
                  <SkillTag>JavaScript</SkillTag>
                </div>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Tools & Technologies Card */}
        <WobbleCard
          containerClassName="col-span-1 md:col-span-2 h-full bg-slate-900 border-slate-800"
        >
          <div className="w-full h-full p-3">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-slate-400" />
              <p className="text-lg font-bold text-white">Tools & Technologies</p>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-base font-semibold text-neutral-200 mb-3">
                  Development Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillTag>Git</SkillTag>
                  <SkillTag>GitHub</SkillTag>
                  <SkillTag>VS Code</SkillTag>
                  <SkillTag>Postman</SkillTag>
                </div>
              </div>
              <div>
                <h3 className="text-base font-semibold text-neutral-200 mb-3">
                  Cloud
                </h3>
                <div className="flex flex-wrap gap-2">
                  <SkillTag>AWS</SkillTag>
                  <SkillTag>Docker</SkillTag>
                </div>
              </div>
            </div>
          </div>
        </WobbleCard>

        {/* Interests Card */}
        <WobbleCard containerClassName="col-span-1 bg-violet-950 border-violet-800">
          <div className="w-full h-full p-3">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="text-violet-400" />
              <p className="text-lg font-bold text-white">Interests</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <SkillTag>Web Development</SkillTag>
              <SkillTag>Problem Solving</SkillTag>
            </div>
          </div>
        </WobbleCard>

        {/* Achievements Card */}
        <WobbleCard containerClassName="col-span-1 bg-orange-950 border-orange-800">
          <div className="w-full h-full p-3">
            <div className="flex items-center gap-3 mb-4">
              <Trophy className="text-orange-400" />
              <p className="text-lg font-bold text-white">Achievements</p>
            </div>
            <ul className="space-y-1.5 text-neutral-300 text-sm list-disc list-inside">
              <li>LeetCode Rank 1406 in Weekly contest 467</li>
              <li>National Semi-Finalist in Flipkart Grid 7.0</li>
            </ul>
          </div>
        </WobbleCard>
      </div>
    </>
  );
}