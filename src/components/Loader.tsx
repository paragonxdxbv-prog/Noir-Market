import React, { useEffect } from 'react';
import gsap from 'gsap';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline({ onComplete });
    
    tl.to('.loader-text', { opacity: 1, duration: 0.5, delay: 0.2 })
      .to('.loader-dot', { opacity: 1, duration: 0.3 })
      .to('.loader-container', { opacity: 0, duration: 0.5, delay: 0.5 });
  }, [onComplete]);

  return (
    <div className="loader-container fixed inset-0 z-[10000] flex items-center justify-center bg-black">
      <div className="flex items-end font-bold text-3xl tracking-widest text-white uppercase">
        <span className="loader-text opacity-0">NOIR MARKET</span>
        <span className="loader-dot w-2.5 h-2.5 bg-red rounded-full opacity-0 mb-1.5 ml-1"></span>
      </div>
    </div>
  );
};
