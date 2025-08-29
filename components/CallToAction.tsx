
'use client';

import Link from 'next/link';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#001d3f] to-[#041f4a] text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 leading-relaxed">
            Partner with Siyana Info Solutions to unlock the full potential of technology for your mission. 
            Let's discuss how our expertise can drive your digital transformation journey.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5bc5f0] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-phone-line text-2xl text-[#001d3f]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Schedule a Call</h3>
              <p className="text-gray-300 mb-4">Speak directly with our experts to discuss your specific requirements and challenges.</p>
              <Link 
                href="/schedule-call"
                className="text-[#5bc5f0] font-semibold hover:text-white transition-colors cursor-pointer"
              >
                Book Now →
              </Link>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-[#5bc5f0] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-file-text-line text-2xl text-[#001d3f]"></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">Request a Quote</h3>
              <p className="text-gray-300 mb-4">Get a detailed proposal tailored to your project requirements and budget.</p>
              <Link 
                href="/get-quote"
                className="text-[#5bc5f0] font-semibold hover:text-white transition-colors cursor-pointer"
              >
                Get Quote →
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-chat-3-line mr-2"></i>
              Talk to Our Experts
            </Link>
            <Link 
              href="/get-quote"
              className="border-2 border-[#5bc5f0] text-[#5bc5f0] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5bc5f0] hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center"
            >
              <i className="ri-file-text-line mr-2"></i>
              Get Free Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
