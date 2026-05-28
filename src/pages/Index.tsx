import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import CertificationSection from '@/components/CertificationSection';
import ProjectsSection from '@/components/ProjectsSection';
import FloatingThemeToggle from '@/components/FloatingThemeToggle';

const Index = () => {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar />
      <FloatingThemeToggle />
      <main className='max-w-4xl mx-auto px-4 py-6 space-y-4'>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <CertificationSection />
        <ProjectsSection />
      </main>
      <footer className='text-center text-muted-foreground text-xs py-6'>
        © 2026 Adam. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
};

export default Index;
