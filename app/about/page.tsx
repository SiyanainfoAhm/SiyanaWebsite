
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AboutPage() {
  const coreValues = [
    {
      icon: 'ri-heart-3-line',
      title: 'People First',
      description: 'We believe our people are the greatest asset. We invest in their growth, well-being, and professional development while fostering an inclusive, collaborative environment.'
    },
    {
      icon: 'ri-handshake-line',
      title: 'Partnership Mindset',
      description: 'We approach every engagement as true partners, working collaboratively with our clients to understand their unique challenges and deliver tailored solutions.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Integrity & Trust',
      description: 'We conduct business with the highest ethical standards, building lasting relationships based on transparency, accountability, and mutual respect.'
    },
    {
      icon: 'ri-lightbulb-line',
      title: 'Innovation Excellence',
      description: 'We continuously evolve our capabilities and embrace emerging technologies to deliver cutting-edge solutions that drive meaningful impact.'
    },
    {
      icon: 'ri-service-line',
      title: 'Service to Society',
      description: 'We are committed to using technology as a force for good, particularly in serving government agencies and organizations that benefit the public.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Continuous Growth',
      description: 'We foster a learning culture that encourages professional development, knowledge sharing, and continuous improvement in everything we do.'
    }
  ];

  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Siyana Info Solutions",
      "foundingDate": "2009",
      "description": "For over 15 years, we have been dedicated to empowering government and enterprise organizations through innovative technology solutions, fostering collaboration and delivering exceptional results that serve the public good.",
      "numberOfEmployees": "100+",
      "awards": ["Excellence in Government IT Solutions Award"],
      "knowsAbout": [
        "Enterprise Software Development",
        "Government Digital Transformation",
        "Web Development",
        "Mobile App Development",
        "Digital Marketing",
        "Business Intelligence"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPageSchema)
        }}
      />
      <Header />
      
      {/* Hero Section */}
      <div 
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 29, 63, 0.8), rgba(4, 31, 74, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20corporate%20office%20environment%20with%20diverse%20team%20collaborating%2C%20government%20partnership%20meeting%2C%20professional%20business%20atmosphere%2C%20blue%20and%20white%20color%20scheme%2C%20collaborative%20workspace&width=1600&height=600&seq=about-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-white relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Siyana Info Solutions</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              For over 15 years, we have been dedicated to empowering government and enterprise organizations through innovative technology solutions, fostering collaboration and delivering exceptional results that serve the public good.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-[#5bc5f0]">15+</div>
                <div className="text-sm text-gray-200">Years of Excellence</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-[#5bc5f0]">500+</div>
                <div className="text-sm text-gray-200">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <div className="text-2xl font-bold text-[#5bc5f0]">100+</div>
                <div className="text-sm text-gray-200">Team Members</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Mission</h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  To empower government and enterprise organizations through innovative technology solutions that foster collaboration, drive efficiency, and create meaningful impact for the communities they serve.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We believe in the transformative power of technology when applied with purpose, expertise, and a deep understanding of our clients' unique challenges. Our mission drives us to be more than just a service provider – we are trusted partners committed to your success.
                </p>
              </div>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20team%20collaboration%20in%20modern%20office%2C%20diverse%20group%20working%20together%20on%20technology%20solutions%2C%20government%20partnership%20concept%2C%20blue%20and%20white%20corporate%20theme&width=600&height=400&seq=mission&orientation=landscape"
                  alt="Mission"
                  className="w-full rounded-xl shadow-lg object-cover object-top"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Futuristic%20technology%20vision%20with%20digital%20transformation%20elements%2C%20government%20digitization%20concept%2C%20innovation%20and%20growth%2C%20professional%20blue%20theme&width=600&height=400&seq=vision&orientation=landscape"
                  alt="Vision"
                  className="w-full rounded-xl shadow-lg object-cover object-top"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Vision</h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  To be the leading catalyst for digital transformation in government and enterprise sectors, creating a future where technology seamlessly serves the public good.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a world where government services are accessible, efficient, and citizen-centric, and where enterprises leverage technology to drive sustainable growth and positive social impact. Through our expertise and commitment, we aim to bridge the digital divide and create inclusive technological solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide every decision we make and every relationship we build, 
              defining who we are as an organization and how we serve our clients and communities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#5bc5f0] rounded-lg flex items-center justify-center mb-6">
                  <i className={`${value.icon} text-2xl text-[#001d3f]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#001d3f] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Collaboration Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#001d3f] mb-6">People-Centric Culture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our success is built on the foundation of our people and the collaborative relationships we build 
                with our government and enterprise partners.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-[#001d3f] mb-6">Collaboration with Government Partners</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  We understand that government organizations have unique requirements, regulatory constraints, and public service mandates. Our approach is built on deep collaboration, where we work as an extension of your team to understand these complexities and deliver solutions that truly serve the public interest.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Through transparent communication, agile methodologies, and a commitment to compliance and security, we help government agencies modernize their technology infrastructure while maintaining the highest standards of public service.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#5bc5f0] mb-1">98%</div>
                    <div className="text-sm text-gray-600">Client Retention</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#5bc5f0] mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Government%20partnership%20meeting%20with%20diverse%20team%2C%20collaborative%20discussion%20around%20conference%20table%2C%20professional%20business%20environment%2C%20public%20sector%20cooperation&width=600&height=400&seq=govt-collab&orientation=landscape"
                  alt="Government Collaboration"
                  className="w-full rounded-xl shadow-lg object-cover object-top"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative">
                <img 
                  src="https://readdy.ai/api/search-image?query=Diverse%20team%20of%20professionals%20in%20modern%20office%2C%20inclusive%20workplace%20culture%2C%20employee%20development%20and%20growth%2C%20collaborative%20work%20environment&width=600&height=400&seq=culture&orientation=landscape"
                  alt="Company Culture"
                  className="w-full rounded-xl shadow-lg object-cover object-top"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-2xl font-bold text-[#001d3f] mb-6">Investing in Our People</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Our people are the heart of everything we do. We believe that by investing in our team members' growth, well-being, and professional development, we create an environment where innovation thrives and exceptional results are achieved.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  From continuous learning programs and leadership development to flexible work arrangements and comprehensive benefits, we are committed to creating a workplace where every individual can reach their full potential while contributing to meaningful projects that benefit society.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-[#5bc5f0]"></i>
                    <span className="text-gray-700">Continuous learning and certification programs</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-[#5bc5f0]"></i>
                    <span className="text-gray-700">Flexible work arrangements and work-life balance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-[#5bc5f0]"></i>
                    <span className="text-gray-700">Comprehensive health and wellness benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <i className="ri-check-line text-[#5bc5f0]"></i>
                    <span className="text-gray-700">Recognition and career advancement opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-[#001d3f]">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6 text-[#5bc5f0]">Ready to Partner with Us?</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Whether you're a government agency looking to modernize your technology infrastructure or an enterprise 
            seeking innovative solutions, we're here to collaborate and deliver exceptional results.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
            <a 
              href="/contact" 
              className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              Contact Us
            </a>
            <a 
              href="/get-quote" 
              className="border-2 border-[#5bc5f0] text-[#5bc5f0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#5bc5f0] hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap"
            >
              Get a Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
