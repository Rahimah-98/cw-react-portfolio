import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rahimah@example.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+93 123456789',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Herat, Afghanistan',
  },
];

export const Contact = () => {
  return (
    <section id='contact' className='py-20 relative overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
            Get In Touch
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Let's build{' '}
            <span className='font-serif italic font-normal text-white'>
              something great.
            </span>
          </h2>
          <p className='text-muted-foreground'>
            Have a project idea? Let’s make it real, clean, and functional.
          </p>
        </div>

        <div className='flex flex-col md:flex-row gap-24 max-w-5xl mx-auto'>
          <div className='w-full glass p-8 rounded-3xl border border-primary/30'>
            <form className='flex flex-col gap-4'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'>
                  Name
                </label>
                <input
                  id='name'
                  type='text'
                  required
                  placeholder='Your name...'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'>
                  Email
                </label>
                <input
                  id='email'
                  type='email'
                  required
                  placeholder='your@email.com'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'>
                  Message
                </label>
                <textarea
                  id='message'
                  rows={5}
                  required
                  placeholder='Your message...'
                  className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'
                />
              </div>

              <Button className='w-full' type='submit'>
                Send Message
                <Send className='w-5 h-5' />
              </Button>
            </form>
          </div>

          <div className='w-full rounded-3xl p-8'>
            <h3 className='text-xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-4'>
              {contactInfo.map((item, i) => (
                <div
                  key={i}
                  className='flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group'>
                  <div className='w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors'>
                    <item.icon className='w-5 h-5 text-primary' />
                  </div>
                  <div>
                    <div className='text-sm text-muted-foreground'>
                      {item.label}
                    </div>
                    <div className='font-medium'>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
