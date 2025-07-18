import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight, Filter } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Mobile Apps', 'Web Development', 'E-commerce', 'Enterprise', 'Blockchain'];

  const projects = [
    {
      id: 1,
      title: 'FinTech Mobile App',
      category: 'Mobile Apps',
      description: 'A comprehensive financial management app with real-time analytics, secure transactions, and AI-powered insights.',
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AI/ML'],
      client: 'UAE Banking Sector',
      duration: '8 months',
      results: ['40% increase in user engagement', '60% faster transaction processing', '99.9% uptime achieved']
    },
    {
      id: 2,
      title: 'E-commerce Platform',
      category: 'E-commerce',
      description: 'Multi-vendor marketplace with advanced inventory management, payment gateway integration, and analytics dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Laravel', 'MySQL', 'AWS'],
      client: 'Retail Chain - USA',
      duration: '6 months',
      results: ['300% increase in online sales', '50% reduction in cart abandonment', '24/7 automated support']
    },
    {
      id: 3,
      title: 'Healthcare Management System',
      category: 'Enterprise',
      description: 'Comprehensive hospital management system with patient records, appointment scheduling, and telemedicine features.',
      image: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Angular', 'Python', 'PostgreSQL', 'Docker'],
      client: 'Healthcare Provider - Dubai',
      duration: '12 months',
      results: ['70% reduction in paperwork', '45% faster patient processing', 'HIPAA compliant security']
    },
    {
      id: 4,
      title: 'Blockchain Supply Chain',
      category: 'Blockchain',
      description: 'Transparent supply chain tracking system using blockchain technology for food safety and authenticity verification.',
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Ethereum', 'Solidity', 'Web3', 'IPFS'],
      client: 'Food Industry - Global',
      duration: '10 months',
      results: ['100% product traceability', '80% reduction in fraud', 'Enhanced consumer trust']
    },
    {
      id: 5,
      title: 'Real Estate Portal',
      category: 'Web Development',
      description: 'Modern property listing platform with virtual tours, mortgage calculator, and advanced search filters.',
      image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'Express', 'MongoDB', 'Stripe'],
      client: 'Real Estate Agency - Pakistan',
      duration: '5 months',
      results: ['200% increase in leads', '35% faster property searches', 'Mobile-first design']
    },
    {
      id: 6,
      title: 'IoT Smart City Solution',
      category: 'Enterprise',
      description: 'Smart city infrastructure management system with IoT sensors, real-time monitoring, and predictive analytics.',
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['IoT', 'Python', 'AWS IoT', 'Machine Learning'],
      client: 'Government - UAE',
      duration: '18 months',
      results: ['30% energy savings', 'Real-time city monitoring', 'Predictive maintenance system']
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our successful projects across various industries. Each solution is crafted 
            with precision, innovation, and a focus on delivering measurable results.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <div className="flex items-center space-x-2 text-gray-600 mr-4">
            <Filter className="w-5 h-5" />
            <span className="font-medium">Filter by:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-lg font-medium transition-all ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div key={project.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <button className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button className="bg-white text-gray-900 p-2 rounded-lg hover:bg-gray-100 transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                    {project.category}
                  </span>
                  <span className="text-gray-500 text-sm">{project.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="border-t pt-4">
                  <div className="text-sm text-gray-600 mb-2">
                    <strong>Client:</strong> {project.client}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group">
                    View Case Study
                    <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Section */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Success Stories That Inspire
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Measurable Results</h4>
                    <p className="text-gray-600 text-sm">Every project delivers quantifiable improvements in performance, user engagement, and business growth.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Industry Expertise</h4>
                    <p className="text-gray-600 text-sm">Deep understanding of sector-specific challenges and opportunities across various industries.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Long-term Partnerships</h4>
                    <p className="text-gray-600 text-sm">Building lasting relationships with ongoing support, maintenance, and continuous improvement.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600 text-sm">Projects Completed</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Client Satisfaction</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                <div className="text-gray-600 text-sm">Industries Served</div>
              </div>
              <div className="bg-white rounded-lg p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-orange-600 mb-2">6+</div>
                <div className="text-gray-600 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;