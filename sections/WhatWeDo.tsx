"use client";

import React from "react";
import {
  Smartphone,
  Globe,
  Rocket,
  Gamepad2,
  ShoppingCart,
  Terminal,
  Search,
  LayoutPanelTop,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WhatWeDo() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 12,
      },
    },
  };

  const services = [
    {
      title: "Mobile Development",
      icon: (
        <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 1 }}>
          <Smartphone className="w-8 h-8 text-primary" />
        </motion.div>
      ),
      description:
        "Native iOS/Android app development with cross-platform frameworks like Flutter and React Native for seamless user experiences.",
    },
    {
      title: "Web Development",
      icon: (
        <Globe
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-bounce"
        />
      ),
      description:
        "Full-stack development using modern stacks (Next.js, Node.js) to build scalable, high-performance web applications.",
    },
    {
      title: "MVP Development",
      icon: (
        <Rocket
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-ping"
        />
      ),
      description:
        "Rapid prototyping and lean development to validate business ideas with core-feature MVPs in record time.",
    },
    {
      title: "Game Engine Solutions",
      icon: (
        <Gamepad2
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-spin"
        />
      ),
      description:
        "Unity and Unreal Engine development for immersive 2D/3D gaming experiences with advanced physics and AI systems.",
    },
    {
      title: "E-commerce Solutions",
      icon: (
        <ShoppingCart
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-bounce"
        />
      ),
      description:
        "Custom marketplace development with secure payment processing, inventory management, and CRM integrations.",
    },
    {
      title: "Web3 Integration",
      icon: (
        <Terminal
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-pulse"
        />
      ),
      description:
        "Blockchain development, smart contracts, and decentralized application (dApp) architecture implementation.",
    },
    {
      title: "SEO Content Strategy",
      icon: (
        <Search
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-pulse"
        />
      ),
      description:
        "Data-driven content optimization with semantic SEO and keyword research to boost organic rankings.",
    },
    {
      title: "UX/UI Design",
      icon: (
        <LayoutPanelTop
          style={{ animationDelay: "5s", animationDuration: "3s" }}
          className="w-8 h-8 text-primary animate-spin"
        />
      ),
      description:
        "User-centered interface design with interactive prototypes and design system development for brand consistency.",
    },
  ];

  return (
    <section className="py-16 bg-base-100 z-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 uppercase">OUR SERVICES</h1>
          <p className="text-xl text-base-content/80 max-w-[30rem] mx-auto">
            We Are Offering All Kinds of IT Solutions Services
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 z-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}>
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 12px 20px rgba(0,0,0,0.1)",
              }}
              className="card bg-base-200 shadow-2xl p-5 rounded-3xl 
                 transition-all duration-300 ease-in-out cursor-pointer z-60">
              <div className="card-body items-center text-center py-3">
                <div className="mb-4">{service.icon}</div>
                <h3 className="card-title text-xl mb-2 py-2 font-extrabold">
                  {service.title}
                </h3>
                <p className="text-base-content/80 text-sm">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
