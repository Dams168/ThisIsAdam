import { motion } from 'framer-motion';
import { MapPin, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import coverBanner from '@/assets/cover-banner.jpg';
import DiscordPresenceCard from '@/components/DiscordPresenceCard';

const CV_URL = 'https://drive.google.com/uc?export=download&id=18PEOHK_pOKwmde2kqrbJG8a6Cx9mFqys';

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative overflow-hidden rounded-b-xl border border-border bg-card shadow-neo dark:rounded-none dark:border-none dark:shadow-none'
    >
      {/* Cover Banner */}
      <div className='h-48 md:h-64 lg:h-72 w-full overflow-hidden'>
        <img
          src={coverBanner}
          alt='Cover banner'
          className='w-full h-full object-cover'
          width={1920}
          height={512}
        />
      </div>

      {/* Profile area - Sekarang menyatu tanpa border-top pemisah dan sudut atas dinormalisasi */}
      <div className='p-6 relative z-10'>
        <div className='flex flex-col lg:flex-row gap-6'>
          {/* Left: Photo + Info */}
          <div className='flex flex-col items-center sm:items-start'>
            {/* Profile photo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='-mt-24 sm:-mt-28 relative z-10'
            >
              <div className='w-32 h-32 sm:w-36 sm:h-36 rounded-none border-4 border-border overflow-hidden bg-card shadow-neo dark:!rounded-full dark:border-card dark:shadow-none'>
                <img
                  src='https://avatars.githubusercontent.com/Dams168?size=512'
                  alt='Adam Arrahman'
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
              <h1 className='text-foreground text-2xl font-bold'>Adam Arrahman</h1>
              <p className='text-lg text-primary font-medium mt-1'>Backend Developer</p>
              <div className='flex items-center justify-center sm:justify-start gap-1.5 text-muted-foreground mt-2 text-sm'>
                <MapPin className='w-4 h-4' />
                <span>Indonesia</span>
              </div>
              <div className='flex flex-wrap gap-3 mt-4 justify-center sm:justify-start'>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 dark:rounded-md dark:border dark:border-border dark:bg-card/70 dark:hover:bg-primary/10'
                  asChild
                >
                  <a
                    href='https://github.com/Dams168'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub profile'
                  >
                    <Github className='w-4 h-4' />
                  </a>
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 dark:rounded-md dark:border dark:border-border dark:bg-card/70 dark:hover:bg-primary/10'
                  asChild
                >
                  <a
                    href='https://linkedin.com/in/adam-arrahman'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn profile'
                  >
                    <Linkedin className='w-4 h-4' />
                  </a>
                </Button>
                <Button
                  variant='outline'
                  size='icon'
                  className='h-8 w-8 dark:rounded-md dark:border dark:border-border dark:bg-card/70 dark:hover:bg-primary/10'
                  asChild
                >
                  <a
                    href='mailto:adamrohman2003@gmail.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Email contact'
                  >
                    <Mail className='w-4 h-4' />
                  </a>
                </Button>
                <Button
                  variant='default'
                  size='sm'
                  className='h-8 px-3 gap-1.5 text-xs dark:rounded-md'
                  asChild
                >
                  <a
                    href={CV_URL}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Download CV'
                  >
                    <Download className='w-3.5 h-3.5' />
                    Download CV
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: Discord live presence */}
          <div className='flex-1 flex items-center justify-center lg:justify-end mt-4 lg:mt-0'>
            <DiscordPresenceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
