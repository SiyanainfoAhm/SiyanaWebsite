
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#001d3f] text-white sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3 cursor-pointer">
              <Image 
                src="https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/8c7f99aa674fd6b39cbe8dfa3abcac9f.png"
                alt="Siyana Info Solutions"
                width={40}
                height={40}
                className="object-contain"
              />
              <span className="text-2xl font-['Pacifico'] text-[#5bc5f0]">Siyana</span>
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <div className="flex items-center space-x-8">
              <Link href="/" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer">
                Home
              </Link>

              <Link href="/about" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer">
                About Us
              </Link>

              <div className="relative group">
                <button className="flex items-center text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer">
                  Expertise
                  <i className="ri-arrow-down-s-line ml-1 group-hover:rotate-180 transition-transform"></i>
                </button>
                <div className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-200">
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-3">
                      <Link href="/services/business-intelligence" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-[#5bc5f0]/10 rounded-lg flex items-center justify-center mr-3">
                          <i className="ri-bar-chart-line text-[#5bc5f0]"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-[#001d3f]">Business Intelligence (BI)</div>
                          <div className="text-sm text-gray-600">Data analytics & reporting</div>
                        </div>
                      </Link>
                      <Link href="/services/digital-marketing" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-[#5bc5f0]/10 rounded-lg flex items-center justify-center mr-3">
                          <i className="ri-megaphone-line text-[#5bc5f0]"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-[#001d3f]">Digital Marketing</div>
                          <div className="text-sm text-gray-600">SEO & digital strategies</div>
                        </div>
                      </Link>
                      <Link href="/services/enterprise-software" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-[#5bc5f0]/10 rounded-lg flex items-center justify-center mr-3">
                          <i className="ri-building-line text-[#5bc5f0]"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-[#001d3f]">ERP Solutions</div>
                          <div className="text-sm text-gray-600">Enterprise resource planning</div>
                        </div>
                      </Link>
                      <Link href="/services/mobile-app-development" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-[#5bc5f0]/10 rounded-lg flex items-center justify-center mr-3">
                          <i className="ri-smartphone-line text-[#5bc5f0]"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-[#001d3f]">Mobile App Development</div>
                          <div className="text-sm text-gray-600">Native & cross-platform apps</div>
                        </div>
                      </Link>
                      <Link href="/services/web-development" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                        <div className="w-10 h-10 bg-[#5bc5f0]/10 rounded-lg flex items-center justify-center mr-3">
                          <i className="ri-code-line text-[#5bc5f0]"></i>
                        </div>
                        <div>
                          <div className="font-semibold text-[#001d3f]">Web Development</div>
                          <div className="text-sm text-gray-600">Responsive web applications</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/contact" className="text-gray-300 hover:text-[#5bc5f0] transition-colors cursor-pointer">
                Contact
              </Link>
            </div>
          </nav>

          <div className="hidden md:flex space-x-4">
            <Link href="/get-quote" className="bg-[#5bc5f0] text-[#001d3f] px-6 py-2 rounded-lg font-semibold hover:bg-[#0093c8] transition-colors cursor-pointer whitespace-nowrap">
              Get a Quote
            </Link>
          </div>

          <button 
            className="md:hidden w-6 h-6 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-[#041f4a] pt-4">
            <nav className="flex flex-col space-y-3">
              <Link href="/" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">Home</Link>
              <Link href="/about" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">About Us</Link>
              <Link href="/services/business-intelligence" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">Business Intelligence (BI)</Link>
              <Link href="/services/digital-marketing" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">Digital Marketing</Link>
              <Link href="/services/enterprise-software" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">ERP Solutions</Link>
              <Link href="/services/mobile-app-development" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">Mobile App Development</Link>
              <Link href="/services/web-development" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">Web Development</Link>
              <Link href="/contact" className="hover:text-[#5bc5f0] transition-colors cursor-pointer">Contact</Link>
            </nav>
            <Link href="/get-quote" className="bg-[#5bc5f0] text-[#001d3f] px-6 py-2 rounded-lg font-semibold hover:bg-[#0093c8] transition-colors cursor-pointer mt-4 whitespace-nowrap inline-block">
              Get a Quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
