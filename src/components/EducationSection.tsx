import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: 'Informatics Engineering',
    school: 'University of Suryakancana',
    period: '2021 - 2025',
    detail:
      'Fokus on software development, especially backend technologies and database management.',
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id='education'
      className='section-card'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-xl font-bold text-foreground mb-6'>Education</h2>
      {education.map((edu, i) => (
        <div key={i} className='flex gap-4'>
          <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center'>
            <GraduationCap className='w-5 h-5 text-primary' />
          </div>
          <div>
            <h3 className='font-semibold text-foreground'>{edu.degree}</h3>
            <p className='text-primary text-sm font-medium'>{edu.school}</p>
            <p className='text-muted-foreground text-xs mt-0.5'>{edu.period}</p>
            <p className='text-muted-foreground text-sm mt-2'>{edu.detail}</p>
          </div>
        </div>
      ))}
    </motion.section>
  );
};

export default EducationSection;
