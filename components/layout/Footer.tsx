export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-earth text-cream mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-serif font-semibold text-lg mb-3">
              About This Site
            </h3>
            <p className="text-sm text-cream/80">
              A curated collection of items organized by category. Add your site description here.
            </p>
          </div>

          <div>
            <h3 className="font-serif font-semibold text-lg mb-3">
              Browse
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-corn transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-corn transition-colors">
                  Resources
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-corn transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/downloads" className="hover:text-corn transition-colors">
                  Downloads
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cream/20 mt-8 pt-6 text-center text-sm text-cream/70">
          <p>© {currentYear} Your Site Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
