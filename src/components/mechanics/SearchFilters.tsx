import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Button } from '../ui/Button';

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onFilter: (filters: any) => void;
}

export function SearchFilters({ onSearch, onFilter }: SearchFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search mechanics by name or specialization"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-orange-500 focus:border-orange-500"
            onChange={(e) => onFilter({ specialization: e.target.value })}
          >
            <option value="">All Specializations</option>
            <option value="general">General Repairs</option>
            <option value="engine">Engine Specialist</option>
            <option value="electrical">Electrical Systems</option>
            <option value="bodywork">Body Work</option>
          </select>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            More Filters
          </Button>
        </div>
      </div>
    </div>
  );
}