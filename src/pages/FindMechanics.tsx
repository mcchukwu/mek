import React from 'react';
import { SearchFilters } from '../components/mechanics/SearchFilters';
import { MechanicList } from '../components/mechanics/MechanicList';
import type { Mechanic } from '../types';

// Mock data for demonstration
const mockMechanics: Mechanic[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    role: 'mechanic',
    location: { lat: 6.5244, lng: 3.3792 },
    phone: '+234123456789',
    specializations: ['Engine Repair', 'Diagnostics'],
    certifications: ['ASE Master Technician'],
    rating: 4.8,
    totalReviews: 127,
    hourlyRate: 5000,
    availability: { start: '8:00 AM', end: '6:00 PM' }
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    role: 'mechanic',
    location: { lat: 6.5244, lng: 3.3792 },
    phone: '+234987654321',
    specializations: ['Electrical Systems', 'AC Repair'],
    certifications: ['Automotive Electronics'],
    rating: 4.6,
    totalReviews: 89,
    hourlyRate: 4500,
    availability: { start: '9:00 AM', end: '7:00 PM' }
  }
];

export function FindMechanics() {
  const [mechanics, setMechanics] = React.useState<Mechanic[]>(mockMechanics);

  const handleSearch = (query: string) => {
    if (!query) {
      setMechanics(mockMechanics);
      return;
    }

    const filtered = mockMechanics.filter((mechanic) =>
      mechanic.name.toLowerCase().includes(query.toLowerCase()) ||
      mechanic.specializations.some(spec => 
        spec.toLowerCase().includes(query.toLowerCase())
      )
    );
    setMechanics(filtered);
  };

  const handleFilter = (filters: any) => {
    console.log('Applying filters:', filters);
  };

  const handleBook = (mechanicId: string) => {
    console.log('Booking mechanic:', mechanicId);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Find Mechanics</h1>
      <SearchFilters onSearch={handleSearch} onFilter={handleFilter} />
      <MechanicList mechanics={mechanics} onBook={handleBook} />
    </div>
  );
}