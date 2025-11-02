import { useState } from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-rose-400 to-rose-600" />
            <span className="text-xl font-semibold tracking-tight">Kashmir Abaya Co.</span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
            <a href="#shop" className="hover:text-rose-600 transition-colors">Shop</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">About</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-neutral-100" aria-label="Search">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full hover:bg-neutral-100" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-md border border-neutral-200"
            onClick={() => setOpen(v => !v)}
            aria-label="Open Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#shop" className="block px-2 py-2 rounded hover:bg-neutral-100">Shop</a>
            <a href="#about" className="block px-2 py-2 rounded hover:bg-neutral-100">About</a>
            <a href="#contact" className="block px-2 py-2 rounded hover:bg-neutral-100">Contact</a>
            <div className="flex gap-2 pt-2">
              <button className="flex-1 py-2 rounded-md border border-neutral-200 flex items-center justify-center gap-2">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </button>
              <button className="flex-1 py-2 rounded-md border border-neutral-200 flex items-center justify-center gap-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Cart</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
