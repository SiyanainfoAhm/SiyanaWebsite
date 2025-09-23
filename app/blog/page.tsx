
'use client';

import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

const categories = ['All', 'Industry News', 'Best Practices', 'Company Updates', 'Technology Trends'];

const blogPosts = [
  {
    id: 1,
    title: 'Digital Transformation in Government: A Comprehensive Guide for 2024',
    excerpt: 'Explore the latest trends and best practices for implementing digital transformation initiatives in government agencies, including cloud adoption strategies and cybersecurity considerations.',
    category: 'Best Practices',
    date: '2024-01-15',
    thumbnail: 'https://readdy.ai/api/search-image?query=Modern%20government%20digital%20transformation%20concept%20with%20clean%20professional%20design%2C%20blue%20and%20white%20color%20scheme%2C%20digital%20interfaces%2C%20cloud%20computing%20symbols%2C%20cybersecurity%20elements%2C%20minimalist%20background&width=400&height=250&seq=govdigital1&orientation=landscape',
    featured: true
  },
  {
    id: 2,
    title: 'Cybersecurity Best Practices for Enterprise Software Development',
    excerpt: 'Learn essential cybersecurity measures that should be integrated into enterprise software development lifecycle to protect against modern threats and ensure data security.',
    category: 'Best Practices',
    date: '2024-01-10',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20cybersecurity%20concept%20with%20shield%20symbols%2C%20lock%20icons%2C%20secure%20coding%20elements%2C%20blue%20and%20green%20color%20scheme%2C%20clean%20modern%20design%2C%20enterprise%20security%20visualization&width=400&height=250&seq=cybersec1&orientation=landscape'
  },
  {
    id: 3,
    title: 'AI and Machine Learning in Business Intelligence: Current Trends',
    excerpt: 'Discover how artificial intelligence and machine learning are revolutionizing business intelligence platforms and driving data-driven decision making in enterprises.',
    category: 'Technology Trends',
    date: '2024-01-08',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20AI%20and%20machine%20learning%20visualization%20with%20data%20analytics%20charts%2C%20neural%20networks%2C%20business%20intelligence%20dashboard%2C%20blue%20and%20purple%20color%20scheme%2C%20modern%20clean%20design&width=400&height=250&seq=aiml1&orientation=landscape'
  },
  {
    id: 4,
    title: 'Siyana Info Solutions Wins Excellence Award for Government Project',
    excerpt: 'We are proud to announce that Siyana Info Solutions has been recognized with the Excellence in Government IT Solutions Award for our innovative digital transformation project.',
    category: 'Company Updates',
    date: '2024-01-05',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20award%20ceremony%20with%20trophy%2C%20excellence%20recognition%2C%20corporate%20achievement%2C%20blue%20and%20gold%20color%20scheme%2C%20clean%20modern%20design%2C%20business%20success%20visualization&width=400&height=250&seq=award1&orientation=landscape'
  },
  {
    id: 5,
    title: 'Cloud Migration Strategies for Government Agencies',
    excerpt: 'A comprehensive overview of cloud migration approaches specifically designed for government agencies, covering security, compliance, and cost optimization strategies.',
    category: 'Industry News',
    date: '2024-01-03',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20cloud%20migration%20concept%20with%20government%20buildings%2C%20cloud%20infrastructure%2C%20security%20symbols%2C%20blue%20and%20white%20color%20scheme%2C%20modern%20clean%20design%2C%20digital%20transformation%20elements&width=400&height=250&seq=cloud1&orientation=landscape'
  },
  {
    id: 6,
    title: 'Mobile-First Development: Building Apps for Government Services',
    excerpt: 'Explore the principles and best practices of mobile-first development when creating applications for government services and citizen engagement platforms.',
    category: 'Best Practices',
    date: '2024-01-01',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20mobile%20app%20development%20concept%20with%20smartphones%2C%20government%20service%20interfaces%2C%20citizen%20engagement%20elements%2C%20blue%20and%20green%20color%20scheme%2C%20modern%20clean%20design&width=400&height=250&seq=mobile1&orientation=landscape'
  },
  {
    id: 7,
    title: 'The Future of DevSecOps in Enterprise Environments',
    excerpt: 'Understand how DevSecOps is evolving and what enterprises need to know about integrating security into their development and operations workflows.',
    category: 'Technology Trends',
    date: '2023-12-28',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20DevSecOps%20concept%20with%20development%20pipelines%2C%20security%20integration%2C%20automation%20symbols%2C%20blue%20and%20orange%20color%20scheme%2C%20modern%20clean%20design%2C%20enterprise%20workflow%20visualization&width=400&height=250&seq=devsecops1&orientation=landscape'
  },
  {
    id: 8,
    title: 'New Partnership Announcement: Expanding Our Cloud Capabilities',
    excerpt: 'Siyana Info Solutions announces strategic partnership with leading cloud service providers to enhance our enterprise cloud solutions and government services.',
    category: 'Company Updates',
    date: '2023-12-25',
    thumbnail: 'https://readdy.ai/api/search-image?query=Professional%20business%20partnership%20handshake%20with%20cloud%20symbols%2C%20corporate%20collaboration%2C%20strategic%20alliance%2C%20blue%20and%20silver%20color%20scheme%2C%20modern%20clean%20design&width=400&height=250&seq=partner1&orientation=landscape'
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "Siyana Info Solutions Blog",
    "description": "IT industry insights, technology trends, and best practices from Siyana Info Solutions experts",
    "publisher": {
      "@type": "Organization",
      "name": "Siyana Info Solutions"
    },
    "blogPost": blogPosts.map(post => ({
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "datePublished": post.date,
      "author": {
        "@type": "Organization",
        "name": "Siyana Info Solutions"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Siyana Info Solutions"
      },
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.id}`
      },
      "image": post.thumbnail
    }))
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(blogSchema)
        }}
      />
      <Header />
      
      <div className="pt-32 pb-20 bg-gradient-to-br from-[#001d3f] to-[#041f4a]">
        <div className="container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Blog & Insights</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Stay updated with the latest industry trends, best practices, and company news from Siyana Info Solutions.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="container mx-auto px-6">
          
          {/* Featured Article */}
          {featuredPost && (
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-[#001d3f] mb-8">Featured Article</h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={featuredPost.thumbnail} 
                      alt={featuredPost.title}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#5bc5f0] text-[#001d3f] px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <span className="bg-gray-100 px-3 py-1 rounded-full">{featuredPost.category}</span>
                      <span>{featuredPost.date}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-[#001d3f] mb-4 leading-tight">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex justify-end">
                      <Link href={`/blog/${featuredPost.id}`} className="bg-[#5bc5f0] text-[#001d3f] px-6 py-2 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap">
                        Read Article
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Filters and Search */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
              
              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-[#5bc5f0] text-[#001d3f]'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Search */}
              <div className="relative w-full md:w-80">
                <i className="ri-search-line absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#5bc5f0] text-sm"
                />
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={post.thumbnail} 
                    alt={post.title}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                    <span className="bg-gray-100 px-3 py-1 rounded-full">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#001d3f] mb-3 leading-tight line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-end">
                    <Link href={`/blog/${post.id}`} className="text-[#5bc5f0] hover:text-[#0093c8] font-semibold text-sm cursor-pointer whitespace-nowrap">
                      Read More →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <i className="ri-file-text-line text-gray-300 text-6xl mb-4"></i>
              <h3 className="text-xl font-bold text-gray-600 mb-2">No articles found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Newsletter Signup */}
          <div className="mt-20 bg-[#001d3f] rounded-xl p-8 md:p-12 text-white text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#5bc5f0]">Stay Updated</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest insights, industry trends, and company updates delivered directly to your inbox.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#5bc5f0] text-sm"
                required
              />
              <button
                type="submit"
                className="bg-[#5bc5f0] text-[#001d3f] px-6 py-3 rounded-lg font-semibold hover:bg-[#0093c8] hover:text-white transition-all cursor-pointer whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

// Add these CSS classes to your global.css if not already present
const styles = `
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
`;
