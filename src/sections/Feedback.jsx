import { useState } from 'react';
import { FeedbackForm } from '../components/FeedbackForm';
import { FeedbackCard } from '../components/FeedbackCard';

export const Feedback = () => {
  const [feedbacks, setFeedbacks] = useState([
    {
      id: 1,
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing portfolio. Very clean UI and professional projects.',
    },
    {
      id: 2,
      name: 'John Smith',
      rating: 4,
      comment:
        'Working with Rahimah was a fantastic experience. The website was delivered on time, looked amazing, and performed flawlessly across all devices.',
    },
  ]);

  const [sortBy, setSortBy] = useState('highest');

  const sortedFeedbacks = [...feedbacks].sort((a, b) =>
    sortBy === 'highest' ? b.rating - a.rating : a.rating - b.rating,
  );

  return (
    <section id='feedback' className='relative w-full max-w-6xl py-20 mx-auto'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/3 left-1 w-120 h-120 bg-primary/10 blur-3xl' />
      </div>

      <div className='container mx-auto px-6'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground uppercase tracking-widest text-sm'>
            What people say
          </span>

          <h2 className='text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground'>
            Experiences shared by
            <span className='font-serif italic font-normal dark:text-white text-[#bae6fd]'>
              {' '}
              people I've worked with.
            </span>
          </h2>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto'>
          <FeedbackForm setFeedbacks={setFeedbacks} />

          <div>
            <div className='flex justify-evenly md:justify-between items-center mb-6'>
              <h3 className='font-serif italic text-lg font-semibold text-primary'>
                Visitor Reviews
              </h3>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className='
                  px-3 py-2
                  rounded-xl
                  border border-slate-300 dark:border-slate-700
                  bg-white dark:bg-slate-900
                  text-slate-700 dark:text-slate-200
                  shadow-sm
                  text-sm
                  hover:border-sky-500
                  focus:outline-none
                  focus:ring-2
                  focus:ring-sky-500/20
                  focus:border-sky-500
                  transition-all
                  cursor-pointer
                '>
                <option value='highest'>Highest Rating</option>
                <option value='lowest'>Lowest Rating</option>
              </select>
            </div>

            <div className='relative'>
              <div
                className='absolute
                  top-0
                  left-0
                  right-0
                  h-16
                  bg-gradient-to-b
                  from-background
                  to-transparent
                  z-10
                  pointer-events-none
                '
              />

              <div className='max-h-[420px] p-3 overflow-y-auto snap-y snap-mandatory space-y-4 scrollbar-hide cursor-pointer'>
                {sortedFeedbacks.map((feedback) => (
                  <div className='snap-start animate-fade-in' key={feedback.id}>
                    <FeedbackCard feedback={feedback} />
                  </div>
                ))}
              </div>

              <div
                className='
                  absolute
                  bottom-0
                  left-0
                  right-0
                  h-16
                  bg-gradient-to-t
                  from-background
                  to-transparent
                  z-10
                  pointer-events-none
                '
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
