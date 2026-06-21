import { useState } from 'react';
import { Button } from './Button';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/feedback', label: 'Feedback' },
  { to: '/contact', label: 'Contact' },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className='fixed top-0 left-0 right-0 z-50 py-3 backdrop-blur-xl bg-background/60 border-b border-primary/10'>
      <nav className='container mx-auto px-6 flex justify-between items-center'>
        <Link
          to='/'
          className='text-xl font-bold tracking-tight hover:text-primary'>
          RA<span className='text-primary'>./</span>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden md:flex items-center gap-1'>
          <div className='glass rounded-full px-2 py-1 flex items-center gap-1 transition-all duration-200'>
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-4 py-2 text-sm rounded-full transition ${
                    isActive
                      ? 'bg-primary text-primary-foreground'
                      : 'text-muted-foreground hover:text-foreground hover:bg-surface'
                  }`
                }>
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* ThemeToggle */}
        <ThemeToggle />

        {/* Mobile  Menu BTN*/}
        <button
          className='md:hidden p-2 text-foreground'
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden glass-strong animate-fade-in'>
          <div className='container mx-auto p-6 flex flex-col gap-4'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className='text-lg py-2 text-muted-foreground hover:text-foreground'
                onClick={() => setIsMobileMenuOpen(false)}>
                {link.label}
              </Link>
            ))}

            <Button>
              <Link
                to='/contact'
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
                Let's Talk
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
