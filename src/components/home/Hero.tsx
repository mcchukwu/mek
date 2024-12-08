import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Shield, Clock } from 'lucide-react';
import { Button } from '../ui/Button';

export function Hero() {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-br from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Find Trusted Mechanics in Nigeria
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect with verified mechanics near you. Get quality repairs, transparent pricing, and secure payments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              size="lg"
              onClick={() => navigate('/mechanics')}
            >
              Find a Mechanic
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/register/mechanic')}
            >
              Join as a Mechanic
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Search className="h-10 w-10 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Easy to Find</h3>
            <p className="text-gray-600">Discover skilled mechanics in your area with our location-based search.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Shield className="h-10 w-10 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Verified Professionals</h3>
            <p className="text-gray-600">All mechanics are vetted and certified for your peace of mind.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <Clock className="h-10 w-10 text-orange-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">Get help whenever you need it with our round-the-clock customer service.</p>
          </div>
        </div>
      </div>
    </div>
  );
}