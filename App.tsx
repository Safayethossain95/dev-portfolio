import React from 'react';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Background from './components/ui/Background';
import Hero from './components/sections/Hero';
import About from './components/sections/Experience'; // Merged logic in Experience component
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import JobExperience from './components/sections/JobExperience';
import WhatsAppButton from './components/ui/WhatsAppButton';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen text-slate-200 selection:bg-cyan-500/30">
      <Background />
      <Navbar />
      
      <div className="flex flex-col gap-0">
        <Hero />
        <About />
        <Skills />
        <JobExperience/>
        <Projects />
        <Contact />
      </div>
      <WhatsAppButton />
      <Footer />
    </main>
  );
};

export default App;