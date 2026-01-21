'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Category } from '@/lib/types';

const categories: Category[] = ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5', 'Category 6'];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-bean text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Site Title */}
          <Link href="/" className="font-serif font-bold text-xl md:text-2xl hover:text-corn transition-colors">
            Your Site Name
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="hover:text-corn transition-colors font-medium">
              Home
            </Link>

            <Link href="/items" className="hover:text-corn transition-colors font-medium">
              All Items
            </Link>

            <div className="relative group">
              <button className="hover:text-corn transition-colors font-medium">
                Categories
              </button>
              <div className="absolute top-full left-0 mt-2 bg-white text-charcoal rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[200px] z-50">
                {categories.map((category) => (
                  <Link
                    key={category}
                    href={`/categories/${category.toLowerCase().replace(/['\s]/g, '-')}`}
                    className="block px-4 py-2 hover:bg-corn-light transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/resources" className="hover:text-corn transition-colors font-medium">
              Resources
            </Link>

            <Link href="/about" className="hover:text-corn transition-colors font-medium">
              About
            </Link>

            <Link href="/downloads" className="hover:text-corn transition-colors font-medium">
              Downloads
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link
              href="/"
              className="block py-2 hover:text-corn transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/items"
              className="block py-2 hover:text-corn transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              All Items
            </Link>

            <div className="space-y-1">
              <p className="text-corn font-semibold py-1">Categories</p>
              {categories.map((category) => (
                <Link
                  key={category}
                  href={`/categories/${category.toLowerCase().replace(/['\s]/g, '-')}`}
                  className="block py-2 pl-4 hover:text-corn transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>

            <Link
              href="/resources"
              className="block py-2 hover:text-corn transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className="block py-2 hover:text-corn transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>

            <Link
              href="/downloads"
              className="block py-2 hover:text-corn transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Downloads
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
