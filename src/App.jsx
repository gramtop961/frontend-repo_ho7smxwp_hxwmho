import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function Announcement() {
  return (
    <div className="bg-neutral-900 text-neutral-100 text-center text-sm py-2 px-4">
      Kashmir Festive Offer: Free shipping across India on orders over $99 · Easy 14-day returns
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Announcement />
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <h3 className="font-semibold text-lg">Artisan Craftsmanship</h3>
                <p className="text-neutral-600 mt-2">Each piece is thoughtfully tailored by skilled artisans, ensuring impeccable finish and long-lasting comfort.</p>
              </div>
              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <h3 className="font-semibold text-lg">Premium Fabrics</h3>
                <p className="text-neutral-600 mt-2">We source breathable, soft-touch textiles that drape beautifully and stand the test of time.</p>
              </div>
              <div className="p-6 rounded-2xl border border-neutral-200 bg-white shadow-sm">
                <h3 className="font-semibold text-lg">Designed in Kashmir</h3>
                <p className="text-neutral-600 mt-2">Inspired by the valleys and gardens of Kashmir, our silhouettes blend tradition with modern elegance.</p>
              </div>
            </div>
          </div>
        </section>
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
