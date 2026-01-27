import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Github, Linkedin, Copy, Check, ArrowUpRight, Terminal, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          
          
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight"
          >
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500">extraordinary</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400 max-w-xl mx-auto"
          >
            Whether you have a question, a project idea, or just want to say hi, I'm always open to discussing new opportunities.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Email Card - Large Span */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="md:col-span-2 group relative rounded-3xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-8 overflow-hidden hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 shadow-lg dark:shadow-none"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full justify-between">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                            <Mail className="w-6 h-6" />
                        </div>
                        <button
                            onClick={() => handleCopy('safayet.hossain95@gmail.com', 'email')}
                            className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors bg-white/50 dark:bg-white/5 px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/5 hover:bg-slate-100 dark:hover:bg-white/10"
                        >
                            <AnimatePresence mode='wait'>
                                {copied === 'email' ? (
                                    <motion.span
                                        key="check"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center gap-2 text-green-500 dark:text-green-400"
                                    >
                                        <Check className="w-4 h-4" /> Copied
                                    </motion.span>
                                ) : (
                                    <motion.span
                                        key="copy"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        className="flex items-center gap-2"
                                    >
                                        <Copy className="w-4 h-4" /> Copy Email
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </button>
                    </div>

                    <div>
                        <h3 className="text-slate-500 dark:text-slate-400 font-medium mb-1">Drop me a line</h3>
                        <a href="mailto:safayet.hossain95@gmail.com" className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors break-all">
                            safayet.hossain95@gmail.com
                        </a>
                    </div>
                </div>
            </motion.div>

            {/* LinkedIn Card */}
            <motion.a 
                href="https://www.linkedin.com/in/safayethossain956/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative rounded-3xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-8 overflow-hidden hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between shadow-lg dark:shadow-none"
            >
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10">
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-3 rounded-2xl bg-blue-500/10 dark:bg-blue-500/20 text-blue-500 dark:text-blue-400">
                            <Linkedin className="w-6 h-6" />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-slate-400 dark:text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">LinkedIn</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">Professional Network</p>
                 </div>
            </motion.a>

             {/* Phone Card */}
             <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative rounded-3xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-8 overflow-hidden hover:border-purple-500/30 transition-all duration-300 flex flex-col justify-between shadow-lg dark:shadow-none"
            >
                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-500 dark:text-purple-400">
                            <Phone className="w-6 h-6" />
                        </div>
                         <button
                            onClick={() => handleCopy('+8801742141355', 'phone')}
                            className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
                        >
                             <AnimatePresence mode='wait'>
                                {copied === 'phone' ? (
                                    <motion.div key="check" initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                                        <Check className="w-5 h-5 text-green-500 dark:text-green-400" />
                                    </motion.div>
                                ) : (
                                    <motion.div key="copy" initial={{scale:0}} animate={{scale:1}} exit={{scale:0}}>
                                        <Copy className="w-5 h-5" />
                                    </motion.div>
                                )}
                             </AnimatePresence>
                        </button>
                    </div>
                    <div>
                         <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                         <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">Mon-Fri, 9am-6pm</p>
                         <a href="tel:+8801742141355" className="text-lg font-mono text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors">+880 1742 141 355</a>
                    </div>
                 </div>
            </motion.div>

             {/* GitHub Card - Large Span */}
             <motion.a 
                href="https://github.com/Safayethossain95"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="md:col-span-2 group relative rounded-3xl bg-white/50 dark:bg-slate-900/40 border border-slate-200 dark:border-white/10 p-8 overflow-hidden hover:border-slate-400 dark:hover:border-slate-500/30 transition-all duration-300 shadow-lg dark:shadow-none"
            >
                 <div className="absolute inset-0 bg-gradient-to-br from-slate-200 via-transparent to-transparent dark:from-slate-500/10 dark:via-transparent dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                 
                 <div className="relative z-10 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <div className="p-4 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white group-hover:scale-110 transition-transform">
                            <Github className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">Safayethossain95</h3>
                            <p className="text-slate-600 dark:text-slate-400">Check out my open source contributions and repositories.</p>
                        </div>
                    </div>
                    <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 dark:border-white/10 text-slate-400 group-hover:bg-slate-900 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-slate-900 transition-all">
                        <ArrowUpRight className="w-6 h-6" />
                    </div>
                 </div>
            </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;