export interface User {
  id: string;
  name: string;
  email: string;
  role: 'owner' | 'mechanic' | 'admin';
  location: {
    lat: number;
    lng: number;
  };
  phone: string;
}

export interface Mechanic extends User {
  specializations: string[];
  certifications: string[];
  rating: number;
  totalReviews: number;
  hourlyRate: number;
  availability: {
    start: string;
    end: string;
  };
}