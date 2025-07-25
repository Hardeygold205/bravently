import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function OurProjects() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 uppercase">Our Portfolio</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our successful projects that transformed businesses across
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "E-Commerce Platform",
              description:
                "Built a scalable online marketplace with integrated payment processing for a retail chain.",
              tags: ["React", "Node.js", "MongoDB"],
              image: "/excel-dashboard.png",
            },
            {
              title: "Porfolio Website System",
              description:
                "Developed a HIPAA-compliant patient records system for hospital networks.",
              tags: ["TypeScript", "NextJs", "SEO"],
              image: "/porfolio-dasboard.png",
            },
            {
              title: "Social Mobile App",
              description:
                "Created a secure mobile banking application with biometric authentication.",
              tags: ["React-Native", "Firebase", "Blockchain"],
              image: "/p2s-dashboard.png",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 px-3 py-1 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12 z-50">
        <Link
          href="/"
          className="px-8 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
