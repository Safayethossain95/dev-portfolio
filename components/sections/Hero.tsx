import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal, Sparkles } from 'lucide-react';
import CodeTyper from '../ui/CodeTyper';
import { CodeToken } from '../../types';

const Hero: React.FC = () => {
  // Shorter, profile-focused code snippet
 const codeTokens: CodeToken[] = [
  { text: "const", color: "text-purple-400" },
  { text: " dev ", color: "text-blue-300" },
  { text: "= ", color: "text-slate-300" },
  { text: "{", color: "text-yellow-300", newLine: true },

  { text: "name", color: "text-blue-300", indent: 2 , newLine: true},
  { text: ": ", color: "text-slate-300" },
  { text: "'Safayet'", color: "text-green-400" },
  { text: ",", color: "text-slate-300" },

  { text: "stack", color: "text-blue-300", indent: 2, newLine: true },
  { text: ": ", color: "text-slate-300" },
  { text: "['React', 'Vue']", color: "text-green-400" },
  { text: ",", color: "text-slate-300" },

  { text: "hardWorker", color: "text-blue-300", indent: 2, newLine: true },
  { text: ": ", color: "text-slate-300" },
  { text: "true", color: "text-orange-400" },

  { text: "}", color: "text-yellow-300", newLine: true  },
];


  return (
    <section id="home" className="min-h-screen flex items-end pt-0 px-6 lg:px-12 relative overflow-hidden">
      {/* Background decoration specific to Hero */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 h-full min-h-screen">
        
        {/* Left Content - Text */}
        <div className="space-y-8 z-10 order-2 lg:order-1 self-center pb-20 lg:pb-0 pt-32 lg:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span>Open to work</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
              I'm Safayet, Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Scalable</span> Web Experiences
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mt-6 leading-relaxed">
              Senior Frontend Engineer specializing in <strong className="text-white">React.js</strong> and <strong className="text-white">Vue.js</strong>. 
              Translating complex designs into pixel-perfect, interactive applications.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
            >
              View Projects <ArrowRight className="w-5 h-5" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-4 rounded-xl glass-card text-white font-semibold hover:bg-white/10 transition-all hover:scale-[1.02] flex items-center justify-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Right Content - Image & Code Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="order-1 lg:order-2 w-full max-w-[500px] mx-auto relative lg:h-full flex items-end justify-center self-end"
        >
          {/* Main Glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-cyan-500/20 to-purple-500/20 rounded-full blur-[60px]" />

          {/* Profile Image */}
          <div className="relative z-10 w-full h-[500px] lg:h-[85vh] flex items-end justify-center">
             <img 
               src="https://i.postimg.cc/5y0bK7P0/Whats-App-Image-2026-01-26-at-11-38-00-PM-removebg-preview.png" 
               alt="Safayet Hossain"
               className="h-full w-auto object-contain object-bottom transition-all duration-500 transform -scale-x-100"
             />
          </div>

          {/* Floating Code Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-20 -left-4 lg:-left-12 z-30 w-64 md:w-72"
          >
            <div className="glass-panel rounded-xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-white/10 backdrop-blur-md bg-[#0f172a]/80">
              <div className="bg-white/5 px-4 py-2 flex items-center justify-between border-b border-white/5">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                </div>
                <div className="flex items-center text-[10px] text-slate-400 gap-1">
                  <Terminal className="w-3 h-3" />
                  <span>Profile.ts</span>
                </div>
              </div>
              <div className="p-4">
                <CodeTyper tokens={codeTokens} speed={40} />
              </div>
            </div>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero;