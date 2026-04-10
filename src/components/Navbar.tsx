import { useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from './ThemeToggle';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Projects', href: '#projects' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border'>
      <div className='max-w-4xl mx-auto px-4 h-14 flex items-center justify-between'>
        <a href='#hero' className='flex items-center gap-2 font-bold text-foreground'>
          <Terminal className='w-5 h-5 text-primary' />
          <span>Adam.dev</span>
        </a>

        {/* Desktop */}
        <div className='hidden md:flex items-center gap-1'>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className='px-3 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md'
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        {/* Mobile toggle */}
        <div className='flex items-center gap-1 md:hidden'>
          <ThemeToggle />
          <Button variant='ghost' size='icon' onClick={() => setOpen(!open)}>
            {open ? <X className='w-5 h-5' /> : <Menu className='w-5 h-5' />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className='md:hidden border-t border-border bg-card px-4 py-3 space-y-1'>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className='block px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-md'
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
