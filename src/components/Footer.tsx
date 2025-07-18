import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowRight,
  Globe
} from 'lucide-react';

const Footer = () => {
  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'ERP Systems',
    'Blockchain Solutions'
  ];

  const company = [
    'About Us',
    'Our Team',
    'Careers',
    'Case Studies',
    'Blog',
    'Contact'
  ];

  const industries = [
    'Healthcare',
    'Finance',
    'E-commerce',
    'Education',
    'Real Estate',
    'Manufacturing'
  ];

  const resources = [
    'Documentation',
    'API Reference',
    'Support Center',
    'Privacy Policy',
    'Terms of Service',
    'Cookie Policy'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg font-bold text-xl mb-6 w-fit">
              Elite Technology
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming businesses through innovative digital solutions since 2018. 
              From Dubai to the world, we deliver excellence in every project.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors flex items-center group">
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <div className="font-medium">Dubai Headquarters</div>
                  <div className="text-gray-300 text-sm">Business Bay, Dubai, UAE</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-green-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">+971 4 123 4567</div>
                  <div className="text-gray-300 text-sm">24/7 Support Available</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <div>
                  <div className="font-medium">info@elite-technology.co</div>
                  <div className="text-gray-300 text-sm">Get in touch today</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Offices */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <h3 className="text-lg font-semibold mb-6 text-center">Global Presence</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <Globe className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <div className="font-semibold">UAE Office</div>
              <div className="text-gray-300 text-sm">Dubai, United Arab Emirates</div>
              <div className="text-gray-400 text-xs mt-1">GMT+4</div>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="font-semibold">USA Office</div>
              <div className="text-gray-300 text-sm">New York, United States</div>
              <div className="text-gray-400 text-xs mt-1">GMT-5</div>
            </div>
            
            <div className="text-center p-4 bg-gray-800 rounded-lg">
              <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="font-semibold">Pakistan Office</div>
              <div className="text-gray-300 text-sm">Karachi, Pakistan</div>
              <div className="text-gray-400 text-xs mt-1">GMT+5</div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest tech insights, industry trends, and company updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Elite Technology. All rights reserved. | Crafted with ❤️ in Dubai
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;