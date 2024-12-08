import React from 'react';
import { Star, MapPin, Clock } from 'lucide-react';
import { Button } from '../ui/Button';
import type { Mechanic } from '../../types';

interface MechanicCardProps {
  mechanic: Mechanic;
  onBook: (mechanicId: string) => void;
}

export function MechanicCard({ mechanic, onBook }: MechanicCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{mechanic.name}</h3>
          <div className="flex items-center mt-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">
              {mechanic.rating} ({mechanic.totalReviews} reviews)
            </span>
          </div>
        </div>
        <div className="text-right">
          <p className="text-lg font-semibold text-gray-900">₦{mechanic.hourlyRate}/hr</p>
        </div>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="h-4 w-4 mr-2" />
          <span>2.5 km away</span>
        </div>
        <div className="flex items-center text-sm text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span>{mechanic.availability.start} - {mechanic.availability.end}</span>
        </div>
      </div>

      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900">Specializations:</h4>
        <div className="mt-2 flex flex-wrap gap-2">
          {mechanic.specializations.map((spec) => (
            <span
              key={spec}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-orange-100 text-orange-800"
            >
              {spec}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Button onClick={() => onBook(mechanic.id)} className="w-full">
          Book Now
        </Button>
      </div>
    </div>
  );
}