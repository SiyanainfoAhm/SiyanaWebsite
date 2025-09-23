'use client';

const expertiseAreas = [
  {
    title: 'Government Solutions',
    description: 'Specialized solutions for public sector digital transformation',
    icon: 'ri-government-line',
    technologies: ['E-Governance', 'Digital Services', 'Citizen Portals', 'Compliance Systems']
  },
  {
    title: 'Enterprise Applications',
    description: 'Custom enterprise software for business optimization',
    icon: 'ri-building-line',
    technologies: ['ERP Systems', 'CRM Solutions', 'Workflow Automation', 'Integration Services']
  },
  {
    title: 'Cloud & Infrastructure',
    description: 'Modern cloud solutions for scalable operations',
    icon: 'ri-cloud-line',
    technologies: ['Cloud Migration', 'DevOps', 'Microservices', 'Container Orchestration']
  },
  {
    title: 'Data & Analytics',
    description: 'Advanced analytics for data-driven decision making',
    icon: 'ri-bar-chart-line',
    technologies: ['Business Intelligence', 'Machine Learning', 'Data Warehousing', 'Predictive Analytics']
  }
];

export default function CoreExpertise() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Core Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep technical expertise across multiple domains to deliver comprehensive solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {expertiseAreas.map((area, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-[#5bc5f0] rounded-lg flex items-center justify-center">
                  <i className={`${area.icon} text-xl text-[#001d3f]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#001d3f]">{area.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">{area.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {area.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border border-gray-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}