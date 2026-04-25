import React from 'react';
import { Star, CheckCircle2 } from 'lucide-react';

const reviews = [
  {
    text: "The quality is unmatched. Looks and feels like a $500 product. The dark aesthetic fits my setup perfectly.",
    name: "ALEX M.",
  },
  {
    text: "Shipping was surprisingly fast to Europe. The packaging alone felt premium. Will definitely buy again.",
    name: "SARAH T.",
  },
  {
    text: "Minimalist perfection. I was skeptical of the price but the build quality is uncompromising.",
    name: "MARCUS O.",
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/5">
      <div className="mb-16">
        <h2 className="text-4xl font-bold uppercase tracking-tight mb-2">They Love It</h2>
        <p className="text-white/50 text-sm italic tracking-wide">// REAL REVIEWS NEEDED HERE</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((review, i) => (
          <div key={i} className="bg-dark-grey border border-red/20 p-8 rounded-sm relative">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, idx) => (
                <Star key={idx} size={14} className="text-red fill-red" />
              ))}
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-8 font-medium">"{review.text}"</p>
            <div className="flex items-center gap-2 mt-auto">
              <span className="font-bold text-xs tracking-widest uppercase">{review.name}</span>
              <CheckCircle2 size={14} className="text-red" />
              <span className="text-white/40 text-[7px] tracking-widest uppercase">Verified Buyer</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
