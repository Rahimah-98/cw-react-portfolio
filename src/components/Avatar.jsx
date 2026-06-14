import { useState } from 'react';
import { Book, Brain, CodeXml, Hand, RotateCcw } from 'lucide-react';

const reactions = {
  default: '🥱',
  hover: '😒',
  hi: '👋',
  coding: '💻',
  thinking: '🤔',
  reading: '📚',
};

const buttons = [
  {
    icon: <Hand />,
    value: 'hi',
    color: 'glass border border-border hover:bg-primary/30 hover:text-primary hover:scale-[1.1]',
  },
  {
    icon: <CodeXml />,
    value: 'coding',
    color: 'glass border border-border hover:bg-primary/30 hover:text-primary hover:scale-[1.1]',
  },
  {
    icon: <Brain />,
    value: 'thinking',
    color: 'glass border border-border hover:bg-primary/30 hover:text-primary hover:scale-[1.1]',
  },
  {
    icon: <Book />,
    value: 'reading',
    color: 'glass border border-border hover:bg-primary/30 hover:text-primary hover:scale-[1.1]',
  },
];
export default function Avatar() {
  const [reaction, setReaction] = useState('default');
  const [locked, setLocked] = useState(false);

  const handleMouseEnter = () => {
    if (!locked) setReaction('hover');
  };

  const handleMouseLeave = () => {
    if (!locked) setReaction('default');
  };

  const handleClick = () => {
    const next =
      reaction === 'hover'
        ? 'hi'
        : reaction === 'hi'
          ? 'coding'
          : reaction === 'coding'
            ? 'thinking'
            : reaction === 'thinking'
              ? 'reading'
              : 'hi';

    setReaction(next);
    setLocked(true);
  };

  const reset = () => {
    setReaction('default');
    setLocked(false);
  };

  return (
    <section className='pt-10 flex justify-center items-center'>
      <div className='max-w-2xl w-full px-4 flex flex-col md:flex-row justify-evenly items-center'>
        <div
          className='relative w-25 h-25 flex items-center justify-center rounded-full bg-muted shadow-xl cursor-pointer transition-all duration-300 hover:scale-105'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}>
          <span className='text-5xl transition-all duration-300'>
            {reactions[reaction]}
          </span>

          <div className='absolute inset-0 rounded-full bg-primary/20 opacity-20 blur-2xl animate-pulse'></div>
        </div>

        <div className='flex gap-3 pt-6 md:pt-2 '>
          {buttons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setReaction(btn.value)}
              className={`p-3 rounded-full transition text-foreground ${btn.color}`}>
              {btn.icon}
            </button>
          ))}

          <button
            onClick={reset}
            className='glass border border-border p-3 rounded-full hover:bg-red-500/40 hover:scale-[1.1] transition text-red-500'>
            <RotateCcw />
          </button>
        </div>
      </div>
    </section>
  );
}
