import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: 'GitHub', icon: <Github size={20} />, url: 'https://github.com/mohitraj26' },
    { name: 'LinkedIn', icon: <Linkedin size={20} />, url: 'https://www.linkedin.com/in/mohitraj26/' },
  ];

  const quickLinks = [
    { name: 'About', url: '#about' },
    { name: 'Projects', url: '#projects' },
    { name: 'Achievements', url: '#achievements' },
    { name: 'Contact', url: '#contact' },
  ];

  const contactInfo = [
    { icon: <Mail size={20} className="text-gray-400 flex-shrink-0 " />, text: 'mohitraj26102@gmail.com', url: 'mailto:mohitraj26102@gmail.com' },
    { icon: <MapPin size={20} className="text-gray-400 flex-shrink-0" />, text: 'India', url: '#' },
  ];

  return (
    <footer className=" text-gray-300 font-sans mt-20">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">
          
          {/* Column 1: Brand and Bio */}
          <div className="md:col-span-2 lg:col-span-2">
             <div className="flex items-center space-x-3 mb-4">
                <Code2 size={32} className="text-white"/>
                <h2 className="text-2xl font-bold text-white tracking-tight">Mohit Raj</h2>
            </div>
            <p className="text-gray-400 max-w-md text-base leading-relaxed">
              Driven full-stack developer creating innovative, high-performance web solutions. Experienced with React, Next.js, and modern technologies to deliver reliable and engaging products.
            </p>
             <div className="flex items-center space-x-2 mt-6">
                <Heart size={16} className="text-pink-500" fill="currentColor" />
                <span className="text-gray-400">Made with passion in India</span>
            </div>
          </div>

          {/* Spacer Column for larger screens */}
          <div className="hidden lg:block"></div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.url} className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group">
                    <span className="text-indigo-400 mr-2 group-hover:translate-x-1 transition-transform duration-300">•</span>{link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">Contact Info</h3>
             <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  {item.icon}
                   {item.url.startsWith('mailto:') ? 
                    <a href={item.url} className="text-gray-400 hover:text-white transition-colors duration-300 break-all">{item.text}</a> :
                    <span className="text-gray-400">{item.text}</span>
                   }
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section: Social links and Copyright */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col-reverse sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400 text-center sm:text-left mt-4 sm:mt-0">
            &copy; {currentYear} Mohit Raj. All Rights Reserved.
          </p>
           <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="bg-slate-800 hover:bg-indigo-600 p-2.5 rounded-full text-gray-400 hover:text-white transition-all duration-300"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
export { Footer };