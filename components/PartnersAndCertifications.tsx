
'use client';

export default function PartnersAndCertifications() {
  const certifications = [
    {
      name: 'ISO 9001:2015',
      description: 'Quality Management System Certification',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20ISO%209001%20certification%20logo%20badge%20with%20clean%20white%20background%2C%20blue%20and%20white%20colors%2C%20official%20quality%20management%20system%20symbol&width=120&height=120&seq=iso9001&orientation=squarish'
    },
    {
      name: 'ISO 27001:2013',
      description: 'Information Security Management System',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20ISO%2027001%20certification%20logo%20badge%20with%20clean%20white%20background%2C%20blue%20and%20white%20colors%2C%20official%20information%20security%20management%20symbol&width=120&height=120&seq=iso27001&orientation=squarish'
    },
    {
      name: 'CMMI Level 3',
      description: 'Capability Maturity Model Integration',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20CMMI%20Level%203%20certification%20logo%20badge%20with%20clean%20white%20background%2C%20blue%20and%20orange%20colors%2C%20official%20capability%20maturity%20model%20symbol&width=120&height=120&seq=cmmi&orientation=squarish'
    },
    {
      name: 'NASSCOM Member',
      description: 'National Association of Software Companies',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20NASSCOM%20membership%20logo%20badge%20with%20clean%20white%20background%2C%20blue%20and%20green%20colors%2C%20official%20Indian%20software%20association%20symbol&width=120&height=120&seq=nasscom&orientation=squarish'
    }
  ];

  const partnerships = [
    {
      name: 'Microsoft Gold Partner',
      description: 'Application Development & Platform Competency',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20Microsoft%20Gold%20Partner%20logo%20badge%20with%20clean%20white%20background%2C%20blue%20and%20gold%20colors%2C%20official%20partnership%20certification%20symbol&width=120&height=120&seq=microsoft&orientation=squarish'
    },
    {
      name: 'AWS Consulting Partner',
      description: 'Amazon Web Services Certified Partner',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20AWS%20Consulting%20Partner%20logo%20badge%20with%20clean%20white%20background%2C%20orange%20and%20dark%20blue%20colors%2C%20official%20Amazon%20Web%20Services%20symbol&width=120&height=120&seq=aws&orientation=squarish'
    },
    {
      name: 'Oracle Partner Network',
      description: 'Silver Level Implementation Partner',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20Oracle%20Partner%20Network%20logo%20badge%20with%20clean%20white%20background%2C%20red%20and%20black%20colors%2C%20official%20Oracle%20partnership%20symbol&width=120&height=120&seq=oracle&orientation=squarish'
    },
    {
      name: 'Salesforce Partner',
      description: 'Registered Consulting Partner',
      logo: 'https://readdy.ai/api/search-image?query=Professional%20Salesforce%20Partner%20logo%20badge%20with%20clean%20white%20background%2C%20blue%20and%20white%20colors%2C%20official%20Salesforce%20cloud%20partnership%20symbol&width=120&height=120&seq=salesforce&orientation=squarish'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001d3f] mb-6">Partners & Certifications</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to excellence is validated through strategic partnerships and industry certifications 
            that enable us to deliver world-class solutions.
          </p>
        </div>

        {/* Quality Accreditations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#001d3f] text-center mb-8">Quality Accreditations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <img 
                    src={cert.logo} 
                    alt={cert.name}
                    className="w-20 h-20 mx-auto object-contain"
                  />
                </div>
                <h4 className="font-bold text-[#001d3f] mb-2">{cert.name}</h4>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Partnerships */}
        <div>
          <h3 className="text-2xl font-bold text-[#001d3f] text-center mb-8">Technology Partnerships</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-20 h-20 mx-auto object-contain"
                  />
                </div>
                <h4 className="font-bold text-[#001d3f] mb-2">{partner.name}</h4>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Statement */}
        <div className="mt-16 bg-[#001d3f] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#5bc5f0]">Compliance & Security</h3>
          <p className="text-gray-200 max-w-4xl mx-auto leading-relaxed">
            Siyana Info Solutions maintains the highest standards of security and compliance. We are committed to 
            protecting sensitive data and ensuring regulatory compliance across all our government and enterprise 
            engagements. Our certifications demonstrate our dedication to quality, security, and continuous improvement.
          </p>
        </div>
      </div>
    </section>
  );
}
