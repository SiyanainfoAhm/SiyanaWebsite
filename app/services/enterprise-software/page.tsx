
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const features = [
  {
    icon: 'ri-settings-3-line',
    title: 'Custom ERP Systems',
    description: 'Tailored enterprise resource planning solutions that integrate all your business processes into a unified system for maximum efficiency.'
  },
  {
    icon: 'ri-government-line',
    title: 'Government Portals',
    description: 'Secure, scalable government portals designed to enhance citizen services and streamline bureaucratic processes with transparency.'
  },
  {
    icon: 'ri-flow-chart',
    title: 'Workflow Automation',
    description: 'Intelligent workflow automation that reduces manual intervention and accelerates business processes across departments.'
  },
  {
    icon: 'ri-plug-line',
    title: 'System Integration',
    description: 'Seamless integration of legacy systems with modern applications ensuring data consistency and operational continuity.'
  },
  {
    icon: 'ri-shield-check-line',
    title: 'Security & Compliance',
    description: 'Enterprise-grade security measures and compliance frameworks to protect sensitive data and meet regulatory requirements.'
  },
  {
    icon: 'ri-cloud-line',
    title: 'Cloud Infrastructure',
    description: 'Scalable cloud-based solutions that provide flexibility, reliability, and cost-effectiveness for enterprise operations.'
  }
];

const technologies = [
  { name: 'Java', icon: 'ri-cup-line' },
  { name: '.NET', icon: 'ri-microsoft-line' },
  { name: 'Spring Boot', icon: 'ri-leaf-line' },
  { name: 'Oracle', icon: 'ri-database-2-line' },
  { name: 'PostgreSQL', icon: 'ri-database-line' },
  { name: 'AWS', icon: 'ri-cloud-line' },
  { name: 'Azure', icon: 'ri-cloud-fill' },
  { name: 'Kubernetes', icon: 'ri-ship-line' }
];

const caseStudies = [
  {
    title: 'Digital Portal',
    client: 'State Government',
    challenge: 'Modernize citizen services and reduce bureaucratic delays',
    solution: 'Comprehensive digital portal with automated workflows and real-time tracking',
    results: ['75% reduction in processing time', '92% citizen satisfaction', '2M+ active users'],
    image: 'Modern government digital portal with clean interface, citizens accessing services on computers and mobile devices, official government building in background'
  },
  {
    title: 'Enterprise ERP Implementation',
    client: 'Manufacturing Company',
    challenge: 'Integrate multiple business units and streamline operations',
    solution: 'Custom ERP system with real-time analytics and automated processes',
    results: ['40% operational efficiency gain', '60% faster reporting', '₹2Cr annual savings'],
    image: 'Advanced manufacturing ERP system interface with real-time dashboards, workers using tablets in modern factory environment'
  }
];

export default function EnterpriseSoftwarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="pt-32 pb-20 bg-gradient-to-r from-[#001d3f] to-[#041f4a] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 29, 63, 0.85), rgba(4, 31, 74, 0.85)), url('https://readdy.ai/api/search-image?query=Enterprise%20software%20development%20with%20modern%20office%20environment%2C%20developers%20working%20on%20large%20screens%20with%20complex%20enterprise%20applications%2C%20professional%20technology%20workspace%20with%20multiple%20monitors%20displaying%20dashboards%20and%20analytics&width=1600&height=800&seq=enterprise-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Enterprise Software Development</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Build scalable, secure enterprise solutions that transform your business operations. Our expert team specializes in custom ERP systems, government portals, and mission-critical applications designed for large-scale organizations.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-quote"
                className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                Start Your Project
              </Link>
              <Link 
                href="/talk-to-experts"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap"
              >
                Consult Expert
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Enterprise Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive enterprise software solutions designed to meet the complex needs of large organizations and government agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#5bc5f0] rounded-xl flex items-center justify-center mb-4">
                  <i className={`${feature.icon} text-2xl text-[#001d3f]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#001d3f] mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Technologies We Use</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge technologies and frameworks that power our enterprise solutions for maximum performance and scalability.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#5bc5f0] rounded-lg shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center">
                  <i className={`${tech.icon} text-3xl text-[#001d3f]`}></i>
                </div>
                <h3 className="font-semibold text-[#001d3f]">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from enterprise projects that have transformed organizations and improved operational efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=${encodeURIComponent(study.image)}&width=600&height=400&seq=case${index}&orientation=landscape')`
                  }}
                ></div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-[#001d3f] mb-2">{study.title}</h3>
                  <p className="text-[#5bc5f0] font-semibold mb-4">{study.client}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                      <div className="space-y-1">
                        {study.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#5bc5f0] rounded-full"></div>
                            <span className="text-gray-600 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001d3f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Enterprise?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's discuss how our enterprise software solutions can streamline your operations and drive digital transformation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-quote"
              className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              Get Project Quote
            </Link>
            <Link 
              href="/schedule-consultation"
              className="border-2 border-[#5bc5f0] text-[#5bc5f0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#5bc5f0] hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap"
            >
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
