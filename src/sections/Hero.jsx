import { Header } from '../components/Header';
import { Profile } from '../components/Profile';

export const Hero = () => {
  return (
    <section className='flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0'>
      {/* Bg */}
      <div className='absolute inset-0'>
        <img
          src='/hero-bg.png'
          alt='Hero image'
          className='w-full h-full object-cover opacity-40'
        />
        <div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background' />
      </div>
      <Header name='Rahimah Ansari' welcomeMessage='Hi 👋 Glad you’re here!' />
      <Profile
        className='flex-1'
        photo='./prof.png'
        title='Web Developer'
        bio='A React developer building modern, fast, and user-friendly web applications.'
      />
    </section>
  );
};
