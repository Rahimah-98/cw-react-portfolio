import { Loader } from 'lucide-react';

export const Spinner = () => {
  return (
    <div className='flex flex-row items-center justify-center gap-4 py-10'>
      <p className='text-md text-muted-foreground font-semibold'>Loading...</p>
      <Loader className='animate-spin text-primary' />
    </div>
  );
};
