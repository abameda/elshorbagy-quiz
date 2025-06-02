import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Digital Logic & Design MCQ Quiz</p>
        <p className="text-sm mt-1">Created by Abdelhmeed Elshorbagy</p>

        <div className="flex justify-center gap-4 mt-4">
          <a href="https://www.instagram.com/abamedax" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174855.png"
              alt="Instagram"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://www.linkedin.com/in/abameda" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>

          <a href="https://wa.me/96893637398" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3536/3536445.png"
              alt="WhatsApp"
              className="w-6 h-6 hover:scale-110 transition-transform"
            />
          </a>
        </div>

        <div className="mt-6">
          <a
            href="https://abameda.github.io/Elshorbagy/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition dark:bg-cyan-600 dark:hover:bg-cyan-700"
          >
          My Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
