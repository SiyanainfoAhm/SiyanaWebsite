
'use client';

export default function MissionVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Mission Content */}
            <div>
              <div className="mb-12">
                <h2 className="text-4xl font-bold text-[#001d3f] mb-6">
                  Our <span className="text-[#5bc5f0]">Mission</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To empower government agencies and enterprises through innovative technology solutions that foster collaboration, enhance operational efficiency, and deliver measurable results that make a meaningful impact on the communities we serve.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#5bc5f0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-lightbulb-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#001d3f] mb-2">Innovation First</h4>
                      <p className="text-gray-600 text-sm">Cutting-edge solutions that drive transformation</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#5bc5f0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-team-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#001d3f] mb-2">Collaborative Partnership</h4>
                      <p className="text-gray-600 text-sm">Working together to achieve shared objectives</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-4xl font-bold text-[#001d3f] mb-6">
                  Our <span className="text-[#5bc5f0]">Vision</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  To be the trusted technology partner that transforms how organizations operate, innovate, and serve their stakeholders through digital excellence and unwavering commitment to mission success.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#5bc5f0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-trophy-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#001d3f] mb-2">Excellence</h4>
                      <p className="text-gray-600 text-sm">Delivering exceptional results in every project</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-[#5bc5f0] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <i className="ri-rocket-line text-white"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#001d3f] mb-2">Future-Ready</h4>
                      <p className="text-gray-600 text-sm">Building solutions for tomorrow's challenges</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Content */}
            <div className="relative">
              <div 
                className="rounded-2xl h-96 bg-gradient-to-br from-[#001d3f] to-[#5bc5f0] relative overflow-hidden"
                style={{
                  backgroundImage: `url('https://readdy.ai/api/search-image?query=Professional%20diverse%20team%20collaborating%20in%20modern%20office%20environment%2C%20government%20and%20enterprise%20professionals%20working%20together%20on%20digital%20transformation%20projects%2C%20handshakes%20and%20teamwork%2C%20mission-driven%20atmosphere%20with%20technology%20displays%20and%20collaborative%20workspace%2C%20navy%20blue%20and%20turquoise%20color%20scheme&width=600&height=480&seq=mission1&orientation=portrait')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundBlendMode: 'multiply'
                }}
              >
                <div className="absolute inset-0 bg-[#001d3f]/60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <h3 className="text-2xl font-bold mb-4">Fostering Collaboration</h3>
                    <p className="text-lg opacity-90">Delivering Big Results</p>
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-6 -left-6 bg-white rounded-xl shadow-lg p-4 w-32">
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#5bc5f0] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <i className="ri-government-line text-white text-sm"></i>
                  </div>
                  <p className="text-xs font-semibold text-[#001d3f]">Government</p>
                  <p className="text-xs text-gray-600">Partnerships</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 w-32">
                <div className="text-center">
                  <div className="w-8 h-8 bg-[#5bc5f0] rounded-lg flex items-center justify-center mx-auto mb-2">
                    <i className="ri-building-4-line text-white text-sm"></i>
                  </div>
                  <p className="text-xs font-semibold text-[#001d3f]">Enterprise</p>
                  <p className="text-xs text-gray-600">Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
