import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const certifications = [
  {
    title: 'Menjadi Back-End Developer Expert dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'Apr 2026',
    credentialId: '1RXYW184QZVM',
    type: 'Certification',
    tags: ['JavaScript', 'Testing', 'Clean Architecture', 'CI/CD', 'Security'],
  },
  {
    title: 'Belajar Fundamental Back-End dengan JavaScript',
    issuer: 'Dicoding Indonesia',
    date: 'Jan 2026',
    credentialId: 'JMZVVKMORZN9',
    type: 'Certification',
    tags: ['JavaScript', 'Express.js', 'RabbitMQ', 'Redis', 'Authentication'],
  },
  {
    title: 'IT Specialist - JavaScript',
    issuer: 'Certiport A Pearson VUE Business',
    date: 'Apr 2025',
    type: 'Certification',
    tags: ['JavaScript', 'Programming Fundamentals'],
  },
];

const CertificationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id='certifications'
      className='section-card'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-xl font-bold text-foreground mb-6'>Certifications & Training</h2>
      <div className='space-y-4'>
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className='flex gap-4'
          >
            <div className='flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mt-0.5'>
              <Award className='w-5 h-5 text-primary' />
            </div>
            <div className='flex-1'>
              <div className='flex items-start justify-between gap-2'>
                <div>
                  <h3 className='font-semibold text-foreground text-sm'>{cert.title}</h3>
                  <p className='text-muted-foreground text-sm'>{cert.issuer}</p>
                  <p className='text-muted-foreground text-xs mt-0.5'>{cert.date}</p>
                </div>
                <Badge variant='secondary' className='text-xs flex-shrink-0'>
                  {cert.type}
                </Badge>
              </div>
              {cert.credentialId && (
                <p className='text-xs text-muted-foreground mt-1 flex items-center gap-1'>
                  <ExternalLink className='w-3 h-3' />
                  Credential ID: {cert.credentialId}
                </p>
              )}
              <div className='flex flex-wrap gap-1.5 mt-2'>
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className='text-xs px-2 py-0.5 rounded-full bg-accent/10 text-accent font-medium'
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

export default CertificationSection;
