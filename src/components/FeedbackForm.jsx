import { useState } from 'react';
import { Star, Send } from 'lucide-react';
import { Button } from './Button';

export const FeedbackForm = ({ setFeedbacks }) => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 5,
    comment: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.comment.trim()) return;

    const newFeedback = {
      id: Date.now(),
      ...formData,
    };

    setFeedbacks((prev) => [newFeedback, ...prev]);

    setFormData({
      name: '',
      rating: 5,
      comment: '',
    });
  };

  return (
    <div className='w-full glass p-8 rounded-3xl border border-primary/30'>
      <h3 className='text-xl font-semibold mb-6'>Leave Feedback</h3>

      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div>
          <label className='block text-sm font-medium mb-2'>Name</label>

          <input
            type='text'
            value={formData.name}
            placeholder='Jane Doe'
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                name: e.target.value,
              }))
            }
            className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:outline-none focus:ring-primary/30 focus:ring-1'
          />
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Rating</label>

          <div className='flex gap-2'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type='button'
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    rating: star,
                  }))
                }>
                <Star
                  className={`w-4 h-4 transition-colors  ${
                    star <= formData.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-yellow-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className='block mb-2 text-sm font-medium'>Comment</label>

          <textarea
            rows='5'
            value={formData.comment}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                comment: e.target.value,
              }))
            }
            className='w-full px-4 py-3 bg-surface rounded-xl border border-border resize-none focus:outline-none focus:ring-primary/30 focus:ring-1'
            placeholder='Wow, such a great work...'
          />
        </div>

        <Button type='submit' className='w-full mt-3 text-white'>
          Submit Feedback
          <Send className='w-5 h-5' />
        </Button>
      </form>
    </div>
  );
};
