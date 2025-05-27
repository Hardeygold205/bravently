import { CheckCircle } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  renewalPrice: string;
  renewalPeriod: string;
  features: string[];
  recommended?: boolean;
}

export function PricingCard({
  title,
  price,
  renewalPrice,
  renewalPeriod,
  features,
  recommended = false,
}: PricingCardProps) {
  return (
    <div
      className={`relative bg-base-200 rounded-xl p-5 shadow-lg hover:shadow-2xl transition-shadow ${
        recommended ? "border-2 border-primary" : ""
      }`}>
      {recommended && (
        <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-tr-xl rounded-bl-xl text-sm">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <div className="mb-6">
        <span className="text-4xl font-bold">${price}</span>
        <span className="text-base-content/70 ml-2">per project</span>
      </div>

      <div className="bg-base-300/50 rounded-lg mb-8">
        <p className="text-sm">
          Renewal after {renewalPeriod}:{" "}
          <span className="font-semibold">${renewalPrice}</span>
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            <span className="text-base-content/80">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-blue-600 dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
        Get Started
      </button>
    </div>
  );
}
