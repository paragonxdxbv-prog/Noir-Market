import React from 'react';
import { CreditCard } from 'lucide-react'; // Placeholder for payment icons

export const Footer = () => {
  return (
    <footer id="contact" className="bg-black pt-16 pb-8 px-10 border-t-2 border-red w-full">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12 mb-16">
        <div>
          <a href="#" className="hoverable text-2xl font-black tracking-tighter uppercase text-white mb-2 block">
            NOIR MARKET<span className="w-1.5 h-1.5 bg-red rounded-full inline-block ml-0.5"></span>
          </a>
          <p className="text-white/40 text-[7px] tracking-widest uppercase">Premium dropshipping. Worldwide Delivery.</p>
        </div>

        <div className="flex gap-8 text-[7px] font-bold tracking-[0.2em] uppercase text-white/40 items-center">
          <div className="flex gap-8">
            <a href="#" className="hoverable hover:text-white transition-colors">Shop</a>
            <a href="#" className="hoverable hover:text-white transition-colors">Collections</a>
            <a href="#" className="hoverable hover:text-white transition-colors">About</a>
            <a href="#" className="hoverable hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="flex items-center gap-6 text-white/40 text-[7px] font-bold tracking-widest uppercase">
          <span>Visa</span>
          <span>Mastercard</span>
          <span>Stripe</span>
          <span>PayPal</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[7px] tracking-widest uppercase text-white/30">
        <div>&copy; 2026 NOIR MARKET. ALL RIGHTS RESERVED.</div>
        <div className="flex gap-8">
          <a href="#" className="hoverable hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hoverable hover:text-white transition-colors">Terms</a>
        </div>
      </div>
    </footer>
  );
};
