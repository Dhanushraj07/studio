'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';
import { siteConfig } from '@/lib/data';
import { cn } from '@/lib/utils';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-primary/20' : 'bg-transparent'
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
          <div className="bg-primary p-2 rounded-full">
            <Code className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold font-headline">{siteConfig.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          {siteConfig.navLinks.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur-lg">
          <nav className="container flex flex-col gap-4 py-4">
            {siteConfig.navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-muted-foreground transition-colors hover:text-foreground text-lg py-2"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
