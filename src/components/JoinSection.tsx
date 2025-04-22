import React from 'react';
import { CheckCircle2, ChevronRight, Clock } from 'lucide-react';

const JoinSection: React.FC = () => {
  return (
    <section className="relative py-16 bg-gradient-to-br from-blue-900 to-blue-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-500"></div>
        <div className="absolute top-1/2 -right-24 w-72 h-72 rounded-full bg-blue-400"></div>
        <div className="absolute -bottom-24 left-1/3 w-80 h-80 rounded-full bg-blue-600"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-3/5 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Join the Movement?
            </h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl">
              We're onboarding operators in batches. Don't wait until all spots are filled.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">Get verified and start receiving jobs</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">Build your digital presence and reputation</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-green-400 flex-shrink-0 mt-0.5" />
                <p className="text-blue-100">Grow your business with our tools and support</p>
              </div>
            </div>
          </div>
          
          <div className="mt-10 lg:mt-0 lg:w-2/5 animate-fade-in" style={{animationDelay: '0.3s'}}>
            <div className="bg-white rounded-xl shadow-xl p-8">
              <div className="flex items-center space-x-2 text-sm font-medium text-red-600 mb-6">
                <Clock className="h-5 w-5" />
                <span>Limited spots available</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join the Operator Waitlist
              </h3>
              
              <p className="text-gray-600 mb-6">
                Fill out a short form to tell us about your skills and experience. If you're a good fit, we'll reach out for verification and onboarding.
              </p>
              
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform?usp=sharing" 
                target="_blank"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all"
              >
                Apply Now
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
              
              <p className="mt-4 text-sm text-center text-gray-500">
                Suitable for mechanics with at least 1 year of experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinSection;