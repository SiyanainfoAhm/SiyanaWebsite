'use client';

import Link from 'next/link';

const products = [
  {
    name: 'GovTech Suite',
    description: 'Comprehensive digital governance platform for government agencies',
    features: ['Citizen Services Portal', 'Document Management', 'Workflow Automation', 'Analytics Dashboard'],
    icon: 'ri-government-line',
    category: 'Government Solutions'
  },
  {
    name: 'HealthCare Pro',
    description: 'Integrated hospital management system with patient care focus',
    features: ['Patient Management', 'Appointment Scheduling', 'Billing Integration', 'Medical Records'],
    icon: 'ri-hospital-line',
    category: 'Healthcare Technology'
  },
  {
    name: 'EduManage',
    description: 'Complete educational institution management platform',
    features: ['Student Information System', 'Learning Management', 'Fee Management', 'Parent Portal'],
    icon: 'ri-graduation-cap-line',
    category: 'Education Technology'
  },
  {
    name: 'Enterprise Hub',
    description: 'Scalable ERP solution for medium to large enterprises',
    features: ['Resource Planning', 'Inventory Management', 'Financial Reporting', 'HR Management'],
    icon: 'ri-building-line',
    category: 'Enterprise Solutions'
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready-to-deploy solutions designed for specific industry needs, customizable to your requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" data-product-shop>
          {products.map((product, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-[#5bc5f0] rounded-xl flex items-center justify-center">
                  <i className={`${product.icon} text-2xl text-[#001d3f]`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001d3f]">{product.name}</h3>
                  <p className="text-sm text-gray-600">{product.category}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-[#001d3f] mb-3">Key Features:</h4>
                <div className="space-y-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <i className="ri-check-line text-[#5bc5f0]"></i>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-3">
                <Link 
                  href="/contact"
                  className="bg-[#001d3f] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#041f4a] transition-colors cursor-pointer text-sm whitespace-nowrap"
                >
                  Learn More
                </Link>
                <Link 
                  href="/get-quote"
                  className="border border-[#001d3f] text-[#001d3f] px-4 py-2 rounded-lg font-semibold hover:bg-[#001d3f] hover:text-white transition-colors cursor-pointer text-sm whitespace-nowrap"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}