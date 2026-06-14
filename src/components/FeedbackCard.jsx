import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export const FeedbackCard = ({ feedback }) => {
  return (
    <motion.article
      whileHover={{
        scale: 1.03,
        y: -6,
      }}
      
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className='glass p-4 rounded-3xl border border-primary/30'>
      <div className='flex flex-row justify-between items-start mb-3'>
        <div className='flex items-center gap-4'>
          <h4 className='font-bold'>{feedback.name}</h4>

          <div className='flex gap-1'>
            {[...Array(feedback.rating)].map((_, index) => (
              <Star
                key={index}
                className='w-3 h-3 fill-yellow-400 text-yellow-400'
              />
            ))}
          </div>
        </div>

        {feedback.rating === 5 && (
          <span className='px-3 py-1 rounded-full text-xs bg-yellow-400/15 text-yellow-400'>
            🌟 Featured
          </span>
        )}
      </div>

      <p className='text-muted-foreground text-sm'>{feedback.comment}</p>
    </motion.article>
  );
};
