import {
  Code2,
  Brain,
  NotebookPen,
  BookOpen,
  CakeSlice,
  Footprints,
  Users,
  ShoppingBag,
  Camera,
  ArrowDown,
  ArrowUp,
} from 'lucide-react';
import { useState } from 'react';
import Avatar from '../components/Avatar';

const hobbies = [
  {
    icon: Code2,
    title: 'Coding',
  },
  {
    icon: NotebookPen,
    title: 'Learning',
  },
  {
    icon: BookOpen,
    title: 'Reading',
  },
  {
    icon: CakeSlice,
    title: 'Baking',
  },
  {
    icon: Brain,
    title: 'Overthinking',
  },
  {
    icon: Footprints,
    title: 'Walking',
  },
  {
    icon: Users,
    title: 'Talking',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping',
  },
  {
    icon: Camera,
    title: 'Photography',
  },
];

export const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id='about'
      className='py-20 text-center md:text-start relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          <div className='space-y-8'>
            <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
              About Me
            </span>

            <h2 className='text-4xl md:text-5xl font-bold leading-tight text-secondary-foreground'>
              Passionate About
              <br />
              <span className='font-serif italic font-normal dark:text-white text-[#bae6fd]'>
                {' '}
                Building and Learning.
              </span>
            </h2>

            <div className='space-y-4 text-muted-foreground'>
              <p>
                I am a passionate web developer who loves learning, building,
                and turning ideas into real digital experiences. I enjoy
                exploring modern web technologies and continuously improving my
                skills to create clean, responsive, and user-friendly
                applications.
              </p>
              <p>
                I have a strong interest in frontend development and enjoy
                working with technologies like React, JavaScript, and Tailwind
                CSS. I like creating interfaces that are not only visually
                appealing but also simple and intuitive to use. Solving problems
                through code and seeing a project come to life is one of the
                most rewarding parts of development for me.
              </p>
              <p>
                Beyond coding, I believe in constant growth and never stopping
                the learning process. I enjoy challenging myself with new
                projects, improving my creativity, and building experiences that
                can make people’s lives easier.
              </p>
            </div>
          </div>

          <div className='flex flex-col'>
            <div className='flex flex-col gap-4'>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
                {(showMore ? hobbies : hobbies.slice(0, 4)).map((item) => (
                  <div
                    key={item.title}
                    className='glass flex items-center gap-3 p-2 rounded-2xl '>
                    <div className='w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group hover:bg-primary/20'>
                      <item.icon className='w-4 h-4 text-primary' />
                    </div>

                    <h3 className='text-md md:text-lg font-semibold'>
                      {item.title}
                    </h3>
                  </div>
                ))}
              </div>

              <button
                className='mt-6 w-48 text-primary self-center hover:text-primary/85'
                onClick={() => setShowMore(!showMore)}>
                {showMore ? (
                  <>
                    Show Less
                    <ArrowUp className='w-5 h-5 inline-block ml-1' />
                  </>
                ) : (
                  <>
                    Show More
                    <ArrowDown className='w-5 h-5 inline-block ml-1' />
                  </>
                )}
              </button>
            </div>

            <Avatar />
          </div>
        </div>
      </div>
    </section>
  );
};
