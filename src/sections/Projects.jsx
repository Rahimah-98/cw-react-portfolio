import { ArrowUpRight } from 'lucide-react';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';

const projects = [
  {
    name: 'Aurora Academy',
    description:
      'This project allows students to enroll, view profiles, explore courses, and send messages to the school.',
    image: '/projects/aurora.png',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rahimah-98.github.io/school-portal/',
    github: 'https://github.com/Rahimah-98/school-portal',
  },
  {
    name: 'Movie Theater',
    description:
      'A modern movie theater website built with HTML and CSS, featuring new showing movie listings, and a clean cinematic design.',
    image: '/projects/movie.png',
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/move-landing/',
    github: 'https://github.com/Rahimah-98/move-landing',
  },
  {
    name: 'Portfolio',
    description:
      'A beginner portfolio website built with HTML and CSS as part of learning frontend development fundamentals.',
    image: '/projects/port.png',
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/personal-website/',
    github: 'https://github.com/Rahimah-98/personal-website',
  },
  {
    name: 'Omnifood',
    description:
      'A modern and responsive food delivery website called Omnifood, built with HTML and CSS while learning responsive design and frontend development fundamentals.',
    image: '/projects/omnifood.png',
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/HTML-CSS-07-Omnifood/',
    github: 'https://github.com/Rahimah-98/HTML-CSS-07-Omnifood',
  },
];

export const Projects = () => {
  return (
    <section id='projects' className='py-20 relative overflow-hidden'>
      <div className='absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl' />
      <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight rounded-full blur-3xl' />
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
            Featured Work
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal text-white'>
              {' '}
              I've worked on.
            </span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {projects.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>

        <div className='text-center mt-12'>
          <Button>
            View All Projects
            <ArrowUpRight className='w-5 h-5' />
          </Button>
        </div>
      </div>
    </section>
  );
};
