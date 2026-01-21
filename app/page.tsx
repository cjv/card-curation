import { getAllItems } from '@/lib/items';
import ItemGrid from '@/components/items/ItemGrid';
import Link from 'next/link';

export default function HomePage() {
  const items = getAllItems();
  const featuredItems = items.slice(0, 10);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-br from-corn-light via-cream to-squash-light rounded-2xl shadow-lg">
        <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-charcoal mb-4">
          Your Site Name
        </h1>
        <p className="text-xl md:text-2xl text-earth max-w-3xl mx-auto px-4 mb-6">
          A curated collection of items organized by category. Add your site tagline or description here.
        </p>
        <Link
          href="/about"
          className="inline-block px-6 py-3 bg-bean text-white rounded-lg hover:bg-bean-dark transition-colors font-medium"
        >
          Learn More
        </Link>
      </section>

      {/* Browse by Category */}
      <section>
        <h2 className="font-serif font-bold text-3xl text-charcoal mb-6">
          Browse by Category
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { name: 'Category 1', slug: 'category-1', color: 'bg-bean' },
            { name: 'Category 2', slug: 'category-2', color: 'bg-squash' },
            { name: 'Category 3', slug: 'category-3', color: 'bg-sage' },
            { name: 'Category 4', slug: 'category-4', color: 'bg-corn' },
            { name: 'Category 5', slug: 'category-5', color: 'bg-earth' },
            { name: 'Category 6', slug: 'category-6', color: 'bg-bean-light' },
          ].map((category) => (
            <Link
              key={category.slug}
              href={`/categories/${category.slug}`}
              className={`${category.color} text-white p-6 rounded-lg hover:opacity-90 transition-opacity shadow-md`}
            >
              <h3 className="font-serif font-semibold text-xl">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Items */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-serif font-bold text-3xl text-charcoal">
            Featured Items
          </h2>
          <Link
            href="/items"
            className="text-bean hover:text-bean-dark font-medium"
          >
            View All Items →
          </Link>
        </div>
        <ItemGrid items={featuredItems} />
      </section>

      {/* Quick Links */}
      <section className="bg-cream rounded-xl p-8 shadow-md">
        <h2 className="font-serif font-bold text-2xl text-charcoal mb-4">
          Explore More
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/resources"
            className="p-4 border-2 border-earth/20 rounded-lg hover:border-earth hover:bg-white transition-all"
          >
            <h3 className="font-serif font-semibold text-lg text-charcoal mb-2">
              Resources
            </h3>
            <p className="text-earth text-sm">
              Helpful guides and resources for your needs.
            </p>
          </Link>
          <Link
            href="/downloads"
            className="p-4 border-2 border-earth/20 rounded-lg hover:border-earth hover:bg-white transition-all"
          >
            <h3 className="font-serif font-semibold text-lg text-charcoal mb-2">
              Downloads
            </h3>
            <p className="text-earth text-sm">
              Free materials and resources available for download.
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
