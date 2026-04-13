"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, FreeMode } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import worksData from "@/data/worksData.json";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";

export default function Works() {
  const swiperRef = useRef(null);
  const swiperNavPrevRef = useRef(null);
  const swiperNavNextRef = useRef(null);

  const works = worksData;

  const handleMouseEnter = () => {
    const swiper = swiperRef.current;
    if (swiper && swiper.autoplay && !swiper.destroyed) {
      // Safely freeze at the exact current translation without invoking prototype methods that fail in Next proxied HMR
      if (swiper.translate) {
        swiper.setTranslate(swiper.translate);
      }
      swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    const swiper = swiperRef.current;
    if (swiper && swiper.autoplay && !swiper.destroyed) {
      swiper.autoplay.start();
    }
  };

  return (
    <section id="portfolio" className="py-32 bg-surface overflow-hidden">
      <div className="relative max-w-7xl mx-auto flex items-center justify-between mb-20 px-8">
        <button ref={swiperNavPrevRef} className="hidden md:flex w-16 h-16 items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed z-10">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 200" }}>west</span>
        </button>
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-5xl md:text-7xl font-headline font-medium text-white tracking-tight">My Works</h2>
          <p className="text-on-surface-variant text-lg mt-6 font-body leading-relaxed">
            A curated showcase of my GitHub projects, combining systematic design with robust backend architecture to solve complex problems.
          </p>
        </div>
        <button ref={swiperNavNextRef} className="hidden md:flex w-16 h-16 items-center justify-center text-white/40 hover:text-white transition-colors cursor-pointer hover:bg-white/5 disabled:opacity-30 disabled:cursor-not-allowed z-10">
          <span className="material-symbols-outlined text-4xl" style={{ fontVariationSettings: "'wght' 200" }}>east</span>
        </button>
      </div>

      <div 
        className="px-4 md:px-8"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          modules={[Autoplay, Navigation, FreeMode]}
          speed={6000}
          loop={true}
          freeMode={true}
          slidesPerView="auto"
          spaceBetween={32}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = swiperNavPrevRef.current;
            swiper.params.navigation.nextEl = swiperNavNextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          className="continuous-slider py-4 !overflow-visible"
        >
          {works.map((work) => (
            <SwiperSlide key={work.id} style={{ width: "auto" }}>
              <div className="w-[300px] md:w-[400px] h-[450px] md:h-[550px] rounded-[2rem] overflow-hidden relative flex flex-col bg-surface-container-high border border-white/5 shadow-xl transition-transform duration-500 hover:-translate-y-2 group">
                <div className="p-8 pb-0 flex-1 relative z-10">
                  <h3 className="text-white text-3xl font-headline font-semibold tracking-tight">{work.title}</h3>
                  <p className="text-on-surface-variant text-sm mt-4 leading-relaxed pr-4">{work.desc}</p>
                </div>
                <div className="relative h-[60%] w-full mt-auto">
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-surface-container-high to-transparent z-10 pointer-events-none"></div>
                  <Image 
                    src={work.image} 
                    alt={work.title} 
                    fill 
                    unoptimized
                    className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                  />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end z-20">
                    <div className="flex flex-wrap gap-2 max-w-[65%]">
                      {work.tags.map((tag) => (
                        <span key={tag} className="bg-[#131315]/80 backdrop-blur border border-white/10 text-white text-xs font-bold px-4 py-2 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Link href={`/works/${work.id}`} className="text-white bg-primary px-4 py-2.5 rounded-full hover:bg-white hover:text-black hover:scale-105 transition-all shadow-[0_4px_15px_rgba(255,81,106,0.4)] flex items-center gap-2">
                       <span className="text-xs font-bold tracking-widest uppercase">Details</span>
                       <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
