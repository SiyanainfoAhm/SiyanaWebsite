
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#001d3f] to-[#041f4a]">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            These terms and conditions govern your use of our website and services. Please read them carefully before using our services.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="ri-file-text-line text-2xl text-[#5bc5f0]"></i>
                  <span className="text-sm text-gray-500">Last updated: January 2024</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  These Terms of Service ("Terms") constitute a legally binding agreement between you and Siyana Info Solutions ("Company," "we," "our," or "us") regarding your use of our website and services. By accessing or using our services, you agree to be bound by these Terms.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">1. Acceptance of Terms</h2>
                  <p className="text-gray-600 mb-4">By accessing and using our website or services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree to these Terms, you must not use our services.</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">You must be at least 18 years old to use our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">You must have the authority to enter into this agreement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Your use must comply with applicable laws and regulations</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">2. Services Description</h2>
                  <p className="text-gray-600 mb-4">Siyana Info Solutions provides information technology services including but not limited to:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Enterprise software development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Web and mobile application development</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Digital marketing services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Business intelligence solutions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">IT consulting and support services</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">3. User Obligations and Conduct</h2>
                  <p className="text-gray-600 mb-4">By using our services, you agree to:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Provide accurate and complete information when requested</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Use our services only for lawful purposes</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Respect intellectual property rights</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Not interfere with the operation of our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Maintain the confidentiality of any access credentials</span>
                    </li>
                  </ul>

                  <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <h3 className="font-semibold text-red-800 mb-2">Prohibited Activities</h3>
                    <p className="text-red-700 text-sm mb-2">You are strictly prohibited from:</p>
                    <ul className="text-red-700 text-sm space-y-1 ml-4">
                      <li>• Attempting to gain unauthorized access to our systems</li>
                      <li>• Distributing malware or engaging in harmful activities</li>
                      <li>• Violating any applicable laws or regulations</li>
                      <li>• Infringing on intellectual property rights</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">4. Intellectual Property Rights</h2>
                  <p className="text-gray-600 mb-4">All intellectual property rights in our services, including but not limited to software, content, trademarks, and proprietary information, remain the exclusive property of Siyana Info Solutions or our licensors.</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Our Rights</h3>
                  <ul className="space-y-2 ml-6 mb-4">
                    <li className="flex items-start space-x-2">
                      <i className="ri-copyright-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Ownership of all proprietary software and methodologies</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-copyright-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Protection of trade secrets and confidential information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-copyright-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Rights to our trademarks and brand materials</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Rights</h3>
                  <p className="text-gray-600">We grant you a limited, non-exclusive, non-transferable license to use our services in accordance with these Terms. You retain ownership of your data and content.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">5. Payment Terms and Conditions</h2>
                  <p className="text-gray-600 mb-4">Payment terms for our services are as follows:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Payment Schedule</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Project milestone-based payments</li>
                        <li>• Monthly recurring payments for ongoing services</li>
                        <li>• Upfront payments for certain services</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Payment Methods</h3>
                      <ul className="space-y-1 text-sm text-gray-600">
                        <li>• Bank transfers and wire transfers</li>
                        <li>• Online payment gateways</li>
                        <li>• Checks (for verified clients)</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-yellow-800 text-sm">
                      <strong>Important:</strong> Late payments may incur additional charges. Services may be suspended for overdue accounts.
                    </p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">6. Service Level Agreements</h2>
                  <p className="text-gray-600 mb-4">We are committed to providing high-quality services with the following standards:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#001d3f] mb-2">Uptime Commitment</h3>
                      <p className="text-sm text-gray-600">99.5% uptime for hosted applications and services</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#001d3f] mb-2">Support Response</h3>
                      <p className="text-sm text-gray-600">24/7 support with response within 4 hours</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#001d3f] mb-2">Project Delivery</h3>
                      <p className="text-sm text-gray-600">On-time delivery as per agreed timelines</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h3 className="font-semibold text-[#001d3f] mb-2">Quality Assurance</h3>
                      <p className="text-sm text-gray-600">Comprehensive testing and quality checks</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">7. Limitation of Liability</h2>
                  <p className="text-gray-600 mb-4">To the maximum extent permitted by law, Siyana Info Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span className="text-gray-600">Loss of profits or business opportunities</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span className="text-gray-600">Data loss or corruption</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span className="text-gray-600">Service interruptions</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-close-circle-line text-red-500 mt-1"></i>
                      <span className="text-gray-600">Third-party actions or failures</span>
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4">Our total liability shall not exceed the amount paid by you for the specific service that gave rise to the claim.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">8. Termination</h2>
                  <p className="text-gray-600 mb-4">Either party may terminate the service agreement under the following conditions:</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Termination by You</h3>
                      <p className="text-gray-600 text-sm">You may terminate services with 30 days written notice. Prepaid amounts for unused services may be refunded as per our refund policy.</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-2">Termination by Us</h3>
                      <p className="text-gray-600 text-sm">We may terminate services immediately for breach of terms, non-payment, or illegal activities. We may also terminate with 30 days notice for business reasons.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">9. Governing Law and Jurisdiction</h2>
                  <p className="text-gray-600 mb-4">These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from or relating to these Terms shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat, India.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">10. Changes to Terms</h2>
                  <p className="text-gray-600">We reserve the right to modify these Terms at any time. We will notify users of significant changes by email or through our website. Continued use of our services after such changes constitutes acceptance of the new Terms.</p>
                </div>

                <div className="bg-[#001d3f] text-white rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4 text-[#5bc5f0]">Contact Information</h2>
                  <p className="text-gray-200 mb-4">If you have any questions about these Terms of Service, please contact us:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-[#5bc5f0]"></i>
                      <span>Email: legal@siyanainfo.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-[#5bc5f0]"></i>
                      <span>Phone: +91 997-463-1174</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-map-pin-line text-[#5bc5f0] mt-1"></i>
                      <span>Address: 1302, 13th Floor, Shivalik Shilp, ISCON Circle, SG Highway, Ahmedabad 380015, Gujarat, India</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
