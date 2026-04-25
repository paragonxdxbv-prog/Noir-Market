import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { CartProvider } from './context/CartContext';
import { Loader } from './components/Loader';
import { Cursor } from './components/Cursor';
import { Nav } from './components/Nav';
import { Cart } from './components/Cart';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Featured } from './components/Featured';
import { BestSellers } from './components/BestSellers';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      // Fade up sections on scroll
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        gsap.fromTo(section, 
          { y: 50, opacity: 0 },
          { 
            y: 0, 
            opacity: 1, 
            duration: 1, 
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    }
  }, [loading]);

  return (
    <CartProvider>
      <div className="bg-black min-h-screen text-white font-sans selection:bg-red selection:text-white relative">
        <div className="grain-overlay" />
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-dot-pattern z-0" />
        <Cursor />
        <Cart />
        
        {loading ? (
          <Loader onComplete={() => setLoading(false)} />
        ) : (
          <main>
            <Nav />
            <Hero />
            <Marquee />
            <Featured />
            <BestSellers />
            <WhyUs />
            <Testimonials />
            <Newsletter />
            <Footer />
          </main>
        )}
      </div>
    </CartProvider>
  );
}
