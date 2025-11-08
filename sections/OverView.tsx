"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OverView() {
  return (
    <section
      className="py-16 bg-gray-900 relative overflow-hidden"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)",
      }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ translateX: -90, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2 w-full">
            <div className="p-10 bg-blue-200 rotate-10 absolute w-150 min-h-[355px] rounded-2xl opacity-10"></div>
            <div className="p-10 bg-blue-200 -rotate-10 absolute w-150 min-h-[355px] rounded-2xl opacity-10"></div>
            <div className="relative h-96 min-h-[300px] w-full rounded-xl overflow-hidden shadow-lg hover:scale-105 ease-in-out transition-all duration-300">
              <Image
                src="/IT-team-building.jpg"
                alt="Branovax team working on technology solutions"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ translateX: 90, opacity: 0 }}
            whileInView={{ translateX: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Innovating Technology Solutions Since 2021
            </h2>
            <p className="text-lg text-gray-200 mb-6">
              Branovax Technologies is a leading software development company
              dedicated to transforming businesses through cutting-edge digital
              solutions. With our headquarters in Nigeria and a global client
              base, we bridge the gap between innovative technology and business
              success.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Our Mission
                  </h3>
                  <p className="text-gray-200">
                    To empower businesses with robust, scalable technology
                    solutions that drive growth, efficiency, and competitive
                    advantage in the digital age.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-full mr-4">
                  <svg
                    className="w-6 h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Our Approach
                  </h3>
                  <p className="text-gray-200">
                    We combine technical expertise with deep business
                    understanding to deliver solutions that are not just
                    technologically advanced but also aligned with your
                    strategic objectives.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mb-0 mb-14 grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-gray-600">Work Ratings</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
