import React from "react";
import { CheckCircle } from "lucide-react";

export default function WhychoseUs() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 uppercase">Why Choose Branovax?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We deliver exceptional technology solutions that drive real business
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Industry Expertise",
              description:
                "With 10+ years in tech, we've solved complex challenges across multiple industries from finance to healthcare.",
            },
            {
              title: "Client-Centric Approach",
              description:
                "Your success is our priority. We work closely with you to understand your unique business needs.",
            },
            {
              title: "Cutting-Edge Solutions",
              description:
                "We leverage the latest technologies to build future-proof applications that scale with your business.",
            },
            {
              title: "Transparent Process",
              description:
                "Clear communication and regular updates ensure you're always informed about project progress.",
            },
            {
              title: "Quality Assurance",
              description:
                "Rigorous testing protocols guarantee reliable, high-performance applications every time.",
            },
            {
              title: "Ongoing Support",
              description:
                "Our relationship continues after launch with comprehensive maintenance and support packages.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
