import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      <p className="text-slate-500 text-sm">
        Copyright © {new Date().getFullYear()} Safayet Hossain. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;