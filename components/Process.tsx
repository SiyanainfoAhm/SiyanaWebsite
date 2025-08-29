'use client';

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We analyze your requirements, understand business goals, and conduct thorough research to define project scope.',
    icon: 'ri-search-line',
    details: ['Requirement Analysis', 'Stakeholder Interviews', 'Market Research', 'Technical Feasibility']
  },
  {
    number: '02',
    title: 'Design',
    description: 'Create comprehensive designs, architecture, and user experience that align with your business objectives.',
    icon: 'ri-pencil-ruler-2-line',
    details: ['System Architecture', 'UI/UX Design', 'Database Design', 'Technical Specifications']
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build robust, scalable solutions using cutting-edge technologies and industry best practices.',
    icon: 'ri-code-line',
    details: ['Agile Development', 'Quality Assurance', 'Code Reviews', 'Continuous Integration']
  },
  {
    number: '04',
    title: 'Deploy',
    description: 'Seamless deployment with comprehensive testing, user training, and system integration.',
    icon: 'ri-rocket-line',
    details: ['System Deployment', 'User Training', 'Performance Testing', 'Go-Live Support']
  },
  {
    number: '05',
    title: 'Support',
    description: 'Ongoing maintenance, updates, and technical support to ensure optimal system performance.',
    icon: 'ri-customer-service-2-line',
    details: ['24/7 Support', 'Regular Updates', 'Performance Monitoring', 'Enhancement Requests']
  }
];

export default function Process() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">Our Development Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery with transparency, quality, and client satisfaction.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#5bc5f0] to-[#0093c8] transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow relative z-10">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#5bc5f0] to-[#0093c8] rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <i className={`${step.icon} text-2xl text-white`}></i>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#001d3f] text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-[#001d3f] mb-2">{step.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-2">
                    {step.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#5bc5f0] rounded-full"></div>
                        <span className="text-xs text-gray-600">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#001d3f] to-[#041f4a] rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
              Let's discuss how our proven development process can help bring your vision to life with quality and efficiency.
            </p>
            <button className="bg-[#5bc5f0] text-[#001d3f] px-8 py-3 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-calendar-line mr-2"></i>
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}