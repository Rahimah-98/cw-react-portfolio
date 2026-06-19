import {
  ArrowUpRight,
  CalendarDays,
  Layers3,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
import { ProjectUpdates } from '../components/ProjectUpdates';
import { Filter } from 'lucide-react';
import { useState } from 'react';
import { Modal } from '../components/Modal';

const projects = [
  {
    name: 'Aurora Academy',
    description:
      'This project allows students to enroll, view profiles, explore courses, and send messages to the school.',
    image: '/projects/aurora.png',
    status: 'Completed',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rahimah-98.github.io/school-portal/',
    github: 'https://github.com/Rahimah-98/school-portal',
    progress: 80,
    duration: '3 Weeks',

    features: [
      'Responsive Layout',
      'Course Showcase',
      'Student Enrollment Form',
      'Modern UI Design',
    ],
  },
  {
    name: 'Movie Theater',
    description:
      'A modern movie theater website built with HTML and CSS, featuring new showing movie listings, and a clean cinematic design.',
    image: '/projects/movie.png',
    status: 'In Progress',
    duration: '1 Weeks',

    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/move-landing/',
    github: 'https://github.com/Rahimah-98/move-landing',
    progress: 60,

    features: [
      'Hero Banner Section',
      'Movie Showcase',
      'Responsive Layout',
      'Modern Navigation',
      'Cinematic Design',
      'Call-to-Action Sections',
    ],
  },
  {
    name: 'Portfolio',
    description:
      'A beginner portfolio website built with HTML and CSS as part of learning frontend development fundamentals.',
    image: '/projects/port.png',
    status: 'Featured',
    duration: '2 Weeks',

    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/personal-website/',
    github: 'https://github.com/Rahimah-98/personal-website',
    progress: 70,

    features: [
      'About Section',
      'Projects Showcase',
      'Skills Section',
      'Contact Information',
      'Responsive Design',
      'Clean Navigation',
    ],
  },
  {
    name: 'Omnifood',
    description:
      'A modern and responsive food delivery website called Omnifood, built with HTML and CSS while learning responsive design and frontend development fundamentals.',
    image: '/projects/omnifood.png',
    status: 'Completed',
    duration: '3 Months',
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/HTML-CSS-07-Omnifood/',
    github: 'https://github.com/Rahimah-98/HTML-CSS-07-Omnifood',
    progress: 100,

    features: [
      'Responsive Design',
      'Pricing Section',
      'Customer Testimonials',
      'Featured Meals',
      'Call-to-Action Forms',
      'Smooth Scrolling Navigation',
    ],
  },
  {
    name: 'Loopstudios',
    description:
      'Built as a Frontend Mentor challenge using Tailwind CSS and Vanilla JavaScript. The project features a fully responsive landing page with a mobile navigation menu and a clean, modern design.',
    image: '/projects/loopstudios.png',
    status: 'Cmnpleted',
    duration: '7 days',

    techStack: ['HTML', 'CSS', 'JavaScript', 'Tailwindcss'],
    link: 'https://loopstudios-tailwind-project.netlify.app/',
    github: 'https://github.com/Rahimah-98/loopstudios',
    progress: 100,

    features: [
      'Responsive Design',
      'Hamburger Menu',
      'Hero Banner',
      'Interactive Gallery',
      'Modern UI',
      'Cross-Device Compatibility',
    ],
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [seeMore, setSeeMore] = useState(false);
  const [viewAll, setViewAll] = useState(false);

  const filteredProject = projects.filter((project) => {
    if (filter === 'all') return true;

    if (filter === 'frontend') {
      return (
        project.techStack.includes('HTML') ||
        project.techStack.includes('CSS') ||
        project.techStack.includes('JavaScript')
      );
    }

    if (filter === 'backend') {
      return (
        project.techStack.includes('Node.js') ||
        project.techStack.includes('Express') ||
        project.techStack.includes('JavaScript') ||
        project.techStack.includes('MongoDB')
      );
    }

    return true;
  });

  const visibleProjects = viewAll
    ? filteredProject
    : filteredProject.slice(0, 4);

  return (
    <section className='py-20 relative overflow-hidden'>
      <div className='container mx-auto px-6 relative z-10'>
        <div className='text-center mx-auto max-w-3xl mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
            Featured Work
          </span>
          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Projects that
            <span className='font-serif italic font-normal dark:text-white text-[#bae6fd]'>
              {' '}
              I've worked on.
            </span>
          </h2>
        </div>

        <div className='w-full flex flex-col md:flex-row items-center justify-between md:mb-8 '>
          <ProjectUpdates />
          <div className='p-6 min-w-[320px]'>
            <div className='flex items-center gap-3 mb-6 border-b border-border pb-2'>
              <Filter className='size-5 text-primary' />
              <h3 className='text-xl font-semibold'>Filter Projects</h3>
            </div>

            <div className='flex justify-evenly flex-wrap'>
              {['all', 'frontend', 'backend'].map((type) => (
                <button
                  key={type}
                  onClick={() => setFilter(type)}
                  className={`px-3 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer ${
                    filter === type
                      ? 'bg-primary text-foreground shadow-[0_0_20px_rgba(125,211,252,0.35)]'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                  }`}>
                  {type.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {visibleProjects.length === 0 ? (
            <p className='text-gray-500 text-center'>
              No projects available yet...
            </p>
          ) : (
            visibleProjects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))
          )}
        </div>

        <div className='text-center mt-12'>
          <Button
            className='text-foreground '
            type='button'
            onClick={() => setViewAll((prev) => !prev)}>
            {viewAll ? 'Show Less' : 'Show All Projects'}
            <ArrowUpRight className='w-5 h-5' />
          </Button>
        </div>
      </div>
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className='space-y-3'>
            <h2 className='text-3xl font-bold text-primary'>
              {selectedProject.name}
            </h2>

            <img
              src={selectedProject.image}
              alt={selectedProject.name}
              className='w-full rounded-xl'
            />

            <p>{selectedProject.description}</p>
            <button
              onClick={() => setSeeMore(!seeMore)}
              className='mt-2 border-b border-primary text-primary hover:text-primary/80 transition-all duration-200'>
              {seeMore ? (
                <div className='flex gap-1 items-center'>
                  Hide Info
                  <ChevronUp className='size-4' />
                </div>
              ) : (
                <div className='flex gap-1 items-center'>
                  More Info
                  <ChevronDown className='size-4' />
                </div>
              )}
            </button>
            {seeMore && (
              <div className='flex flex-col md:flex-row justify-between animate-fade-in'>
                <div className='w-full md:border-r border-primary/30 md:mr-4'>
                  <h3 className='font-semibold mb-2 text-primary'>Features</h3>
                  <ul className='space-y-1'>
                    {selectedProject.features?.map((feature) => (
                      <li key={feature} className='text-sm pl-2'>
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='space-y-2 w-full mt-4 md:mt-0'>
                  <div className='flex justify-between'>
                    <h3 className='font-semibold text-primary'>Progress</h3>
                    <span className='text-sm'>{selectedProject.progress}%</span>
                  </div>
                  <div
                    role='progressbar'
                    aria-valuenow={selectedProject.progress}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className='mx-auto h-2 bg-gray-500/50 border border-border rounded-full overflow-hidden'>
                    <div
                      className='h-full bg-primary transition-all duration-500 animate-fade-in'
                      style={{
                        width: `${selectedProject.progress}%`,
                      }}
                    />
                  </div>
                  <div className='flex justify-between pr-4 items-center mt-6'>
                    <div className='flex gap-3 items-center'>
                      <CalendarDays className='size-7 text-primary' />
                      <div className='flex flex-col items-center text-sm'>
                        <span className='text-primary'>Duration</span>
                        <span>{selectedProject.duration}</span>
                      </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                      <Layers3 className='size-7 text-primary' />
                      <div className='flex flex-col items-start text-sm'>
                        <span className='text-primary'>Tech Stack</span>
                        <ul>
                          {selectedProject.techStack.map((tech) => (
                            <li className='inline-block pr-2' key={tech}>
                              {tech}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};
