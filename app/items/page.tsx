import { getAllItems } from '@/lib/items';
import ItemGrid from '@/components/items/ItemGrid';

export const metadata = {
  title: 'All Items - Your Site Name',
  description: 'Browse our complete collection of curated items',
};

export default function ItemsPage() {
  const items = getAllItems();

  return (
    <div>
      <h1 className="font-serif font-bold text-4xl text-charcoal mb-2">
        All Items
      </h1>
      <p className="text-earth text-lg mb-8">
        Browse our complete collection of {items.length} curated items.
      </p>

      <ItemGrid items={items} />
    </div>
  );
}
