import { CalendarDays, ChevronDown, ChevronUp, Layers3, } from 'lucide-react';

const ProjectDetails = ({ project, seeMore, setSeeMore }) => {
  return (
    <div className='space-y-3'>
      <h2 className='text-3xl font-bold text-primary'>{project.name}</h2>

      <img
        src={project.image}
        alt={project.name}
        className='w-full rounded-xl'
      />

      <p>{project.overview || project.description}</p>

      <button
        onClick={() => setSeeMore((prev) => !prev)}
        className='mt-2 border-b border-primary text-primary hover:text-primary/80 transition-all duration-200'>
        {seeMore ? (
          <div className='flex items-center gap-1'>
            Hide Info
            <ChevronUp className='size-4' />
          </div>
        ) : (
          <div className='flex items-center gap-1'>
            More Info
            <ChevronDown className='size-4' />
          </div>
        )}
      </button>

      {seeMore && (
        <div className='flex flex-col justify-between animate-fade-in md:flex-row'>
          <div className='w-full md:border-r md:mr-4 border-primary/30'>
            <h3 className='mb-2 font-semibold text-primary'>Features</h3>

            <ul className='space-y-1'>
              {project.features?.map((feature) => (
                <li key={feature} className='pl-2 text-sm'>
                  • {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className='w-full mt-4 space-y-2 md:mt-0'>
            <div className='flex justify-between'>
              <h3 className='font-semibold text-primary'>Progress</h3>

              <span className='text-sm'>{project.progress}%</span>
            </div>

            <div
              role='progressbar'
              aria-valuenow={project.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              className='h-2 mx-auto overflow-hidden bg-gray-500/50 border rounded-full border-border'>
              <div
                className='h-full transition-all duration-500 bg-primary animate-fade-in'
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

            <div className='flex items-center gap-12 mt-6'>
              <div className='flex items-center gap-3'>
                <CalendarDays className='size-7 text-primary' />

                <div className='flex flex-col items-center text-sm'>
                  <span className='text-primary'>Duration</span>

                  <span>{project.duration}</span>
                </div>
              </div>

              <div className='flex items-center min-h-full gap-3'>
                <Layers3 className='size-7 text-primary' />

                <div className='flex flex-col items-start text-sm'>
                  <span className='text-primary'>Tech Stack</span>

                  <ul>
                    {project.techStack.map((tech) => (
                      <li key={tech} className='inline-block pr-2'>
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
  );
};


export default ProjectDetails;