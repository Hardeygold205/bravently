import { Terminal, Code2, Code, Cpu, Figma, Hexagon } from "lucide-react";

interface TechnologyCardProps {
  title: string;
  category: string;
  description: string;
  icon: React.ReactNode;
}

const TechnologyCard = ({
  title,
  category,
  description,
  icon,
}: TechnologyCardProps) => {
  return (
    <div
      className="card bg-white shadow-2xl transition-all duration-300 ease-in-out 
                       transform hover:translate-y-1.5 hover:shadow-3xl cursor-pointer p-6 h-full z-10">
      <div className="flex flex-col h-full">
        <div className="mb-4 text-primary">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <span className="badge badge-outline badge-sm mb-4">{category}</span>
        <p className="text-base-content/80 flex-grow">{description}</p>
      </div>
    </div>
  );
};

export function OurStack() {
  const technologies = [
    {
      title: "C/C++",
      category: "System Programming",
      description:
        "Foundation of high-performance computing and embedded systems with hardware-level control for critical applications.",
      icon: <Terminal className="w-8 h-8" />,
    },
    {
      title: "Python",
      category: "General-Purpose Programming",
      description:
        "Versatile language powering AI/ML solutions and backend systems with extensive libraries and clean syntax.",
      icon: <Code2 className="w-8 h-8" />,
    },
    {
      title: "JavaScript/TypeScript",
      category: "Full-Stack Development",
      description:
        "Modern web development foundation enabling dynamic applications through React, Next.js, and Node.js ecosystems.",
      icon: <Code className="w-8 h-8" />,
    },
    {
      title: "Node.js",
      category: "Runtime Environment",
      description:
        "Scalable server-side platform leveraging JavaScript's event-driven architecture for network applications.",
      icon: <Cpu className="w-8 h-8" />,
    },
    {
      title: "Figma",
      category: "Digital Design",
      description:
        "Collaborative interface design tool streamlining UX/UI workflows from prototyping to developer handoff.",
      icon: <Figma className="w-8 h-8" />,
    },
    {
      title: "Solidity",
      category: "Blockchain Development",
      description:
        "Smart contract language for Ethereum ecosystem enabling secure dApp development and Web3 solutions.",
      icon: <Hexagon className="w-8 h-8" />,
    },
  ];

  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">TECHNOLOGY INDEX</h1>
          <p className="text-xl text-base-content/80 max-w-2xl mx-auto">
            We leverage cutting-edge technologies to propel your digital
            products to global market leadership
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {technologies.map((tech, index) => (
            <TechnologyCard
              key={index}
              title={tech.title}
              category={tech.category}
              description={tech.description}
              icon={tech.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
