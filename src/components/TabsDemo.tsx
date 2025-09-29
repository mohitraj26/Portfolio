"use client";

import { Tabs } from "./ui/tabs";
import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function TabsDemo() {
  const projects = [
    {
      title: "INT_PREP",
      value: "int_prep",
      description:
        "INT-PREP is an online platform that helps people practice coding interview questions. It lets users write and run code instantly (like on LeetCode), track their progress with graphs, and solve challenges in a clean, interactive editor. Admins can easily add new problems, and the app works smoothly with features like login security and dark mode.",
      imageUrl: "/INT-PREP.png",
      techStack: ["React", "Node.js", "PostgresSQL", "Docker", "Judge0"],
      githubLink: "https://github.com/mohitraj26/INT_PREP",
      liveLink: "https://int-prep-frontend.onrender.com/",
    },
    {
      title: "CryptoAdda",
      value: "cryptoadda",
      description:
        "CryptoAdda is a live cryptocurrency dashboard that shows real-time prices and trends for over 250+ coins. It lets users compare two coins side by side, track historical data with easy-to-read charts, and save their preferences for quick access. The app is fast, mobile-friendly, and works smoothly across devices.",
      imageUrl: "/CryptoAdda.png",
      techStack: ["React", "REST APIs", "Rechart", "Shadcn UI", "TypeScript"],
      githubLink: "https://github.com/mohitraj26/CryptoAdda",
      liveLink: "https://crypto-adda-2610.vercel.app/",
    },
    {
      title: "AI Image Generator",
      value: "ai_image_generator",
      description:
        "Leveraging generative AI models, this tool allows users to create unique, high-quality images from text prompts with various styles and customization options.",
      imageUrl: "/AI-imageGenerator.png",
      techStack: ["React", "Typescript", "Hugging Face"],
      githubLink: "https://github.com/mohitraj26/AI-Image-Generator",
      liveLink: "https://ai-image-generator-lemon-theta.vercel.app/",
    },
    {
      title: "Kanban",
      value: "kanban",
      description:
        "A powerful and intuitive task management tool based on the Kanban methodology. Features drag-and-drop cards, customizable boards, and real-time updates to enhance productivity and organization.",
      imageUrl: "/Kanban.png",
      techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      githubLink: "https://github.com/mohitraj26/Kanban-Board",
      liveLink: "https://kanban-board-chi-green.vercel.app/",
    },
    {
      title: "Mood Tracker",
      value: "mood_tracker",
      description:
        "A personal wellness application designed to help users log their daily mood, identify patterns, and gain insights into their emotional well-being over time.",
      imageUrl: "/Daily Mood Tracker.png",
      techStack: ["HTML", "CSS", "JavaScript", "LocalStorage"],
      githubLink: "https://github.com/mohitraj26/Daily-Mood-Tracker",
      liveLink: "https://daily-mood-tracker-pi.vercel.app/",
    },
  ];

  const tabs = projects.map((project) => ({
    title: project.title,
    value: project.value,
    content: (
      <div className="w-full overflow-y-auto relative min-h-[30rem] rounded-2xl p-4 md:p-10 text-white bg-gradient-to-br from-gray-900 to-slate-900 border border-slate-800">
        <div className="flex flex-col-reverse md:flex-row h-full items-center justify-center gap-8">
          
          {/* Text Content Section */}
          <div className="flex flex-col justify-center text-center md:text-left w-full md:w-1/2">
            <h3 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
              {project.title}
            </h3>
            <p className="text-sm md:text-base font-normal text-slate-400 max-w-md mx-auto md:mx-0">
              {project.description}
            </p>
            
            {/* Tech Stack Section */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 mt-4">
                {project.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold text-sky-200 bg-sky-900/50 py-1 px-3 rounded-full">
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links Section */}
            <div className="flex items-center justify-center md:justify-start gap-5 mt-15">
              <Link href={project.githubLink} target="_blank" title="View on GitHub">
                <Github className="h-6 w-6 text-slate-400 hover:text-white hover:scale-110 transition-all duration-200" />
              </Link>
              <Link href={project.liveLink} target="_blank" title="View Live Site">
                <ExternalLink className="h-6 w-6 text-slate-400 hover:text-white hover:scale-110 transition-all duration-200" />
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
             <Image
                src={project.imageUrl}
                alt={`${project.title} project screenshot`}
                width={500}
                height={500}
                className="w-full h-auto object-contain rounded-lg shadow-2xl shadow-slate-950"
             />
          </div>
        </div>
      </div>
    ),
  }));

  return (
    <div className="flex flex-col items-center justify-center w-full px-4 mt-32 md:mt-40">
      <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
        My Projects
      </h2>

      <div className="min-h-[40rem] md:h-[30rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start mt-8">
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}