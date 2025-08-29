
'use client';

import Link from 'next/link';

export default function Solutions() {
  const solutions = [
    {
      title: "Digital Transformation",
      description: "Modernize your operations with comprehensive digital strategies that improve efficiency, reduce costs, and enhance customer experience across all touchpoints.",
      icon: "ri-digital-marketing-line",
      benefits: ["40% efficiency improvement", "30% cost reduction", "Enhanced agility"]
    },
    {
      title: "Cloud Services",
      description: "Accelerate innovation with scalable cloud solutions that provide flexibility, security, and cost-effectiveness for modern business needs.",
      icon: "ri-cloud-line",
      benefits: ["99.9% uptime guarantee", "50% infrastructure savings", "Global scalability"]
    },
    {
      title: "Data Analytics & AI",
      description: "Unlock actionable insights with advanced analytics and AI solutions that drive intelligent decision-making and predictive capabilities.",
      icon: "ri-brain-line",
      benefits: ["Real-time insights", "Predictive analytics", "Automated processes"]
    },
    {
      title: "DevSecOps",
      description: "Integrate security into your development lifecycle with automated testing, continuous monitoring, and rapid deployment capabilities.",
      icon: "ri-shield-check-line",
      benefits: ["75% faster deployments", "Zero security incidents", "Automated compliance"]
    },
    {
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security frameworks, threat detection, and incident response capabilities.",
      icon: "ri-security-line",
      benefits: ["24/7 threat monitoring", "Zero-trust architecture", "Compliance ready"]
    },
    {
      title: "Enterprise Applications",
      description: "Streamline business processes with custom enterprise solutions that integrate seamlessly with existing systems and workflows.",
      icon: "ri-apps-line",
      benefits: ["Seamless integration", "Custom workflows", "Enhanced productivity"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver end-to-end solutions that transform how organizations operate, 
            innovate, and compete in the digital landscape.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className={`${solution.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {solution.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {solution.description}
              </p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  {solution.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Link 
                href="/schedule-call" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-200 cursor-pointer"
              >
                Learn More 
                <i className="ri-arrow-right-line ml-2"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/schedule-call"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-full hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            Discuss Your Solution Needs
            <i className="ri-arrow-right-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
