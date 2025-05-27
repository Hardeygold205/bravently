import React from "react";
import { PricingCard } from "@/constants/PricingCard";

export default function Pricing() {
  const plans = [
    {
      title: "Portfolio Website Development",
      price: "250",
      renewalPrice: "150",
      renewalPeriod: "1 yr",
      features: [
        "Web development",
        "1 year free Web hosting",
        "SSL certificate",
        "Content management",
        "Backup",
        "Search tools",
        "SEO",
        "Website analytics tools",
      ],
    },
    {
      title: "Ecommerce Website Development",
      price: "1,550",
      renewalPrice: "550",
      renewalPeriod: "1 yr",
      features: [
        "Web development",
        "1 year free Web hosting",
        "SSL certificate",
        "Content management",
        "Backup",
        "Search tools",
        "SEO",
        "Website analytics tools",
      ],
      recommended: true,
    },
    {
      title: "Web Portal Development",
      price: "4,500",
      renewalPrice: "1,200",
      renewalPeriod: "2 yrs",
      features: [
        "Web development",
        "2 years free Web hosting",
        "SSL certificate & cloud storage",
        "Content management",
        "Backup",
        "Search tools",
        "SEO",
        "Website analytics tools",
      ],
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 uppercase">
            Development Packages
          </h1>
          <p className="text-xl text-base-content/80 max-w-[30rem] mx-auto">
            We different kinds of Packages, choose one that best for your
            project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
        </div>
      </div>
    </section>
  );
}
