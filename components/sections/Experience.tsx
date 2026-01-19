import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Code, User } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* About Column */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 mb-6 text-cyan-400 font-mono text-sm">
            <User className="w-4 h-4" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Innovation</span>
          </h2>
          <div className="glass-card p-8 rounded-2xl space-y-4 text-slate-300 leading-relaxed">
            <p>
              With <strong className="text-white">4 years of experience</strong> in web development, 
              I specialize in creating robust applications using the modern JavaScript ecosystem.
            </p>
            <p>
              My journey involves <strong className="text-white">2 years deep-diving into React.js</strong> and 
              <strong className="text-white"> 1 year mastering Vue.js</strong>, giving me a unique perspective on 
              component architecture and state management patterns across frameworks.
            </p>
            <p>
              Beyond the frontend, I possess 6 months of Node.js experience, allowing me to understand the full stack 
              lifecycle and integrate REST APIs seamlessly.
            </p>
          </div>
        </motion.div>

        {/* Experience Column */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
           <div className="flex items-center gap-2 mb-6 text-purple-400 font-mono text-sm">
            <Briefcase className="w-4 h-4" />
            <span>EXPERIENCE</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Journey</span>
          </h2>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl border-l-4 border-l-cyan-500 relative">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">Web Developer</h3>
                  <p className="text-slate-400">Current Company</p>
                </div>
                <div className="flex items-center text-xs text-slate-500 bg-white/5 px-2 py-1 rounded">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>Present</span>
                </div>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <Code className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                  <span>Built and maintained an in-house <strong className="text-white">eCommerce website builder</strong> used by multiple tenants.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                  <span>Architected scalable UI systems focusing on reusable components and performance.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Code className="w-4 h-4 text-cyan-500 mt-1 shrink-0" />
                  <span>Reduced page load times by implementing lazy loading and code-splitting strategies.</span>
                </li>
              </ul>
            </div>
            {/* Can add more experience blocks here if data provided */}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;