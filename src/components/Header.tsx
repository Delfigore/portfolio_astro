import React, { useState, useEffect } from 'react';
import { Switch } from '@headlessui/react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    setIsDarkMode(theme === 'dark');
  }, []);

  const toggleDarkMode = () => {
    (window as any).toggleTheme(); // Call the global toggleTheme function
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md py-4 sticky top-0 z-10 animate-slideDown">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">delfigore.dev</a>
        <nav className="flex items-center space-x-6">
          <a href="#projects" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</a>
          <a href="#skills" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Skills</a>
          <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</a>
          <a href="https://github.com/Delfigore" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          <div className="flex items-center">
            <SunIcon className="h-5 w-5 text-yellow-500 mr-2" />
            <Switch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className={`${
                isDarkMode ? 'bg-blue-600' : 'bg-gray-200'
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            >
              <span className="sr-only">Toggle dark mode</span>
              <span
                className={`${
                  isDarkMode ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
            <MoonIcon className="h-5 w-5 text-gray-400 dark:text-yellow-300 ml-2" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;