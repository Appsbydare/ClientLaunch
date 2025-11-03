import FadeIn from "@/components/animations/FadeIn";
import GradientText from "@/components/animations/GradientText";

export const metadata = {
  title: "Legal",
  description: "Privacy Policy, Terms of Service, and legal information.",
};

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <GradientText>Legal</GradientText> Information
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300">
                Privacy Policy, Terms of Service, and Cookies Policy
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <h2>Privacy Policy</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: November 3, 2025
              </p>

              <h3>Information We Collect</h3>
              <p>
                We collect information you provide directly to us, including name, email, 
                phone number, and project details when you contact us or use our services.
              </p>

              <h3>How We Use Your Information</h3>
              <ul>
                <li>To provide, maintain, and improve our services</li>
                <li>To communicate with you about your project</li>
                <li>To send you updates, newsletters, and marketing materials (with consent)</li>
                <li>To analyze usage and optimize our website</li>
              </ul>

              <h3>Data Security</h3>
              <p>
                We implement industry-standard security measures to protect your information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>

              <h3>Your Rights</h3>
              <p>
                You have the right to access, correct, or delete your personal information. 
                Contact us at privacy@webagency.com to exercise these rights.
              </p>

              <hr className="my-12" />

              <h2>Terms of Service</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: November 3, 2025
              </p>

              <h3>Agreement to Terms</h3>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. 
                If you disagree with any part of the terms, you may not access the service.
              </p>

              <h3>Services</h3>
              <p>
                We provide web design, development, and related services as described on our 
                website. Specific project terms will be outlined in a separate contract or 
                statement of work.
              </p>

              <h3>Payment Terms</h3>
              <p>
                Payment terms are specified in your project contract. Late payments may 
                incur fees and may result in suspension of services.
              </p>

              <h3>Intellectual Property</h3>
              <p>
                Upon full payment, you own the final deliverables. We retain the right to 
                showcase the work in our portfolio unless otherwise agreed.
              </p>

              <h3>Limitation of Liability</h3>
              <p>
                We are not liable for any indirect, incidental, or consequential damages 
                arising from the use of our services.
              </p>

              <hr className="my-12" />

              <h2>Cookies Policy</h2>
              <p className="text-gray-600 dark:text-gray-400">
                Last updated: November 3, 2025
              </p>

              <h3>What Are Cookies</h3>
              <p>
                Cookies are small text files stored on your device to enhance your browsing 
                experience and analyze site usage.
              </p>

              <h3>How We Use Cookies</h3>
              <ul>
                <li><strong>Essential cookies:</strong> Required for the website to function</li>
                <li><strong>Analytics cookies:</strong> Help us understand how visitors use the site</li>
                <li><strong>Marketing cookies:</strong> Track visitors across websites to display relevant ads</li>
              </ul>

              <h3>Managing Cookies</h3>
              <p>
                You can control and delete cookies through your browser settings. Note that 
                disabling cookies may affect website functionality.
              </p>

              <hr className="my-12" />

              <h2>Contact Us</h2>
              <p>
                If you have any questions about our legal policies, please contact us at:
              </p>
              <ul>
                <li>Email: legal@webagency.com</li>
                <li>Phone: +1 (555) 123-4567</li>
                <li>Address: 123 Innovation Drive, San Francisco, CA 94105</li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
