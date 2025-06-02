import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-auto">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Digital Logic & Design MCQ Quiz</p>
        <p className="text-sm mt-1">Created by Abdelhmeed Elshorbagy</p>
      </div>
    </footer>
  );
};

export default Footer;
