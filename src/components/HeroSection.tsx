import { motion } from 'framer-motion';
import { MapPin, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import coverBanner from '@/assets/cover-banner.jpg';
import TerminalJSON from './TerminalJSON';

const HeroSection = () => {
  return (
    <section id='hero' className='relative'>
      {/* Cover Banner */}
      <div className='h-48 md:h-64 lg:h-72 w-full overflow-hidden rounded-t-lg'>
        <img
          src={coverBanner}
          alt='Cover banner'
          className='w-full h-full object-cover'
          width={1920}
          height={512}
        />
      </div>

      {/* Profile area */}
      <div className='section-card rounded-t-none relative'>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Left: Photo + Info */}
          <div className='flex flex-col items-center sm:items-start'>
            {/* Profile photo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='-mt-20 sm:-mt-24 relative z-10'
            >
              <div className='w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-card overflow-hidden bg-card shadow-lg'>
                <img
                  src='https://avatars.githubusercontent.com/Dams168?size=512'
                  alt='Alex Chen'
                  className='w-full h-full object-cover'
                  width={512}
                  height={512}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='mt-4 text-center sm:text-left'
            >
              <h1 className='text-2xl md:text-3xl font-bold text-foreground'>Alex Chen</h1>
              <p className='text-lg text-primary font-medium mt-1'>
                Frontend Developer & UI Engineer
              </p>
              <div className='flex items-center justify-center sm:justify-start gap-1.5 text-muted-foreground mt-2 text-sm'>
                <MapPin className='w-4 h-4' />
                <span>San Francisco, CA</span>
              </div>
              <div className='flex flex-wrap gap-3 mt-4 justify-center sm:justify-start'>
                <Button size='sm'>
                  <Mail className='w-4 h-4 mr-1.5' />
                  Contact
                </Button>
                <Button variant='outline' size='sm'>
                  <Download className='w-4 h-4 mr-1.5' />
                  Download CV
                </Button>
                <Button variant='outline' size='icon' className='h-8 w-8'>
                  <Github className='w-4 h-4' />
                </Button>
                <Button variant='outline' size='icon' className='h-8 w-8'>
                  <Linkedin className='w-4 h-4' />
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Terminal */}
          <div className='flex-1 flex items-center justify-center lg:justify-end mt-4 lg:mt-0'>
            <TerminalJSON />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
