
'use client';

import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: "Business Intelligence (BI)",
      description: "Transform your data into actionable insights with advanced analytics and reporting solutions that drive strategic decision-making.",
      icon: "ri-bar-chart-line",
      features: ["Data Analytics", "Custom Dashboards", "Predictive Modeling", "Real-time Reporting"],
      link: "/services/business-intelligence",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth through targeted campaigns.",
      icon: "ri-megaphone-line",
      features: ["SEO Optimization", "Social Media Marketing", "Content Strategy", "PPC Campaigns"],
      link: "/services/digital-marketing",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "ERP Solutions",
      description: "Custom enterprise resource planning solutions designed to streamline business operations and enhance productivity.",
      icon: "ri-building-line",
      features: ["Custom ERP Solutions", "Workflow Automation", "System Integration", "Legacy System Migration"],
      link: "/services/enterprise-software",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      icon: "ri-smartphone-line",
      features: ["Native iOS/Android", "Cross-Platform Development", "UI/UX Design", "App Store Optimization"],
      link: "/services/mobile-app-development",
      color: "from-purple-500 to-indigo-500"
    },
    {
      title: "Web Development",
      description: "Responsive, scalable web applications built with cutting-edge technologies for optimal performance and user experience.",
      icon: "ri-code-line",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"],
      link: "/services/web-development",
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">
            Services We <span className="text-[#5bc5f0]">Offer</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Five core services designed to meet the technology needs of government agencies and enterprise organizations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group border border-gray-100 hover:border-[#5bc5f0]/30">
              <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <i className={`${service.icon} text-2xl text-white`}></i>
              </div>
              
              <h3 className="text-2xl font-bold text-[#001d3f] mb-4 group-hover:text-[#5bc5f0] transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <div className="mb-6">
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-[#5bc5f0] rounded-full mr-2 flex-shrink-0"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Link 
                href={service.link} 
                className="inline-flex items-center text-[#001d3f] hover:text-[#5bc5f0] font-semibold transition-colors duration-200 group-hover:translate-x-1 cursor-pointer"
              >
                Learn More 
                <i className="ri-arrow-right-line ml-2 transition-transform group-hover:translate-x-1"></i>
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/get-quote"
            className="inline-flex items-center px-8 py-4 bg-[#001d3f] text-white font-semibold rounded-lg hover:bg-[#041f4a] transition-all duration-300 shadow-lg hover:shadow-xl whitespace-nowrap cursor-pointer"
          >
            <i className="ri-message-3-line mr-2"></i>
            Get a Quote for Your Project
          </Link>
        </div>
      </div>
    </section>
  );
}
