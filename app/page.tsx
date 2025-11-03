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
    { name: "SARAH CHEN", company: "TECHCORP CEO", text: "Absolutely transformed our online presence. The results speak for themselves.", icon: "👩‍💼" },
    { name: "MARCUS RIVERA", company: "SHOPHUB FOUNDER", text: "Best investment we made. Revenue doubled in just 6 months.", icon: "👨‍💼" },
    { name: "EMILY ZHANG", company: "FITPRO CMO", text: "Professional, fast, and delivered beyond expectations.", icon: "👩‍💻" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO SECTION - WHITE */}
      <section className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden pt-28 pb-20">
        <div className="max-w-[95vw] mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn>
            <div className="mb-16">
              <h1 className="font-black mb-10 leading-[0.85]">
                {/* Outlined text */}
                <span 
                  className="block text-[clamp(4rem,12vw,18rem)] mb-6 text-transparent"
                  style={{
                    WebkitTextStroke: 'clamp(2px, 0.3vw, 4px) black',
                    paintOrder: 'stroke fill',
                  }}
                >
                  TRANSFORM YOUR
                </span>
                {/* Solid black text */}
                <span className="block text-[clamp(4rem,12vw,18rem)] text-black mb-10">
                  BUSINESS WITH
                </span>
              </h1>
              {/* Animated TypeWriter */}
              <div className="text-[clamp(3rem,10vw,15rem)] font-black text-blue-600 min-h-[clamp(100px,12vw,180px)] flex items-center justify-center leading-tight">
                <TypeWriter
                  texts={["PREMIUM WEBSITES", "WEB APPLICATIONS", "DIGITAL EXPERIENCES"]}
                  className="inline-block"
                  speed={60}
                  deleteSpeed={30}
                  pauseDuration={2000}
                />
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={400}>
            <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 mb-14 max-w-5xl mx-auto font-bold leading-relaxed">
              Expert design • Cutting-edge development • Proven results
            </p>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="group relative px-16 py-8 bg-black text-white text-2xl font-black uppercase tracking-wider transition-all hover:scale-105 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 shadow-2xl"
              >
                START YOUR PROJECT →
              </Link>
              <Link
                href="/case-studies"
                className="px-16 py-8 border-4 border-black text-black hover:bg-black hover:text-white text-2xl font-black uppercase tracking-wider transition-all hover:scale-105 shadow-2xl"
              >
                VIEW OUR WORK
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* STATS SECTION - BLACK */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="text-center p-10 border-4 border-white/20 hover:border-white hover:bg-white/10 transition-all group">
                  <div className="text-8xl mb-6 transform group-hover:scale-110 transition-transform">{stat.icon}</div>
                  <div className="text-7xl font-black mb-4">{stat.value}</div>
                  <div className="text-sm font-bold tracking-widest uppercase opacity-80">{stat.label}</div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES SECTION - WHITE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-7xl lg:text-8xl font-black text-center mb-8 uppercase leading-tight">
              <span 
                className="text-transparent mr-6"
                style={{
                  WebkitTextStroke: '3px black',
                }}
              >
                OUR
              </span>
              <span className="text-black">SERVICES</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600 text-center mb-20 max-w-4xl mx-auto font-semibold">
              Comprehensive solutions tailored to your unique business needs
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="p-10 border-4 border-black hover:bg-black hover:text-white transition-all duration-300 group h-full flex flex-col">
                  <div className="text-8xl mb-8 transform group-hover:scale-110 transition-transform">{service.icon}</div>
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-wide leading-tight">{service.title}</h3>
                  <p className="text-xl leading-relaxed flex-grow">{service.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-16">
              <Link
                href="/services"
                className="inline-block px-16 py-8 border-4 border-black text-black hover:bg-black hover:text-white font-black text-2xl uppercase tracking-wider transition-all hover:scale-105"
              >
                EXPLORE ALL SERVICES →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CASE STUDIES SECTION - BLACK */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-7xl lg:text-8xl font-black text-center mb-8 uppercase">
              PROVEN <span className="text-blue-400">RESULTS</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-300 text-center mb-20 font-semibold">
              Real projects • Real impact • Real growth
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="border-4 border-white/20 hover:border-white transition-all p-10 group hover:bg-white/5 h-full flex flex-col">
                  <div className="text-9xl mb-8 transform group-hover:scale-110 transition-transform">{study.icon}</div>
                  <div className="text-sm text-blue-400 font-bold mb-3 uppercase tracking-widest">{study.industry}</div>
                  <h3 className="text-4xl font-black mb-6 uppercase leading-tight">{study.client}</h3>
                  <p className="text-2xl text-gray-300 mb-8 font-semibold">{study.result}</p>
                  <div className="space-y-3 mt-auto">
                    {study.metrics.map((metric, i) => (
                      <div key={i} className="text-base font-bold text-gray-400 uppercase tracking-wide flex items-center">
                        <span className="text-green-400 mr-3 text-xl">✓</span> {metric}
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
                className="inline-block px-16 py-8 bg-white text-black hover:bg-gray-200 font-black text-2xl uppercase tracking-wider transition-all hover:scale-105"
              >
                VIEW ALL CASE STUDIES →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* PROCESS SECTION - WHITE */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-7xl lg:text-8xl font-black text-center mb-8 uppercase">
              OUR <span className="text-blue-600">PROCESS</span>
            </h2>
            <p className="text-2xl lg:text-3xl text-gray-600 text-center mb-20 font-semibold">
              A proven methodology that delivers exceptional results every time
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((step, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <div className="border-4 border-black p-10 hover:bg-black hover:text-white transition-all duration-300 group h-full flex flex-col">
                  <div className="flex items-start justify-between mb-8">
                    <div className="text-8xl font-black text-gray-200 group-hover:text-white/20 transition-colors">{step.number}</div>
                    <div className="text-7xl transform group-hover:scale-110 transition-transform">{step.icon}</div>
                  </div>
                  <h3 className="text-3xl font-black mb-6 uppercase tracking-wide">{step.title}</h3>
                  <p className="text-xl leading-relaxed flex-grow">{step.description}</p>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={600}>
            <div className="text-center mt-16">
              <Link
                href="/process"
                className="inline-block px-16 py-8 border-4 border-black text-black hover:bg-black hover:text-white font-black text-2xl uppercase tracking-wider transition-all hover:scale-105"
              >
                LEARN MORE ABOUT OUR PROCESS →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* TESTIMONIALS SECTION - BLACK */}
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-7xl lg:text-8xl font-black text-center mb-20 uppercase">
              CLIENT <span className="text-blue-400">TESTIMONIALS</span>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScaleIn key={index} delay={index * 150}>
                <div className="border-4 border-white/20 p-10 hover:border-white hover:bg-white/5 transition-all group h-full flex flex-col">
                  <div className="text-8xl mb-8 transform group-hover:scale-110 transition-transform">{testimonial.icon}</div>
                  <p className="text-2xl mb-8 leading-relaxed italic flex-grow">"{testimonial.text}"</p>
                  <div className="border-t-4 border-white/20 pt-6">
                    <div className="font-black text-xl uppercase tracking-wide">{testimonial.name}</div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider mt-2">{testimonial.company}</div>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION - WHITE */}
      <section className="py-32 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black mb-12 uppercase leading-tight">
              <span 
                className="block mb-8 text-transparent"
                style={{
                  WebkitTextStroke: '3px black',
                }}
              >
                READY TO TRANSFORM
              </span>
              <span className="block text-black">
                YOUR DIGITAL PRESENCE?
              </span>
            </h2>
            <p className="text-3xl lg:text-4xl mb-16 text-gray-700 font-bold">
              Let's build something amazing together 🚀
            </p>
            <Link
              href="/contact"
              className="inline-block px-20 py-10 bg-black text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 font-black text-3xl uppercase tracking-wider transition-all hover:scale-105 transform shadow-2xl"
            >
              GET STARTED TODAY →
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
