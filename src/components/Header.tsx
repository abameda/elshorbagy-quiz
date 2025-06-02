import React, { useEffect, useState } from "react";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
<header
  className={`p-4 shadow-md transition-colors duration-300 text-white
    bg-gradient-to-r bg-[length:200%_200%] animate-gradient-move ${
      darkMode
        ? 'from-gray-900 via-cyan-700 to-blue-500'
        : 'from-blue-400 via-indigo-400 to-purple-500'
    }`}
>
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">
            Digital Logic & Design MCQ Quiz
          </h1>
          <p className="text-sm md:text-base mt-2 md:mt-0">
            Made by Abdelhmeed Elshorbagy
          </p>
        </div>

        <button
          onClick={() => setDarkMode((prev) => !prev)}
          className="px-4 py-2 rounded-md bg-white text-blue-600 dark:bg-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;
