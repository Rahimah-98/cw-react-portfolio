import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
  return (
    <section className='min-h-screen flex items-center justify-center px-6 relative overflow-hidden'>
      <div className='absolute inset-0 -z-10'>
        <div className='absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl' />
      </div>

      <div className='max-w-xl text-center'>
        <h1 className='text-8xl md:text-9xl font-black tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
          404
        </h1>

        <h2 className='mt-4 text-3xl md:text-4xl font-bold'>Page Not Found</h2>

        <p className='mt-4 text-muted-foreground leading-relaxed'>
          The page you're looking for doesn't exist, may have been moved, or the
          URL might be incorrect.
        </p>

        <Link
          to='/'
          className='mt-5 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-3xl bg-primary text-primary-foreground font-medium hover:scale-105 transition-transform'>
          <ArrowLeft size={18} />
          Back Home
        </Link>
      </div>
    </section>
  );
};
