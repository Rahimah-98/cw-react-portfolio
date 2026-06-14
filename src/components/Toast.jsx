import { CheckCircle } from 'lucide-react';

export const Toast = ({ success }) => {
  if (!success) return null;

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/70'>
      <div className='bg-green-50 text-green-600 px-8 py-6 rounded-2xl flex items-center gap-3'>
        <CheckCircle className='w-6 h-6 text-green-500' />
        <p>Your message has been sent successfully.</p>
      </div>
    </div>
  );
};