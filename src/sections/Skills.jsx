import { useEffect, useRef, useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Layout,
    skills: [
      {
        name: 'HTML',
        level: 95,
        color: '#ee7112',
        fact: 'First tool I used to turn static ideas into structured, real web pages.',
      },
      {
        name: 'CSS',
        level: 60,
        color: '#0070fa',
        fact: 'Where I learned how small visual tweaks completely change user perception.',
      },
      {
        name: 'JavaScript',
        level: 93,
        color: '#ffea03',
        fact: 'The first language that made UI behavior feel alive instead of static.',
      },
      {
        name: 'React',
        level: 92,
        color: '#61dafb',
        fact: 'Changed how I build UIs by thinking in reusable components instead of pages.',
      },
      {
        name: 'Next.js',
        level: 75,
        color: '#484848',
        fact: 'Helped me bridge frontend and backend in a single production-ready structure.',
      },
    ],
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      {
        name: 'Node.js',
        level: 90,
        color: '#22c55e',
        fact: 'Let me run JavaScript outside the browser and build real server logic.',
      },
      {
        name: 'Express',
        level: 88,
        color: '#94a3b8',
        fact: 'Simplified API design into clean routes instead of complex server setups.',
      },
      {
        name: 'MongoDB',
        level: 85,
        color: '#16a34a',
        fact: 'Made working with flexible, evolving data structures much more natural.',
      },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    skills: [
      {
        name: 'Git',
        level: 90,
        color: '#f97316',
        fact: 'Taught me how to track progress, collaborate safely, and recover from mistakes.',
      },
      {
        name: 'GitHub',
        level: 88,
        color: '#64748b',
        fact: 'My central hub for version control, project management, and showcasing work.',
      },
      {
        name: 'VS Code',
        level: 95,
        color: '#3b82f6',
        fact: 'The editor where most of my projects come to life, from first idea to deployment.',
      },
      {
        name: 'Netlify',
        level: 80,
        color: '#06b6d4',
        fact: 'Made deploying static and frontend applications fast, reliable, and beginner-friendly.',
      },
    ],
  },
];

export const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setAnimate(true);
        observer.disconnect();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [animate]);

  return (
    <section ref={ref} id='skills' className='relative py-20 overflow-hidden'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/4 left-1/5 w-50 h-50 bg-primary/10 blur-3xl' />
        <div className='absolute bottom-1/8 right-1 w-40 h-40 bg-highlight/5 rounded blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10'>

        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase'>
            Skills
          </span>

          <h2 className='text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground'>
            Skills I've Built
            <span className='font-serif italic font-normal dark:text-white text-[#bae6fd]'>
              {' '}
              Along the Way.
            </span>
          </h2>
        </div>

        <div className='grid lg:grid-cols-3 gap-8 items-stretch'>
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className='glass rounded-3xl p-6 border border-primary/30 h-full'>
                <div className='flex items-center gap-2 mb-6'>
                  <Icon className='w-6 h-6 text-primary' />
                  <h3 className='text-xl font-semibold text-foreground'>
                    {cat.title}
                  </h3>
                </div>
                <div className='space-y-3'>
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className='relative group'>
                      <div className='flex justify-between text-xs mb-2'>
                        <span>{skill.name}</span> <span>{skill.level}%</span>
                      </div>
                      <div className='absolute left-0 -top-2 hidden opacity-90 group-hover:block text-xs bg-foreground text-muted px-2 py-1 rounded'>
                        {skill.fact}
                      </div>
                      <div className='h-2 w-full bg-white/10 rounded-full overflow-hidden'>
                        <div
                          className='h-full rounded-full transition-all duration-1000 ease-out'
                          style={{
                            width: animate ? `${skill.level}%` : '0%',
                            backgroundColor: skill.color,
                            boxShadow: `0 0 12px ${skill.color}`,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
