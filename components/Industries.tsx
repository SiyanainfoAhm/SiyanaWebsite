
'use client';

import { useState } from 'react';
import Link from 'next/link';

const industries = [
  {
    id: 'government',
    name: 'Government & Public Sector',
    description: 'Specialized solutions for government agencies, municipal corporations, and public sector enterprises with focus on transparency, efficiency, and citizen services.',
    icon: 'ri-government-line',
    capabilities: ['Digital Citizen Services', 'Compliance Management', 'Data Security & Privacy', 'Process Automation']
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    description: 'Digital health solutions including hospital management systems, telemedicine platforms, and patient care applications that improve healthcare delivery.',
    icon: 'ri-hospital-line',
    capabilities: ['Electronic Health Records', 'Telemedicine Platforms', 'Medical Device Integration', 'HIPAA Compliance']
  },
  {
    id: 'education',
    name: 'Education & Research',
    description: 'Educational technology solutions for schools, colleges, and training institutes including learning management systems and student information systems.',
    icon: 'ri-graduation-cap-line',
    capabilities: ['Learning Management Systems', 'Student Information Systems', 'Online Assessment Tools', 'Research Data Management']
  },
  {
    id: 'finance',
    name: 'Finance & Banking',
    description: 'Secure fintech solutions including banking applications, payment gateways, and financial management systems with regulatory compliance.',
    icon: 'ri-bank-line',
    capabilities: ['Core Banking Systems', 'Payment Processing', 'Risk Management', 'Regulatory Compliance']
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing & Supply Chain',
    description: 'Industry 4.0 solutions for manufacturing companies including ERP systems, supply chain management, and production optimization tools.',
    icon: 'ri-settings-3-line',
    capabilities: ['ERP Implementation', 'Supply Chain Optimization', 'IoT Integration', 'Quality Management']
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    description: 'Smart grid solutions, utility management systems, and energy optimization platforms for sustainable operations and efficiency.',
    icon: 'ri-flashlight-line',
    capabilities: ['Smart Grid Management', 'Energy Monitoring', 'Asset Management', 'Sustainability Reporting']
  }
];

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState('government');
  const activeData = industries.find(ind => ind.id === activeIndustry);

  return (
    <section id="industries" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">Industries We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We partner with a wide range of industries, providing innovative IT solutions tailored to their unique challenges and mission needs.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {industries.map((industry) => (
            <button
              key={industry.id}
              onClick={() => setActiveIndustry(industry.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeIndustry === industry.id
                  ? 'bg-[#5bc5f0] text-[#001d3f] shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-[#5bc5f0] hover:text-[#5bc5f0]'
              }`}
            >
              <i className={`${industry.icon} mr-2`}></i>
              {industry.name}
            </button>
          ))}
        </div>

        {activeData && (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-[#5bc5f0] rounded-xl flex items-center justify-center">
                    <i className={`${activeData.icon} text-2xl text-[#001d3f]`}></i>
                  </div>
                  <h3 className="text-2xl font-bold text-[#001d3f]">{activeData.name}</h3>
                </div>
                
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                  {activeData.description}
                </p>
                
                <Link 
                  href="/talk-to-experts"
                  className="bg-[#001d3f] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#041f4a] transition-colors cursor-pointer whitespace-nowrap inline-flex items-center"
                >
                  <i className="ri-arrow-right-line mr-2"></i>
                  Explore Solutions
                </Link>
              </div>
              
              <div className="bg-gradient-to-br from-[#001d3f] to-[#041f4a] text-white p-8 lg:p-12">
                <h4 className="text-xl font-bold mb-6 text-[#5bc5f0]">Our Capabilities</h4>
                
                <h5 className="text-lg font-semibold mb-6">How We Support {activeData.name}</h5>
                
                <div className="space-y-4 mb-8">
                  {activeData.capabilities.map((capability, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#5bc5f0] rounded-full flex items-center justify-center flex-shrink-0">
                        <i className="ri-check-line text-[#001d3f] text-sm"></i>
                      </div>
                      <span className="text-gray-200">{capability}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-white/10 rounded-lg p-4 mb-6">
                  <p className="text-gray-200 text-sm italic">
                    "We deliver reliable, scalable solutions that meet the unique regulatory and operational requirements of the {activeData.name.toLowerCase()} sector."
                  </p>
                </div>
                
                <Link 
                  href="/get-quote"
                  className="bg-[#5bc5f0] text-[#001d3f] px-4 py-2 rounded-lg font-semibold hover:bg-[#0093c8] transition-colors cursor-pointer text-sm whitespace-nowrap inline-flex items-center"
                >
                  <i className="ri-message-line mr-2"></i>
                  Request Consultation
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
