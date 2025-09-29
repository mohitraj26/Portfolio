"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted with:", { name, email, message });
  };

  return (
    <div className="mt-45 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-neutral-800 dark:text-neutral-50 md:text-6xl">
          Contact
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
          Reach out for collaborations, questions, or just to say hello!
        </p>
      </div>

      <div className="shadow-input mx-auto w-full max-w-3xl rounded-2xl bg-white p-4 dark:bg-black md:p-8 ">
        <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
          Let&apos;s Get in Touch
        </h2>
        <p className="mt-2 max-w-sm text-sm text-neutral-600 dark:text-neutral-300">
          Have a project in mind or just want to say hi? I&apos;d love to hear from
          you.
        </p>

        <form className="my-8" onSubmit={handleSubmit}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Ada Lovelace"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              placeholder="your.email@example.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-8">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              id="message"
              placeholder="Hi, I'd like to discuss a project..."
              className="flex h-40 w-full rounded-md border-none bg-gray-50 px-3 py-2 text-sm text-black placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-zinc-800 dark:text-white dark:placeholder:text-neutral-500 dark:focus:ring-neutral-400 dark:focus:ring-offset-zinc-900"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </LabelInputContainer>

          <button
            className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]"
            type="submit"
          >
            Send Message &rarr;
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};