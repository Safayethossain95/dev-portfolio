import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, LayoutTemplate, Layers } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
           <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Beyond the Code
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl">
            I'm Safayet Hossain, a developer who bridges the gap between complex backend logic and silky smooth frontend experiences.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-min gap-6">
          
          {/* Card 1: The Narrative (Span 4) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4 rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-cyan-500/30 transition-colors relative overflow-hidden group"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
             <div className="relative z-10">
                <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6">
                    <Code2 className="text-cyan-400 w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Full-Stack Capability, Frontend at Heart</h3>
                <p className="text-slate-400 leading-relaxed text-lg">
                  With <span className="text-white font-medium">4 years</span> of experience, I've transitioned from building simple layouts to working on complex <span className="text-cyan-400">SASS eCommerce builder</span> and scalable UI systems. My deep dive into <span className="text-white font-medium">React (2y)</span> and <span className="text-green-400 font-medium">Vue (1y)</span> allows me to choose the right tool for the job, while my Node.js background ensures I understand the full data lifecycle.
                </p>
             </div>
          </motion.div>

          {/* Card 2: The Stats (Span 2) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2 rounded-3xl p-8 bg-gradient-to-b from-slate-800/50 to-slate-900/50 border border-white/10 hover:border-purple-500/30 transition-colors flex flex-col justify-center items-center text-center relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -mr-16 -mt-16" />
             <span className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-500">4+</span>
             <span className="text-lg text-slate-400 mt-2 font-medium">Years of Experience</span>
             <div className="mt-6 flex items-center gap-2 text-sm text-purple-400 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                <Cpu className="w-4 h-4" />
                <span>Production Ready</span>
             </div>
          </motion.div>

          {/* Card 3: The "Builder" Highlight (Span 3) */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
             className="md:col-span-3 rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-green-500/30 transition-colors relative overflow-hidden"
          >
             <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                   <LayoutTemplate className="text-green-400 w-5 h-5" />
                   System Architecture
                </h3>
                <p className="text-slate-400 mb-6">
                   Worked on production level <span className="text-white">eCommerce Website Builder</span>. Handled complex state, dynamic routing, and component hydration.
                </p>
                {/* Visual approximation of a builder UI */}
                <div className="w-full h-24 bg-slate-900/80 rounded-lg border border-white/5 p-3 flex gap-3 opacity-80">
                   <div className="w-1/4 h-full bg-slate-800/50 rounded flex flex-col gap-2 p-2">
                      <div className="w-full h-2 bg-slate-700 rounded" />
                      <div className="w-2/3 h-2 bg-slate-700 rounded" />
                   </div>
                   <div className="flex-1 h-full bg-slate-800/50 rounded relative overflow-hidden">
                       <div className="absolute top-2 left-2 right-2 h-20 bg-green-500/10 rounded border border-green-500/20 grid place-items-center">
                          <span className="text-xs text-green-400 font-mono">Drag & Drop Zone</span>
                       </div>
                   </div>
                </div>
             </div>
          </motion.div>

           {/* Card 4: Tech Ecosystem (Span 3) */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-3 rounded-3xl p-8 bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
          >
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                 <Layers className="text-blue-400 w-5 h-5" />
                 Tech Ecosystem
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.8)]" />
                    <div>
                        <div className="text-white font-medium">Vue.js</div>
                        <div className="text-xs text-slate-500">Composition API</div>
                    </div>
                 </div>
                 <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]" />
                    <div>
                        <div className="text-white font-medium">React</div>
                        <div className="text-xs text-slate-500">Advanced Hooks</div>
                    </div>
                 </div>
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]" />
                    <div>
                        <div className="text-white font-medium">Node.js</div>
                        <div className="text-xs text-slate-500">REST Architecture</div>
                    </div>
                 </div>
                  <div className="p-4 rounded-xl bg-slate-900/50 border border-white/5 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(192,132,252,0.8)]" />
                    <div>
                        <div className="text-white font-medium">Performance</div>
                        <div className="text-xs text-slate-500">Core Web Vitals</div>
                    </div>
                 </div>
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;