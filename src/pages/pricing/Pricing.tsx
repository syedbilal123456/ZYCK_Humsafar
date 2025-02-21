import { Check, Crown, Sparkles } from "lucide-react";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  description,
  features,
  isPopular = false,
  ctaText = "Get Started",
}) => (
  <div
    className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
      isPopular
        ? "bg-gradient-to-br from-pink-500 to-pink-700 text-white shadow-xl"
        : "bg-white hover:border-pink-300 border-2 border-transparent"
    }`}
  >
    {isPopular && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
        <span className="bg-white text-pink-600 px-6 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 shadow-lg">
          <Crown size={14} className="text-pink-500" /> Most Popular
        </span>
      </div>
    )}
    <div className="space-y-6">
      <div className="space-y-2">
        <h3
          className={`text-2xl font-bold ${
            isPopular ? "text-white" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`text-sm ${isPopular ? "text-pink-100" : "text-gray-600"}`}
        >
          {description}
        </p>
      </div>
      <div className="flex items-baseline">
        <span
          className={`text-6xl font-bold tracking-tight ${
            isPopular ? "text-white" : "text-gray-900"
          }`}
        >
          ${price}
        </span>
        <span
          className={`ml-2 text-sm ${
            isPopular ? "text-pink-100" : "text-gray-500"
          }`}
        >
          /month
        </span>
      </div>
      <ul className="space-y-4 py-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <Check
              className={`${isPopular ? "text-pink-200" : "text-pink-500"}`}
              size={20}
            />
            <span
              className={`text-sm ${
                isPopular ? "text-pink-100" : "text-gray-600"
              }`}
            >
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <button
        className={`w-full py-4 px-6 rounded-2xl font-medium transition-all duration-300 ${
          isPopular
            ? "bg-white text-pink-600 hover:bg-pink-50 shadow-lg"
            : "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700 shadow-pink-200 shadow-lg hover:shadow-xl"
        }`}
      >
        {ctaText}
      </button>
    </div>
  </div>
);

function Pricing() {
  const plans = [
    {
      title: "Basic",
      price: "29",
      description: "Perfect for freelancers and individuals",
      features: [
        "5 design requests",
        "Unlimited revisions",
        "48-hour delivery",
        "Source files included",
        "Commercial license",
      ],
    },
    {
      title: "Pro Design",
      price: "99",
      description: "Ideal for growing businesses",
      features: [
        "15 design requests",
        "Priority support",
        "24-hour delivery",
        "Source files included",
        "Commercial license",
        "Custom illustrations",
        "Brand guidelines",
      ],
      isPopular: true,
    },
    {
      title: "Business",
      price: "199",
      description: "For design-driven organizations",
      features: [
        "Unlimited requests",
        "VIP support",
        "12-hour delivery",
        "Source files included",
        "Commercial license",
        "Custom illustrations",
        "Brand guidelines",
        "Dedicated designer",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-pink-500" size={32} />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-pink-500 inline-block text-transparent bg-clip-text">
              Choose Your Design Plan
            </h2>
          </div>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Get unlimited design possibilities with our flexible pricing plans.
            Start your creative journey today.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-600 text-lg">
            Need a custom solution?{" "}
            <a
              href="#"
              className="text-pink-600 font-medium hover:text-pink-700 underline decoration-2 decoration-pink-200 hover:decoration-pink-500 transition-all"
            >
              Let's talk about your project
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
