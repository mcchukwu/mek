import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Wrench, User, Menu } from 'lucide-react';
import { Button } from '../ui/Button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-orange-600" />
            <span className="text-xl font-bold text-gray-900">Mekonet</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            <Link to="/services" className="text-gray-600 hover:text-gray-900">Services</Link>
            <Link to="/mechanics" className="text-gray-600 hover:text-gray-900">Find Mechanics</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => navigate('/signin')}
            >
              <User className="h-4 w-4 mr-2" />
              Sign In
            </Button>
            <Button 
              variant="primary" 
              size="sm"
              onClick={() => navigate('/register')}
            >
              Register
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-2">
            <div className="flex flex-col space-y-2">
              <Link to="/services" className="text-gray-600 hover:text-gray-900 px-2 py-1">Services</Link>
              <Link to="/mechanics" className="text-gray-600 hover:text-gray-900 px-2 py-1">Find Mechanics</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 px-2 py-1">About</Link>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/signin');
                }}
              >
                Sign In
              </Button>
              <Button 
                variant="primary" 
                size="sm" 
                className="w-full"
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/register');
                }}
              >
                Register
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}