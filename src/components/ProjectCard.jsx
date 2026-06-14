import { ArrowUpRight, Github, Star } from 'lucide-react';

export const ProjectCard = ({ project, onViewDetails }) => {

  return (
    <div className='group glass rounded-2xl overflow-hidden md:row-span-1'>
      <div className='relative overflow-hidden aspect-video'>
        <img
          src={project.image}
          alt={project.name}
          className='w-full h-full transition-transform duration-700 group-hover:scale-110'
        />

        <div
          className='absolute inset-0 
          bg-linear-to-t from-card via-card/50
          to-transparent opacity-60'
        />

        <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <a
            href={project.link}
            className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
            target='_blank'
            rel='noopener noreferrer'>
            <ArrowUpRight className='w-5 h-5' />
          </a>

          <a
            href={project.github}
            className='p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all'
            target='_blank'
            rel='noopener noreferrer'>
            <Github className='w-5 h-5' />
          </a>
        </div>
      </div>

      <div className='p-6 space-y-4'>
        <div className='flex items-start justify-between'>
          <div className='flex items-center justify-center gap-4'>
            <h3 className='text-xl font-semibold group-hover:text-primary'>
              {project.name}
            </h3>
            {project.featured && (
              <span className='flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-light'>
                <Star className='w-3 h-3 fill-current' />
                Featured
              </span>
            )}
          </div>
          <a href={project.link} target='_blank'>
            <ArrowUpRight
              className='w-5 h-5 
            text-muted-foreground group-hover:text-primary
            group-hover:translate-x-1 
            group-hover:-translate-y-1 transition-all'
            />
          </a>
        </div>

        <p className='text-muted-foreground text-sm'>{project.description}</p>

        <div className='flex items-center justify-between'>
          <div className='flex flex-wrap gap-2'>
            {project.techStack.map((tag) => (
              <span
                key={tag}
                className='px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300'>
                {tag}
              </span>
            ))}
          </div>
          <button
            onClick={() => onViewDetails(project)}
            className='text-primary text-sm font-medium cursor-pointer px-4 py-1.5 bg-surface border border-border/50 rounded-full hover:border-primary/50 animate-pulse'>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};
