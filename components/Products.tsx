
'use client';

const products = [
  {
    id: 1,
    name: 'CureTech',
    category: 'Healthcare Management',
    description: 'Comprehensive healthcare information management system designed for hospitals, clinics, and medical facilities.',
    features: ['Patient Management', 'Electronic Health Records', 'Appointment Scheduling', 'Billing Integration', 'Report Generation', 'Mobile Access'],
    icon: 'ri-heart-pulse-line',
    color: 'from-blue-500 to-blue-600',
    image: 'https://readdy.ai/api/search-image?query=Modern%20healthcare%20management%20dashboard%20with%20patient%20records%20interface%2C%20medical%20professionals%20using%20digital%20tablets%20in%20hospital%20environment%2C%20clean%20medical%20technology%20interface%20with%20blue%20color%20scheme&width=600&height=400&seq=curetech&orientation=landscape'
  },
  {
    id: 2,
    name: 'GovServe Pro',
    category: 'Government Solutions',
    description: 'Digital governance platform streamlining citizen services, document processing, and administrative workflows.',
    features: ['Citizen Portal', 'Document Management', 'Workflow Automation', 'Digital Signatures', 'Payment Gateway', 'Analytics Dashboard'],
    icon: 'ri-government-line',
    color: 'from-green-500 to-green-600',
    image: 'https://readdy.ai/api/search-image?query=Government%20digital%20services%20portal%20interface%20with%20citizens%20accessing%20online%20services%2C%20modern%20government%20building%20background%2C%20official%20digital%20transformation%20with%20green%20color%20scheme&width=600&height=400&seq=govserve&orientation=landscape'
  },
  {
    id: 3,
    name: 'EduSmart',
    category: 'Education Technology',
    description: 'Complete educational management system for schools, colleges, and training institutions.',
    features: ['Student Information System', 'Learning Management', 'Attendance Tracking', 'Grade Management', 'Parent Portal', 'Virtual Classrooms'],
    icon: 'ri-graduation-cap-line',
    color: 'from-purple-500 to-purple-600',
    image: 'https://readdy.ai/api/search-image?query=Educational%20technology%20platform%20with%20students%20using%20tablets%20in%20modern%20classroom%2C%20digital%20learning%20interface%20with%20interactive%20elements%2C%20purple%20color%20scheme%20education%20technology&width=600&height=400&seq=edusmart&orientation=landscape'
  },
  {
    id: 4,
    name: 'FinanceFlow',
    category: 'Financial Management',
    description: 'Integrated financial management solution for enterprises, banks, and financial institutions.',
    features: ['Accounting Automation', 'Financial Reporting', 'Budget Management', 'Compliance Tracking', 'Risk Assessment', 'Multi-Currency Support'],
    icon: 'ri-bar-chart-box-line',
    color: 'from-yellow-500 to-orange-500',
    image: 'https://readdy.ai/api/search-image?query=Financial%20management%20dashboard%20with%20charts%20and%20analytics%2C%20professional%20business%20environment%20with%20financial%20data%20visualization%2C%20orange%20and%20yellow%20color%20scheme&width=600&height=400&seq=financeflow&orientation=landscape'
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">
            Our <span className="text-[#5bc5f0]">Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Innovative software solutions designed specifically for government agencies, 
            healthcare institutions, and enterprise organizations in Gujarat.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-lg flex items-center justify-center`}>
                      <i className={`${product.icon} text-xl text-white`}></i>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 font-medium">{product.category}</span>
                      <h3 className="text-2xl font-bold text-[#001d3f]">{product.name}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#001d3f] mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {product.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-[#5bc5f0] rounded-full"></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <button className="bg-[#5bc5f0] text-[#001d3f] px-6 py-3 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap">
                    Learn More
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
                
                <div className="relative h-64 md:h-auto">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
