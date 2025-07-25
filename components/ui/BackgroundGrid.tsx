"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BackgroundGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-full w-full overflow-y-auto">
      {" "}
      <div className="fixed inset-0 -z-10 h-screen w-full overflow-hidden">
        {" "}
        <ModernGridBackground />
        <ImageBackground />
      </div>
      <div className="relative z-10"> {children}</div>
    </div>
  );
}

function ModernGridBackground() {
  return (
    <>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#333_1px,transparent_1px),linear-gradient(to_bottom,#333_1px,transparent_1px)]",
          "opacity-50 dark:opacity-30"
        )}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-blue-200 via-black-200 to-white-50 dark:to-black/30" />
    </>
  );
}

function ImageBackground() {
  return (
    <motion.div
      initial={{ opacity: 0.7 }}
      animate={{ opacity: 0.8 }}
      transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
      className="fixed inset-0 h-screen w-full">
      <Image
        src="/header-sape.png"
        alt="Decorative background"
        fill
        priority
        className="object-cover"
        style={{
          objectPosition: "center",
          opacity: 0.9,
          filter: "brightness(0.8) contrast(1.2)",
        }}
      />
    </motion.div>
  );
}
