import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

export const Nav = () => {
  const { items, setIsCartOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[8000] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-md h-20' : 'bg-transparent h-24'
      } flex items-center border-b border-white/10`}
    >
      <div className="max-w-7xl mx-auto w-full px-10 flex items-center justify-between">
        <div className="flex-1">
          <a href="#" className="hoverable text-2xl font-black tracking-tighter uppercase text-white flex items-center">
            NOIR MARKET<span className="w-2 h-2 bg-red rounded-full ml-1"></span>
          </a>
        </div>
        
        <div className="hidden md:flex flex-1 justify-center gap-8 text-xs font-bold tracking-[0.2em] text-white/60 uppercase">
          <a href="#shop" className="hoverable hover:text-white transition-colors">Shop</a>
          <a href="#collections" className="hoverable hover:text-white transition-colors">Collections</a>
          <a href="#about" className="hoverable hover:text-white transition-colors">About</a>
          <a href="#contact" className="hoverable hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex-1 flex justify-end items-center gap-6">
          <button 
            onClick={() => setIsCartOpen(true)}
            className="hoverable relative flex items-center hover:text-red transition-colors"
          >
            <ShoppingBag size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red text-white text-[7px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {itemCount}
              </span>
            )}
          </button>
          
          <button className="hoverable hidden sm:block bg-red text-white px-6 py-2.5 text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all rounded-none">
            Shop Now
          </button>
        </div>
      </div>
    </nav>
  );
};
