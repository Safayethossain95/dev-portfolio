import React from 'react';
import { motion } from 'framer-motion';
import { AppWindow, Layers, Database, Terminal, Sparkles } from 'lucide-react';

interface SkillCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  iconColor: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    title: 'Frontend Engineering',
    description: 'Building pixel-perfect, accessible, and performant client-side experiences.',
    icon: AppWindow,
    gradient: 'from-cyan-400 to-blue-500',
    iconColor: 'text-cyan-400',
    skills: ['React.js', 'Vue.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3']
  },
  {
    id: 'frameworks',
    title: 'Frameworks & Libraries',
    description: 'Leveraging modern tools for state management, routing, and styling.',
    icon: Layers,
    gradient: 'from-purple-400 to-pink-500',
    iconColor: 'text-purple-400',
    skills: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit', 'Pinia', 'Vue Router']
  },
  {
    id: 'backend',
    title: 'Backend & Architecture',
    description: 'Designing robust server-side logic and scalable APIs.',
    icon: Database,
    gradient: 'from-emerald-400 to-green-500',
    iconColor: 'text-emerald-400',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'JWT Auth', 'Serverless']
  },
  {
    id: 'tools',
    title: 'DevOps & Tools',
    description: 'Streamlining development workflows and deployment pipelines.',
    icon: Terminal,
    gradient: 'from-orange-400 to-red-500',
    iconColor: 'text-orange-400',
    skills: ['Git / GitHub', 'Vite', 'Webpack', 'VS Code', 'Figma', 'Vercel']
  }
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-cyan-500/50"></div>
                <span className="px-4 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4" />
                    Expertise
                </span>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-cyan-500/50"></div>
            </motion.div>
            
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold text-center text-white mb-6"
            >
                Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Arsenal</span>
            </motion.h2>
            
            <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-center text-slate-400 max-w-2xl mx-auto text-lg"
            >
                A curated stack of modern technologies I use to build scalable, high-performance web applications.
            </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/50 border border-white/5 overflow-hidden hover:border-white/10 transition-colors duration-300"
            >
              {/* Background Gradient Glow */}
              <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${category.gradient} opacity-[0.03] group-hover:opacity-[0.08] blur-3xl rounded-full transition-opacity duration-500`} />
              
              <div className="p-8 relative z-10 h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-white/5 border border-white/10 group-hover:scale-110 transition-transform duration-300`}>
                        <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                    </div>
                    {/* Decorative visual lines */}
                    <div className="flex gap-1">
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                        <div className="w-1 h-1 rounded-full bg-white/20"></div>
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 transition-colors">
                    {category.title}
                </h3>
                <p className="text-slate-400 mb-8 leading-relaxed">
                    {category.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                            <div 
                                key={skill} 
                                className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-white/5 text-slate-300 text-sm font-mono hover:bg-white/10 hover:border-white/10 hover:text-white transition-colors cursor-default flex items-center gap-2"
                            >
                                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;