import { Header } from '../components/Header';
import { Profile } from '../components/Profile';

export const Hero = () => {
  return (
    <section
      className='relative min-h-screen overflow-hidden bg-center bg-cover bg-no-repeat'
      style={{ backgroundImage: 'var(--hero-bg)' }}>
      <div className='absolute inset-0 bg-linear-to-b from-background/70 via-background/90 to-background' />

      <div className='relative z-10 flex flex-col xl:flex-row xl:justify-between items-center gap-10 w-full'>
        <Header
          name='Rahimah Ansari'
          welcomeMessage='Hi 👋 Glad you’re here!'
        />

        <Profile
          className='flex-1'
          path='./prof.webp'
          title='Web Developer'
          bio='A React developer building modern, fast, and user-friendly web applications.'
        />
      </div>
    </section>
  );
};
