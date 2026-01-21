import Link from 'next/link';
import { Item } from '@/lib/types';

interface ItemCardProps {
  item: Item;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <Link
      href={`/items/${item.slug}`}
      className="group flex bg-cream rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      {/* Image */}
      <div className="w-32 sm:w-40 flex-shrink-0 bg-earth-light">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center p-3">
            <p className="font-serif text-sm font-semibold text-cream text-center line-clamp-3">
              {item.title}
            </p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 p-4 flex flex-col justify-center min-w-0">
        <h3 className="font-serif font-semibold text-lg text-charcoal line-clamp-2 mb-1">
          {item.title}
        </h3>
        <p className="text-sm text-earth mb-2 truncate">
          {item.creator}
        </p>

        <div className="flex flex-wrap gap-1 mb-2">
          {item.categories.slice(0, 2).map((category) => (
            <span
              key={category}
              className="text-xs px-2 py-0.5 bg-squash-light/30 text-squash-dark rounded"
            >
              {category}
            </span>
          ))}
        </div>

        <p className="text-xs text-bean-dark font-medium">
          {item.available ? 'Available' : 'Unavailable'}
        </p>
      </div>
    </Link>
  );
}
