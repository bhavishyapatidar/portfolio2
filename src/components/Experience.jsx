import React from 'react';

const Experience = ({ developer }) => {
  const { experience, education } = developer;
  
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">Experience & Education</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            My professional journey and academic background have shaped my development approach.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-[color:var(--color-primary)] flex items-center justify-center mr-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              Work Experience
            </h3>
            
            <div className="relative pl-8 border-l-2 border-gray-200">
              {experience.map((job, index) => (
                <div 
                  key={index} 
                  className={`relative mb-10 ${
                    index !== experience.length - 1 ? 'pb-10' : ''
                  }`}
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[color:var(--color-primary)] border-4 border-white"></div>
                  
                  <div className="card p-6 ml-2 hover:border-l-4 hover:border-l-[color:var(--color-primary)] transition-all">
                    <span className="inline-block px-3 py-1 bg-[color:var(--color-primary)] bg-opacity-10 text-[color:var(--color-primary)] text-sm font-medium rounded-full mb-3">
                      {job.period}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{job.position}</h4>
                    <p className="text-[color:var(--color-secondary)] mb-3">
                      {job.company}, {job.location}
                    </p>
                    <p className="text-gray-600">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <span className="w-10 h-10 rounded-full bg-[color:var(--color-secondary)] flex items-center justify-center mr-3 text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
              </span>
              Education
            </h3>
            
            <div className="relative pl-8 border-l-2 border-gray-200">
              {education.map((edu, index) => (
                <div 
                  key={index} 
                  className={`relative mb-10 ${
                    index !== education.length - 1 ? 'pb-10' : ''
                  }`}
                >
                  <div className="absolute -left-10 top-0 w-6 h-6 rounded-full bg-[color:var(--color-secondary)] border-4 border-white"></div>
                  
                  <div className="card p-6 ml-2 hover:border-l-4 hover:border-l-[color:var(--color-secondary)] transition-all">
                    <span className="inline-block px-3 py-1 bg-[color:var(--color-secondary)] bg-opacity-10 text-[color:var(--color-secondary)] text-sm font-medium rounded-full mb-3">
                      {edu.year}
                    </span>
                    <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
                    <p className="text-[color:var(--color-primary)] mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-gray-600">{edu.location}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications - Placeholder data */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-10 h-10 rounded-full bg-[color:var(--color-accent)] flex items-center justify-center mr-3 text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </span>
                Certifications
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { name: 'Javascript(Basic)', org: 'HackerRank', year: '2024' },
                  { name: 'Core Java', org: 'HackerRank', year: '2024' }
                ].map((cert, index) => (
                  <div key={index} className="card p-4 flex items-center hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-[color:var(--color-accent)] bg-opacity-10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--color-accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">{cert.name}</h4>
                      <p className="text-sm text-gray-600">{cert.org} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;