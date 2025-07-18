import React from 'react';
import { Calendar, User, ArrowRight, Clock, Tag } from 'lucide-react';

const Blog = () => {
  const featuredPost = {
    id: 1,
    title: 'The Future of Mobile App Development: Trends to Watch in 2024',
    excerpt: 'Explore the latest trends shaping mobile app development, from AI integration to cross-platform solutions that are revolutionizing the industry.',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Sarah Ahmed',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'Mobile Development',
    tags: ['Mobile Apps', 'AI', 'Trends', 'Technology']
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Building Scalable Web Applications with Microservices Architecture',
      excerpt: 'Learn how microservices can transform your web application architecture for better scalability and maintainability.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Ahmed Hassan',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'UI/UX Design Principles That Drive User Engagement',
      excerpt: 'Discover the key design principles that create intuitive user experiences and boost engagement rates.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Maria Rodriguez',
      date: '2024-01-10',
      readTime: '5 min read',
      category: 'Design'
    },
    {
      id: 4,
      title: 'Blockchain Technology: Beyond Cryptocurrency',
      excerpt: 'Explore real-world applications of blockchain technology in supply chain, healthcare, and enterprise solutions.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'David Chen',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Blockchain'
    },
    {
      id: 5,
      title: 'Digital Marketing Strategies for Tech Startups',
      excerpt: 'Effective digital marketing approaches specifically tailored for technology startups and SaaS companies.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Lisa Thompson',
      date: '2024-01-05',
      readTime: '6 min read',
      category: 'Marketing'
    },
    {
      id: 6,
      title: 'IoT Security: Protecting Connected Devices',
      excerpt: 'Essential security measures and best practices for IoT implementations in enterprise environments.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Michael Park',
      date: '2024-01-03',
      readTime: '9 min read',
      category: 'IoT'
    },
    {
      id: 7,
      title: 'The Rise of No-Code/Low-Code Development Platforms',
      excerpt: 'How no-code and low-code platforms are democratizing software development and accelerating digital transformation.',
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
      author: 'Jennifer Lee',
      date: '2024-01-01',
      readTime: '5 min read',
      category: 'Development'
    }
  ];

  const categories = ['All', 'Mobile Development', 'Web Development', 'Design', 'Blockchain', 'Marketing', 'IoT'];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tech Insights & Updates
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in technology, 
            design, and digital transformation from our expert team.
          </p>
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-16">
          <div className="grid lg:grid-cols-2 gap-0">
            <div className="relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover min-h-[400px]"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                  Featured
                </span>
              </div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center space-x-4 mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {featuredPost.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <Clock className="w-4 h-4 mr-1" />
                  {featuredPost.readTime}
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {featuredPost.title}
              </h3>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {featuredPost.excerpt}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {featuredPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm flex items-center"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                    {featuredPost.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{featuredPost.author}</div>
                    <div className="text-gray-500 text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                </div>
                
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center group">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-lg font-medium transition-all bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white text-gray-900 px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Clock className="w-4 h-4 mr-1" />
                  {post.readTime}
                  <span className="mx-2">•</span>
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="text-gray-700 text-sm font-medium">{post.author}</span>
                  </div>
                  
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group">
                    Read
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest tech insights, industry trends, 
            and expert tips delivered directly to your inbox.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-blue-100 text-sm mt-3">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;