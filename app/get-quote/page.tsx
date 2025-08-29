
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function GetQuotePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.description) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('Thank you! Your quote request has been submitted. We will contact you within 24 hours.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budget: '',
        timeline: '',
        description: ''
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#001d3f] to-[#041f4a]">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get Your Project Quote</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Tell us about your project requirements and get a detailed quote from our experts. We're here to turn your ideas into reality.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h2 className="text-3xl font-bold text-[#001d3f] mb-8">Project Details</h2>
                  
                  <form id="quote-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm"
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Phone Number *</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm"
                          placeholder="+91 XXXXX XXXXX"
                          required
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Project Type</label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm pr-8"
                        >
                          <option value="">Select project type</option>
                          <option value="enterprise-software">Enterprise Software Development</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="business-intelligence">Business Intelligence</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-gray-700 font-semibold mb-2">Budget Range</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm pr-8"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-50k">Under ₹50,000</option>
                          <option value="50k-1l">₹50,000 - ₹1,00,000</option>
                          <option value="1l-5l">₹1,00,000 - ₹5,00,000</option>
                          <option value="5l-10l">₹5,00,000 - ₹10,00,000</option>
                          <option value="above-10l">Above ₹10,00,000</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Timeline</label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm pr-8"
                      >
                        <option value="">Select timeline</option>
                        <option value="urgent">ASAP (Within 1 month)</option>
                        <option value="normal">2-3 months</option>
                        <option value="flexible">3-6 months</option>
                        <option value="long-term">6+ months</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Project Description *</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        rows={6}
                        maxLength={500}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm resize-none"
                        placeholder="Describe your project requirements, features, and any specific needs..."
                        required
                      ></textarea>
                      <p className="text-sm text-gray-500 mt-1">{formData.description.length}/500 characters</p>
                    </div>

                    {submitStatus && (
                      <div className={`p-4 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                        {submitStatus}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || formData.description.length > 500}
                      className="w-full bg-[#5bc5f0] text-[#001d3f] py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-[#001d3f] border-t-transparent rounded-full animate-spin mr-3"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Get My Quote'
                      )}
                    </button>
                  </form>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-[#001d3f] text-white rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 text-[#5bc5f0]">Why Choose Siyana?</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-sm">15+ years of excellence in IT solutions</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-sm">500+ successful projects delivered</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-sm">Expertise in government and enterprise projects</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-check-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-sm">24/7 technical support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-[#001d3f] mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <i className="ri-phone-line text-[#5bc5f0]"></i>
                      <span className="text-gray-700">+91 99746 31174</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <i className="ri-mail-line text-[#5bc5f0]"></i>
                      <span className="text-gray-700">hr@siyanainfo.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <i className="ri-map-pin-line text-[#5bc5f0] mt-1"></i>
                      <span className="text-gray-700 text-sm">1302, 13th Floor, Shivalik Shilp, ISCON Circle, SG Highway, Ahmedabad 380015</span>
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
