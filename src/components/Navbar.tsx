import { useEffect, useRef, useState } from 'react';
import { Award, Briefcase, Folder, Terminal, User, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpg';

const links: Array<{ label: string; href: string; icon?: LucideIcon; imageSrc?: string }> = [
  {
    label: 'Profile',
    href: '#hero',
    imageSrc: 'https://avatars.githubusercontent.com/Dams168?size=512',
  },
  { label: 'About', href: '#about', icon: User },
  { label: 'Experience', href: '#experience', icon: Briefcase },
  { label: 'Certifications', href: '#certifications', icon: Award },
  { label: 'Projects', href: '#projects', icon: Folder },
];

const Navbar = () => {
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const bannerHeight = useRef(120);

  useEffect(() => {
    const updateBannerHeight = () => {
      const hero = document.getElementById('hero');
      bannerHeight.current = hero ? hero.offsetHeight : 120;
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingUp = currentScrollY < lastScrollY.current;
      const showWhileOnBanner = currentScrollY < Math.max(bannerHeight.current - 72, 72);

      setIsTopVisible(showWhileOnBanner);
      setIsVisible(showWhileOnBanner || isScrollingUp);
      lastScrollY.current = currentScrollY;
    };

    updateBannerHeight();
    lastScrollY.current = window.scrollY;
    handleScroll();

    window.addEventListener('resize', updateBannerHeight);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('resize', updateBannerHeight);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 border-b border-border bg-card/80 backdrop-blur-md transition-opacity duration-300 ${
          isTopVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className='max-w-4xl mx-auto px-4 h-14 flex items-center justify-center'>
          <a href='#hero' className='flex items-center gap-2 font-bold text-foreground'>
            <Terminal className='w-5 h-5 text-primary' />
            <span>Adam.dev</span>
          </a>
        </div>
      </nav>

      <div
        className={`fixed bottom-5 left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        <div className='flex items-center gap-3 rounded-full border border-border/60 bg-card/90 p-1.5 shadow-lg backdrop-blur-md'>
          {links.map((l) => {
            const Icon = l.icon;

            return (
              <div key={l.href} className='relative group/nav-icon'>
                <Button
                  variant='ghost'
                  size='icon'
                  asChild
                  className='h-10 w-10 rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/10'
                >
                  <a href={l.href} aria-label={l.label}>
                    {Icon ? (
                      <Icon className='w-4 h-4' />
                    ) : (
                      <img
                        src={l.imageSrc}
                        alt=''
                        aria-hidden='true'
                        className='w-5 h-5 rounded-full object-cover'
                        width={20}
                        height={20}
                      />
                    )}
                    <span className='sr-only'>{l.label}</span>
                  </a>
                </Button>
                <span className='pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-border/70 bg-card px-2 py-0.5 text-[10px] font-medium text-foreground opacity-0 shadow-sm transition-all duration-200 group-hover/nav-icon:translate-y-0 group-hover/nav-icon:opacity-100'>
                  {l.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Navbar;
