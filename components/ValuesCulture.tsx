
'use client';

const values = [
  {
    title: 'People First',
    description: 'We believe our people are our greatest asset. Creating an environment where talent thrives leads to exceptional client outcomes.',
    icon: 'ri-team-line'
  },
  {
    title: 'Inclusive Culture',
    description: 'Diversity of thought and background drives innovation. We foster an inclusive workplace where every voice is heard and valued.',
    icon: 'ri-community-line'
  },
  {
    title: 'Continuous Learning',
    description: 'In a rapidly evolving tech landscape, we invest in continuous learning and development to stay ahead of industry trends.',
    icon: 'ri-book-open-line'
  },
  {
    title: 'Client Mission Focus',
    description: 'We align ourselves with our clients missions, treating their success as our own and delivering solutions that truly matter.',
    icon: 'ri-target-line'
  }
];

const cultureHighlights = [
  { metric: '95%', label: 'Employee Satisfaction Rate', icon: 'ri-emotion-happy-line' },
  { metric: '3.2%', label: 'Annual Turnover Rate', icon: 'ri-user-heart-line' },
  { metric: '40+', label: 'Training Hours per Employee', icon: 'ri-graduation-cap-line' },
  { metric: '98%', label: 'Client Retention Rate', icon: 'ri-customer-service-line' }
];

export default function ValuesCulture() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">
            Values & <span className="text-[#5bc5f0]">Culture</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our cohesive, inclusive culture nurtures top talent and ensures high-quality work. 
            When our people succeed, our clients missions succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-14 h-14 bg-[#5bc5f0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <i className={`${value.icon} text-xl text-[#001d3f]`}></i>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#001d3f] mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative">
            <img
              src="https://readdy.ai/api/search-image?query=Diverse%20team%20of%20IT%20professionals%20collaborating%20in%20modern%20office%20environment%2C%20inclusive%20workplace%20culture%20with%20people%20of%20different%20backgrounds%20working%20together%20on%20technology%20projects%2C%20professional%20business%20atmosphere%20with%20natural%20lighting%2C%20navy%20blue%20and%20turquoise%20color%20accents%2C%20modern%20workspace%20design%20with%20collaboration%20areas%20and%20technology%20displays&width=600&height=500&seq=culture1&orientation=portrait"
              alt="Our Culture"
              className="w-full h-full object-cover object-top rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001d3f]/50 to-transparent rounded-xl"></div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#001d3f] to-[#041f4a] rounded-2xl p-8 lg:p-12">
          <h3 className="text-3xl font-bold text-white text-center mb-12">Our Culture in Numbers</h3>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5bc5f0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className={`${highlight.icon} text-2xl text-[#001d3f]`}></i>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-[#5bc5f0] mb-2">{highlight.metric}</div>
                <div className="text-gray-200 text-sm font-medium">{highlight.label}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-xl text-gray-200 mb-6 max-w-3xl mx-auto">
              Join a team where your expertise makes a difference in supporting critical missions across government and enterprise sectors.
            </p>
            <button className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap">
              <i className="ri-user-add-line mr-2"></i>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
