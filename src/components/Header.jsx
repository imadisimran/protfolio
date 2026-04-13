"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['home', 'about', 'service', 'portfolio', 'contact'];
      let current = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is just below the header offset
          if (rect.top <= 120) {
            current = section;
          }
        }
      }

      // If user scrolled to the absolute bottom of the page
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        current = 'contact';
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScrollSpy);
    handleScrollSpy(); // Trigger immediately
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top,
        behavior: "smooth"
      });
      // Optionally set active immediately on click so it doesn't lag during scroll
      setActiveSection(id);
    }
  };

  const linkStyle = (id) => 
    activeSection === id 
      ? "text-[#ffb2b6] font-semibold border-b-2 border-[#ffb2b6] pb-1 cursor-pointer transition-all"
      : "text-white/70 hover:text-white transition-colors cursor-pointer border-b-2 border-transparent pb-1";

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 glass-nav">
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto font-headline tracking-tight">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={48} height={48} className="rounded-full shadow-[0_0_15px_rgba(255,1,79,0.3)]" unoptimized />
        </div>
        <div className="hidden md:flex gap-8 items-center">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')} className={linkStyle('home')}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')} className={linkStyle('about')}>About</a>
          <a href="#service" onClick={(e) => handleScroll(e, 'service')} className={linkStyle('service')}>Service</a>
          <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className={linkStyle('portfolio')}>Portfolio</a>
          {/* <a href="#blog" onClick={(e) => handleScroll(e, 'blog')} className={linkStyle('blog')}>Blog</a> */}
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className={linkStyle('contact')}>Contact</a>
        </div>
        <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide uppercase glow-button">
            Hire Me
        </button>
      </nav>
    </header>
  );
}
