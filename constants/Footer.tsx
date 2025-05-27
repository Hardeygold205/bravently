import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content px-6 py-12">
      <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-7">
        {/* Logo & About */}
        <div className="lg:col-span-2">
          <Image
            src="/Branovax_Logo.png"
            alt="Branovax Logo"
            className="w-48 h-auto"
            width={192}
            height={48}
          />
          <p className="mt-4 text-sm leading-relaxed">
            Branovax Technologies Ltd. is a leading tech company specializing in
            IT services, consultancy, data protection, and cutting-edge
            application development for clients worldwide.
          </p>
        </div>

        {/* Links Grid */}
        <div className="lg:col-span-5 grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* IT Services */}
          <div>
            <h6 className="text-lg font-semibold mb-4">IT Services</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Data Protection
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  ICT Consultancy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  UX/UI Design
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Website Design & Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Contact</h6>
            <ul className="space-y-2 text-sm not-italic">
              <li>+234-813-855-3465</li>
              <li>contact@branovax.com</li>
              <li>Opening Hours: 24hrs</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Company</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Jobs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Press kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="text-lg font-semibold mb-4">Legal</h6>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:underline">
                  Terms of use
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Privacy policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Cookie policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-base-300 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex gap-4">
            <Link href="#" className="hover:text-primary transition-colors">
              <Github className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="hover:text-primary transition-colors">
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
          <p className="text-center sm:text-right">
            &copy; {currentYear} Branovax Technologies Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
