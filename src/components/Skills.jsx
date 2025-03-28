import React from 'react';

const Skills = ({ developer }) => {
  const { skills } = developer;
  
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Skills</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
          As a web developer, I specialize in crafting dynamic, user-friendly, and scalable applications using modern technologies.
        
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="skill-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-lg">{skill.name}</h3>
                <span className="text-sm text-gray-600 font-medium">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div 
                  className="skill-progress" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-3">My Development Workflow</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
            My approach ensures high-quality, maintainable, and scalable applications.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '🔍',
                title: 'Planning',
                description: 'Understanding requirements, defining goals, and planning the architecture.',
              },
              {
                icon: '⚙️',
                title: 'Development',
                description: 'Building scalable, efficient, and clean code using modern frameworks.',
              },
              {
                icon: '🛠️',
                title: 'Testing & Debugging',
                description: 'Ensuring quality through unit tests, debugging, and performance optimization.',
              },
              {
                icon: '🚀',
                title: 'Deployment & Maintenance',
                description: 'Deploying the project and maintaining performance with regular updates.',
              },
            ].map((process, index) => (
              <div 
                key={index} 
                className="card p-6 text-center hover:border-[color:var(--color-primary)] hover:border transition-all"
              >
                <div className="w-16 h-16 bg-[color:var(--color-secondary)] bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6 text-[color:var(--color-primary)]">
                  {process.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{process.title}</h4>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;