import { Monitor } from 'lucide-react';
import { useEffect, useState } from 'react';

const updatesPool = [
  'Aurora Academy project deployed',
  'Portfolio design refreshed',
  'Contact form validation improved',
  'Dark mode accessibility enhanced',
  'Performance score increased to 95+',
  'Mobile navigation optimized',
  'New project added to portfolio',
  'Project descriptions updated',
];

export const ProjectUpdates = () => {
  const [updates, setUpdates] = useState([]);

  useEffect(() => {
    const addUpdate = () => {
      const randomUpdate =
        updatesPool[Math.floor(Math.random() * updatesPool.length)];

      const newUpdate = {
        id: Date.now(),
        text: randomUpdate,
        time: new Date().toLocaleTimeString(),
      };

      setUpdates((prev) => [newUpdate, ...prev].slice(0, 3));
    };

    addUpdate();

    const interval = setInterval(addUpdate, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='p-6 max-w-7xl'>
      <div className='flex items-center gap-3 mb-6 border-b border-border pb-2'>
        <Monitor className='size-5 text-primary' />
        <h3 className='text-xl font-semibold '>
          Live Project Updates
        </h3>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3'>
        {updates.map((update) => (
          <div
            key={update.id}
            className='animate-fade-in rounded-xl flex items-center justify-between gap-2 bg-surface border border-border p-2'>
            <p className='text-sm'>{update.text}</p>

            <span className='text-xs text-muted-foreground'>{update.time}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
