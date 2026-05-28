import { useEffect, useRef, useState } from 'react';
import { Moon, Paintbrush } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const FloatingThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const activeTheme = theme === 'dark' ? 'dark' : 'neo';
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
    <div
      className={`fixed right-4 bottom-24 z-50 transition-all duration-300 sm:bottom-6 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='h-12 w-12 rounded-none border-4 border-border bg-card shadow-neo hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-neo-hover'
            aria-label='Pilih tema'
          >
            {activeTheme === 'dark' ? (
              <Moon className='h-5 w-5' />
            ) : (
              <Paintbrush className='h-5 w-5' />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align='end'
          side='top'
          className='w-44 rounded-none border-4 border-border bg-card p-1.5 shadow-neo'
        >
          <DropdownMenuLabel className='text-[11px] uppercase tracking-tight'>
            Pilih Tema
          </DropdownMenuLabel>
          <DropdownMenuRadioGroup value={activeTheme} onValueChange={(value) => setTheme(value)}>
            <DropdownMenuRadioItem value='neo' className='rounded-none font-semibold'>
              Neo Brutalism
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value='dark' className='rounded-none font-semibold'>
              Dark
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default FloatingThemeToggle;
