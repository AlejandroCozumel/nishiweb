'use client'
import React from "react";
import Link from "next/link";
import {
  Menu,
  X,
} from "lucide-react";
import { ThemeSwitcher, ThemeSwitcherCompact } from '@/components/ThemeSwitcher';

// Navbar Component
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const navItems = [
    { label: 'Metodología', href: '/metodologia' },
    { label: 'Servicios', href: '/servicios' },
    { label: 'Proyectos', href: '/proyectos' },
    { label: 'Nosotros', href: '/nosotros' },
    { label: 'Contáctanos', href: '/contactanos', isButton: true }
  ];

  return (
    <nav className="bg-mewtwo-accent/95 backdrop-blur-sm border-b border-mewtwo-primary/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-mewtwo-primary rounded-lg flex items-center justify-center group-hover:bg-mewtwo-secondary transition-colors duration-300">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <span className="text-mewtwo-primary font-bold text-sm">N</span>
              </div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-white font-bold text-xl tracking-tight">NISHI</h1>
              <p className="text-mewtwo-secondary text-xs -mt-1">Digital Solutions EIRL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    item.isButton
                      ? 'bg-mewtwo-primary text-white hover:bg-mewtwo-secondary hover:text-mewtwo-accent shadow-lg hover:shadow-mewtwo-primary/25'
                      : 'text-mewtwo-light hover:text-white hover:bg-mewtwo-primary/20'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Theme Switcher for Desktop */}
            {/* <ThemeSwitcher /> */}
          </div>

          {/* Mobile menu button and theme switcher */}
          <div className="md:hidden flex items-center space-x-2">
            {/* Theme Switcher for Mobile */}
            <ThemeSwitcherCompact />

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-mewtwo-light hover:text-white hover:bg-mewtwo-primary/20 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-mewtwo-dark/50 rounded-lg mt-2 backdrop-blur-sm">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`block px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    item.isButton
                      ? 'bg-mewtwo-primary text-white hover:bg-mewtwo-secondary hover:text-mewtwo-accent'
                      : 'text-mewtwo-light hover:text-white hover:bg-mewtwo-primary/20'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}