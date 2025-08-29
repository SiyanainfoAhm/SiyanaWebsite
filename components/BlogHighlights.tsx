'use client';

import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Future of Government Digital Services: Trends Shaping 2024',
    excerpt: 'Exploring how emerging technologies are transforming citizen services and government operations across India.',
    category: 'Digital Transformation',
    readTime: '5 min read',
    date: 'December 15, 2023',
    image: 'https://readdy.ai/api/search-image?query=Government%20digital%20transformation%20concept%20with%20futuristic%20government%20building%2C%20digital%20interfaces%2C%20citizen%20services%20portals%2C%20modern%20technology%20integration%2C%20professional%20government%20technology%20visualization%2C%20navy%20blue%20and%20turquoise%20color%20scheme%2C%20clean%20minimalist%20design&width=400&height=250&seq=blog1&orientation=landscape',
    link: '/blog/future-government-digital-services'
  },
  {
    title: 'Cybersecurity Best Practices for Public Sector Organizations',
    excerpt: 'Essential security frameworks and strategies to protect critical infrastructure and sensitive government data.',
    category: 'Cybersecurity',
    readTime: '7 min read',
    date: 'December 10, 2023',
    image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20protection%20concept%20with%20digital%20shield%2C%20secure%20network%20connections%2C%20government%20data%20protection%20visualization%2C%20professional%20security%20technology%20interface%2C%20navy%20blue%20and%20turquoise%20color%20scheme%2C%20modern%20security%20infrastructure%20design&width=400&height=250&seq=blog2&orientation=landscape',
    link: '/blog/cybersecurity-best-practices-public-sector'
  },
  {
    title: 'Cloud Migration Strategies for Enterprise Success',
    excerpt: 'A comprehensive guide to successful cloud adoption, addressing challenges and maximizing benefits for organizations.',
    category: 'Cloud Services',
    readTime: '6 min read',
    date: 'December 5, 2023',
    image: 'https://readdy.ai/api/search-image?query=Cloud%20computing%20technology%20concept%20with%20enterprise%20cloud%20infrastructure%2C%20data%20migration%20visualization%2C%20modern%20server%20technology%2C%20professional%20cloud%20services%20interface%2C%20navy%20blue%20and%20turquoise%20color%20scheme%2C%20futuristic%20technology%20design&width=400&height=250&seq=blog3&orientation=landscape',
    link: '/blog/cloud-migration-strategies-enterprise'
  },
  {
    title: 'AI and Data Analytics: Transforming Decision Making in Government',
    excerpt: 'How artificial intelligence and advanced analytics are enabling data-driven governance and policy decisions.',
    category: 'Data Analytics & AI',
    readTime: '8 min read',
    date: 'November 28, 2023',
    image: 'https://readdy.ai/api/search-image?query=Artificial%20intelligence%20and%20data%20analytics%20in%20government%20concept%20with%20AI%20visualization%2C%20data%20dashboards%2C%20analytics%20charts%2C%20government%20decision%20making%20technology%2C%20professional%20data%20science%20interface%2C%20navy%20blue%20and%20turquoise%20color%20scheme&width=400&height=250&seq=blog4&orientation=landscape',
    link: '/blog/ai-data-analytics-government-decision-making'
  }
];

export default function BlogHighlights() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#001d3f] mb-6">
            Latest <span className="text-[#5bc5f0]">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Stay informed with our latest thoughts on IT trends, public-sector technology initiatives, 
            and digital transformation best practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="relative h-48">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <i className="ri-calendar-line mr-2"></i>
                  <span className="mr-4">{post.date}</span>
                  <i className="ri-time-line mr-2"></i>
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-[#001d3f] mb-3 line-clamp-2 hover:text-[#5bc5f0] transition-colors">
                  <Link href={post.link} className="cursor-pointer">
                    {post.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <Link 
                  href={post.link}
                  className="text-[#5bc5f0] font-semibold hover:text-[#001d3f] transition-colors inline-flex items-center cursor-pointer"
                >
                  Read More
                  <i className="ri-arrow-right-line ml-2"></i>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="bg-[#001d3f] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#041f4a] transition-colors inline-flex items-center cursor-pointer whitespace-nowrap"
          >
            View All Articles
            <i className="ri-article-line ml-2"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}