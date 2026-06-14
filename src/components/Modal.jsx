import { X } from 'lucide-react';

export const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm'
      onClick={onClose}>
      <div
        className='relative w-full max-w-3xl mx-4 rounded-3xl glass border bg-muted border-border p-6'
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 p-2 rounded-lg hover:text-primary'>
          <X className='w-5 h-5' />
        </button>

        {children}
      </div>
    </div>
  );
};
