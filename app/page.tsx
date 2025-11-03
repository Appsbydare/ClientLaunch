"use client";

import TypeWriter from "@/components/animations/TypeWriter";
import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "WEB DESIGN & BUILD",
      description: "Stunning, conversion-optimized websites that captivate your audience and drive measurable business results.",
      icon: "🎨",
    },
    {
      title: "WEB APPS & SAAS",
      description: "Scalable, high-performance applications built for growth with cutting-edge technology stacks.",
      icon: "⚡",
    },
    {
      title: "E-COMMERCE SOLUTIONS",
      description: "Complete online stores that drive sales, customer loyalty, and lifetime value.",
      icon: "🛒",
    },
    {
      title: "SEO & PERFORMANCE",
      description: "Lightning-fast sites that rank on page one and convert visitors into customers.",
      icon: "🚀",
    },
  ];

  const stats = [
    { value: "150+", label: "PROJECTS DELIVERED", icon: "📦" },
    { value: "98%", label: "CLIENT SATISFACTION", icon: "⭐" },
    { value: "2.5x", label: "AVG. CONVERSION LIFT", icon: "📈" },
    { value: "<1s", label: "PAGE LOAD TIME", icon: "⚡" },
  ];

  const caseStudies = [
    {
      client: "TECHCORP",
      industry: "SaaS Platform",
      result: "300% increase in signups",
      icon: "💼",
      metrics: ["3x Signups", "45% Lower Bounce", "$2M ARR"]
    },
    {
      client: "SHOPHUB",
      industry: "E-commerce",
      result: "2x revenue in 6 months",
      icon: "🏪",
      metrics: ["2x Revenue", "60% More Orders", "4.8★ Rating"]
    },
    {
      client: "FITPRO",
      industry: "Health & Fitness",
      result: "150K active users",
      icon: "💪",
      metrics: ["150K Users", "92% Retention", "Top 10 App"]
    },
  ];

  const process = [
    { number: "01", title: "DISCOVERY", icon: "🔍", description: "Understanding your goals, audience, and competitive landscape" },
    { number: "02", title: "STRATEGY", icon: "📊", description: "Creating a roadmap for success with clear milestones" },
    { number: "03", title: "DESIGN", icon: "✨", description: "Crafting beautiful, intuitive experiences that convert" },
    { number: "04", title: "DEVELOP", icon: "⚙️", description: "Building with modern tech, best practices, and scalability" },
    { number: "05", title: "LAUNCH", icon: "🚀", description: "Deploying to production with monitoring and optimization" },
    { number: "06", title: "GROW", icon: "📈", description: "Continuous improvement through data and user feedback" },
  ];

  const testimonials = [
    { name: "Sarah Chen", company: "TechCorp CEO", text: "Absolutely transformed our online presence. The results speak for themselves.", icon: "👩‍💼" },
    { name: "Marcus Rivera", company: "ShopHub Founder", text: "Best investment we made. Revenue doubled in just 6 months.", icon: "👨‍💼" },
    { name: "Emily Zhang", company: "FitPro CMO", text: "Professional, fast, and delivered beyond expectations.", icon: "👩‍💻" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section - White */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
          <FadeIn>
            <div className="mb-12">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[10rem] font-black mb-6 leading-none">
                <span 
                  className="block mb-4 text-transparent"
                  style={{
                    WebkitTextStroke: '3px black',
                  }}
                >
                  TRANSFORM YOUR
                </span>
                <span className="block text-black mb-4">
                  BUSINESS WITH
                </span>
              </h1>
              <div className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-blue-600 min-h-[1.5em] flex items-center justify-center">
                <TypeWriter
                  texts={["PREMIUM WEBSITES", "WEB APPLICATIONS", "DIGITAL EXPERIENCES"]}
                  className="inline-block"
                  speed={80}
                  deleteSpeed={40}
                  pauseDuration={1500}
                />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 mb-12 max-w-4xl mx-auto font-medium">
              Expert design • Cutting-edge development • Proven results that drive your business forward
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="px-12 py-6 bg-black hover:bg-gray-800 text-white text-xl font-black rounded-none transition-all shadow-xl hover:shadow-2xl uppercase tracking-wider hover:scale-105 transform"
              >
                START YOUR PROJECT →
              </Link>
              <Link
                href="/case-studies"
                className="px-12 py-6 border-4 border-black text-black hover:bg-black hover:text-white text-xl font-black rounded-none transition-all shadow-xl hover:shadow-2xl uppercase tracking-wider hover:scale-105 transform"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section - Black */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="text-center p-8 border-2 border-white/20 hover:border-white/60 transition-all">
                  <div className="text-6xl mb-4">{stat.icon}</div>
                  <div className="text-5xl sm:text-6xl font-black mb-3">{stat.value}</div>
                  <div className="text-sm sm:text-base font-bold tracking-wider opacity-80">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section - White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-center mb-6 uppercase">
              <span 
                className="text-transparent"
                style={{
                  WebkitTextStroke: '2px black',
                }}
              >
                OUR
              </span>{" "}
              <span className="text-black">SERVICES</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto font-medium">
              Comprehensive solutions tailored to your unique business needs
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="p-8 border-4 border-black hover:bg-black hover:text-white transition-all group">
                  <div className="text-6xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">{service.title}</h3>
                  <p className="text-base leading-relaxed">{service.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-16">
              <Link
                href="/services"
                className="inline-block px-10 py-5 border-4 border-black text-black hover:bg-black hover:text-white font-black text-lg rounded-none transition-all uppercase tracking-wider"
              >
                EXPLORE ALL SERVICES →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Case Studies - Black */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-center mb-6 uppercase">
              PROVEN <span className="text-blue-500">RESULTS</span>
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 font-medium">
              Real projects • Real impact • Real growth
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="border-4 border-white/30 hover:border-white transition-all p-8 group">
                  <div className="text-7xl mb-6">{study.icon}</div>
                  <div className="text-sm text-blue-400 font-bold mb-2 uppercase tracking-wide">{study.industry}</div>
                  <h3 className="text-3xl font-black mb-4 uppercase">{study.client}</h3>
                  <p className="text-xl text-gray-300 mb-6 font-medium">{study.result}</p>
                  <div className="space-y-2">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-sm font-bold text-gray-400 uppercase tracking-wide">
                        ✓ {metric}
                      </div>
                    ))}
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={300}>
            <div className="text-center mt-16">
              <Link
                href="/case-studies"
                className="inline-block px-10 py-5 bg-white text-black hover:bg-gray-200 font-black text-lg rounded-none transition-all uppercase tracking-wider"
              >
                VIEW ALL CASE STUDIES →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section - White */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-center mb-6 uppercase">
              OUR <span className="text-blue-600">PROCESS</span>
            </h2>
            <p className="text-xl text-gray-600 text-center mb-16 font-medium">
              A proven methodology that delivers exceptional results every time
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="border-4 border-black p-8 hover:bg-black hover:text-white transition-all group">
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-6xl font-black text-gray-200 group-hover:text-white/20">{step.number}</div>
                    <div className="text-5xl">{step.icon}</div>
                  </div>
                  <h3 className="text-2xl font-black mb-4 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-base leading-relaxed">{step.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <div className="text-center mt-16">
              <Link
                href="/process"
                className="inline-block px-10 py-5 border-4 border-black text-black hover:bg-black hover:text-white font-black text-lg rounded-none transition-all uppercase tracking-wider"
              >
                LEARN MORE ABOUT OUR PROCESS →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Testimonials - Black */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-center mb-16 uppercase">
              CLIENT <span className="text-blue-500">TESTIMONIALS</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="border-4 border-white/30 p-8 hover:border-white transition-all">
                  <div className="text-6xl mb-6">{testimonial.icon}</div>
                  <p className="text-xl mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-black text-lg uppercase">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wide">{testimonial.company}</div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - White */}
      <section className="py-32 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8 uppercase leading-tight">
              <span 
                className="block mb-4 text-transparent"
                style={{
                  WebkitTextStroke: '2px black',
                }}
              >
                READY TO TRANSFORM
              </span>
              <span className="block text-black">
                YOUR DIGITAL PRESENCE?
              </span>
            </h2>
            <p className="text-2xl mb-12 text-gray-700 font-medium">
              Let's build something amazing together 🚀
            </p>
            <Link
              href="/contact"
              className="inline-block px-16 py-7 bg-black text-white hover:bg-gray-800 font-black rounded-none transition-all text-2xl shadow-2xl uppercase tracking-wider hover:scale-105 transform"
            >
              GET STARTED TODAY →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
