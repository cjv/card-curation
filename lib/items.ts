import fs from 'fs';
import path from 'path';
import { Item, Category } from './types';
import { parseCSVToItems } from './csv';

export function getAllItems(): Item[] {
  const csvPath = path.join(process.cwd(), 'data', 'items.csv');
  const csvContent = fs.readFileSync(csvPath, 'utf-8');
  return parseCSVToItems(csvContent);
}

export function getItemById(id: string): Item | undefined {
  const items = getAllItems();
  return items.find(item => item.id === id);
}

export function getItemBySlug(slug: string): Item | undefined {
  const items = getAllItems();
  return items.find(item => item.slug === slug);
}

export function getItemsByCategory(category: Category): Item[] {
  const items = getAllItems();
  return items.filter(item => item.categories.includes(category));
}

export function getItemsByTag(tag: string): Item[] {
  const items = getAllItems();
  return items.filter(item =>
    item.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

export function searchItems(query: string): Item[] {
  const items = getAllItems();
  const lowerQuery = query.toLowerCase();

  return items.filter(item =>
    item.title.toLowerCase().includes(lowerQuery) ||
    item.creator.toLowerCase().includes(lowerQuery) ||
    item.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

export function getAllCategories(): Category[] {
  return ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];
}

export function getAllTags(): string[] {
  const items = getAllItems();
  const tagSet = new Set<string>();
  items.forEach(item => {
    item.tags.forEach(tag => tagSet.add(tag));
  });
  return Array.from(tagSet).sort();
}
