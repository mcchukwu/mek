import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Community from './components/Community';
import Testimonials from './components/Testimonials';

function App() {
  React.useEffect(() => {
    document.title = "Mekonet Operator Network Waitlist";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Benefits />
      <Community />
      <Testimonials />
    </div>
  );
}

export default App;