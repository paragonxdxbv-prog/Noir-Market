import React from 'react';
import { useCart, Product } from '../context/CartContext';

const products: Product[] = [
  // REAL PRODUCT NEEDED
  {
    id: '5',
    name: 'OBSIDIAN SUNGLASSES',
    price: 119.00,
    description: 'Polarized. Matte frames.',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop',
  },
  // REAL PRODUCT NEEDED
  {
    id: '6',
    name: 'ONYX DUFFEL BAG',
    price: 189.00,
    originalPrice: 249.00,
    description: 'Waterproof. Built for travel.',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: '7',
    name: 'NIGHTFALL HOODIE',
    price: 79.00,
    description: 'Heavyweight cotton. Relaxed fit.',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: '8',
    name: 'STEALTH WATER BOTTLE',
    price: 35.00,
    description: 'Insulated. Monochromatic.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: '9',
    name: 'VOID LAPTOP SLEEVE',
    price: 45.00,
    originalPrice: 60.00,
    description: 'Shockproof. Minimal.',
    image: 'https://myhackertech.com/cdn/shop/products/mockup-5654a32b_1080x.jpg?v=1762209808',
  },
  {
    id: '10',
    name: 'ECLIPSE RING',
    price: 55.00,
    description: 'Matte titanium. Unscratchable.',
    image: 'https://www.yugenhandmade.com/cdn/shop/products/IMG_5981.jpg?v=1649859958&width=533',
  }
];

export const BestSellers = () => {
  const { addToCart } = useCart();

  return (
    <section id="collections" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto w-full border-t border-white/5">
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Most Wanted</h2>
        <div className="w-12 h-0.5 bg-red mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="group relative bg-[#111111] p-4 rounded-none overflow-hidden flex flex-col cursor-pointer">
            {product.originalPrice && (
              <div className="absolute top-6 left-6 bg-red text-white text-[6.3px] font-bold px-2 py-1 tracking-widest uppercase z-30 rounded-none">
                Sale
              </div>
            )}
            <div className="relative aspect-square overflow-hidden bg-black mb-4">
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
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-red font-bold text-sm tracking-tighter">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-white/20 line-through text-[7px] tracking-tighter">${product.originalPrice.toFixed(2)}</span>
                  )}
                </div>
                <span className="text-[7px] opacity-40 uppercase tracking-widest">Limited</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
