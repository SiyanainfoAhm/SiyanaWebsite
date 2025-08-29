
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('Please fill in all required fields marked with asterisks (*).');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    // Character limit validation
    if (formData.message.length > 500) {
      setSubmitStatus('Message must not exceed 500 characters.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare form data using application/x-www-form-urlencoded format
      const formDataToSubmit = new URLSearchParams();
      formDataToSubmit.append('name', formData.name);
      formDataToSubmit.append('email', formData.email);
      formDataToSubmit.append('phone', formData.phone || '');
      formDataToSubmit.append('company', formData.company || '');
      formDataToSubmit.append('message', formData.message);

      // Submit to the specified form storage address
      const response = await fetch('https://readdy.ai/api/form/d2nuteik0nafr2t3j6b0', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSubmit.toString()
      });

      if (response.ok) {
        setSubmitStatus('Thank you for your message! We will get back to you within 24 hours.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: ''
        });
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('Sorry, there was an error submitting your form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Ready to transform your business with innovative IT solutions? Get in touch with our team of experts today.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <h2 className="text-3xl font-bold text-[#001d3f] mb-8">Send Us a Message</h2>
                
                <form id="contact-form" data-readdy-form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
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
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
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
                    <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm"
                      placeholder="+91 XXXXX XXXXX"
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

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      maxLength={500}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm resize-none"
                      placeholder="Please describe your requirements or inquiry in detail..."
                      required
                    ></textarea>
                    <p className="text-sm text-gray-500 mt-1">{formData.message.length}/500 characters</p>
                  </div>

                  {submitStatus && (
                    <div className={`p-4 rounded-lg ${submitStatus.includes('Thank you') ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
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
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-[#001d3f] text-white rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-[#5bc5f0]">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <i className="ri-map-pin-line text-[#5bc5f0] mt-1"></i>
                      <div>
                        <h4 className="font-semibold mb-1">Address</h4>
                        <p className="text-gray-300 text-sm whitespace-pre-line">1302, 13th Floor, Shivalik Shilp
ISCON Circle, SG Highway
Ahmedabad 380015</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <i className="ri-phone-line text-[#5bc5f0]"></i>
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <p className="text-gray-300">+91 99746 31174</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <i className="ri-mail-line text-[#5bc5f0]"></i>
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <p className="text-gray-300">hr@siyanainfo.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <i className="ri-time-line text-[#5bc5f0]"></i>
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-[#001d3f] mb-6">Quick Actions</h3>
                  <div className="space-y-3">
                    <a 
                      href="/get-quote" 
                      className="flex items-center space-x-3 text-[#001d3f] hover:text-[#5bc5f0] transition-colors cursor-pointer"
                    >
                      <i className="ri-file-text-line"></i>
                      <span>Request a Project Quote</span>
                    </a>
                    <a 
                      href="/schedule-call" 
                      className="flex items-center space-x-3 text-[#001d3f] hover:text-[#5bc5f0] transition-colors cursor-pointer"
                    >
                      <i className="ri-calendar-line"></i>
                      <span>Schedule a Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mt-16">
              <h2 className="text-3xl font-bold text-[#001d3f] text-center mb-8">Find Us</h2>
              <div className="bg-gray-200 rounded-xl overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5987248073263!2d72.5211367!3d23.0344839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5c5c0c9c9d%3A0x1234567890abcdef!2sISCON%20Circle%2C%20Ahmedabad!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Siyana Info Solutions Office Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
