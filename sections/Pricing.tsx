"use client";

import React, { useEffect, useRef, useState } from "react";
import { PricingCard } from "@/constants/PricingCard";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function Pricing() {
  const plans = [
    {
      title: "Portfolio Website",
      price: "149",
      renewalPrice: "99",
      renewalPeriod: "1 yr",
      features: [
        "Responsive website development",
        "1 year free hosting",
        "SSL certificate",
        "Content management",
        "Website analytics",
        "Basic SEO",
        "Contact form integration",
        "3 design revisions",
      ],
    },
    {
      title: "Ecommerce Website",
      price: "1,699",
      renewalPrice: "449",
      renewalPeriod: "1 yr",
      features: [
        "Full online store development",
        "Product management system",
        "Secure payment gateway",
        "Inventory management",
        "Order tracking",
        "Advanced SEO",
        "Customer accounts",
        "Promotion/discount system",
      ],
      recommended: true,
    },
    {
      title: "Web Portal Development",
      price: "899",
      renewalPrice: "299",
      renewalPeriod: "1 yrs",
      features: [
        "Custom web application",
        "User authentication system",
        "Database integration",
        "Cloud storage",
        "API integrations",
        "Advanced analytics",
        "Role-based access control",
        "Automated reporting",
      ],
    },
    {
      title: "MVP Development",
      price: "99",
      renewalPrice: "0",
      renewalPeriod: "1 yr",
      features: [
        "Minimum Viable Product development",
        "Core feature implementation",
        "User testing support",
        "Scalable architecture",
        "Technical documentation",
        "Cloud deployment",
        "Analytics dashboard",
        "3 months maintenance",
      ],
    },
    {
      title: "Mobile App Development",
      price: "4,499",
      renewalPrice: "1,499",
      renewalPeriod: "1 yr",
      features: [
        "iOS & Android native apps",
        "Backend development",
        "Push notifications",
        "In-app purchases",
        "Biometric authentication",
        "App store deployment",
        "Offline functionality",
        "6 months maintenance",
      ],
    },
    {
      title: "Web3 Website",
      price: "2,999",
      renewalPrice: "1499",
      renewalPeriod: "1 yr",
      features: [
        "Blockchain integration",
        "Wallet connectivity",
        "Smart contract development",
        "NFT marketplace",
        "Token integration",
        "Decentralized storage",
        "DAO functionality",
        "On-chain analytics",
      ],
    },
    {
      title: "Enterprise Solution",
      price: "7,999",
      renewalPrice: "3,299",
      renewalPeriod: "2 yrs",
      features: [
        "Custom software development",
        "Multi-team collaboration",
        "Single sign-on (SSO)",
        "Enterprise-grade security",
        "Custom API development",
        "Dedicated support team",
        "Scalable infrastructure",
        "24/7 monitoring",
      ],
    },
  ];

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Handle auto-scroll
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % plans.length);
    }, 5000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", checkMobile);
    };
  }, [isMobile, plans.length]);

  // Handle scroll to current index
  useEffect(() => {
    if (isMobile || !containerRef.current) return;

    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    const cardWidth = firstChild?.offsetWidth || 0;
    const scrollPosition = currentIndex * (cardWidth + 32);

    container.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });
  }, [currentIndex, isMobile]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % plans.length);
  };

  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 uppercase">
            Development Packages
          </h1>
          <p className="text-xl text-base-content/80 max-w-[30rem] mx-auto">
            Explore our specialized packages designed for your unique project
            needs
          </p>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                title={plan.title}
                price={plan.price}
                renewalPrice={plan.renewalPrice}
                renewalPeriod={plan.renewalPeriod}
                features={plan.features}
                recommended={plan.recommended}
              />
            ))}
          </motion.div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div
            ref={containerRef}
            className="flex overflow-x-hidden scrollbar-hide gap-8 py-4 px-2"
            style={{ scrollBehavior: "smooth" }}>
            {plans.map((plan, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 px-2">
                <PricingCard
                  title={plan.title}
                  price={plan.price}
                  renewalPrice={plan.renewalPrice}
                  renewalPeriod={plan.renewalPeriod}
                  features={plan.features}
                  recommended={plan.recommended}
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-base-200 hover:bg-primary hover:text-white transition-all"
              aria-label="Previous package">
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-base-200 hover:bg-primary hover:text-white transition-all"
              aria-label="Next package">
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
