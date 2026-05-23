import { useState } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-xl bg-background/60 border-b border-primary/10'>
      <nav className='container mx-auto px-6 flex justify-between items-center'>
        <a
          href='/'
          className='text-xl font-bold tracking-tight hover:text-primary'>
          RA<span className='text-primary'>./</span>
        </a>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1'>
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                className='px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface'
                key={index.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile  Menu BTN*/}
        <button
          className='md:hidden p-2 text-foreground'
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong'>
          <div className='container mx-auto p-6 flex flex-col gap-4'>
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                className='text-lg py-2 text-muted-foreground hover:text-foreground'
                key={index}>
                {link.label}
              </a>
            ))}

            <Button>
              <a
                href='#contact'
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                Let's Talk
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
