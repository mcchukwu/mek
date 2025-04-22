import React from 'react';
import { Car, CheckCircle, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-emerald-900 to-emerald-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className="order-2 lg:order-1 animate-fade-in-up" 
            style={{animationDelay: '0.2s'}}
          >
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-emerald-500/20 text-emerald-100 rounded-full px-3 py-1 text-sm font-semibold inline-flex items-center">
                <Car className="h-4 w-4 mr-1" />
                <span>Limited Spots Available</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Join Nigeria's Most Trusted Auto Technician Network
            </h1>
            <p className="mt-6 text-lg text-emerald-100 max-w-3xl">
              We're building Nigeria's most powerful network of skilled automotive technicians — connecting you directly with customers who need your expertise.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-emerald-100">Get verified and receive jobs directly from car owners</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-emerald-100">Grow your customer base through our trusted platform</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-emerald-400 flex-shrink-0 mt-0.5" />
                <p className="text-emerald-100">Access tools to help manage and grow your business</p>
              </div>
            </div>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform?usp=sharing" 
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-500 hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-400 transition-all transform hover:scale-105 sm:w-auto"
              >
                Join the Waitlist
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="#benefits"
                className="inline-flex items-center justify-center px-6 py-3 border border-emerald-300 text-base font-medium rounded-md text-white bg-transparent hover:bg-emerald-800/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all sm:w-auto"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in" style={{animationDelay: '0.4s'}}>
            <div className="relative mx-auto w-full max-w-md">
              <img 
                src="https://i.imgur.com/jHsG8iC.jpg" 
                alt="Professional mechanic working" 
                className="rounded-xl shadow-2xl object-cover w-full h-[400px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-40">
                <div className="text-sm font-semibold text-gray-900">Operators Joined</div>
                <div className="mt-1 text-2xl font-bold text-emerald-600">350+</div>
                <div className="mt-1 text-xs text-gray-500">Limited spots remaining</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;