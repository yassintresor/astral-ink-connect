import { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import profileImage from '@/assets/profile-photo.png';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = ['Full Stack Developer', 'UI/UX Designer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    let index = 0;
    const typing = setInterval(() => {
      if (index <= currentTitle.length) {
        setDisplayText(currentTitle.slice(0, index));
        index++;
      } else {
        clearInterval(typing);
        setTimeout(() => {
          const erasing = setInterval(() => {
            if (index > 0) {
              setDisplayText(currentTitle.slice(0, index - 1));
              index--;
            } else {
              clearInterval(erasing);
              setCurrentIndex((prev) => (prev + 1) % titles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typing);
  }, [currentIndex]);

  const handleScrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="portfolio-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in-left">
            <div className="mb-6">
              <h2 className="text-lg md:text-xl text-muted-foreground mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                <span className="text-gradient">Gihozo</span>
                <br />
                <span className="text-foreground">Yassin</span>
              </h1>
              <div className="h-8 md:h-12">
                <span className="text-xl md:text-2xl text-primary font-medium">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
              Passionate about creating exceptional digital experiences through clean code, 
              innovative design, and cutting-edge technology solutions.
            </p>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Github className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
              <a
                href="mailto:tresoryassin221@gmail.com"
                className="w-12 h-12 rounded-full bg-secondary/50 backdrop-blur-sm border border-border flex items-center justify-center hover:bg-primary hover:scale-110 transition-all duration-300 group"
              >
                <Mail className="w-5 h-5 text-foreground group-hover:text-primary-foreground transition-colors" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="portfolio-button text-primary-foreground"
              >
                Get In Touch
              </button>
              <button 
                onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-6 py-3 rounded-lg border border-border text-foreground hover:bg-secondary/50 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl animate-float">
                <img
                  src={profileImage}
                  alt="Gihozo Yassin"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-bounce"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-primary/80 transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default HeroSection;