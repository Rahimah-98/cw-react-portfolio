import { useEffect, useState } from 'react';
import { Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendContactEmail } from '../utils/emailService';
import { Button } from './Button';

export const ContactForm = ({ formData, setFormData, setSuccess }) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const [debouncedEmail, setDebouncedEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedEmail(formData.email.trim());
    }, 400);

    return () => clearTimeout(timer);
  }, [formData.email]);

  useEffect(() => {
    if (!debouncedEmail) {
      setEmailError('');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setEmailError(
      emailRegex.test(debouncedEmail)
        ? ''
        : 'Please enter a valid email address',
    );
  }, [debouncedEmail]);

  const getHint = () => {
    const email = formData.email;

    if (!email) return '';

    if (!email.includes('@')) return 'Add @ symbol';

    const [, domain = ''] = email.split('@');

    if (!domain) return 'Add domain name';

    if (!domain.includes('.')) return 'Add domain extension (.com)';

    return 'Looks good ✓';
  };

  const launchConfetti = () => {
    confetti({
      particleCount: 60,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.7 },
    });

    confetti({
      particleCount: 60,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.7 },
    });
  };

  const validate = () => {
    const errors = {};

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));

    if (name === 'email') {
      setEmailError('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);

      await sendContactEmail(formData);

      setSuccess(true);
      launchConfetti();

      setFormData({
        name: '',
        email: '',
        message: '',
      });

      setErrors({});
      setEmailError('');
      setDebouncedEmail('');

      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='w-full glass p-8 rounded-3xl border border-primary/30'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <div>
          <label className='block text-sm font-medium mb-2'>Name</label>

          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            placeholder='Jane Doe'
            className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:outline-none focus:ring-primary/30 focus:ring-1'
          />

          {errors.name && (
            <p className='text-red-600 text-xs mt-1'>{errors.name}</p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Email</label>

          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='janedoe@email.com'
            className={`w-full px-4 py-3 bg-surface rounded-xl border focus:outline-none focus:ring-primary/30 focus:ring-1 transition ${
              emailError ? 'border-red-500' : 'border-border'
            }`}
          />

          {formData.email && !emailError && (
            <p className='text-xs text-primary/70 mt-1'>{getHint()}</p>
          )}

          {emailError && (
            <p className='text-red-600 text-xs mt-1'>{emailError}</p>
          )}

          {errors.email && (
            <p className='text-red-600 text-xs mt-1'>{errors.email}</p>
          )}
        </div>

        <div>
          <label className='block text-sm font-medium mb-2'>Message</label>

          <textarea
            name='message'
            rows={5}
            value={formData.message}
            onChange={handleChange}
            placeholder='Hey...'
            className='w-full px-4 py-3 bg-surface rounded-xl border border-border resize-none focus:outline-none focus:ring-primary/30 focus:ring-1'
          />

          {errors.message && (
            <p className='text-red-600 text-xs mt-1'>{errors.message}</p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full text-white mt-3'
          disabled={loading}>
          {loading ? 'Sending...' : 'Send Message'}
          {!loading && <Send className='w-5 h-5' />}
        </Button>
      </form>
    </div>
  );
};
