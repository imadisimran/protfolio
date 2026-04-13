"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const top = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-surface-container-low border-t border-white/5 overflow-hidden">
      {/* Geometric Line Background (matching the reference photo's thin intersecting lines) */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <svg className="w-[120%] h-full" viewBox="0 0 1000 400" preserveAspectRatio="none">
          <path d="M500 0 L1000 400" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M500 0 L0 400" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M750 0 L1000 200" stroke="currentColor" strokeWidth="1" fill="none" />
          <path d="M250 0 L0 200" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 flex flex-col md:flex-row justify-between gap-16">
        
        {/* Left Column: Brand & Details */}
        <div className="flex-1 max-w-md">
          <div className="flex items-center gap-4 mb-8">
            <Image src="/logo.png" alt="Logo" width={56} height={56} className="rounded-full shadow-[0_0_15px_rgba(255,1,79,0.3)]" unoptimized />
          </div>
          
          <p className="text-on-surface-variant leading-relaxed text-sm pr-4 mb-8">
            Empowering brands with advanced digital tools and high-end design systems to improve user engagement and aesthetic outcomes.
          </p>

          <div className="flex items-center gap-4 mb-10">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
              <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>facebook</span>
            </a>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 px-6 py-3 border border-white/20 rounded hover:bg-white/5 transition-all text-sm font-bold tracking-widest text-white uppercase group cursor-pointer"
          >
            <span className="material-symbols-outlined transition-transform group-hover:-translate-y-1 text-onyx-accent">keyboard_double_arrow_up</span>
            Back to Top
          </button>
        </div>

        {/* Right Columns: Links */}
        <div className="flex flex-wrap md:flex-nowrap gap-16 md:gap-24 md:pr-16">
          {/* Site Map */}
          <div className="space-y-6">
            <h4 className="text-white font-headline font-bold mb-8">Site Map</h4>
            <ul className="space-y-4 flex flex-col">
              <a href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-on-surface-variant hover:text-onyx-accent transition-colors inline-block text-sm border-b border-transparent hover:border-onyx-accent w-max pb-1 cursor-pointer">Homepage</a>
              <a href="#service" onClick={(e) => handleScroll(e, 'service')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Technology</a>
              <a href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Portfolio Works</a>
              <a href="#blog" onClick={(e) => handleScroll(e, 'blog')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Resources & news</a>
              <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Careers</a>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Contact Us</a>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-white font-headline font-bold mb-8">Legal</h4>
            <ul className="space-y-4 flex flex-col">
              <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Privacy Policy</a>
              <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Terms of Services</a>
              <a href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Lawyer&apos;s Corners</a>
            </ul>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#171719] border-t border-white/5 py-5 text-center px-4">
        <p className="text-xs text-on-surface-variant font-bold tracking-wider">
          Copyright © {new Date().getFullYear()}, Omorpro, All Rights Reserved.
        </p>
      </div>
      
      {/* Orange/Theme Accent Bar matching image (bottom absolute strip) */}
      <div className="w-full h-1 bg-gradient-to-r from-onyx-accent via-primary to-onyx-accent opacity-80 shadow-[0_-2px_15px_rgba(255,1,79,0.3)]"></div>
    </footer>
  );
}
