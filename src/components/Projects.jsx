import React, { useState } from 'react';

const Projects = ({ developer }) => {
  const { projects } = developer;
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);
  
  const openProject = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };
  
  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">My Projects</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A selection of my recent websites across various platforms and industries.
          </p>
        </div>
        
        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === category
                  ? 'bg-[color:var(--color-primary)] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="card group overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2"
              onClick={() => openProject(project)}
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '66.67%' }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-medium">View Details</span>
                </div>
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-medium text-[color:var(--color-primary)]">
                  {project.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[color:var(--color-primary)] transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 line-clamp-2 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
                {/* Project Modal */}
                {selectedProject && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
              <button
                onClick={closeProject}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-8">
                <div className="relative overflow-hidden mb-8" style={{ paddingBottom: '56.25%' }}>
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="absolute top-0 left-0 w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-3xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-gray-600 mb-6">{selectedProject.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Project Details</h4>
                    <div className="space-y-1">
                      <p className="text-gray-600">
                        <span className="font-medium">Category:</span> {selectedProject.category}
                      </p>
                      <p className="text-gray-600">
                        <span className="font-medium">Year:</span> {selectedProject.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;