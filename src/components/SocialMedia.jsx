import { Github, Linkedin, Twitter } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    href: 'https://github.com/Rahimah-98/',
    label: 'GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rahimah-ansari/',
    label: 'LinkedIn',
  },
  {
    icon: Twitter,
    href: '#',
    label: 'Twitter',
  },
];

export const SocialMedia = () => {
  return (
    <div className='flex items-center gap-4'>
      {socialLinks.map((social) => (
        <a
          key={social.label}
          href={social.href}
          aria-label={social.label}
          className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all'
          target='_blank'>
          <social.icon className='w-5 h-5' />
        </a>
      ))}
    </div>
  );
};
