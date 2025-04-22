import React from 'react';
import { PenTool as Tool, Smartphone, Shield, TrendingUp, Target, Users } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-xl shadow-md p-6 transition-all hover:shadow-lg hover:translate-y-[-4px] animate-fade-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="h-12 w-12 bg-blue-100 rounded-lg text-blue-600 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Join the Mekonet Operator Network?
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Mekonet connects skilled mechanics like you with car owners needing your expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard 
            icon={<Target className="h-6 w-6" />}
            title="Early Access Advantage"
            description="Be among the first verified mechanics to receive jobs through our platform and establish your presence."
            delay={0.1}
          />
          
          <BenefitCard 
            icon={<Smartphone className="h-6 w-6" />}
            title="Connect with Real Customers"
            description="Get matched with nearby car owners based on your expertise and location. Say goodbye to slow days."
            delay={0.2}
          />
          
          <BenefitCard 
            icon={<Shield className="h-6 w-6" />}
            title="Build Trust with Verification"
            description="Our verification process helps customers feel safe choosing you, building confidence in your services."
            delay={0.3}
          />
          
          <BenefitCard 
            icon={<TrendingUp className="h-6 w-6" />}
            title="Grow Your Workshop"
            description="We provide tools to help you expand your business with branding, technology, and ongoing support."
            delay={0.4}
          />
          
          <BenefitCard 
            icon={<Tool className="h-6 w-6" />}
            title="Showcase Your Expertise"
            description="Highlight your specialization whether it's engines, electricals, diagnostics, AC, or bodywork."
            delay={0.5}
          />
          
          <BenefitCard 
            icon={<Users className="h-6 w-6" />}
            title="Join a Community"
            description="Connect with other skilled mechanics across Nigeria and be part of a network that elevates the profession."
            delay={0.6}
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdFAl4v3nhlZmiRa6yThCmjAgHssOkkMhwqL8A5okixLWAgBg/viewform?usp=sharing" 
            target="_blank"
            className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all transform hover:scale-105"
          >
            Join the Waitlist Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;