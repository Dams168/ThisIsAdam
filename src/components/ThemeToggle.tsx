import { Moon, Paintbrush } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/button';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const activeTheme = theme === 'dark' ? 'dark' : 'neo';

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(activeTheme === 'dark' ? 'neo' : 'dark')}
      className='h-9 w-9'
    >
      {activeTheme === 'dark' ? <Moon className='h-4 w-4' /> : <Paintbrush className='h-4 w-4' />}
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ThemeToggle;
