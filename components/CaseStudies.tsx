
'use client';

import { useState } from 'react';

const caseStudies = [
  {
    id: 1,
    title: 'Gujarat State Portal Modernization',
    category: 'Government',
    client: 'Gujarat Government',
    duration: '18 months',
    image: 'https://readdy.ai/api/search-image?query=Modern%20government%20digital%20portal%20interface%20with%20clean%20design%2C%20professional%20government%20building%20in%20background%2C%20citizens%20using%20digital%20services%20on%20tablets%20and%20computers%2C%20official%20government%20branding%20with%20navy%20blue%20color%20scheme&width=800&height=600&seq=case1&orientation=landscape',
    challenge: 'The existing government portal was outdated, causing delays in citizen services and inefficient bureaucratic processes.',
    solution: 'Developed a comprehensive digital portal with automated workflows, real-time tracking, and mobile-first design for better accessibility.',
    results: [
      '75% reduction in processing time',
      '92% citizen satisfaction rate', 
      '60% operational cost savings',
      '2M+ active users within 6 months'
    ],
    technologies: ['React.js', 'Node.js', 'PostgreSQL', 'AWS Cloud', 'Mobile App']
  },
  {
    id: 2,
    title: 'Healthcare Network Integration',
    category: 'Healthcare',
    client: 'Regional Medical Authority',
    duration: '12 months',
    image: 'https://readdy.ai/api/search-image?query=Integrated%20healthcare%20network%20with%20multiple%20hospitals%20connected%20digitally%2C%20medical%20professionals%20using%20unified%20patient%20records%20system%2C%20modern%20hospital%20environment%20with%20digital%20displays%20showing%20patient%20data&width=800&height=600&seq=case2&orientation=landscape',
    challenge: 'Fragmented healthcare data across 50+ medical facilities leading to inefficient patient care and duplicated efforts.',
    solution: 'Implemented CureTech platform to create unified patient records, appointment systems, and inter-facility communication.',
    results: [
      '65% faster patient processing',
      '40% improvement in diagnosis accuracy',
      '35% reduction in administrative costs',
      '50+ facilities successfully integrated'
    ],
    technologies: ['CureTech Platform', 'HL7 Integration', 'Cloud Infrastructure', 'Mobile Apps', 'API Gateway']
  },
  {
    id: 3,
    title: 'Manufacturing ERP Transformation',
    category: 'Manufacturing',
    client: 'Gujarat Textile Consortium',
    duration: '15 months',
    image: 'https://readdy.ai/api/search-image?query=Advanced%20manufacturing%20facility%20with%20digital%20ERP%20systems%2C%20workers%20using%20tablets%20for%20inventory%20management%2C%20automated%20production%20lines%20with%20real-time%20monitoring%20dashboards%2C%20modern%20textile%20factory%20environment&width=800&height=600&seq=case3&orientation=landscape',
    challenge: 'Complex supply chain management across multiple textile units with manual inventory tracking and inefficient resource allocation.',
    solution: 'Custom ERP system with real-time inventory tracking, automated procurement, and predictive analytics for demand forecasting.',
    results: [
      '50% inventory optimization',
      '30% reduction in operational costs',
      '95% improvement in demand forecasting',
      '15 manufacturing units integrated'
    ],
    technologies: ['Custom ERP', 'IoT Integration', 'Machine Learning', 'Real-time Analytics', 'Mobile Dashboard']
  },
  {
    id: 4,
    title: 'Smart City Infrastructure',
    category: 'Smart Solutions',
    client: 'Municipal Corporation',
    duration: '24 months',
    image: 'https://readdy.ai/api/search-image?query=Smart%20city%20infrastructure%20dashboard%20displaying%20IoT%20sensors%2C%20traffic%20management%20systems%2C%20urban%20planning%20interface%20with%20modern%20city%20skyline%20background%2C%20futuristic%20technology%20visualization%20with%20data%20streams%20and%20monitoring%20displays%2C%20blue%20and%20turquoise%20color%20scheme&width=800&height=600&seq=case4&orientation=landscape',
    challenge: 'Inefficient urban infrastructure management with no real-time monitoring and poor resource allocation across city services.',
    solution: 'IoT-enabled smart city solution for traffic management, waste collection optimization, and public service coordination.',
    results: [
      '30% traffic efficiency improvement',
      '15 smart city modules deployed',
      '24/7 monitoring system active',
      '45% reduction in response time'
    ],
    technologies: ['IoT Sensors', 'Smart City Platform', 'Real-time Analytics', 'Mobile Apps', 'Cloud Infrastructure']
  }
];

export default function CaseStudies() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % caseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">
            Success <span className="text-[#5bc5f0]">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real results from our government and enterprise projects. 
            Discover how we've transformed organizations through innovative technology solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto relative">
          <div className="bg-gradient-to-br from-[#001d3f] to-[#041f4a] rounded-2xl overflow-hidden text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                    {caseStudies[currentSlide].category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold mb-6">
                  {caseStudies[currentSlide].title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  {caseStudies[currentSlide].challenge}
                </p>
                
                <div className="space-y-4 mb-8">
                  {caseStudies[currentSlide].results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-6 h-6 bg-[#5bc5f0] rounded-full flex items-center justify-center">
                        <i className="ri-check-line text-[#001d3f] text-sm"></i>
                      </div>
                      <span className="font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {caseStudies[currentSlide].technologies.map((tech, index) => (
                    <span key={index} className="bg-white/10 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <button className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors cursor-pointer whitespace-nowrap inline-flex items-center">
                  View Project Details
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>
              
              <div className="relative h-64 lg:h-auto">
                <img
                  src={caseStudies[currentSlide].image}
                  alt={caseStudies[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-4">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-[#5bc5f0] text-white rounded-full hover:bg-[#0093c8] transition-colors cursor-pointer flex items-center justify-center"
            >
              <i className="ri-arrow-left-line"></i>
            </button>
            
            <div className="flex space-x-2">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors cursor-pointer ${
                    index === currentSlide ? 'bg-[#5bc5f0]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-[#5bc5f0] text-white rounded-full hover:bg-[#0093c8] transition-colors cursor-pointer flex items-center justify-center"
            >
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}