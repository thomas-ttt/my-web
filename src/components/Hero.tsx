import React from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">Trusted by 500+ clients worldwide</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Digital Solutions That
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Transform
                </span>
                <br />Your Business
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                From mobile apps to enterprise solutions, we deliver cutting-edge technology 
                that drives growth across UAE, USA, and beyond. Founded in Dubai, serving globally.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition-all flex items-center justify-center group">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-all flex items-center justify-center group">
                <Play className="mr-2 w-5 h-5" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">3</div>
                <div className="text-sm text-gray-600">Global Offices</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl p-8 relative overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Team collaboration" 
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              
              {/* Floating Cards */}
              <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-sm font-semibold text-gray-900">Mobile Apps</div>
                <div className="text-xs text-gray-600">iOS • Android • Flutter</div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-4 border">
                <div className="text-sm font-semibold text-gray-900">Web Development</div>
                <div className="text-xs text-gray-600">React • Node.js • Cloud</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;