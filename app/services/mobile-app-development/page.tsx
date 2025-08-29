
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const services = [
  {
    icon: 'ri-apple-line',
    title: 'iOS App Development',
    description: 'Native iOS applications built with Swift and Objective-C, optimized for iPhone and iPad with exceptional user experience.'
  },
  {
    icon: 'ri-android-line',
    title: 'Android App Development',
    description: 'Native Android apps using Java and Kotlin, designed to leverage Android platform capabilities and reach broader audiences.'
  },
  {
    icon: 'ri-smartphone-line',
    title: 'Cross-Platform Apps',
    description: 'React Native and Flutter applications that work seamlessly across iOS and Android with shared codebase for faster delivery.'
  },
  {
    icon: 'ri-computer-line',
    title: 'Progressive Web Apps',
    description: 'PWAs that combine web accessibility with native app functionality, offering offline capabilities and push notifications.'
  },
  {
    icon: 'ri-store-line',
    title: 'App Store Optimization',
    description: 'Complete ASO services to improve app visibility, increase downloads, and enhance user acquisition in app stores.'
  },
  {
    icon: 'ri-cloud-line',
    title: 'Backend Development',
    description: 'Robust backend infrastructure with APIs, databases, and cloud services to power your mobile applications.'
  }
];

const platforms = [
  { name: 'React Native', icon: 'ri-reactjs-line', desc: 'Cross-Platform' },
  { name: 'Flutter', icon: 'ri-flutter-line', desc: 'Cross-Platform' },
  { name: 'Swift', icon: 'ri-apple-line', desc: 'iOS Native' },
  { name: 'Kotlin', icon: 'ri-android-line', desc: 'Android Native' },
  { name: 'Firebase', icon: 'ri-firebase-line', desc: 'Backend Services' },
  { name: 'AWS Mobile', icon: 'ri-cloud-line', desc: 'Cloud Backend' }
];

const appShowcase = [
  {
    title: 'CureTech Mobile',
    category: 'Healthcare App',
    description: 'Comprehensive healthcare management app with appointment booking, telemedicine, and patient record management.',
    image: 'Healthcare mobile app interface showing appointment booking and patient records, medical professionals using tablets in hospital environment',
    features: ['Appointment Booking', 'Telemedicine', 'Patient Records', 'Prescription Management'],
    platforms: ['iOS', 'Android']
  },
  {
    title: 'Smart City Services',
    category: 'Government App',
    description: 'Citizen services mobile app for municipal services, bill payments, and complaint registration with real-time updates.',
    image: 'Government services mobile app interface with citizen complaint system, users accessing municipal services on smartphones',
    features: ['Service Requests', 'Bill Payments', 'Complaint Tracking', 'Push Notifications'],
    platforms: ['iOS', 'Android', 'PWA']
  },
  {
    title: 'EduLearn Platform',
    category: 'Education App',
    description: 'Interactive learning app with video lectures, quizzes, progress tracking, and offline content access for students.',
    image: 'Educational mobile app with video lectures and interactive learning modules, students using phones and tablets for online learning',
    features: ['Video Lectures', 'Interactive Quizzes', 'Offline Learning', 'Progress Analytics'],
    platforms: ['iOS', 'Android']
  }
];

export default function MobileAppDevelopmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="pt-32 pb-20 bg-gradient-to-r from-[#001d3f] to-[#041f4a] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 29, 63, 0.85), rgba(4, 31, 74, 0.85)), url('https://readdy.ai/api/search-image?query=Mobile%20app%20development%20workspace%20with%20developers%20coding%20on%20multiple%20devices%2C%20smartphones%20and%20tablets%20showing%20different%20app%20interfaces%2C%20modern%20tech%20office%20environment&width=1600&height=800&seq=mobile-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Mobile App Development</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Build powerful mobile applications that engage users and drive business growth. From native iOS and Android apps to cross-platform solutions, we create mobile experiences that users love.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-quote"
                className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                Start Your App
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Mobile App Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive mobile app development services covering all platforms and technologies to meet your business needs.
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Platforms & Technologies</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Latest mobile development technologies and platforms for creating high-performance, scalable mobile applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#5bc5f0] rounded-lg flex items-center justify-center">
                  <i className={`${platform.icon} text-3xl text-[#001d3f]`}></i>
                </div>
                <h3 className="text-xl font-bold text-[#001d3f] mb-2">{platform.name}</h3>
                <p className="text-[#5bc5f0] font-semibold">{platform.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Mobile App Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our mobile applications that have transformed businesses and enhanced user experiences across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {appShowcase.map((app, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Bapp.image%7D&width=400&height=300&seq=app${index}&orientation=landscape')`
                  }}
                ></div>
                <div className="p-6">
                  <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                    {app.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#001d3f] mt-4 mb-3">{app.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{app.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {app.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#5bc5f0] rounded-full"></div>
                            <span className="text-gray-600 text-xs">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Platforms:</h4>
                      <div className="flex flex-wrap gap-2">
                        {app.platforms.map((platform, platformIndex) => (
                          <span key={platformIndex} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-medium">
                            {platform}
                          </span>
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

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">App Development Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Strategy & Planning', desc: 'Market research and app strategy development' },
              { step: '2', title: 'UI/UX Design', desc: 'User-centered design and prototyping' },
              { step: '3', title: 'Development', desc: 'Native or cross-platform app development' },
              { step: '4', title: 'Testing & QA', desc: 'Comprehensive testing across devices' },
              { step: '5', title: 'Launch & Support', desc: 'App store submission and ongoing support' }
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#5bc5f0] text-[#001d3f] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-[#001d3f] mb-3">{process.title}</h3>
                <p className="text-gray-600 text-sm">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#001d3f] text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Mobile App?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your business idea into a powerful mobile application that engages users and drives growth across all platforms.
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
