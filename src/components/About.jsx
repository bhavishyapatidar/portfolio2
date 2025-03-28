import React from 'react';

const About = ({ developer }) => {
  const { firstName, lastName, resumn, about, email, location } = developer;
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="section-title">About Me</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full max-w-sm mx-auto">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105 border-4 border-gray-400">
              <img 
                src={resumn} 
                alt={`${firstName} ${lastName}`} 
                className="w-full h-auto object-cover rounded-lg blur-sm hover:blur-none transition-all duration-300"
              />
            </div>
            <div className="absolute top-4 left-4 -z-10 w-full h-full border-2 border-[color:var(--color-primary)] rounded-lg"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[color:var(--color-accent)] rounded-lg -z-20"></div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[color:var(--color-secondary)]">
              Full stack developer currently working at TechnoFormatics (SMB COMMUNICATION PRIVATE LIMITED) as an intern.
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              {about}
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[color:var(--color-primary)] bg-opacity-10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Email</span>
                  <span className="font-medium">{email}</span>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[color:var(--color-primary)] bg-opacity-10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[color:var(--color-secondary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-sm text-gray-500">Location</span>
                  <span className="font-medium">{location}</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <a 
                href="#contact" 
                className="btn-primary text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Get In Touch
              </a>
              
              <a 
                href="https://drive.google.com/file/d/14vUx_D9m-zW4CNLICI7ibNBfw3_9l4Z8/view?usp=drive_link" 
                className="btn-secondary text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;