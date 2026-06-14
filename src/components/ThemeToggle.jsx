import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem('theme') === 'dark',
  );

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);

    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className='relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-primary/10 transition-colors'
      aria-label='Toggle theme'>
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
