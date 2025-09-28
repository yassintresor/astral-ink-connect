import { useEffect, useRef, useState } from 'react';

const SkillsSection = () => {
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

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Vue.js', level: 85 },
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Python/Django', level: 85 },
        { name: 'PostgreSQL', level: 82 },
        { name: 'MongoDB', level: 80 },
      ]
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 93 },
        { name: 'Docker', level: 78 },
        { name: 'AWS/Cloud', level: 75 },
        { name: 'Figma/Design', level: 87 },
      ]
    }
  ];

  const SkillBar = ({ skill, index }: { skill: { name: string; level: number }, index: number }) => {
    const [animatedLevel, setAnimatedLevel] = useState(0);

    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setAnimatedLevel(skill.level);
        }, index * 200);
        return () => clearTimeout(timer);
      }
    }, [inView, skill.level, index]);

    return (
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-foreground font-medium">{skill.name}</span>
          <span className="text-primary font-semibold">{animatedLevel}%</span>
        </div>
        <div className="w-full bg-secondary/30 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000 ease-out shadow-md"
            style={{ 
              width: `${animatedLevel}%`,
              boxShadow: '0 0 10px hsl(var(--primary) / 0.3)'
            }}
          ></div>
        </div>
      </div>
    );
  };

  return (
    <section ref={sectionRef} id="skills" className="portfolio-section bg-secondary/5">
      <div className="portfolio-container">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-16 ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency levels 
              across various technologies and tools.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`portfolio-card ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-6 text-gradient text-center">
                  {category.title}
                </h3>
                <div>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skill.name} 
                      skill={skill} 
                      index={categoryIndex * 4 + skillIndex} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Technologies */}
          <div className={`mt-16 text-center ${inView ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
            <h3 className="text-2xl font-semibold mb-8 text-gradient">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {[
                'JavaScript', 'Python', 'React', 'Vue.js', 'Node.js', 'Django', 
                'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'Git', 'Figma',
                'Tailwind CSS', 'TypeScript', 'Next.js', 'Express.js'
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="px-4 py-2 bg-secondary/20 backdrop-blur-sm border border-border rounded-full text-sm font-medium text-foreground hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${0.9 + index * 0.05}s` }}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;