import React from 'react';
import { motion } from 'framer-motion';
import { SkillCategory } from '../../types';
import { Layers, Code2, Server, Wrench } from 'lucide-react';

const skillsData: SkillCategory[] = [
  {
    title: "Frontend Core",
    skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Tailwind CSS", "SASS/SCSS"]
  },
  {
    title: "Frameworks & Libs",
    skills: ["React.js", "Vue.js 3", "Next.js", "Redux Toolkit", "Pinia", "Framer Motion", "React Query"]
  },
  {
    title: "Backend & API",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth", "Firebase", "MongoDB Basics"]
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Vite", "Webpack", "Figma", "VS Code", "Postman", "Vercel"]
  }
];

const categoryIcons = [Layers, Code2, Server, Wrench];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technical Expertise</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolset developed over 4 years of building production-grade web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = categoryIcons[idx];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-6 rounded-2xl hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-cyan-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span 
                      key={skill} 
                      className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;