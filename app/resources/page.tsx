"use client";

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      title: "Website ROI Calculator",
      description: "Calculate the potential return on investment for your new website.",
      icon: "💰",
      type: "Tool",
    },
    {
      title: "Performance Audit Checklist",
      description: "A comprehensive checklist to optimize your site's speed and Core Web Vitals.",
      icon: "⚡",
      type: "Checklist",
    },
    {
      title: "Design System Starter",
      description: "Figma template with components, typography, and color systems.",
      icon: "🎨",
      type: "Template",
    },
    {
      title: "SEO Essentials Guide",
      description: "Step-by-step guide to technical SEO for modern web apps.",
      icon: "📈",
      type: "Guide",
    },
    {
      title: "Accessibility Testing Toolkit",
      description: "Tools and resources to ensure your site meets WCAG standards.",
      icon: "♿",
      type: "Toolkit",
    },
    {
      title: "Project Brief Template",
      description: "Structured template to define scope, timeline, and deliverables.",
      icon: "📋",
      type: "Template",
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
                Free <GradientText>Resources</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tools, templates, and guides to accelerate your digital projects.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <ScaleIn key={resource.title} delay={index * 100}>
                <div className="group bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-5xl">{resource.icon}</div>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {resource.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{resource.description}</p>

                  <button className="inline-flex items-center text-primary font-semibold hover:underline group">
                    Download
                    <svg className="w-4 h-4 ml-2 group-hover:translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                  </button>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Need Custom Solutions?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our resources are great, but custom work is even better.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors text-lg"
            >
              Let's Talk
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
