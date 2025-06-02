import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold">Digital Logic & Design MCQ Quiz</h1>
        <p className="text-sm md:text-base mt-2 md:mt-0">Made by Abdelhmeed Elshorbagy</p>
      </div>
    </header>
  );
};

export default Header;
