"use client";

import { InfoList } from "@/constants/InfoList";
import { motion } from "motion/react";
import React from "react";

export function HeroSection() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-5 md:py-10">
        <h1 className="relative mx-auto max-w-4xl text-center text-4xl leading-snug font-extrabold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Transforming Bold Ideas into Brilliant Realities."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block">
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400">
          Braventy Technology is a bold innovation company specializing in
          building world-class digital solutions. From mobile apps and websites
          to Web3 projects, gaming engines, and e-commerce platforms, we deliver
          fearless creativity backed by technical excellence.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative mt-8 flex flex-wrap items-center justify-center gap-4">
          <button className="w-60 transform rounded-lg bg-slate-700 px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Start Your Project
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            See Our Work
          </button>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative mt-5 p-4 justify-center">
          <h1 className="text-center font-extrabold py-8 text-4xl text-slate-700">
            Facts & Figures
          </h1>
          <div className="flex flex-wrap gap-6 justify-between">
            <InfoList numbers={4} text="Years of existence" />
            <InfoList numbers={11} text="Notable Projects" />
            <InfoList numbers={3} text="Team Members" />
            <InfoList numbers={2} text="Partners" />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
