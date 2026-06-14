export const Button = ({
  className = '',
  size = 'default',
  children,
  ...props
}) => {
  const baseClasses =
    'relative bg-primary rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary hover:bg-primary/90 shadow-lg shadow-primary/25';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <button
      {...props}
      className={`${baseClasses} ${sizeClasses[size]} ${className}`}>
      <span className='flex items-center justify-center gap-2'>{children}</span>
    </button>
  );
};
