import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-max section-padding">
        <div className="flex items-center justify-between py-4">
          <div className="font-bold text-xl text-primary">AM</div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
          </div>

          {/* <Button 
            variant="outline" 
            size="sm"
            className="hidden md:block"
          >
            🌙
          </Button> */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;