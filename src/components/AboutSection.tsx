import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import TerminalJSON from './TerminalJSON';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.section
      ref={ref}
      id='about'
      className='section-card'
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      <h2 className='text-foreground mb-4'>About</h2>
      <div className='flex flex-col lg:flex-row items-start gap-6'>
        <div className='flex-1'>
          <p className='text-muted-foreground leading-relaxed'>
            I'm a Junior Backend developer. I specialize in Node.js (Express.js) and modern backend
            technologies building robust APIs and scalable server-side solutions. I thrive on
            optimizing performance and ensuring security, while always keeping the end-user
            experience in mind.
          </p>
          <p className='text-muted-foreground leading-relaxed mt-3'>
            I'm passionate about learning new technologies and best practices in backend
            development. I'm always looking for opportunities to grow and contribute to meaningful
            projects.
          </p>
        </div>

        <div className='w-full lg:flex-1 flex items-center justify-center lg:justify-end'>
          <TerminalJSON />
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
