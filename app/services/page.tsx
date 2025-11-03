import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export const metadata = {
  title: "Our Services",
  description: "Comprehensive web solutions including design, development, e-commerce, and performance optimization.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Web Design & Build",
      slug: "web-design",
      description: "Custom, conversion-optimized websites that represent your brand beautifully and drive business results.",
      features: ["Responsive Design", "UI/UX Optimization", "Brand Integration", "Accessibility Compliant"],
      icon: "🎨",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Web Apps & SaaS MVPs",
      slug: "web-apps",
      description: "Scalable, high-performance applications built with modern frameworks and best practices.",
      features: ["Real-time Features", "API Integration", "Database Design", "Cloud Deployment"],
      icon: "⚡",
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "E-commerce Solutions",
      slug: "ecommerce",
      description: "Complete online stores with payment processing, inventory management, and analytics.",
      features: ["Payment Gateways", "Cart Optimization", "Inventory System", "Analytics Dashboard"],
      icon: "🛒",
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "SEO & Performance",
      slug: "performance",
      description: "Lightning-fast sites optimized for search engines and exceptional user experience.",
      features: ["Core Web Vitals", "Technical SEO", "Schema Markup", "Speed Optimization"],
      icon: "🚀",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Maintenance & Support",
      slug: "maintenance",
      description: "Ongoing updates, security patches, and technical support to keep your site running smoothly.",
      features: ["24/7 Monitoring", "Security Updates", "Performance Tuning", "Content Updates"],
      icon: "🛠️",
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Migration & Redesign",
      slug: "migration",
      description: "Seamless platform migrations and modern redesigns that preserve SEO and improve performance.",
      features: ["SEO Preservation", "Data Migration", "Modern Stack", "Zero Downtime"],
      icon: "🔄",
      color: "from-teal-500 to-cyan-500",
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
                Our <GradientText>Services</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                End-to-end solutions for every stage of your digital journey
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={300}>
            <PlaceholderImage
              page="02-services"
              imageFile="001-hero.svg"
              alt="Services overview"
              className="max-w-4xl mx-auto"
            />
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ScaleIn key={service.slug} delay={index * 100}>
                <div className="group h-full bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent hover:shadow-2xl transition-all overflow-hidden">
                  <div className={`h-2 bg-gradient-to-r ${service.color}`}></div>
                  <div className="p-6">
                    <div className="text-5xl mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <span className="text-accent mr-2">✓</span>
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/contact?service=${service.slug}`}
                      className="inline-flex items-center text-primary font-semibold hover:underline"
                    >
                      Get Started
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              How We <GradientText>Deliver</GradientText>
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-4 gap-6">
            {["Discovery", "Strategy", "Build", "Launch"].map((step, index) => (
              <ScaleIn key={step} delay={index * 100}>
                <div className="text-center p-6">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="font-bold mb-2">{step}</h3>
                </div>
              </ScaleIn>
            ))}
          </div>

          <FadeIn delay={400}>
            <div className="text-center mt-8">
              <Link
                href="/process"
                className="inline-block px-8 py-3 bg-primary hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors"
              >
                View Full Process
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help your business grow.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors text-lg"
            >
              Contact Us Today
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
