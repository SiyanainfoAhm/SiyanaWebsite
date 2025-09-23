'use client';

const stats = [
  { number: '15+', label: 'Years of Excellence', icon: 'ri-calendar-line' },
  { number: '500+', label: 'Projects Delivered', icon: 'ri-checkbox-circle-line' },
  { number: '100+', label: 'Expert Team Members', icon: 'ri-team-line' },
  { number: '98%', label: 'Client Satisfaction', icon: 'ri-emotion-happy-line' }
];

export default function CompanyNumbers() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#001d3f] to-[#041f4a]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Impact in Numbers</h2>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Delivering excellence across government and enterprise sectors for over a decade.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#5bc5f0] rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-2xl text-[#001d3f]`}></i>
              </div>
              <div className="text-4xl font-bold text-[#5bc5f0] mb-2">{stat.number}</div>
              <div className="text-gray-200 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}