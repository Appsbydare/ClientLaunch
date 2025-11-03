import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold text-primary mb-4">WebAgency</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Premium websites & web apps that drive results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">Web Design</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">Web Apps</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">E-commerce</Link></li>
              <li><Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-primary">SEO & Performance</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary">About</Link></li>
              <li><Link href="/case-studies" className="text-gray-600 dark:text-gray-400 hover:text-primary">Case Studies</Link></li>
              <li><Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-primary">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/legal" className="text-gray-600 dark:text-gray-400 hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/legal" className="text-gray-600 dark:text-gray-400 hover:text-primary">Terms of Service</Link></li>
              <li><Link href="/legal" className="text-gray-600 dark:text-gray-400 hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} WebAgency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

