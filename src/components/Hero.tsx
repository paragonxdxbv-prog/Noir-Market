import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Hero = () => {
  const bgRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Slow zoom effect on load
    gsap.fromTo(bgRef.current, 
      { scale: 1 }, 
      { scale: 1.1, duration: 20, ease: 'none', repeat: -1, yoyo: true }
    );

    // Blinking dot
    gsap.to(dotRef.current, {
      opacity: 0,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    });
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-end pb-12 sm:pb-24 px-6 lg:px-12 pt-32">
      {/* Background Image */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-full bg-cover bg-center opacity-60 grayscale brightness-75"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2574&auto=format&fit=crop)' }}
      />
      
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-8 px-4">
        <div className="max-w-3xl">
          <div className="inline-block text-red mb-6 text-[8.4px] font-bold tracking-[0.3em] uppercase">
            New Arrivals 2026
          </div>
          <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-6 whitespace-pre-line">
            CURATED FOR<br/>THE ELITE.
          </h1>
          <p className="text-white/60 max-w-md text-lg font-light tracking-normal leading-relaxed">
            Premium products. Dark aesthetic.<br/>Free shipping worldwide.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="hoverable bg-red text-white px-10 py-4 text-[8.4px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-none">
              Shop Now
            </button>
            <button className="hoverable bg-transparent border border-white/30 text-white px-10 py-4 text-[8.4px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-none">
              View Lookbook
            </button>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-2 text-[7px] tracking-widest uppercase opacity-40">
          Live Stream 04
          <span ref={dotRef} className="w-2 h-2 bg-red rounded-full block border border-red/20"></span>
        </div>
      </div>
    </section>
  );
};
