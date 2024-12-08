import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function OwnerRegistration() {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Car owner registration submitted');
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Register as a Car Owner</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-orange-500 focus:ring-orange-500"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Register
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/signin')}
            className="text-orange-600 hover:text-orange-700 font-medium"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}