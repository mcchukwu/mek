import React from 'react';
import { MechanicCard } from './MechanicCard';
import type { Mechanic } from '../../types';

interface MechanicListProps {
  mechanics: Mechanic[];
  onBook: (mechanicId: string) => void;
}

export function MechanicList({ mechanics, onBook }: MechanicListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mechanics.map((mechanic) => (
        <MechanicCard key={mechanic.id} mechanic={mechanic} onBook={onBook} />
      ))}
    </div>
  );
}