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
            <Link href="https://www.facebook.com/profile.php?id=61578310821627" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </Link>
            <Link href="https://www.linkedin.com/in/imadisimran/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </Link>
            <Link href="https://wa.me/8801743345953" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-onyx-accent hover:border-onyx-accent transition-colors">
               <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            </Link>
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
              <Link href="#home" onClick={(e) => handleScroll(e, 'home')} className="text-on-surface-variant hover:text-onyx-accent transition-colors inline-block text-sm border-b border-transparent hover:border-onyx-accent w-max pb-1 cursor-pointer">Homepage</Link>
              <Link href="#service" onClick={(e) => handleScroll(e, 'service')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Technology</Link>
              <Link href="#portfolio" onClick={(e) => handleScroll(e, 'portfolio')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Portfolio Works</Link>
              <Link href="#blog" onClick={(e) => handleScroll(e, 'blog')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Resources & news</Link>
              <Link href="#about" onClick={(e) => handleScroll(e, 'about')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Careers</Link>
              <Link href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Contact Us</Link>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-white font-headline font-bold mb-8">Legal</h4>
            <ul className="space-y-4 flex flex-col">
              <Link href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Privacy Policy</Link>
              <Link href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Terms of Services</Link>
              <Link href="#" className="text-on-surface-variant hover:text-white transition-colors text-sm cursor-pointer">Lawyer&apos;s Corners</Link>
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
      <div className="w-full h-1 bg-linear-to-r from-onyx-accent via-primary to-onyx-accent opacity-80 shadow-[0_-2px_15px_rgba(255,1,79,0.3)]"></div>
    </footer>
  );
}
