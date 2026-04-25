import React from 'react';
import { Globe, ShieldCheck, RefreshCw, MessageSquare } from 'lucide-react';

const reasons = [
  {
    icon: <Globe size={24} className="text-red mb-4" />,
    title: 'Free Shipping',
    desc: 'Worldwide. No minimums.'
  },
  {
    icon: <ShieldCheck size={24} className="text-red mb-4" />,
    title: 'Premium Only',
    desc: 'Every product curated personally.'
  },
  {
    icon: <RefreshCw size={24} className="text-red mb-4" />,
    title: 'Easy Returns',
    desc: '30 days. No questions.'
  },
  {
    icon: <MessageSquare size={24} className="text-red mb-4" />,
    title: '24h Support',
    desc: 'Real humans. Fast responses.'
  }
];

export const WhyUs = () => {
  return (
    <section id="about" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-4xl font-bold uppercase tracking-tight">Why Us</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {reasons.map((reason, i) => (
          <div key={i} className="flex flex-col">
            {reason.icon}
            <h3 className="font-bold text-sm tracking-widest uppercase mb-2">{reason.title}</h3>
            <p className="text-white/50 text-sm">{reason.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
