
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Thank you for subscribing!');
      setIsSubmitting(false);
      setEmail('');
      setTimeout(() => setSubmitStatus(''), 3000);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-[#001d3f] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-4 cursor-pointer">
              <Image 
                src="https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/8c7f99aa674fd6b39cbe8dfa3abcac9f.png"
                alt="Siyana Info Solutions"
                width={32}
                height={32}
                className="object-contain"
              />
              <span className="text-2xl font-['Pacifico'] text-[#5bc5f0]">Siyana Info Solutions</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Leading IT company in Gujarat specializing in government projects and enterprise software solutions. Transforming businesses through innovative technology.
            </p>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold text-[#5bc5f0] mb-3">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex space-x-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 rounded-lg text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#5bc5f0]"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#5bc5f0] text-[#001d3f] px-4 py-2 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 text-sm"
                >
                  {isSubmitting ? 'Subscribing...' : 'Subscribe'}
                </button>
              </form>
              {submitStatus && (
                <p className={`text-sm mt-2 ${submitStatus.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus}
                </p>
              )}
            </div>

            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/siyana-info-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5bc5f0] rounded-full flex items-center justify-center text-[#001d3f] hover:bg-[#0093c8] transition-colors cursor-pointer"
              >
                <i className="ri-linkedin-fill"></i>
              </a>
              <a 
                href="https://mobile.twitter.com/Siyanainfo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5bc5f0] rounded-full flex items-center justify-center text-[#001d3f] hover:bg-[#0093c8] transition-colors cursor-pointer"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a 
                href="https://www.facebook.com/siyanainfo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#5bc5f0] rounded-full flex items-center justify-center text-[#001d3f] hover:bg-[#0093c8] transition-colors cursor-pointer"
              >
                <i className="ri-facebook-fill"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#5bc5f0] mb-6">Expertise</h3>
            <ul className="space-y-3">
              <li><Link href="/services/enterprise-software" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer text-sm">Cybersecurity</Link></li>
              <li><Link href="/services/web-development" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer text-sm">IT Engineering</Link></li>
              <li><Link href="/services/mobile-app-development" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer text-sm">Cloud & Mobility</Link></li>
              <li><Link href="/services/digital-marketing" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer text-sm">Program Management</Link></li>
              <li><Link href="/services/business-intelligence" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer text-sm">Training & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#5bc5f0]">Company</h3>
            <div className="space-y-3">
              <Link href="/about" className="text-gray-300 hover:text-[#5bc5f0] transition-colors block cursor-pointer">
                About Us
              </Link>
              <Link href="/schedule-call" className="text-gray-300 hover:text-[#5bc5f0] transition-colors block cursor-pointer">
                Schedule Call
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#5bc5f0] mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-[#5bc5f0] mt-1 text-sm"></i>
                <div>
                  <p className="text-gray-300 text-sm">
                    1302, 13th Floor, Shivalik Shilp<br />
                    ISCON Circle, SG Highway<br />
                    Ahmedabad 380015
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-[#5bc5f0] text-sm"></i>
                <p className="text-gray-300 text-sm">+91 99746 31174</p>
              </div>

              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-[#5bc5f0] text-sm"></i>
                <p className="text-gray-300 text-sm">hr@siyanainfo.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#041f4a] mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              2024 Siyana Info Solutions. All rights reserved.
            </div>

            <div className="flex flex-wrap gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-[#5bc5f0] transition-colors cursor-pointer">Privacy Policy</Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-[#5bc5f0] transition-colors cursor-pointer">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
