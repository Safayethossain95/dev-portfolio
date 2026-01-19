import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Project } from '../../types';
import { ArrowUpRight } from 'lucide-react';
const projects: Project[] = [
  {
    id: 1,
    name: "Ferrytech",
    description: "Construction equipment provider based in Bangladesh. A complete digital presence for industrial machinery.",
    liveLink: "https://ferrytech.vercel.app/",
    image: "/static/projects/ferrytech.png",
     tags: ["React.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    id: 2,
    name: "BSSIT",
    description: "Corporate website for an IT company located in Wari, Dhaka. Showcasing services and portfolio.",
    liveLink: "http://www.bssitbd.com/",
    image: "/static/projects/bssit.png",
     tags: ["HTML5", "CSS3", "JavaScript"]
  },
  {
    id: 3,
    name: "ILearn",
    description: "Learning management system selling courses for kids and juniors. Features course tracking and interactivity.",
    liveLink: "https://i-learn-seven.vercel.app/",
    image: "/static/projects/ilearn.png",
    tags: ["Vue.js", "Firebase", "Pinia"]
  },
  {
    id: 4,
    name: "Academease",
    description: "Comprehensive learning platform for students. Designed for scalability and ease of use.",
    liveLink: "https://ferrytech.vercel.app/",
    image: "/static/projects/academease.png",
     tags: ["Next.js", "TypeScript", "Vercel"]
  },
  {
    id: 5,
    name: "Tarbiyah",
    description: "Islamic learning platform for students. Focused on clean typography and accessible content.",
    liveLink: "https://new.tarbiyahinst.com",
    image: "/static/projects/tarbiyah.png",
    tags: ["React.js", "Node.js", "MongoDB"]
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl">
            A selection of recent work delivering real value. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group flex flex-col gap-4"
            >
              {/* Image Card */}
              <a 
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative overflow-hidden rounded-2xl aspect-[3/2] bg-slate-900 border border-white/5 shadow-2xl group-hover:shadow-cyan-500/10 transition-shadow duration-500"
              >
                {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                
                {/* Hover Action */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 text-white">
                    <ArrowUpRight className="w-8 h-8" />
                  </div>
                </div>
              </a>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {project.name}
                  </h3>
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="md:hidden text-cyan-400"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags?.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10 group-hover:border-cyan-500/30 group-hover:text-cyan-300 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;