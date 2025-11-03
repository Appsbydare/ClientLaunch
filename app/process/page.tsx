"use client";

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export default function ProcessPage() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, target audience, and competitive landscape.",
      deliverables: ["Project Brief", "Requirements Doc", "Timeline & Budget"],
      duration: "1-2 weeks",
    },
    {
      number: "02",
      title: "Strategy & Planning",
      description: "Define the architecture, user flows, content strategy, and technical stack.",
      deliverables: ["Site Map", "User Flows", "Tech Stack Doc", "Content Plan"],
      duration: "1-2 weeks",
    },
    {
      number: "03",
      title: "Design",
      description: "Create wireframes, high-fidelity designs, and interactive prototypes.",
      deliverables: ["Wireframes", "UI Designs", "Design System", "Prototype"],
      duration: "2-4 weeks",
    },
    {
      number: "04",
      title: "Development",
      description: "Build your site with clean code, best practices, and regular progress updates.",
      deliverables: ["Frontend", "Backend", "CMS", "Integrations"],
      duration: "4-8 weeks",
    },
    {
      number: "05",
      title: "QA & Testing",
      description: "Rigorous testing across devices, browsers, and performance benchmarks.",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Audit", "Accessibility Check"],
      duration: "1-2 weeks",
    },
    {
      number: "06",
      title: "Launch",
      description: "Deploy to production, configure DNS, set up analytics, and go live.",
      deliverables: ["Production Deploy", "Analytics Setup", "Training Docs", "Handoff"],
      duration: "1 week",
    },
    {
      number: "07",
      title: "Growth & Support",
      description: "Ongoing optimization, monitoring, updates, and continuous improvement.",
      deliverables: ["Monthly Reports", "Updates", "Support", "A/B Tests"],
      duration: "Ongoing",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Our <GradientText>Process</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                A proven methodology that delivers results, on time and on budget.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <PlaceholderImage
              page="04-process"
              imageFile="001-hero.svg"
              alt="Process overview"
              className="max-w-4xl mx-auto"
            />
          </FadeIn>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <ScaleIn key={step.number} delay={index * 100}>
                <div className="relative">
                  {/* Connection line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-primary to-secondary -z-10"></div>
                  )}

                  <div className="flex gap-6">
                    {/* Number Circle */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg">
                        {step.number}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary transition-all shadow-lg">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                        <h3 className="text-2xl font-bold mb-2 md:mb-0">{step.title}</h3>
                        <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                          {step.duration}
                        </span>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {step.description}
                      </p>

                      <div>
                        <h4 className="font-semibold mb-2 text-sm uppercase tracking-wide text-gray-500">
                          Deliverables
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((item) => (
                            <span
                              key={item}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-lg text-sm"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Collaboration */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              Tools & <GradientText>Collaboration</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <ScaleIn delay={0}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Communication</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Slack, Zoom, and weekly check-ins keep you in the loop.
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={100}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Project Management</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Notion or Linear for transparent task tracking and milestones.
                </p>
              </div>
            </ScaleIn>

            <ScaleIn delay={200}>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-2">Version Control</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  GitHub for code, Figma for designs, full visibility.
                </p>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Let's Get Started</h2>
            <p className="text-xl mb-8 opacity-90">
              Schedule a discovery call to kick off your project.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors text-lg"
            >
              Book a Call
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
