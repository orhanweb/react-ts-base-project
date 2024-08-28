import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import IconButton from '../../components/buttons/icon_button';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ toggleSidebar }) => {
  // Get current theme from localStorage and assign it to state
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('theme') || 'light');

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    setCurrentTheme(newTheme); // Update theme state
  };

  return (
    <div className="flex items-center justify-between p-2  bg-white/40 dark:bg-black/40 rounded-lg shadow-md">
      <div className="flex-1 flex justify-start">
        <IconButton Icon={FaBars} onClick={toggleSidebar} />
      </div>
      <div className="flex-1 flex justify-center">
        <span className="text-center font-bold text-lg">React App</span>
      </div>
      <div className="flex-1 flex justify-end">
        <IconButton Icon={currentTheme === 'light' ? MdLightMode : MdDarkMode} onClick={toggleTheme} />
      </div>
    </div>
  );
};

export default Navbar;
