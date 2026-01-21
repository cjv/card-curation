import { Item } from '@/lib/types';
import Link from 'next/link';

interface ItemDetailProps {
  item: Item;
}

const linkLabels: Record<keyof Item['links'], string> = {
  link1: 'Link 1',
  link2: 'Link 2',
  link3: 'Link 3',
  link4: 'Link 4',
  link5: 'Link 5',
  link6: 'Link 6',
  link7: 'Link 7',
  link8: 'Link 8',
};

export default function ItemDetail({ item }: ItemDetailProps) {
  const activeLinks = Object.entries(item.links).filter(
    ([, url]) => url
  );

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid lg:grid-cols-[1fr,250px] gap-8">
        {/* Item Details */}
        <div>
          <h1 className="font-serif font-bold text-4xl text-charcoal mb-2">
            {item.title}
          </h1>

          <p className="text-xl text-earth mb-1">
            by {item.creator}
          </p>

          <p className="text-earth-light mb-4">
            {item.year}
          </p>

          {/* Creator Status Badge */}
          <div className="inline-block px-3 py-1 bg-bean-light/20 text-bean-dark rounded-full text-sm font-medium mb-6">
            {item.creatorStatus}
          </div>

          {/* Categories & Tags */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-3">
              {item.categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase().replace(/['\s]/g, '-')}`}
                  className="px-3 py-1 bg-squash text-white rounded hover:bg-squash-dark transition-colors text-sm"
                >
                  {category}
                </Link>
              ))}
            </div>

            {item.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-sage/30 text-earth-brown rounded text-xs"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none mb-8">
            <h2 className="font-serif text-2xl text-charcoal mb-3">
              About This Item
            </h2>
            <p className="text-foreground leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* SKU */}
          {item.sku && (
            <p className="text-sm text-earth-light mb-6">
              SKU: {item.sku}
            </p>
          )}

          {/* Links */}
          {activeLinks.length > 0 && (
            <div className="space-y-6">
              <div>
                <h3 className="font-serif text-xl text-charcoal mb-3">
                  Links
                </h3>
                <div className="flex flex-wrap gap-3">
                  {activeLinks.map(([key, url]) => (
                    <a
                      key={key}
                      href={url as string}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-bean text-white rounded hover:bg-bean-dark transition-colors font-medium"
                    >
                      {linkLabels[key as keyof Item['links']]}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Item Image */}
        <div>
          <div className="aspect-[2/3] bg-earth-light rounded-lg overflow-hidden shadow-lg sticky top-4">
            {item.imageUrl ? (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="text-center">
                  <p className="font-serif text-xl font-semibold text-cream">
                    {item.title}
                  </p>
                  <p className="text-cream/80 mt-2">
                    {item.creator}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
