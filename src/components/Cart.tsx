import React, { useEffect, useRef } from 'react';
import { useCart } from '../context/CartContext';
import { X, Trash2 } from 'lucide-react';
import gsap from 'gsap';

export const Cart = () => {
  const { items, removeFromCart, isCartOpen, setIsCartOpen, total } = useCart();
  const cartRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isCartOpen) {
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3, display: 'block' });
      gsap.to(cartRef.current, { x: 0, duration: 0.5, ease: 'power3.out' });
      // Lock scroll
      document.body.style.overflow = 'hidden';
    } else {
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' });
      gsap.to(cartRef.current, { x: '100%', duration: 0.5, ease: 'power3.in' });
      document.body.style.overflow = '';
    }
  }, [isCartOpen]);

  return (
    <>
      <div 
        ref={overlayRef}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9000] hidden opacity-0"
        onClick={() => setIsCartOpen(false)}
      />
      
      <div 
        ref={cartRef}
        className="fixed top-0 right-0 h-full w-full sm:w-[280px] bg-dark-grey z-[9001] translate-x-full flex flex-col border-l border-white/10"
      >
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold uppercase tracking-wider">Your Cart ({items.length})</h2>
          <button onClick={() => setIsCartOpen(false)} className="hoverable p-2 hover:bg-white/5 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
          {items.length === 0 ? (
            <div className="h-full flex flex-col justify-center items-center text-white/50 space-y-4">
              <p className="tracking-widest uppercase text-sm">Your cart is empty</p>
            </div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex gap-4 group">
                <div className="w-24 h-32 bg-black rounded overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <h3 className="font-bold uppercase text-sm leading-tight">{item.name}</h3>
                    <p className="text-white/60 text-xs mt-1 uppercase">Qty: {item.quantity}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-red font-bold">${item.price.toFixed(2)}</span>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="hoverable text-white/40 hover:text-red transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="p-6 border-t border-white/10 bg-black/50">
          <div className="flex justify-between mb-4 font-bold text-lg uppercase">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button 
            className="hoverable w-full bg-red text-white font-bold tracking-widest uppercase py-4 rounded hover:bg-white hover:text-black transition-colors"
            disabled={items.length === 0}
          >
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};
