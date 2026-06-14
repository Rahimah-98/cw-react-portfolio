import { Button } from '../components/Button';
import { Download, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const quotes = [
  'Code is like humor. When you have to explain it, it’s bad.',
  'First, solve the problem. Then, write the code.',
  'Simplicity is the soul of efficiency.',
  'Small progress is still progress.',
  'Dream big and start small.',
  'Hard work beats talent when talent doesn’t work hard.',
  'Learn something new every day.',
  'Great things take time.',
  'Discipline is stronger than motivation.',
  'Your only limit is your mindset.',
  'Progress, not perfection.',
  'Focus on improving, not impressing.',
  'Confidence comes from practice.',
  'One step at a time is still moving forward.',
];

export const Header = ({ name, welcomeMessage }) => {
  return (
    <header className='relative text-center md:text-start md:min-h-screen overflow-hidden'>
      <div className='container mx-auto px-6 pt-34 pb-8 md:pb-20 relative z-10 space-y-6'>
        <div className='space-y-8 flex flex-col gap-3'>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight'>
            <span className='text-3xl md:text-4xl font-serif italic font-normal'>
              {welcomeMessage}
            </span>
            <br />
            I'm
            <br />
            <span className='text-primary glow-text text-5xl md:text-6xl lg:text-7xl'>
              {name}
            </span>
          </h1>
          <p className='text-lg text-muted-foreground max-w-lg'>
            — a web developer specializing in React, Next.js, and JavaScript. I
            build scalable, performant web applications that users love.
          </p>
          {/* CTAs */}
          <div className='flex flex-row mx-auto md:mx-0 gap-4'>
            <a href='#contact'>
              <Button
                type='button'
                className='text-white border border-primary'>
                Contact Me <ArrowRight className='w-5 h-5' />
              </Button>
            </a>
            <a href='/cv/Rahimah-CV.pdf' download='Rahimah-CV.pdf'>
              <Button
                className='bg-transparent border duration-200 border-primary text-primary hover:text-white'
                type='button'>
                <Download className='w-5 h-5' />
                Download CV
              </Button>
            </a>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className='w-fit glass bg-background rounded-2xl mt-10 p-4 shadow-lg shadow-primary/25 animate-fade-in'>
          <blockquote className='text-lg font-medium italic text-foreground'>
            <TypeAnimation
              sequence={quotes.flatMap((quote) => [quote, 5000])}
              speed={50}
              repeat={Infinity}
            />
          </blockquote>
        </div>
      </div>
    </header>
  );
};
