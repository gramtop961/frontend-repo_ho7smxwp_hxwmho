import { Star, Shield, Truck } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Noor Classic Abaya',
    price: 89,
    img: 'https://images.unsplash.com/photo-1542060748-10c28b62716c?q=80&w=1200&auto=format&fit=crop',
    rating: 5,
    tag: 'Bestseller',
  },
  {
    id: 2,
    name: 'Saffron Soft-Touch Abaya',
    price: 109,
    img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop',
    rating: 4,
    tag: 'New',
  },
  {
    id: 3,
    name: 'Wular Flow Abaya',
    price: 99,
    img: 'https://images.unsplash.com/photo-1521043722071-5c86241e7e2e?q=80&w=1200&auto=format&fit=crop',
    rating: 5,
    tag: 'Limited',
  },
  {
    id: 4,
    name: 'Zeenat Embroidered Abaya',
    price: 129,
    img: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1200&auto=format&fit=crop',
    rating: 5,
    tag: 'Artisan',
  },
  {
    id: 5,
    name: 'Gulmarg Everyday Abaya',
    price: 79,
    img: 'https://images.unsplash.com/photo-1542089363-bba089ffaa6b?q=80&w=1200&auto=format&fit=crop',
    rating: 4,
  },
  {
    id: 6,
    name: 'Shalimar Luxe Abaya',
    price: 149,
    img: 'https://images.unsplash.com/photo-1555529771-35a38bfa84d1?q=80&w=1200&auto=format&fit=crop',
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5 text-amber-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`h-4 w-4 ${i < count ? 'fill-amber-500' : 'text-neutral-300'}`} />
      ))}
    </div>
  );
}

export default function ProductGrid() {
  return (
    <section id="shop" className="py-16 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold">Featured Abayas</h2>
            <p className="text-neutral-600 mt-1">Curated pieces designed for elegance and comfort.</p>
          </div>
          <div className="hidden sm:flex gap-6 text-sm text-neutral-700">
            <div className="flex items-center gap-2"><Shield className="h-4 w-4" /> Quality Guarantee</div>
            <div className="flex items-center gap-2"><Truck className="h-4 w-4" /> Fast Delivery</div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.id} className="group bg-white rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-md transition-shadow">
              <div className="relative aspect-[4/5] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                {p.tag && (
                  <span className="absolute left-3 top-3 text-xs font-medium bg-white/90 backdrop-blur px-2 py-1 rounded-full border border-neutral-200">{p.tag}</span>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-medium tracking-tight">{p.name}</h3>
                <div className="mt-1 flex items-center justify-between">
                  <Stars count={p.rating} />
                  <p className="text-lg font-semibold">${p.price}</p>
                </div>
                <button className="mt-4 w-full rounded-md bg-neutral-900 text-white py-2.5 font-medium hover:bg-neutral-800 transition-colors">
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
