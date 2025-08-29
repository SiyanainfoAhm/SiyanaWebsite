
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center bg-gradient-to-br from-[#001d3f] to-[#041f4a] text-white overflow-hidden"
      style={{
        backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20transformation%20office%20environment%20with%20sleek%20technology%20displays%2C%20holographic%20interfaces%2C%20and%20futuristic%20government%20building%20architecture%20in%20background%2C%20professional%20business%20atmosphere%20with%20clean%20geometric%20patterns%2C%20navy%20blue%20and%20turquoise%20color%20scheme%2C%20minimalist%20design%20with%20subtle%20lighting%20effects%20and%20data%20visualization%20elements%20floating%20in%20air&width=1920&height=1080&seq=hero1&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'multiply'
      }}
    >
      <div className="absolute inset-0 bg-[#001d3f]/70"></div>
      
      <div className="container mx-auto px-6 relative z-10 w-full">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Empowering Governments and 
            <span className="text-[#5bc5f0]"> Enterprises</span> through 
            <span className="text-[#0093c8]"> Innovative IT Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed max-w-3xl">
            Leading IT company in Gujarat specializing in government projects and enterprise software. 
            We deliver cutting-edge digital transformation solutions that drive efficiency and innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-[#5bc5f0] text-[#001d3f] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center">
              <i className="ri-chat-3-line mr-2"></i>
              Talk to Our Experts
            </Link>
            <Link href="/#services" className="border-2 border-[#5bc5f0] text-[#5bc5f0] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#5bc5f0] hover:text-[#001d3f] transition-all cursor-pointer whitespace-nowrap inline-flex items-center justify-center">
              <i className="ri-search-eye-line mr-2"></i>
              Explore Services
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-2xl text-[#5bc5f0]"></i>
      </div>
    </section>
  );
}
