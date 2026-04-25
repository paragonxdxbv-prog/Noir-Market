import React from 'react';

export const Newsletter = () => {
  return (
    <section className="bg-red py-24 px-6 lg:px-12 w-full">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter text-white leading-none">Get Early Access</h2>
        <p className="text-white/80 text-xs sm:text-sm font-bold mb-10 tracking-widest uppercase">New drops. Exclusive deals. No spam.</p>
        
        <form className="flex flex-col sm:flex-row h-12 max-w-lg mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="EMAIL ADDRESS" 
            className="flex-1 bg-white text-black px-6 text-xs font-bold tracking-widest uppercase placeholder:text-black/40 focus:outline-none"
            required
          />
          <button 
            type="submit" 
            className="hoverable bg-black text-white px-10 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all sm:w-auto w-full"
          >
            Subscribe
          </button>
        </form>
        <p className="text-white/60 text-[6.3px] mt-6 tracking-widest uppercase">Join 12,000+ subscribers worldwide</p>
      </div>
    </section>
  );
};
