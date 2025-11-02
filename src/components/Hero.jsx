export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(45rem_45rem_at_80%_10%,rgba(244,63,94,0.15),transparent)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center py-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-rose-50 px-3 py-1 text-rose-700 text-sm">
              Handcrafted in Kashmir
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Elegant Abayas from the Heart of Kashmir
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Discover timeless silhouettes, premium fabrics, and exquisite craftsmanship.
              Dress with grace, comfort, and confidence every day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#shop" className="inline-flex justify-center items-center rounded-md bg-rose-600 px-6 py-3 text-white font-medium shadow-sm hover:bg-rose-700 transition-colors">
                Shop the Collection
              </a>
              <a href="#about" className="inline-flex justify-center items-center rounded-md border border-neutral-300 px-6 py-3 text-neutral-800 font-medium hover:bg-neutral-50 transition-colors">
                Learn More
              </a>
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4">
              <div>
                <dt className="text-sm text-neutral-500">Premium Fabrics</dt>
                <dd className="text-xl font-semibold">100% Quality</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Free Shipping</dt>
                <dd className="text-xl font-semibold">Orders over $99</dd>
              </div>
              <div>
                <dt className="text-sm text-neutral-500">Easy Returns</dt>
                <dd className="text-xl font-semibold">14-day policy</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <img
                src="https://images.unsplash.com/photo-1520975764746-5f8d6fce3c79?q=80&w=1200&auto=format&fit=crop"
                alt="Elegant abaya fabric with textured folds"
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white shadow-lg ring-1 ring-black/5 rounded-2xl p-4 w-56">
              <p className="text-sm text-neutral-600">“Luxurious feel and beautiful drape. My new favorite abaya!”</p>
              <p className="mt-2 text-sm font-medium">— Amina, Srinagar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
