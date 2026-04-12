import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'FORUM API',
    description:
      'A RESTful API for a discussion forum with user authentication, thread management, and comment functionality with clean architecture principles.',
    tags: ['JavaScript', 'Express.js', 'Testing', 'Clean Architecture'],
    image: 'https://opengraph.githubassets.com/1/Dams168/Forum-API',
    demoUrl: '#',
    codeUrl: 'https://github.com/Dams168/Forum-API',
  },
  {
    title: 'OPEN MUSIC API',
    description:
      'A comprehensive RESTful API for managing music, albums, playlists, and user collaborations built with Express.js, Redis, and PostgreSQL.',
    tags: ['JavaScript', 'Express.js', 'Redis', 'Authentication', 'RabbitMQ'],
    image: 'https://opengraph.githubassets.com/1/Dams168/OpenMusic-API',
    demoUrl: '#',
    codeUrl: 'https://github.com/Dams168/OpenMusic-API',
  },
  {
    title: 'MINI E-COMMERCE API',
    description:
      'A RESTful API for a mini e-commerce platform with product management, shopping cart, and order processing.',
    tags: ['JavaScript', 'Express.js', 'Swagger', 'Payment Integration'],
    image: 'https://opengraph.githubassets.com/1/Dams168/my-e-commerce',
    demoUrl: '#',
    codeUrl: 'https://github.com/Dams168/my-e-commerce',
  },
  {
    title: 'NGEFLYAJA - E-FLIGHT TICKETING SYSTEM API',
    description:
      'A comprehensive e-flight ticketing system with user authentication, flight search, booking management, and payment integration.',
    tags: ['JavaScript', 'Express.js', 'Swagger', 'Payment Integration'],
    image:
      'https://opengraph.githubassets.com/637307de555a41d799490eb31d865f63f5ba8a3cd958e6b3ef828ab4f1b968d7/kelompok8-NgeFlyAja/BackEnd-Development',
    demoUrl: '#',
    codeUrl: 'https://github.com/kelompok8-NgeFlyAja/BackEnd-Development',
  },
  {
    title: 'SIRA LABTIF',
    description:
      'A laboratory information system for managing recruitment processes and student activities.',
    tags: ['Laravel', 'PHP', 'MySQL'],
    image: 'https://opengraph.githubassets.com/1/Dams168/SIRA-Labtif',
    demoUrl: '#',
    codeUrl: 'https://github.com/Dams168/SIRA-Labtif',
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id='projects'
      className='section-card'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-xl font-bold text-foreground mb-6'>Projects</h2>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className='rounded-lg border border-border overflow-hidden hover:border-primary/30 transition-colors group'
          >
            <div className='relative aspect-video overflow-hidden bg-muted'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500'
                loading='lazy'
                width={768}
                height={512}
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-black/30 group-hover:from-black/20 group-hover:via-black/10 group-hover:to-transparent transition-colors duration-500' />
              <h3 className='absolute inset-0 flex items-center justify-center px-4 text-center text-lg font-mono text-white tracking-wide transition-opacity duration-500 group-hover:opacity-0'>
                {project.title}
              </h3>
            </div>
            <div className='p-5'>
              <p
                className='text-muted-foreground text-sm leading-relaxed'
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 4,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {project.description}
              </p>
              <div className='flex flex-wrap gap-1.5 mt-3'>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary font-medium'
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className='flex gap-2 mt-4'>
                <Button variant='ghost' size='sm' className='h-8 px-2.5 text-xs' asChild>
                  <a href={project.codeUrl} target='_blank' rel='noopener noreferrer'>
                    <Github className='w-3.5 h-3.5 mr-1' />
                    Code
                  </a>
                </Button>
                {/* <Button size="sm" className="h-8 px-2.5 text-xs" asChild>
                  <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3.5 h-3.5 mr-1" />
                    Live Demo
                  </a>
                </Button> */}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;
