import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, Phone, Clock } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-100 px-6 py-16">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-7">
        <div className="lg:col-span-2 space-y-6">
          <Link href="/">
            <Image
              src="/Branovax_Logo.PNG"
              alt="Branovax Logo"
              className="w-48 h-auto transition-opacity hover:opacity-90"
              width={192}
              height={48}
              priority
            />
          </Link>
          <p className="text-gray-300 leading-relaxed">
            Empowering businesses with innovative technology solutions through
            expert IT services, consultancy, and cutting-edge application
            development.
          </p>

          <div className="flex gap-4 pt-2">
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="GitHub">
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Services</h6>
            <ul className="space-y-3">
              {[
                "Data Protection Solutions",
                "ICT Consultancy",
                "Mobile App Development",
                "UX/UI Design",
                "Web Development",
                "Cloud Solutions",
                "AI Integration",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:opacity-80 transition-colors text-sm flex items-start">
                    <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 flex-shrink-0"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Contact</h6>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm">+234-813-855-3465</p>
                  <p className="text-xs text-gray-400">Sales & Support</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <div>
                  <p className="text-sm">contact@branovax.com</p>
                  <p className="text-xs text-gray-400">General inquiries</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 mt-0.5  flex-shrink-0" />
                <div>
                  <p className="text-sm">24/7 Support</p>
                  <p className="text-xs text-gray-400">Monitored 24 hours</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Company</h6>
            <ul className="space-y-3">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Case Studies",
                "Blog",
                "Press",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h6 className="text-lg font-semibold mb-4 text-white">Resources</h6>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  API Reference
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:opacity-80 transition-colors text-sm">
                  Status
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-16 border-t border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-col md:flex-row gap-6 text-sm text-gray-400">
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              GDPR Compliance
            </Link>
          </div>

          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Branovax Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
