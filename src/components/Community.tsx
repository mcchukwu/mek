import React from 'react';
import { Users, MessageCircle } from 'lucide-react';

const Community: React.FC = () => {
  return (
    <section id="community" className="py-16 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Join Our Community
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with other mechanics, share knowledge, and stay updated with the latest from Mekonet
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-emerald-600" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">WhatsApp Group</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Join our community of professional mechanics. Share experiences, ask questions, and network with peers.
            </p>
            <a 
              href="https://chat.whatsapp.com/FtKgLI4C2EcHHNVYoi5dtz"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 w-full"
            >
              Join WhatsApp Group
            </a>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow">
            <div className="flex items-center mb-6">
              <MessageCircle className="h-8 w-8 text-emerald-600" />
              <h3 className="ml-3 text-xl font-semibold text-gray-900">WhatsApp Channel</h3>
            </div>
            <p className="text-gray-600 mb-6">
              Get the latest updates, tips, and announcements directly from the Mekonet team.
            </p>
            <a 
              href="https://whatsapp.com/channel/0029VbA2aro6xCSRbXUq5g0v"
              target="_blank"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 w-full"
            >
              Follow Channel
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;