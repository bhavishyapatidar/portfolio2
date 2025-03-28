import React from 'react';

const Hero = ({ developer }) => {
  const { firstName, lastName, title, about, avatar } = developer;

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.7))`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
      <div className="container mx-auto px-4 md:px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="max-w-3xl" data-aos="fade-up">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Hello, I'm <span className="text-[color:var(--color-accent)]">{firstName} {lastName}</span>
            </h2>
            <h3 className="text-xl md:text-2xl text-white font-light mb-6">{title}</h3>
            <p className="text-gray-200 text-lg mb-8 leading-relaxed max-w-2xl">
              {about.substring(0, 150)}...
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects" 
                className="btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="flex justify-center" data-aos="fade-left">
            <div className="w-70 h-70 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[color:var(--color-accent)] shadow-lg">
              <img 
                src={avatar} 
                alt={`${firstName} ${lastName}`} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Animated scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[color:var(--color-accent)] opacity-10 rounded-full -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[color:var(--color-primary)] opacity-10 rounded-full translate-y-1/2 -translate-x-1/3"></div>
    </section>
  );
};

export default Hero;