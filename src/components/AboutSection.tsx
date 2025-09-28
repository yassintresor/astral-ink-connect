import { useEffect, useRef, useState } from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const AboutSection = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Creative Design',
      description: 'Bringing ideas to life with intuitive and visually appealing user interfaces.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and exceptional user experience.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with teams to deliver projects that exceed expectations.'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="portfolio-section">
      <div className="portfolio-container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className={`${inView ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
                Passionate Developer & Designer
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  I'm a dedicated full-stack developer with a passion for creating innovative 
                  digital solutions. My journey in technology began with curiosity and has 
                  evolved into a comprehensive skill set spanning modern web technologies.
                </p>
                <p>
                  I believe in the power of clean, efficient code and user-centered design. 
                  Every project I work on is an opportunity to push boundaries, learn something 
                  new, and create meaningful experiences for users.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community.
                </p>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">3+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className={`${inView ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {highlights.map((item, index) => (
                  <div
                    key={item.title}
                    className="portfolio-card group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-all duration-300">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-foreground">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mission Statement */}
          <div className={`text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
            <div className="portfolio-card max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold mb-4 text-gradient">My Mission</h3>
              <p className="text-lg text-muted-foreground">
                "To bridge the gap between complex technology and intuitive user experiences, 
                creating digital solutions that not only meet business goals but also delight 
                and empower users in their daily lives."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;