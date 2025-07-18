import React from 'react';
import { Users, Globe, Award, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '2018', event: 'Founded in USA', description: 'Started with a vision to transform businesses digitally' },
    { year: '2019', event: 'First 100 Projects', description: 'Delivered successful solutions across MENA region' },
    { year: '2020', event: 'Global Expansion', description: 'Opened offices in USA and Pakistan' },
    { year: '2021', event: 'Enterprise Focus', description: 'Expanded into blockchain, IoT, and ERP solutions' },
    { year: '2024', event: '500+ Projects', description: 'Serving clients across 25+ countries worldwide' }
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Innovation First',
      description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Client Success',
      description: 'Your success is our success. We work as an extension of your team to achieve your business objectives.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'With offices in Dubai, USA, and Pakistan, we provide 24/7 support and local expertise worldwide.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every project, from initial concept to final deployment and beyond.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Elite Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Since 2018, we've been transforming businesses through innovative digital solutions. 
            From our headquarters in Dubai to our global offices, we deliver excellence worldwide.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses of all sizes with innovative digital solutions that drive growth, 
              enhance efficiency, and create meaningful connections with their customers. We bridge 
              the gap between technology and business success.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the leading digital transformation partner globally, recognized for our innovation, 
              quality, and commitment to client success. We envision a world where every business 
              can leverage technology to reach its full potential.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-blue-600">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-600 to-purple-600 h-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-lg shadow-lg p-6 border hover:shadow-xl transition-shadow">
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our Global Team</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-blue-100">Expert Developers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">25+</div>
              <div className="text-blue-100">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Global Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;