import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    title: 'Backend Developer - Internship',
    company: 'PT. Padepokan Tujuh Sembilan',
    period: 'Dec 2025 – June 2026',
    highlights: [
      'Developed and structured production-ready backend systems and secure RESTful APIs, including Glucose Clamp,LinkStack, and SmartEdu AI Essay.',
      'Built custom analytics middleware, integrated Gemini-API engines, and engineered offline-mode fallback mechanisms with asynchronous queueing.',
      'Delivered robust core features, refactored multi-contributor codebases, and implemented strict URL validation to ensure high performance and data security.',
      'Collaborated with cross-functional teams using Laravel, Java Spring Boot, and PHP Native to translate complex business logic into scalable backend solutions.',
    ],
    tags: [
      'Laravel',
      'PHP',
      'System Analyst',
      'Java Spring Boot',
      'RESTful API',
      'MySQL',
      'PostgreSQL',
      'Swagger',
    ],
  },
  {
    title: 'Admin and Assistant Laboratory of Informatics Engineering',
    company: 'University of Suryakancana',
    period: 'Jul 2024 – Jul 2025',
    highlights: [
      'Taught, mentored, and evaluated over 150 students across 3 core practical IT courses: Basic Web Programming (HTML/CSS/JS/PHP), Advanced Web Programming (Laravel & Tailwind), and Information System Analysis.',
      'Managed administrative workflows, including processing and reconciling student attendance records across multiple cohorts to maintain 100% academic operational efficiency.',
    ],
    tags: ['Laravel', 'PHP', 'Tailwind CSS', 'HTML', 'JavaScript', 'Git', 'System Analyst'],
  },
  {
    title: 'Backend JavaScript - MSIB',
    company: 'Binar Academy',
    period: 'Sep 2024 – Dec 2024',
    highlights: [
      'Developed RESTful APIs using Node.js and Express.js for a final project E-Flight Ticketing System',
      'Designed and documented API endpoints using OpenAPI/Swagger',
      'Implemented authentication and authorization using JWT',
      'Collaborated with frontend developers to integrate APIs and optimize performance',
      'Designed database schemas and optimized queries for better performance',
    ],
    tags: ['Node.js', 'Express.js', 'JavaScript', 'Testing', 'Swagger', 'PostgreSQL'],
  },
  {
    title: 'Pengembang Front-End Web Dan Back-End Cohort - MSIB',
    company: 'Dicoding Indonesia',
    period: 'Aug 2023 – Dec 2023',
    highlights: [
      'Completed a comprehensive 4-month program covering frontend and backend development',
      'Built multiple projects using HTML, CSS, JavaScript, and Node.js',
      'Gained hands-on experience with modern web development tools and best practices',
      'Collaborated with peers on group projects and code reviews',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Git', 'Express.js'],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id='experience'
      className='section-card'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-foreground mb-6'>Experience</h2>
      <div className='space-y-6'>
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className='flex gap-4'
          >
            <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5'>
              <Briefcase className='w-5 h-5 text-primary' />
            </div>
            <div className='flex-1'>
              <h3 className='font-semibold text-foreground'>{exp.title}</h3>
              <p className='text-primary text-sm font-medium'>{exp.company}</p>
              <p className='text-muted-foreground text-xs mt-0.5'>{exp.period}</p>
              <ul className='mt-2 space-y-1.5'>
                {exp.highlights.map((item, j) => (
                  <li
                    key={j}
                    className='text-muted-foreground text-sm leading-relaxed flex items-baseline gap-2'
                  >
                    <span className='text-primary flex-shrink-0 text-xs'>●</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className='flex flex-wrap gap-1.5 mt-3'>
                {exp.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-xs px-2 py-0.5 rounded-none border-2 border-border bg-primary text-primary-foreground font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:rounded-full dark:border-0 dark:bg-primary/10 dark:text-primary dark:font-medium dark:shadow-none'
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ExperienceSection;
