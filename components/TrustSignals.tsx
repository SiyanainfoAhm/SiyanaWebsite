
'use client';

const certifications = [
  { name: 'ISO 9001:2015', description: 'Quality Management System', icon: 'ri-award-line' },
  { name: 'ISO 27001:2013', description: 'Information Security Management', icon: 'ri-shield-check-line' },
  { name: 'CMMI Level 3', description: 'Process Improvement Model', icon: 'ri-bar-chart-box-line' },
  { name: 'NASSCOM Member', description: 'National Software Industry Body', icon: 'ri-community-line' }
];

const awards = [
  { year: '2023', title: 'Best Government IT Solution Provider', organization: 'Gujarat IT Awards' },
  { year: '2023', title: 'Excellence in Digital Transformation', organization: 'India IT Excellence Awards' },
  { year: '2022', title: 'Outstanding Healthcare Technology', organization: 'Healthcare Innovation Awards' },
  { year: '2022', title: 'Top IT Company - Gujarat', organization: 'Business Excellence Awards' }
];

export default function TrustSignals() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">Trusted & Recognized</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated by industry certifications and prestigious awards.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-[#001d3f] mb-8 text-center">Certifications</h3>
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#5bc5f0] rounded-lg flex items-center justify-center">
                      <i className={`${cert.icon} text-xl text-[#001d3f]`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#001d3f] text-lg">{cert.name}</h4>
                      <p className="text-gray-600 text-sm">{cert.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-[#001d3f] mb-8 text-center">Awards & Recognition</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <div key={index} className="bg-gradient-to-r from-[#001d3f] to-[#041f4a] text-white rounded-lg p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                      {award.year}
                    </span>
                    <i className="ri-trophy-line text-2xl text-[#5bc5f0]"></i>
                  </div>
                  <h4 className="font-bold text-lg mb-2">{award.title}</h4>
                  <p className="text-gray-200 text-sm">{award.organization}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#001d3f] to-[#041f4a] rounded-2xl p-8 lg:p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Experience the same level of excellence that has earned us recognition across Gujarat and India. Let's discuss your next digital transformation project.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-phone-line mr-2"></i>
              Schedule a Call
            </button>
            <button className="border-2 border-[#5bc5f0] text-[#5bc5f0] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5bc5f0] hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-file-text-line mr-2"></i>
              Get Free Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}