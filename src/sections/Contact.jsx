import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

import { ContactForm } from '../components/ContactForm';
import { ContactPreview } from '../components/ContactPreview';
import { Toast } from '../components/Toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'rahimaansari98@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+93789980464',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Herat, Afghanistan',
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(false);

  return (
    <section
      id='contact'
      className='relative py-20 overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/5 w-120 h-120 bg-primary/10 blur-3xl' />
        <div className='absolute bottom-1/5 right-1/4 w-80 h-80 bg-highlight/5 rounded blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
            Get In Touch
          </span>

          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Let's build{' '}
            <span className='font-serif italic font-normal dark:text-white text-[#bae6fd]'>
              something great.
            </span>
          </h2>

          <p className='text-muted-foreground'>
            Have a project idea? Let’s make it real, clean, and functional.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto'>
          <ContactForm
            formData={formData}
            setFormData={setFormData}
            setSuccess={setSuccess}
          />

          <div className='w-full flex flex-col '>
            <div className='rounded-3xl p-8 order-2 '>
              <h3 className='text-xl font-semibold mt-6 mb-4'>
                Contact Information
              </h3>

              <div className='space-y-2'>
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
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
              <ContactPreview formData={formData} />
          </div>
        </div>

        <Toast success={success} />
      </div>
    </section>
  );
};
