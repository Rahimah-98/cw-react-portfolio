import {  NavLink } from 'react-router-dom';
import { SocialMedia } from './SocialMedia';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='py-12 border-t border-border'>
      <div className='container mx-auto px-6'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-8'>
          {/* Logo & Copyright */}
          <div className='text-center md:text-left'>
            <NavLink to='/' className='text-xl font-bold tracking-tight'>
              RA<span className='text-primary'>./</span>
            </NavLink>
            <p className='text-sm text-muted-foreground mt-2'>
              © {currentYear} Built with ❤️ by Rahimah Ansari
            </p>
          </div>

          {/* Social Links */}
          <SocialMedia />
        </div>
      </div>
    </footer>
  );
};
