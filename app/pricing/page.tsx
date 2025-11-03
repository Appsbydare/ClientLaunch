"use client";

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import Link from "next/link";

export default function PricingPage() {
  const packages = [
    {
      name: "Starter",
      price: "$5,000",
      description: "Perfect for small businesses and landing pages",
      features: [
        "5-page website",
        "Responsive design",
        "Basic SEO setup",
        "Contact form",
        "1 round of revisions",
        "2 weeks delivery",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Professional",
      price: "$15,000",
      description: "Ideal for growing businesses and e-commerce",
      features: [
        "15-page website",
        "Custom design system",
        "Advanced SEO",
        "CMS integration",
        "E-commerce ready",
        "Analytics setup",
        "3 rounds of revisions",
        "4-6 weeks delivery",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for complex requirements",
      features: [
        "Unlimited pages",
        "Advanced web app features",
        "API integrations",
        "Custom functionality",
        "Performance optimization",
        "Security audit",
        "Dedicated support",
        "Flexible timeline",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ];

  const addons = [
    { name: "Additional pages", price: "$500/page" },
    { name: "Blog setup & design", price: "$2,000" },
    { name: "E-commerce integration", price: "$3,000+" },
    { name: "Custom animations", price: "$1,500+" },
    { name: "API integration", price: "$2,500+" },
    { name: "Monthly maintenance", price: "$500/mo" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Simple, <GradientText>Transparent Pricing</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Choose the package that fits your needs. Scale as you grow.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <ScaleIn key={pkg.name} delay={index * 100}>
                <div
                  className={`relative rounded-2xl p-8 ${
                    pkg.popular
                      ? "bg-gradient-to-br from-primary to-secondary text-white shadow-2xl scale-105"
                      : "bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700"
                  }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-bold mb-2">{pkg.price}</div>
                  <p className={`mb-6 ${pkg.popular ? "opacity-90" : "text-gray-600 dark:text-gray-400"}`}>
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <span className={`mr-2 ${pkg.popular ? "text-white" : "text-accent"}`}>✓</span>
                        <span className={pkg.popular ? "" : "text-gray-700 dark:text-gray-300"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?package=${pkg.name.toLowerCase()}`}
                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center transition-all ${
                      pkg.popular
                        ? "bg-white text-primary hover:bg-gray-100"
                        : "bg-primary text-white hover:bg-primary-dark"
                    }`}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              <GradientText>Add-ons</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-4">
            {addons.map((addon, index) => (
              <ScaleIn key={addon.name} delay={index * 50}>
                <div className="flex justify-between items-center bg-white dark:bg-gray-900 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
                  <span className="font-medium">{addon.name}</span>
                  <span className="text-primary font-bold">{addon.price}</span>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              Flexible <GradientText>Payment Options</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ScaleIn delay={0}>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="text-xl font-bold mb-2">Pay in Full</h3>
                <p className="text-gray-600 dark:text-gray-400">Save 5% with upfront payment</p>
              </div>
            </ScaleIn>

            <ScaleIn delay={100}>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-xl font-bold mb-2">Milestone-based</h3>
                <p className="text-gray-600 dark:text-gray-400">Pay as we hit project milestones</p>
              </div>
            </ScaleIn>

            <ScaleIn delay={200}>
              <div className="text-center p-6">
                <div className="text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-2">Monthly Retainer</h3>
                <p className="text-gray-600 dark:text-gray-400">Ongoing support and updates</p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Not Sure Which Package?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and find the perfect fit.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors text-lg"
            >
              Schedule a Consultation
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
