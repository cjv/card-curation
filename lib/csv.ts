import Papa from 'papaparse';
import { Item, CreatorStatus, Category } from './types';

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .split(/\s+/) // Split by whitespace
    .slice(0, 6) // Take first 6 words
    .join('-') // Join with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single
}

export function parseCSVToItems(csvContent: string): Item[] {
  const result = Papa.parse<Record<string, string>>(csvContent, {
    header: true,
    skipEmptyLines: true,
  });

  return result.data.map((row, index) => {
    const id = `item-${index + 1}`;
    const title = row.title || '';
    const slug = generateSlug(title);

    return {
      id,
      slug,
      title,
      creator: row.creator || '',
      year: parseInt(row.year) || 0,
      creatorStatus: (row.creator_status || 'Unknown') as CreatorStatus,
      sku: row.sku || undefined,
      description: row.description || '',
      categories: row.categories
        ? row.categories.split('|').map(c => c.trim() as Category)
        : [],
      tags: row.tags
        ? row.tags.split('|').map(t => t.trim())
        : [],
      available: row.available?.toUpperCase() === 'TRUE',
      imageUrl: row.image_url || undefined,
      links: {
        link1: row.link1_url || undefined,
        link2: row.link2_url || undefined,
        link3: row.link3_url || undefined,
        link4: row.link4_url || undefined,
        link5: row.link5_url || undefined,
        link6: row.link6_url || undefined,
        link7: row.link7_url || undefined,
        link8: row.link8_url || undefined,
      },
    };
  });
}

export function itemsToCSV(items: Item[]): string {
  const rows = items.map(item => ({
    title: item.title,
    creator: item.creator,
    year: item.year.toString(),
    creator_status: item.creatorStatus,
    sku: item.sku || '',
    description: item.description,
    categories: item.categories.join('|'),
    tags: item.tags.join('|'),
    available: item.available ? 'TRUE' : 'FALSE',
    image_url: item.imageUrl || '',
    link1_url: item.links.link1 || '',
    link2_url: item.links.link2 || '',
    link3_url: item.links.link3 || '',
    link4_url: item.links.link4 || '',
    link5_url: item.links.link5 || '',
    link6_url: item.links.link6 || '',
    link7_url: item.links.link7 || '',
    link8_url: item.links.link8 || '',
  }));

  return Papa.unparse(rows);
}
