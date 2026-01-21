import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Terminal } from 'lucide-react';
import CodeTyper from '../ui/CodeTyper';
import { CodeToken } from '../../types';

const Hero: React.FC = () => {
  // Vue composition API snippet tokens
  const codeTokens: CodeToken[] = [
    { text: "<script setup>", color: "text-blue-400" },
    { text: "", color: "text-slate-300", newLine: true },
    { text: "import", color: "text-purple-400" },
    { text: " { ", color: "text-slate-300" },
    { text: "ref", color: "text-yellow-300" },
    { text: " } ", color: "text-slate-300" },
    { text: "from", color: "text-purple-400" },
    { text: " 'vue'", color: "text-green-400" },
    
    { text: "", color: "text-slate-300", newLine: true }, // Empty line

    { text: "const", color: "text-purple-400" },
    { text: " email ", color: "text-blue-300" },
    { text: "= ", color: "text-purple-400" },
    { text: "ref", color: "text-yellow-300" },
    { text: "('')", color: "text-green-400" },

    { text: "const", color: "text-purple-400", newLine: true  },
    { text: " password ", color: "text-blue-300" },
    { text: "= ", color: "text-purple-400" },
    { text: "ref", color: "text-yellow-300" },
    { text: "('')", color: "text-green-400" },

    { text: "", color: "text-slate-300", newLine: true }, // Empty line

    { text: "const", color: "text-purple-400" },
    { text: " login ", color: "text-blue-200" },
    { text: "= ", color: "text-purple-400" },
    { text: "() ", color: "text-yellow-300" },
    { text: "=>", color: "text-purple-400" },
    { text: " {", color: "text-yellow-300" },

    { text: "console", color: "text-blue-300", indent: 2, newLine: true },
    { text: ".", color: "text-slate-300" },
    { text: "log", color: "text-yellow-300" },
    { text: "(", color: "text-purple-400" },
    { text: "email", color: "text-blue-300" },
    { text: ".", color: "text-slate-300" },
    { text: "value", color: "text-cyan-300" },
    { text: ", ", color: "text-slate-300" },
    { text: "password", color: "text-blue-300" },
    { text: ".", color: "text-slate-300" },
    { text: "value", color: "text-cyan-300" },
    { text: ")", color: "text-purple-400" },
    
    { text: "}", color: "text-yellow-300", indent: 2 ,newLine: true },
    { text: "</script>", color: "text-blue-400", newLine: true },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="space-y-8 z-10 order-1 lg:order-2">
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
              I'm Safayet, and I build <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Scalable</span> Web Experiences
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl max-w-lg mt-6">
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

        {/* Right Content - Code Editor */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="order-1 lg:order-2 w-full max-w-xl mx-auto perspective-1000"
        >
          <div className="relative glass-panel rounded-xl overflow-hidden shadow-2xl shadow-purple-900/20 border border-slate-700/50 bg-[#1e1e1e]/80 transform rotate-y-[-5deg] hover:rotate-y-0 transition-transform duration-500">
            {/* Window Header */}
            <div className="bg-[#1e1e1e] px-4 py-3 flex items-center justify-between border-b border-white/5">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex items-center text-xs text-slate-500 space-x-2">
                <Terminal className="w-3 h-3" />
                <span>Login.vue</span>
              </div>
              <div className="w-8" />
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto">
              <CodeTyper tokens={codeTokens} speed={30} />
            </div>

            {/* Decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 blur-[50px] pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;