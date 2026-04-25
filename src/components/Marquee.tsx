import React from 'react';

export const Marquee = () => {
  const items = ["Free Worldwide Shipping", "Premium Quality Only", "30 Day Returns", "Noir Market Limited", "Curated Drops 2026", "Exclusive Access Only"];
  
  return (
    <div className="bg-black border-y border-white/10 overflow-hidden h-12 flex items-center whitespace-nowrap overflow-x-hidden">
      <div className="animate-marquee inline-block whitespace-nowrap text-xs font-bold tracking-[0.2em] uppercase">
        {items.map((item, i) => (
          <React.Fragment key={i}>
            <span className="mx-8 text-white">{item}</span>
            <span className="text-red font-black">///</span>
          </React.Fragment>
        ))}
        {items.map((item, i) => (
          <React.Fragment key={i + items.length}>
            <span className="mx-8 text-white">{item}</span>
            <span className="text-red font-black">///</span>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
