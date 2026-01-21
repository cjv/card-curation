import { getAllItems, getAllCategories } from '@/lib/items';
import { Category } from '@/lib/types';
import ItemGrid from '@/components/items/ItemGrid';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const slugToCategory: Record<string, Category> = {
  'category-1': 'Category 1',
  'category-2': 'Category 2',
  'category-3': 'Category 3',
  'category-4': 'Category 4',
  'category-5': 'Category 5',
  'category-6': 'Category 6',
};

export async function generateStaticParams() {
  return Object.keys(slugToCategory).map((slug) => ({
    category: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = slugToCategory[slug];

  if (!category) {
    return {
      title: 'Category Not Found',
    };
  }

  return {
    title: `${category} Items - Your Site Name`,
    description: `Browse our curated collection of ${category.toLowerCase()} items`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category: slug } = await params;
  const category = slugToCategory[slug];

  if (!category) {
    notFound();
  }

  const allItems = getAllItems();
  const items = allItems.filter(item => item.categories.includes(category));

  return (
    <div>
      <Link
        href="/"
        className="inline-flex items-center text-bean hover:text-bean-dark mb-6 font-medium"
      >
        ← Back to Home
      </Link>

      <h1 className="font-serif font-bold text-4xl text-charcoal mb-2">
        {category}
      </h1>
      <p className="text-earth text-lg mb-8">
        {items.length} {items.length === 1 ? 'item' : 'items'} in this category
      </p>

      <ItemGrid items={items} emptyMessage={`No items found in ${category}`} />
    </div>
  );
}
