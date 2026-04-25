import React from 'react';
import { useCart, Product } from '../context/CartContext';

const products: Product[] = [
  // REAL PRODUCT NEEDED
  {
    id: '1',
    name: 'SHADOW MINIMALIST WATCH',
    price: 89.00,
    description: 'Clean. Minimal. Precise.',
    image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1288&auto=format&fit=crop',
  },
  // REAL PRODUCT NEEDED
  {
    id: '2',
    name: 'NOIR LEATHER WALLET',
    price: 49.00,
    description: 'Slim profile. Premium leather.',
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?q=80&w=1288&auto=format&fit=crop',
  },
  {
    id: '3',
    name: 'ELITE WIRELESS EARBUDS',
    price: 129.00,
    description: 'Studio quality. All black.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1332&auto=format&fit=crop',
  },
  {
    id: '4',
    name: 'CARBON PHONE CASE',
    price: 39.00,
    description: 'Matte finish. Zero compromise.',
    image: 'https://images.unsplash.com/photo-1601593346740-925612772716?q=80&w=1287&auto=format&fit=crop',
  }
];

export const Featured = () => {
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full">
      <div className="mb-12">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">The Drop</h2>
        <p className="text-white/40 italic text-xs tracking-wide">Limited stock. Ships in 48 hours.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-[#111111] p-4 rounded-none overflow-hidden flex flex-col cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden bg-black mb-4">
              <div className="absolute inset-0 bg-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover grayscale brightness-75 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <button 
                  onClick={() => addToCart(product)}
                  className="hoverable bg-white text-black px-4 py-2 text-[7px] font-bold uppercase tracking-tighter hover:bg-red hover:text-white transition-all transform translate-y-2 group-hover:translate-y-0 duration-300 rounded-none"
                >
                  Quick Add
                </button>
              </div>
            </div>
            <div className="flex flex-col flex-1">
              <h3 className="font-bold text-xs tracking-wider uppercase mb-1">{product.name}</h3>
              <div className="mt-auto flex justify-between items-center">
                <span className="text-red font-bold text-sm tracking-tighter">${product.price.toFixed(2)}</span>
                <span className="text-[7px] opacity-40 uppercase tracking-widest">In Stock</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
