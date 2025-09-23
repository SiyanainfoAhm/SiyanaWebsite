'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    if (!email) {
      setSubmitStatus('Please enter your email address.');
      setIsSubmitting(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setSubmitStatus('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate newsletter signup
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('Thank you for subscribing! You will receive our latest updates.');
      setEmail('');
    } catch (error) {
      setSubmitStatus('Sorry, there was an error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 bg-[#001d3f]">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4 text-[#5bc5f0]">Stay Updated</h2>
          <p className="text-gray-200 mb-8">
            Subscribe to our newsletter for the latest insights on technology trends, 
            government solutions, and industry best practices.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5bc5f0]"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-[#5bc5f0] text-[#001d3f] px-6 py-3 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap disabled:opacity-50"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
          
          {submitStatus && (
            <p className={`mt-4 text-sm ${submitStatus.includes('Thank you') ? 'text-green-400' : 'text-red-400'}`}>
              {submitStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}