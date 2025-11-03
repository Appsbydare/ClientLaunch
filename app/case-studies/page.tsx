"use client";

import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: "techcorp-redesign",
      client: "TechCorp",
      industry: "SaaS",
      challenge: "Low conversion rates and outdated design",
      solution: "Complete redesign with optimized user flows and modern UI",
      results: ["300% increase in signups", "45% lower bounce rate", "2x engagement"],
      metrics: { signups: "+300%", bounce: "-45%", engagement: "2x" },
      tags: ["Web Design", "UX/UI", "Conversion Optimization"],
      image: "001-hero.svg",
    },
    {
      id: "shophub-ecommerce",
      client: "ShopHub",
      industry: "E-commerce",
      challenge: "Slow site performance and poor mobile experience",
      solution: "Rebuilt with Next.js, optimized images, and progressive web app features",
      results: ["2x revenue in 6 months", "0.8s page load time", "95+ Lighthouse score"],
      metrics: { revenue: "2x", speed: "0.8s", lighthouse: "95+" },
      tags: ["E-commerce", "Performance", "PWA"],
      image: "002-secondary.svg",
    },
    {
      id: "healthai-platform",
      client: "HealthAI",
      industry: "Healthcare Tech",
      challenge: "Complex data visualization and real-time updates",
      solution: "Custom React dashboard with WebSocket integration",
      results: ["Real-time patient monitoring", "50% faster diagnosis", "99.9% uptime"],
      metrics: { diagnosis: "-50%", uptime: "99.9%", users: "10K+" },
      tags: ["Web App", "Dashboard", "Real-time"],
      image: "001-hero.svg",
    },
    {
      id: "startup-mvp",
      client: "FinFlow",
      industry: "FinTech",
      challenge: "Rapid MVP development for funding round",
      solution: "Built full-featured SaaS MVP in 8 weeks",
      results: ["$2M seed round secured", "500+ beta users", "4.8★ rating"],
      metrics: { funding: "$2M", users: "500+", rating: "4.8★" },
      tags: ["MVP", "SaaS", "FinTech"],
      image: "002-secondary.svg",
    },
  ];

  const industries = ["All", "SaaS", "E-commerce", "Healthcare Tech", "FinTech"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <GradientText>Case Studies</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Real projects. Real results. See how we've transformed businesses.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <PlaceholderImage
              page="03-case-studies"
              imageFile="001-grid.svg"
              alt="Case studies overview"
              className="max-w-4xl mx-auto"
            />
          </FadeIn>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry) => (
                <button
                  key={industry}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    industry === "All"
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {industry}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <ScaleIn key={study.id} delay={index * 100}>
                <article className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl transition-all overflow-hidden">
                  <div className="relative overflow-hidden">
                    <PlaceholderImage
                      page="03-case-studies"
                      imageFile={study.image}
                      alt={`${study.client} case study`}
                      className="group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {study.industry}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {study.challenge}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      {Object.entries(study.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-2xl font-bold text-primary">{value}</div>
                          <div className="text-xs text-gray-500 capitalize">{key}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/case-studies/${study.id}`}
                      className="inline-flex items-center text-primary font-semibold hover:underline group"
                    >
                      Read Full Story
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">Our Impact</h2>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150+", label: "Projects Delivered" },
              { value: "2.5x", label: "Avg. ROI Increase" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "<1s", label: "Avg. Load Time" },
            ].map((stat, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-lg opacity-90">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">
              Ready to Write Your <GradientText>Success Story</GradientText>?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how we can help you achieve similar results.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors text-lg"
            >
              Start Your Project
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
