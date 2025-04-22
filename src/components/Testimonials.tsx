import React from 'react';
import { Star, MapPin } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  location: string;
  stars: number;
  delay: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, name, role, location, stars, delay }) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-md border border-gray-100 animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center justify-between">
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="flex items-center text-sm text-gray-500">
          <MapPin className="h-4 w-4 mr-1" />
          <span>{location}</span>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Operators Are Saying
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from mechanics already thriving in the Mekonet network
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial 
            quote="I've been fixing cars for 7 years, but since I joined Mekonet, I've met customers I never would've found on my own. The platform has given my workshop real visibility."
            name="Uche Okonkwo"
            role="Mechanic, 7 yrs exp"
            location="Surulere, Lagos"
            stars={5}
            delay={0.1}
          />
          
          <Testimonial 
            quote="Mekonet is like Uber for mechanics — but smarter. They help you build your brand while you work. The verification process gives customers confidence in choosing me."
            name="Fatima Ibrahim"
            role="Mobile Technician"
            location="Kaduna"
            stars={5}
            delay={0.2}
          />
          
          <Testimonial 
            quote="As a specialist in engine diagnostics, I was struggling to find customers who needed my expertise. Mekonet connects me with exactly the right jobs that match my skills."
            name="Emmanuel Adebayo"
            role="Diagnostics Specialist"
            location="Port Harcourt"
            stars={4}
            delay={0.3}
          />
        </div>

        <div className="mt-16 text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform?usp=sharing" 
            target="_blank"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all transform hover:scale-105"
          >
            Join the Waitlist Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;