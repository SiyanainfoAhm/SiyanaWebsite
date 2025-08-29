
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const services = [
  {
    icon: 'ri-computer-line',
    title: 'Responsive Web Design',
    description: 'Mobile-first responsive websites that provide optimal viewing experience across all devices and screen sizes.'
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Progressive Web Apps',
    description: 'PWAs that combine the best of web and mobile apps, offering offline functionality and app-like experiences.'
  },
  {
    icon: 'ri-shopping-cart-line',
    title: 'E-commerce Development',
    description: 'Full-featured online stores with secure payment gateways, inventory management, and user-friendly interfaces.'
  },
  {
    icon: 'ri-file-text-line',
    title: 'CMS Solutions',
    description: 'Custom content management systems that allow easy content updates and website management without technical knowledge.'
  },
  {
    icon: 'ri-dashboard-line',
    title: 'Web Applications',
    description: 'Complex web applications with advanced functionality, real-time features, and seamless user experiences.'
  },
  {
    icon: 'ri-code-s-slash-line',
    title: 'API Development',
    description: 'RESTful APIs and GraphQL services for seamless integration between different systems and applications.'
  }
];

const technologies = [
  { name: 'React.js', icon: 'ri-reactjs-line' },
  { name: 'Next.js', icon: 'ri-arrow-right-up-line' },
  { name: 'Vue.js', icon: 'ri-vuejs-line' },
  { name: 'Angular', icon: 'ri-angularjs-line' },
  { name: 'Node.js', icon: 'ri-nodejs-line' },
  { name: 'Laravel', icon: 'ri-code-box-line' },
  { name: 'WordPress', icon: 'ri-wordpress-line' },
  { name: 'Shopify', icon: 'ri-shopping-bag-line' }
];

const portfolio = [
  {
    title: 'Government Service Portal',
    category: 'Government Website',
    description: 'Comprehensive citizen services portal with online applications, document verification, and payment gateway integration.',
    image: 'Modern government website interface with citizen service portal, clean design with official government branding, users accessing services on desktop and mobile',
    features: ['Online Applications', 'Document Upload', 'Payment Gateway', 'Status Tracking']
  },
  {
    title: 'Healthcare Management System',
    category: 'Web Application',
    description: 'Hospital management web application with appointment booking, patient records, and telemedicine capabilities.',
    image: 'Healthcare web application interface showing patient management dashboard, modern medical interface with appointment scheduling and patient records',
    features: ['Appointment Booking', 'Patient Records', 'Telemedicine', 'Billing System']
  },
  {
    title: 'E-Learning Platform',
    category: 'Educational Portal',
    description: 'Interactive learning platform with video courses, assessments, progress tracking, and certification system.',
    image: 'E-learning platform interface with course dashboard, students watching video lectures on laptops, modern educational technology environment',
    features: ['Video Courses', 'Online Assessments', 'Progress Tracking', 'Certificates']
  }
];

export default function WebDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="pt-32 pb-20 bg-gradient-to-r from-[#001d3f] to-[#041f4a] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 29, 63, 0.85), rgba(4, 31, 74, 0.85)), url('https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20developers%20coding%20responsive%20websites%2C%20multiple%20screens%20showing%20different%20device%20layouts%2C%20contemporary%20office%20environment%20with%20latest%20web%20technologies&width=1600&height=800&seq=web-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Web Development Services</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Create powerful, responsive web solutions that engage users and drive business growth. From corporate websites to complex web applications, we deliver cutting-edge solutions using the latest technologies.
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Web Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive web development solutions that cover everything from simple websites to complex web applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-[#5bc5f0] rounded-xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-2xl text-[#001d3f]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#001d3f] mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Technologies & Frameworks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern web technologies and frameworks that ensure fast, secure, and scalable web solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#5bc5f0] rounded-lg shadow-lg group-hover:shadow-xl transition-all mx-auto mb-4 flex items-center justify-center">
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Web Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore some of our recent web development projects that showcase our expertise and creativity.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {portfolio.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=${project.image}&width=400&height=300&seq=portfolio${index}&orientation=landscape')`
                  }}
                ></div>
                <div className="p-6">
                  <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#001d3f] mt-4 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-800 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#5bc5f0] rounded-full"></div>
                          <span className="text-gray-600 text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[ 
              { step: '1', title: 'Discovery & Planning', desc: 'Understand requirements and create project roadmap' },
              { step: '2', title: 'Design & Prototyping', desc: 'Create wireframes and interactive prototypes' },
              { step: '3', title: 'Development & Testing', desc: 'Code development with continuous testing' },
              { step: '4', title: 'Launch & Support', desc: 'Deploy and provide ongoing maintenance' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5bc5f0] text-[#001d3f] rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-[#001d3f] mb-3">{process.title}</h3>
                <p className="text-gray-600">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001d3f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Web Solution?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's create a powerful web presence that drives your business forward with modern, responsive design and functionality.
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
