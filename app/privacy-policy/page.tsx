
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#001d3f] to-[#041f4a]">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, use, and protect your personal information.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-4">
                  <i className="ri-shield-check-line text-2xl text-[#5bc5f0]"></i>
                  <span className="text-sm text-gray-500">Last updated: January 2024</span>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Siyana Info Solutions ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Information We Collect</h2>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Personal Information</h3>
                  <p className="text-gray-600 mb-4">We may collect personal information that you voluntarily provide to us, including but not limited to:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Name, email address, and phone number</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Company name and designation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Project requirements and business information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Communication preferences and feedback</span>
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-800 mb-3 mt-6">Automatically Collected Information</h3>
                  <p className="text-gray-600 mb-4">When you visit our website, we may automatically collect certain information:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">IP address and browser type</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Device information and operating system</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Pages visited and time spent on our website</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-arrow-right-s-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Referring website and search terms used</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">How We Use Your Information</h2>
                  <p className="text-gray-600 mb-4">We use the collected information for various purposes, including:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Providing and maintaining our services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Responding to your inquiries and providing customer support</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Sending you information about our services and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Improving our website and services</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Complying with legal obligations and protecting our rights</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Information Sharing and Disclosure</h2>
                  <p className="text-gray-600 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:</p>
                  <ul className="space-y-3 ml-6">
                    <li className="text-gray-600">
                      <span className="font-semibold">Service Providers:</span> We may share information with trusted third-party service providers who assist us in operating our website and conducting business.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Legal Requirements:</span> We may disclose information if required by law or in response to valid legal processes.
                    </li>
                    <li className="text-gray-600">
                      <span className="font-semibold">Business Transfers:</span> Information may be transferred in connection with a merger, acquisition, or sale of business assets.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Data Security</h2>
                  <p className="text-gray-600 mb-4">We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Encryption of sensitive data in transit and at rest</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Regular security assessments and updates</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Access controls and employee training programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-shield-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Secure data centers and backup systems</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Your Rights and Choices</h2>
                  <p className="text-gray-600 mb-4">You have certain rights regarding your personal information:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-user-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600"><span className="font-semibold">Access:</span> Request access to your personal information we hold</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-edit-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600"><span className="font-semibold">Correction:</span> Request correction of inaccurate or incomplete information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-delete-bin-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600"><span className="font-semibold">Deletion:</span> Request deletion of your personal information</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-mail-unread-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600"><span className="font-semibold">Opt-out:</span> Unsubscribe from marketing communications</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Cookies and Tracking Technologies</h2>
                  <p className="text-gray-600 mb-4">We use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. Our website uses:</p>
                  <ul className="space-y-2 ml-6">
                    <li className="flex items-start space-x-2">
                      <i className="ri-settings-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Essential cookies for website functionality</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-bar-chart-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Analytics cookies to understand website usage</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="ri-heart-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-600">Preference cookies to remember your settings</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Data Retention</h2>
                  <p className="text-gray-600">We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">International Data Transfers</h2>
                  <p className="text-gray-600">Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your personal information in accordance with this Privacy Policy and applicable data protection laws.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Changes to This Privacy Policy</h2>
                  <p className="text-gray-600">We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last updated" date.</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-[#001d3f] mb-4">Contact Us</h2>
                  <p className="text-gray-600 mb-4">If you have any questions about this Privacy Policy or our privacy practices, please contact us:</p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-[#5bc5f0]"></i>
                      <span className="text-gray-700">Email: hr@siyanainfo.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-[#5bc5f0]"></i>
                      <span className="text-gray-700">Phone: +91 99746 31174</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-map-pin-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-700">Address: 1302, 13th Floor, Shivalik Shilp, ISCON Circle, SG Highway, Ahmedabad 380015, Gujarat, India</span>
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
