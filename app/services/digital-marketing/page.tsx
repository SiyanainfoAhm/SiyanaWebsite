
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const services = [
  {
    icon: 'ri-search-line',
    title: 'Search Engine Optimization',
    description: 'Improve your website visibility and organic traffic with comprehensive SEO strategies and technical optimization.'
  },
  {
    icon: 'ri-advertisement-line',
    title: 'Pay-Per-Click Advertising',
    description: 'Targeted PPC campaigns on Google Ads, Facebook, and other platforms to drive immediate traffic and conversions.'
  },
  {
    icon: 'ri-share-line',
    title: 'Social Media Marketing',
    description: 'Build brand awareness and engage audiences across Facebook, Instagram, LinkedIn, and Twitter platforms.'
  },
  {
    icon: 'ri-file-text-line',
    title: 'Content Marketing',
    description: 'Create compelling content that attracts, educates, and converts your target audience into loyal customers.'
  },
  {
    icon: 'ri-mail-line',
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized email campaigns and automated marketing workflows.'
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Analytics & Reporting',
    description: 'Track performance, measure ROI, and optimize campaigns with detailed analytics and actionable insights.'
  }
];

const tools = [
  { name: 'Google Ads', icon: 'ri-advertisement-line' },
  { name: 'Facebook Ads', icon: 'ri-facebook-line' },
  { name: 'Google Analytics', icon: 'ri-line-chart-line' },
  { name: 'SEMrush', icon: 'ri-search-eye-line' },
  { name: 'HubSpot', icon: 'ri-contacts-line' },
  { name: 'Mailchimp', icon: 'ri-mail-send-line' }
];

const campaigns = [
  {
    title: 'Government Portal Awareness',
    category: 'SEO & Content Marketing',
    description: 'Increased citizen awareness and adoption of digital government services through comprehensive SEO and content strategy.',
    image: 'Digital marketing campaign for government services, citizens using computers and mobile devices to access online portal, official government branding',
    results: ['300% increase in organic traffic', '85% improvement in portal usage', '50% reduction in offline inquiries'],
    metrics: { traffic: '+300%', engagement: '+85%', conversion: '+50%' }
  },
  {
    title: 'Healthcare App Launch',
    category: 'Social Media & PPC',
    description: 'Successfully launched healthcare mobile app with targeted social media campaigns and strategic PPC advertising.',
    image: 'Healthcare app marketing campaign showing mobile app promotion across social media platforms, medical professionals engaging with digital content',
    results: ['50K+ app downloads in 3 months', '40% user retention rate', '₹5L monthly recurring revenue'],
    metrics: { downloads: '50K+', retention: '40%', revenue: '₹5L/month' }
  },
  {
    title: 'E-Learning Platform Growth',
    category: 'Content & Email Marketing',
    description: 'Scaled online education platform through content marketing, email campaigns, and strategic partnerships.',
    image: 'E-learning platform marketing campaign with students engaging with educational content on laptops and tablets, online learning environment',
    results: ['200% increase in course enrollments', '65% email open rate', '90% course completion rate'],
    metrics: { enrollment: '+200%', email_rate: '65%', completion: '90%' }
  }
];

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="pt-32 pb-20 bg-gradient-to-r from-[#001d3f] to-[#041f4a] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 29, 63, 0.85), rgba(4, 31, 74, 0.85)), url('https://readdy.ai/api/search-image?query=Digital%20marketing%20workspace%20with%20marketers%20analyzing%20campaign%20data%20on%20multiple%20screens%2C%20social%20media%20analytics%20dashboards%2C%20modern%20marketing%20office%20environment&width=1600&height=800&seq=marketing-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Digital Marketing Services</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Boost your online presence and drive business growth with data-driven digital marketing strategies. From SEO to social media marketing, we help you reach and engage your target audience effectively.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-quote"
                className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                Start Your Campaign
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Digital Marketing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions designed to increase your online visibility, generate leads, and drive conversions.
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Marketing Tools & Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading tools and platforms we use to create, manage, and optimize your digital marketing campaigns.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 mx-auto mb-4 bg-[#5bc5f0] rounded-lg shadow-lg group-hover:shadow-xl transition-all flex items-center justify-center">
                  <i className={`${tool.icon} text-3xl text-[#001d3f]`}></i>
                </div>
                <h3 className="font-semibold text-[#001d3f] text-sm">{tool.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Campaign Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from digital marketing campaigns that have driven significant growth for our clients across various industries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {campaigns.map((campaign, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://readdy.ai/api/search-image?query=$%7Bcampaign.image%7D&width=400&height=300&seq=campaign${index}&orientation=landscape')`
                  }}
                ></div>
                <div className="p-6">
                  <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                    {campaign.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#001d3f] mt-4 mb-3">{campaign.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{campaign.description}</p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Key Metrics:</h4>
                      <div className="grid grid-cols-3 gap-2">
                        {Object.entries(campaign.metrics).map(([key, value], metricIndex) => (
                          <div key={metricIndex} className="text-center bg-gray-50 rounded-lg p-2">
                            <div className="text-lg font-bold text-[#5bc5f0]">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key.replace('_', ' ')}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm mb-2">Results Achieved:</h4>
                      <div className="space-y-1">
                        {campaign.results.map((result, resultIndex) => (
                          <div key={resultIndex} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-[#5bc5f0] rounded-full"></div>
                            <span className="text-gray-600 text-xs">{result}</span>
                          </div>
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Our Marketing Approach</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Research & Analysis', desc: 'Market research and competitor analysis' },
              { step: '2', title: 'Strategy Development', desc: 'Create data-driven marketing strategy' },
              { step: '3', title: 'Campaign Execution', desc: 'Implement and monitor campaigns' },
              { step: '4', title: 'Optimize & Scale', desc: 'Analyze results and scale success' }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Let's create powerful digital marketing campaigns that drive traffic, generate leads, and grow your business online.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-quote"
              className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              Get Marketing Quote
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
