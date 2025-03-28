import React, { useState } from "react";

const Contact = ({ developer }) => {
  const { email, phone, location, social } = developer;
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    alert(`Use this number 6264031524 to sand:- ${message} `);
    setMessage("");
  };

  const socialIcons = {
    linkedin: (
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    ),
    github: (
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.305 3.495.997.107-.775.418-1.305.762-1.604-2.665-.304-5.466-1.332-5.466-5.93 0-1.312.468-2.385 1.235-3.227-.124-.303-.535-1.525.116-3.176 0 0 1.008-.322 3.3 1.23a11.445 11.445 0 013.003-.404c1.018.005 2.043.137 3.003.404 2.292-1.552 3.3-1.23 3.3-1.23.651 1.651.24 2.873.116 3.176.767.842 1.235 1.915 1.235 3.227 0 4.61-2.805 5.624-5.476 5.92.43.372.815 1.103.815 2.222v3.293c0 .32.193.693.8.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    )
  };
  
  return (
    <section id="contact" className="py-16 px-6 bg-gray-800 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <p className="text-center mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your team.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            {[
              { label: "Email", value: email },
              { label: "Phone", value: phone },
              { label: "Location", value: location }
            ].map((item, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-lg transition-all">
                <h4 className="font-semibold text-lg">{item.label}</h4>
                <p className="text-gray-300 text-sm">{item.value}</p>
              </div>
            ))}
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
            <div className="flex justify-center md:justify-start space-x-6">
              {Object.entries(social).map(([platform, url]) => (
                <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-all">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    {socialIcons[platform]}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Send a Message</h3>
          <textarea
            className="w-full p-3 rounded-lg text-black border-2 border-gray-600"
            rows="4"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={handleSendMessage} className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
