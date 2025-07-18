import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle,
  Globe,
  MessageSquare
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const offices = [
    {
      country: 'USA',
      city: 'SHUGAR LAND',
      address: '2710 Grants Lake Blvd Unit C11 SugarLand , TX 77479',
      phone: '+971 4 123 4567+18322409397',
      email: 'INFO@elitetechnology.com',
      timezone: 'GMT+4',
      hours: '9:00 AM - 6:00 PM (Sun-Thu)'
    },
  
   
  ];

  const services = [
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'ERP Systems',
    'Blockchain Solutions',
    'IoT Development',
    'MVP Development',
    'Manuscript Development',
    'Developmental Editing',
    'Copyediting',
    'Proofreading',
    'Formatting & Typesetting',
    'Publishing Consultancy',
    
    
  ];

  const budgetRanges = [
    '$5,000 - $15,000',
    '$15,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000+'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with cutting-edge technology? 
            Let's discuss your project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Start Your Project</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project requirements, goals, and timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center group disabled:opacity-50"
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 w-5 h-5" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Call Us</div>
                    <div className="text-gray-600 text-sm">+971 4 123 4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Email Us</div>
                    <div className="text-gray-600 text-sm">info@elite-technology.co</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Live Chat</div>
                    <div className="text-gray-600 text-sm">Available 24/7</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Offices */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Global Offices</h3>
              <div className="space-y-6">
                {offices.map((office, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-2 mb-3">
                      <Globe className="w-5 h-5 text-blue-600" />
                      <h4 className="font-semibold text-gray-900">{office.country} - {office.city}</h4>
                    </div>
                    
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-start space-x-2">
                        <MapPin className="w-4 h-4 mt-0.5 text-gray-400" />
                        <span>{office.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>{office.phone}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>{office.email}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 text-center">
              <div className="text-2xl font-bold text-gray-900 mb-2">24 Hours</div>
              <div className="text-gray-600 text-sm">Average Response Time</div>
              <div className="text-xs text-gray-500 mt-2">We typically respond to all inquiries within 24 hours</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;