import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-4 border-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-black uppercase mb-4">WEBAGENCY</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Premium websites & web apps that drive results.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-wide">SERVICES</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Web Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Web Apps
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  E-commerce
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  SEO & Performance
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-wide">COMPANY</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  About
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xl font-black uppercase mb-4 tracking-wide">LEGAL</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-400 hover:text-white transition-colors text-lg font-semibold">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t-2 border-white/20 pt-8 text-center">
          <p className="text-gray-400 text-lg font-semibold">
            © 2025 WEBAGENCY. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
