import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { Experience as ExperienceType } from '../../types';

const experiences: ExperienceType[] = [
  {
    id: 1,
    role: "Vue JS Developer",
    company: "Bponi",
    period: "Feb 1, 2025 - Present",
    description: "Spearheading frontend development initiatives using the Vue.js ecosystem.",
    achievements: [
      "Developing scalable single-page applications using Vue 3 and the Composition API.",
      "Implementing complex state management solutions with Pinia for efficient data flow.",
      "Integrating RESTful APIs and ensuring seamless frontend-backend communication."
    ]
  },
  {
    id: 2,
    role: "React Developer",
    company: "BSSIT",
    period: "2023 - 2025",
    description: "Specialized in building high-performance React applications.",
    achievements: [
      "Developed dynamic user interfaces using React.js, functional components, and Hooks.",
      "Managed global application state using Redux Toolkit and Context API.",
      "Optimized rendering performance and component reusability across projects."
    ]
  },
  {
    id: 3,
    role: "Student Support Associate",
    company: "Creative IT",
    period: "2022 - 2023",
    description: "Provided technical mentorship and support for web design students.",
    achievements: [
      "Delivered comprehensive online and offline support for Web Design students.",
      "Assisted in debugging HTML, CSS, and JavaScript code to resolve student issues.",
      "Guided students through best practices in responsive design and layout techniques."
    ]
  }
];

const JobExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-slate-400">My professional journey</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-purple-500/0 md:-ml-[0.5px]"></div>

          {experiences.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div key={exp.id} className="relative mb-12 last:mb-0">
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 -ml-[7px] md:-ml-2 mt-1.5 shadow-[0_0_10px_rgba(6,182,212,0.8)] z-10"></div>

                <div className={`flex flex-col w-full ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Role Info */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`md:w-1/2 ml-8 md:ml-0 mb-4 md:mb-0 ${isEven ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}
                  >
                    <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    <p className="text-cyan-400 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-slate-500">{exp.period}</p>
                  </motion.div>

                  {/* Description Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                    className={`md:w-1/2 ml-8 md:ml-0 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}
                  >
                    <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-cyan-500/20 transition-colors">
                      <p className="text-slate-300 mb-4 italic">
                        {exp.description}
                      </p>
                      <ul className="space-y-3">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                            <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default JobExperience;