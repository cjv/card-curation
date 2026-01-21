import { getAllItems, getItemBySlug } from '@/lib/items';
import ItemDetail from '@/components/items/ItemDetail';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const items = getAllItems();
  return items.map((item) => ({
    id: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getItemBySlug(id);

  if (!item) {
    return {
      title: 'Item Not Found',
    };
  }

  return {
    title: `${item.title} by ${item.creator} - Your Site Name`,
    description: item.description,
  };
}

export default async function ItemPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = getItemBySlug(id);

  if (!item) {
    notFound();
  }

  return (
    <div>
      <Link
        href="/items"
        className="inline-flex items-center text-bean hover:text-bean-dark mb-6 font-medium"
      >
        ← Back to All Items
      </Link>

      <ItemDetail item={item} />
    </div>
  );
}
