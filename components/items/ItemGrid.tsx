import { Item } from '@/lib/types';
import ItemCard from './ItemCard';

interface ItemGridProps {
  items: Item[];
  emptyMessage?: string;
}

export default function ItemGrid({ items, emptyMessage = 'No items found.' }: ItemGridProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-earth-light text-lg">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </div>
  );
}
