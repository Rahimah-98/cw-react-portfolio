import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default function ThemeToggle() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeToggle must be used inside ThemeProvider');
  }

  const { dark, toggleTheme } = context;

  return (
    <button
      onClick={toggleTheme}
      className='relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors'
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}>
      <AnimatePresence mode='wait'>
        {dark ? (
          <motion.div
            key='sun'
            initial={{ rotate: -180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 180, scale: 0 }}
            transition={{ duration: 0.3 }}>
            <Sun className='w-5 h-5 text-primary' />
          </motion.div>
        ) : (
          <motion.div
            key='moon'
            initial={{ rotate: 180, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -180, scale: 0 }}
            transition={{ duration: 0.3 }}>
            <Moon className='w-5 h-5 text-primary' />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
