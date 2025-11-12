import React from "react";
import { Linkedin, Github, Twitter } from "lucide-react"; // Import social media icons

const Footer = () => {
  return (
    <footer className=" bg-global-gradient text-gray-400 py-10 m"> {/* Darker background for footer, top margin */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-8 px-4"> 
        
        {/* Footer Column 1: Name and Copyright */}
        <div className="footer-col-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">Vishwas Bisht</h3>
          <p className="max-w-xs text-sm">
            Dedicated Frontend Developer passionate about creating engaging and user-friendly web experiences.
          </p>
          <p className="mt-4 text-sm">&copy; {new Date().getFullYear()} Vishwas Bisht. All rights reserved.</p>
        </div>

        {/* Footer Column 2: Quick Links */}
        <div className="footer-col-2 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-pink-400 transition-colors duration-200">Home</a></li>
            <li><a href="#about" className="hover:text-pink-400 transition-colors duration-200">About</a></li>
            <li><a href="#mywork" className="hover:text-pink-400 transition-colors duration-200">Mywork</a></li>
            <li><a href="#contact" className="hover:text-pink-400 transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Footer Column 3: Follow Me (Social Media) */}
        <div className="footer-col-3 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-4">Follow Me</h3>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://www.linkedin.com/in/vishwasbisht/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Linkedin className="w-7 h-7" />
            </a>
            <a href="https://github.com/vishwasbisht" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Github className="w-7 h-7" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors duration-200">
              <Twitter className="w-7 h-7" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
