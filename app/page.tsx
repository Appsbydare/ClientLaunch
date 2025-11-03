"use client";

import SplitText from "@/components/animations/SplitText";
import GradientText from "@/components/animations/GradientText";
import TypeWriter from "@/components/animations/TypeWriter";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "Web Design & Build",
      description: "Stunning, conversion-optimized websites that captivate your audience.",
      icon: "🎨",
    },
    {
      title: "Web Apps & SaaS",
      description: "Scalable, high-performance applications built for growth.",
      icon: "⚡",
    },
    {
      title: "E-commerce",
      description: "Complete online stores that drive sales and customer loyalty.",
      icon: "🛒",
    },
    {
      title: "SEO & Performance",
      description: "Lightning-fast sites that rank and convert.",
      icon: "🚀",
    },
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "2.5x", label: "Avg. Conversion Lift" },
    { value: "<1s", label: "Page Load Time" },
  ];

  const caseStudies = [
    {
      client: "TechCorp",
      industry: "SaaS",
      result: "300% increase in signups",
      image: "001-hero.svg",
    },
    {
      client: "ShopHub",
      industry: "E-commerce",
      result: "2x revenue in 6 months",
      image: "002-secondary.svg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block mb-2">Transform Your Business with</span>
              <GradientText>
                <TypeWriter
                  texts={["Premium Websites", "Web Applications", "Digital Experiences"]}
                  className="inline-block"
                  speed={80}
                  deleteSpeed={40}
                  pauseDuration={1500}
                />
              </GradientText>
            </h1>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert design, cutting-edge development, and proven results that drive your business forward.
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors shadow-lg"
              >
                Start Your Project
              </Link>
              <Link
                href="/case-studies"
                className="px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg transition-colors border border-gray-200 dark:border-gray-700"
              >
                View Our Work
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <div className="mt-12">
              <PlaceholderImage
                page="01-home"
                imageFile="001-hero.svg"
                alt="Hero showcase"
                className="max-w-5xl mx-auto shadow-2xl"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl sm:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
              Our <GradientText>Services</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
              Comprehensive solutions tailored to your unique needs
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary transition-all hover:shadow-xl">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-block px-8 py-3 bg-secondary hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all"
              >
                Explore All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
              <GradientText>Proven Results</GradientText>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 text-center mb-12">
              Real projects, real impact
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                  <PlaceholderImage
                    page="03-case-studies"
                    imageFile={study.image}
                    alt={`${study.client} case study`}
                  />
                  <div className="p-6">
                    <div className="text-sm text-primary font-semibold mb-2">{study.industry}</div>
                    <h3 className="text-2xl font-bold mb-2">{study.client}</h3>
                    <p className="text-lg text-gray-600 dark:text-gray-400">{study.result}</p>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="text-center mt-12">
              <Link
                href="/case-studies"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
              >
                View All Case Studies
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Teaser */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12">
              Our <GradientText>Process</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {["Discovery", "Design & Build", "Launch & Grow"].map((step, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {index === 0 && "Understanding your goals and requirements"}
                    {index === 1 && "Crafting beautiful, functional solutions"}
                    {index === 2 && "Deploying and optimizing for success"}
                  </p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={450}>
            <div className="text-center mt-12">
              <Link
                href="/process"
                className="inline-block px-8 py-3 bg-secondary hover:bg-opacity-90 text-white font-semibold rounded-lg transition-all"
              >
                Learn More About Our Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary via-secondary to-accent text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's build something amazing together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors text-lg shadow-xl"
            >
              Get Started Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
