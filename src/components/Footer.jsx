export default function Footer() {
  return (
    <footer id="contact" className="border-t border-neutral-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-rose-400 to-rose-600" />
              <span className="text-lg font-semibold">Kashmir Abaya Co.</span>
            </div>
            <p className="mt-4 text-neutral-600 max-w-md">
              Premium, modest fashion inspired by the serene beauty of Kashmir. Crafted with care, designed to last.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Explore</h4>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li><a className="hover:text-rose-600" href="#shop">Shop</a></li>
              <li><a className="hover:text-rose-600" href="#about">About</a></li>
              <li><a className="hover:text-rose-600" href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Contact</h4>
            <ul className="mt-3 space-y-2 text-neutral-600">
              <li>Srinagar, Jammu & Kashmir</li>
              <li>+91 7000 000 000</li>
              <li>hello@kashmirabaya.co</li>
            </ul>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <p>© {new Date().getFullYear()} Kashmir Abaya Co. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Returns</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
