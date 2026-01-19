import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactLinks = [
    {
      label: "GitHub",
      value: "Safayethossain95",
      link: "https://github.com/Safayethossain95",
      icon: Github,
      color: "hover:text-white"
    },
    {
      label: "LinkedIn",
      value: "Safayet Hossain",
      link: "https://www.linkedin.com/in/safayethossain956/",
      icon: Linkedin,
      color: "hover:text-blue-400"
    }
  ];

  const contactDetails = [
    {
      type: "Email",
      value: "safayet.hossain95@gmail.com",
      icon: Mail,
      isCopyable: true
    },
    {
      type: "Phone",
      value: "+8801742141355",
      icon: Phone,
      isCopyable: true
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Connect</span>
          </h2>
          <p className="text-slate-400 mb-12">
            Ready to build something amazing? Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center gap-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">Social Profiles</h3>
            <div className="flex justify-center gap-6">
              {contactLinks.map((item) => (
                <a 
                  key={item.label}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 rounded-xl bg-white/5 border border-white/10 transition-all hover:scale-110 hover:bg-white/10 ${item.color}`}
                  aria-label={item.label}
                >
                  <item.icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Direct Contact */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 rounded-2xl flex flex-col justify-center gap-4"
          >
            <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
            {contactDetails.map((item) => (
              <div key={item.type} className="flex items-center justify-between p-3 rounded-lg bg-white/5 border border-white/10 group">
                <div className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-sm md:text-base text-slate-300">{item.value}</span>
                </div>
                <button
                  onClick={() => handleCopy(item.value, item.type)}
                  className="p-2 rounded-md hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copied === item.type ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;