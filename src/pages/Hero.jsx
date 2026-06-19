import { Header } from '../components/Header';
import { Profile } from '../components/Profile';


export const Hero = () => {
  return (
    <section
      className='relative overflow-hidden  flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 bg-center bg-cover bg-no-repeat'
      style={{ backgroundImage: 'var(--hero-bg)' }}>
      <div className='absolute inset-0 bg-linear-to-b from-background/70 via-background/90 to-background' />

      <div className='relative z-10 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-0 w-full'>
        <Header
          name='Rahimah Ansari'
          welcomeMessage='Hi 👋 Glad you’re here!'
        />

        <Profile
          className='flex-1'
          path='./prof.png'
          title='Web Developer'
          bio='A React developer building modern, fast, and user-friendly web applications.'
        />
      </div>
    </section>
  );
};
