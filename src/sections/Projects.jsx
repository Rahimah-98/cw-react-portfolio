import { ArrowUpRight } from 'lucide-react';
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
    featured: true,
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://rahimah-98.github.io/school-portal/',
    github: 'https://github.com/Rahimah-98/school-portal',
    overview:
      'A complete e-learning platform with student and admin dashboards.',

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
    featured: false,
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/move-landing/',
    github: 'https://github.com/Rahimah-98/move-landing',
    overview:
      'A complete e-learning platform with student and admin dashboards.',

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
    featured: true,
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/personal-website/',
    github: 'https://github.com/Rahimah-98/personal-website',
    overview:
      'A complete e-learning platform with student and admin dashboards.',

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
    featured: false,
    techStack: ['HTML', 'CSS'],
    link: 'https://rahimah-98.github.io/HTML-CSS-07-Omnifood/',
    github: 'https://github.com/Rahimah-98/HTML-CSS-07-Omnifood',
    overview:
      'A complete e-learning platform with student and admin dashboards.',

    features: [
      'Responsive Design',
      'Pricing Section',
      'Customer Testimonials',
      'Featured Meals',
      'Call-to-Action Forms',
      'Smooth Scrolling Navigation',
    ],
  },
];

export const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

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
        project.techStack.includes('MongoDB')
      );
    }

    return true;
  });

  return (
    <section id='projects' className='py-20 relative overflow-hidden'>
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
              <h3 className='text-xl font-semibold'>
                Filter Projects
              </h3>
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
          {filteredProject.length === 0 ? (
            <p className='text-gray-500 text-center'>
              No projects available yet...
            </p>
          ) : (
            filteredProject.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onViewDetails={() => setSelectedProject(project)}
              />
            ))
          )}
        </div>

        <div className='text-center mt-12'>
          <Button className='text-foreground ' type='button'>
            View All Projects
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

            <div>
              <h3 className='font-semibold mb-2 text-primary'>Features</h3>

              <ul className='space-y-1'>
                {selectedProject.features?.map((feature) => (
                  <li key={feature} className="text-sm pl-2">• {feature}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};
