
'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

const services = [
  {
    icon: 'ri-dashboard-line',
    title: 'Business Intelligence Dashboards',
    description: 'Interactive dashboards that provide real-time insights into your business performance with customizable KPI tracking.'
  },
  {
    icon: 'ri-database-line',
    title: 'Data Warehousing',
    description: 'Centralized data repositories that consolidate information from multiple sources for comprehensive business analysis.'
  },
  {
    icon: 'ri-bar-chart-line',
    title: 'Advanced Analytics',
    description: 'Predictive analytics and machine learning models to forecast trends and optimize business decisions.'
  },
  {
    icon: 'ri-file-chart-line',
    title: 'Custom Reporting',
    description: 'Automated reporting systems that deliver actionable insights directly to stakeholders on schedule.'
  },
  {
    icon: 'ri-eye-line',
    title: 'Data Visualization',
    description: 'Transform complex data into clear, interactive visualizations that drive better decision-making.'
  },
  {
    icon: 'ri-cpu-line',
    title: 'ETL & Data Integration',
    description: 'Extract, transform, and load data from various sources into unified analytics platforms.'
  }
];

const technologies = [
  { name: 'Power BI', icon: 'ri-bar-chart-box-line' },
  { name: 'Tableau', icon: 'ri-dashboard-3-line' },
  { name: 'QlikView', icon: 'ri-pie-chart-line' },
  { name: 'SQL Server', icon: 'ri-database-2-line' },
  { name: 'Python', icon: 'ri-code-s-slash-line' },
  { name: 'R', icon: 'ri-function-line' }
];

export default function BusinessIntelligencePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <div 
        className="pt-32 pb-20 bg-gradient-to-r from-[#001d3f] to-[#041f4a] relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 29, 63, 0.85), rgba(4, 31, 74, 0.85)), url('https://readdy.ai/api/search-image?query=Business%20intelligence%20analytics%20workspace%20with%20data%20scientists%20analyzing%20complex%20dashboards%2C%20multiple%20screens%20showing%20data%20visualizations%2C%20modern%20analytics%20office%20environment&width=1600&height=800&seq=bi-hero&orientation=landscape')`
        }}
      >
        <div className="container mx-auto px-6 text-white relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Business Intelligence Services</h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Transform your data into actionable business insights with our comprehensive BI solutions. From data warehousing to advanced analytics, we help organizations make data-driven decisions that drive growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/get-quote"
                className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                Start BI Project
              </Link>
              <Link 
                href="/schedule-call"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap"
              >
                Consult BI Expert
              </Link>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Business Intelligence Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive BI services that transform raw data into meaningful insights for strategic decision-making and business growth.
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
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">BI Technologies & Platforms</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading business intelligence tools and technologies for creating powerful analytics solutions and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-[#5bc5f0] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#0093c8] transition-all">
                  <i className={`${tech.icon} text-3xl text-[#001d3f]`}></i>
                </div>
                <h3 className="font-semibold text-[#001d3f] text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#001d3f] mb-6">BI Implementation Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {[
              { step: '1', title: 'Data Assessment', desc: 'Analyze current data sources and requirements' },
              { step: '2', title: 'Architecture Design', desc: 'Design scalable BI architecture and data model' },
              { step: '3', title: 'ETL Development', desc: 'Build data integration and transformation pipelines' },
              { step: '4', title: 'Dashboard Creation', desc: 'Develop interactive dashboards and reports' },
              { step: '5', title: 'Training & Support', desc: 'User training and ongoing system support' }
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
          <h2 className="text-4xl font-bold mb-6">Ready to Unlock Your Data Potential?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your business data into powerful insights that drive strategic decisions and competitive advantage.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/get-quote"
              className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
            >
              Get BI Quote
            </Link>
            <Link 
              href="/schedule-call"
              className="border-2 border-[#5bc5f0] text-[#5bc5f0] px-8 py-4 rounded-lg font-bold text-lg hover:bg-[#5bc5f0] hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap"
            >
              Schedule BI Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
