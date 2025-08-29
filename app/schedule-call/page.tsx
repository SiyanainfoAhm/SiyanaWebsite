
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ScheduleCallPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setSubmitStatus('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    setTimeout(() => {
      setSubmitStatus('Call scheduled successfully! You will receive a confirmation email shortly.');
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Schedule a Call</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Book a personalized call with our experts to discuss your project requirements and explore how we can help you achieve your goals.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-[#001d3f] mb-8 text-center">Schedule Your Call</h2>
              
              <form id="schedule-call-form" onSubmit={handleSubmit} className="space-y-6">
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
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm resize-none"
                    placeholder="Tell us about your project requirements or what you'd like to discuss..."
                    required
                  ></textarea>
                  <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                </div>

                {submitStatus && (
                  <div className={`p-4 rounded-lg ${submitStatus.includes('successfully') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                    {submitStatus}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-[#5bc5f0] text-[#001d3f] py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-[#001d3f] border-t-transparent rounded-full animate-spin mr-3"></div>
                      Scheduling Call...
                    </div>
                  ) : (
                    'Schedule Call'
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="mt-8 bg-[#001d3f] text-white rounded-xl p-6 text-center">
              <h3 className="text-xl font-bold text-[#5bc5f0] mb-4">Need Immediate Assistance?</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-center space-x-3">
                  <i className="ri-phone-line text-[#5bc5f0]"></i>
                  <span className="text-gray-200">+91 997-463-1174</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <i className="ri-mail-line text-[#5bc5f0]"></i>
                  <span className="text-gray-200">info@siyanainfo.com</span>
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
