import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export function Register() {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">Choose Registration Type</h2>
        <div className="space-y-4">
          <Button
            onClick={() => navigate('/register/owner')}
            className="w-full"
            size="lg"
          >
            Register as Car Owner
          </Button>
          <Button
            onClick={() => navigate('/register/mechanic')}
            variant="outline"
            className="w-full"
            size="lg"
          >
            Register as Mechanic
          </Button>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
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