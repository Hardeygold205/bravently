"use client";

import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export function BackgroundGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <ImageBackground />
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      {children}
    </div>
  );
}

export function ImageBackground() {
  return (
    <motion.div
      initial={{ translateX: 0, translateY: 0 }}
      animate={{
        translateX: [0, 10, 0], 
        translateY: [0, -10, 0], 
      }}
      transition={{
        duration: 5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 2,
      }}
      style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        willChange: "transform", 
      }}>
      <Image
        src="/header-sape.png"
        alt="Animated background"
        className="p-10 absolute"
        fill
        priority
        style={{
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
}
