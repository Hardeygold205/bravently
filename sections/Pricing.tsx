"use client";

import React, { useEffect, useRef, useState } from "react";
import { PricingCard } from "@/components/ui/PricingCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowRight,
  FiX,
  FiCheck,
  FiLoader,
} from "react-icons/fi";
import emailjs from "@emailjs/browser";

// --- Types ---
interface FormData {
  name: string;
  email: string;
  message: string;
  plan: string;
}

export default function Pricing() {
  // --- EmailJS & Form State ---
  const [showModal, setShowModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
    plan: "",
  });

  // --- Logic to Open Modal ---
  const handleSelectPlan = (planTitle: string) => {
    setFormData((prev) => ({
      ...prev,
      plan: planTitle,
      message: `I am interested in the ${planTitle} package. Please contact me with more details.`,
    }));
    setSubmitStatus("idle");
    setShowModal(true);
  };

  // --- Logic to Send Email ---
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    try {
      // NOTE: Ensure your EmailJS template has a {{plan}} variable,
      // or simply rely on the message body containing the plan name.
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_API_KEY!,
        process.env.NEXT_PUBLIC_TEMPLATE_API_KEY!,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          plan_name: formData.plan, // Pass this if your template supports it
        },
        process.env.NEXT_PUBLIC_USER_PUBLIC_KEY!
      );
      setSubmitStatus("success");
      // Optional: Close modal after success delay
      setTimeout(() => setShowModal(false), 3000);
      setFormData({ name: "", email: "", message: "", plan: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // --- Existing Carousel Logic ---
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
      recommended: true,
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

  useEffect(() => {
    if (isMobile || !containerRef.current) return;
    const container = containerRef.current;
    const firstChild = container.firstElementChild as HTMLElement;
    const cardWidth = firstChild?.offsetWidth || 0;
    const scrollPosition = currentIndex * (cardWidth + 32);
    container.scrollTo({ left: scrollPosition, behavior: "smooth" });
  }, [currentIndex, isMobile]);

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev === 0 ? plans.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % plans.length);

  return (
    <section className="py-10 relative">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 uppercase text-slate-800 dark:text-slate-100">
            Development Packages
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-[30rem] mx-auto">
            Explore our specialized packages designed for your unique project
            needs
          </p>
        </div>

        {/* Mobile/Tablet Grid */}
        <div className="lg:hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
            {plans.map((plan, index) => (
              <PricingCard
                key={index}
                {...plan}
                // IMPORTANT: You need to pass this prop to your PricingCard component
                onSelect={() => handleSelectPlan(plan.title)}
              />
            ))}
          </motion.div>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden lg:block relative">
          <div
            ref={containerRef}
            className="flex overflow-x-hidden scrollbar-hide gap-4 p-5"
            style={{ scrollBehavior: "smooth" }}>
            {plans.map((plan, index) => (
              <div key={index} className="flex-shrink-0 w-1/3 px-2">
                <PricingCard
                  {...plan}
                  // IMPORTANT: You need to pass this prop to your PricingCard component
                  onSelect={() => handleSelectPlan(plan.title)}
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-all dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Previous package">
              <FiArrowLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-slate-200 hover:bg-slate-800 hover:text-white transition-all dark:bg-slate-800 dark:hover:bg-slate-700"
              aria-label="Next package">
              <FiArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* --- INQUIRY MODAL --- */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900">
              <button
                onClick={() => setShowModal(false)}
                className="absolute right-4 top-4 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600 dark:hover:bg-slate-800">
                <FiX size={20} />
              </button>

              <div className="mb-6">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
                  Get Started
                </h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                  You selected the{" "}
                  <span className="font-semibold text-emerald-600">
                    {formData.plan}
                  </span>
                  . Fill out the details below to kickstart your project.
                </p>
              </div>

              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <div className="mb-4 rounded-full bg-emerald-100 p-4 text-emerald-600 dark:bg-emerald-900/30">
                    <FiCheck size={48} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                    Message Sent!
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    We&apos;ll get back to you regarding your {formData.plan}{" "}
                    within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={sendEmail} className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:text-white"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:text-white"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full rounded-lg border border-slate-300 bg-transparent px-4 py-2.5 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500 dark:border-slate-700 dark:text-white"></textarea>
                  </div>

                  {submitStatus === "error" && (
                    <p className="text-sm text-red-500">
                      Failed to send message. Please try again.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-2 flex w-full items-center justify-center rounded-lg bg-slate-900 py-3 font-semibold text-white transition-all hover:bg-slate-800 disabled:opacity-70 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-200">
                    {isSubmitting ? (
                      <>
                        <FiLoader className="mr-2 animate-spin" /> Sending...
                      </>
                    ) : (
                      "Send Request"
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
