import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 text-center text-gray-600 text-sm border-t border-white/5">
      <p className="mb-4">
        &copy; {new Date().getFullYear()} Fork IDE Inc. Not affiliated with Microsoft. Please don't sue us.
      </p>
      <div className="flex justify-center gap-6">
        <a href="#" className="hover:text-purple-400 transition-colors">Twitter (X?)</a>
        <a href="#" className="hover:text-purple-400 transition-colors">GitHub</a>
        <a href="#" className="hover:text-purple-400 transition-colors">Discord</a>
      </div>
    </footer>
  );
};

export default Footer;
