import React, { useState } from 'react';
import { 
  Smartphone, 
  Globe, 
  Palette, 
  TrendingUp, 
  Database, 
  Shield, 
  Cpu,
  Rocket,
  ArrowRight,
  Check
} from 'lucide-react';

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications that deliver exceptional user experiences.',
      technologies: ['iOS (Swift)', 'Android (Kotlin)', 'Flutter', 'React Native'],
      features: [
        'Native iOS & Android Development',
        'Cross-platform Solutions',
        'App Store Optimization',
        'Push Notifications',
        'Offline Functionality',
        'Third-party Integrations'
      ],
      image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Scalable web applications and websites built with modern technologies and best practices.',
      technologies: ['React', 'Node.js', 'Python', 'PHP', 'Cloud Services'],
      features: [
        'Responsive Web Design',
        'Progressive Web Apps',
        'E-commerce Solutions',
        'Content Management Systems',
        'API Development',
        'Cloud Deployment'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create intuitive and engaging digital experiences.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision'],
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Usability Testing',
        'Brand Identity Design',
        'Design System Creation'
      ],
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that boost your online presence and drive conversions.',
      technologies: ['Google Ads', 'Facebook Ads', 'SEO Tools', 'Analytics', 'CRM'],
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting'
      ],
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'ERP Systems',
      description: 'Enterprise resource planning solutions that streamline business processes and operations.',
      technologies: ['SAP', 'Oracle', 'Microsoft Dynamics', 'Custom Solutions'],
      features: [
        'Business Process Automation',
        'Inventory Management',
        'Financial Management',
        'HR Management',
        'Supply Chain Management',
        'Reporting & Analytics'
      ],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Blockchain Solutions',
      description: 'Secure and transparent blockchain applications for various industries and use cases.',
      technologies: ['Ethereum', 'Hyperledger', 'Solidity', 'Web3', 'Smart Contracts'],
      features: [
        'Smart Contract Development',
        'DeFi Applications',
        'NFT Marketplaces',
        'Cryptocurrency Wallets',
        'Supply Chain Tracking',
        'Identity Verification'
      ],
      image: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'IoT Solutions',
      description: 'Internet of Things applications that connect devices and enable smart automation.',
      technologies: ['Arduino', 'Raspberry Pi', 'AWS IoT', 'Azure IoT', 'MQTT'],
      features: [
        'Device Connectivity',
        'Real-time Monitoring',
        'Data Analytics',
        'Remote Control',
        'Predictive Maintenance',
        'Edge Computing'
      ],
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'MVP Development',
      description: 'Rapid prototyping and minimum viable product development to validate your ideas quickly.',
      technologies: ['Agile', 'Lean Startup', 'Rapid Prototyping', 'User Testing'],
      features: [
        'Rapid Prototyping',
        'Market Validation',
        'User Feedback Integration',
        'Iterative Development',
        'Cost-Effective Solutions',
        'Quick Time-to-Market'
      ],
      image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: 'Writing & Publishing Services',
      description: 'Professional writing, editing, and publishing services for books, manuscripts, and digital content.',
      technologies: ['Content Strategy', 'Editorial Tools', 'Publishing Platforms', 'SEO Writing'],
      features: [
        'Manuscript Development',
        'Developmental Editing',
        'Copyediting & Proofreading',
        'Formatting & Typesetting',
        'Publishing Consultancy',
        'Content Marketing'
      ],
      image: 'https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From ideation to deployment, we offer comprehensive digital solutions 
            that transform your business and drive growth across all platforms.
          </p>
        </div>

        {/* Service Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {services.map((service, index) => (
            <button
              key={index}
              onClick={() => setActiveService(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                activeService === index
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className={activeService === index ? 'text-white' : 'text-blue-600'}>
                {service.icon}
              </div>
              <span className="hidden sm:inline">{service.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Details */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-lg">
                  {services[activeService].icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {services[activeService].title}
                </h3>
              </div>
              
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {services[activeService].description}
              </p>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technologies We Use</h4>
                <div className="flex flex-wrap gap-2">
                  {services[activeService].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {services[activeService].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center group">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Image */}
            <div className="relative">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that drives results. 
              Our team is ready to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Portfolio
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;