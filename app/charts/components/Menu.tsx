'use client';

import { useState } from 'react';
import { Logo } from '@/stories/Logo/Logo';

const menuItems = [
  { label: 'Pages', href: '#' },
  { label: 'Responses', href: '#' },
  { label: 'Insights', href: '#' },
];

export const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile Header with Hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white shadow-[0_4px_50px_rgba(37,14,83,0.12)] relative z-20">
        <Logo height={40} width={200} />
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`
          md:hidden
          fixed inset-0 z-10
          bg-white
          transform transition-transform duration-300 ease-in-out
          ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}
        `}
      >
        <div className="flex flex-col h-full p-6 pt-24">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="p-4 text-lg rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:block shrink-0 p-6 bg-white rounded-r-2xl shadow-[0_4px_50px_rgba(37,14,83,0.12)]">
        <Logo height={50} width={300} />
        <nav className="mt-8 flex flex-col gap-2">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};
