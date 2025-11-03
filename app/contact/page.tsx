import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch to start your project. We're here to help bring your vision to life.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                Let's <GradientText>Start Building</GradientText>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <ScaleIn delay={0}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    >
                      <option>Web Design & Build</option>
                      <option>Web App / SaaS</option>
                      <option>E-commerce</option>
                      <option>SEO & Performance</option>
                      <option>Maintenance & Support</option>
                      <option>Not Sure Yet</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium mb-2">
                      Estimated Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                    >
                      <option>Under $5,000</option>
                      <option>$5,000 - $15,000</option>
                      <option>$15,000 - $50,000</option>
                      <option>$50,000+</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-800"
                      placeholder="Tell us about your project, goals, and timeline..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScaleIn>

            {/* Contact Info */}
            <ScaleIn delay={200}>
              <div>
                <h2 className="text-3xl font-bold mb-6">Get in touch</h2>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl mr-4">
                      📧
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-gray-600 dark:text-gray-400">hello@webagency.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl mr-4">
                      📞
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-xl mr-4">
                      📍
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-gradient-to-br from-primary to-secondary text-white rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Prefer a call?</h3>
                  <p className="mb-4 opacity-90">Schedule a free 30-minute consultation.</p>
                  <button className="px-6 py-3 bg-white text-primary hover:bg-gray-100 font-semibold rounded-lg transition-colors">
                    Book a Call
                  </button>
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked <GradientText>Questions</GradientText>
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {[
              {
                q: "How long does a typical project take?",
                a: "Most projects range from 4-12 weeks depending on scope and complexity.",
              },
              {
                q: "What's your payment structure?",
                a: "We offer flexible options: upfront, milestone-based, or monthly retainers.",
              },
              {
                q: "Do you provide ongoing support?",
                a: "Yes! We offer maintenance packages starting at $500/month.",
              },
            ].map((faq, index) => (
              <ScaleIn key={index} delay={index * 100}>
                <details className="bg-white dark:bg-gray-900 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
                  <summary className="font-semibold cursor-pointer">{faq.q}</summary>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">{faq.a}</p>
                </details>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
