import React from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://imgur.com/5VyyQVQ.png" 
                alt="Mekonet" 
                className="h-8"
              />
            </div>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <a href="#benefits" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Benefits
            </a>
            <a href="#community" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Community
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-emerald-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
              Testimonials
            </a>
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform?usp=sharing" 
              target="_blank"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
            >
              Join Waitlist
            </a>
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-emerald-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6">
          <a
            href="#benefits"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
          >
            Benefits
          </a>
          <a
            href="#community"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
          >
            Community
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
          >
            Testimonials
          </a>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform?usp=sharing"
            target="_blank"
            onClick={() => setIsOpen(false)}
            className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 mt-4"
          >
            Join Waitlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;