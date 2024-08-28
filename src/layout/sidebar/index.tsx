import React from 'react';
import { NavLink } from 'react-router-dom';
import { IconType } from 'react-icons';
import { FaAdjust } from 'react-icons/fa';
import ScaleAnimated from '../../components/scale_animated';
import './index.css';
import { FaApple, FaPenFancy } from 'react-icons/fa6';

interface SidebarProps {
  closeSidebar: () => void;
}

interface NavLinkItem {
  name: string;
  path: string;
  Icon: IconType;
}

const navLinks: NavLinkItem[] = [
  { name: 'Page 1', path: '/', Icon: FaPenFancy },
  { name: 'Page 2', path: '/page-2', Icon: FaApple },
  { name: 'Page 3', path: '/page-3', Icon: FaAdjust },
];

const Sidebar: React.FC<SidebarProps> = ({ closeSidebar }) => {
  return (
    <aside
      aria-label="Sidebar"
      className="w-full md:w-14 lg:w-64 p-2 md:p-1 lg:p-2 bg-white/40 dark:bg-black/40 rounded-lg shadow-md overflow-auto"
      onClick={closeSidebar}
    >
      <ul className="flex flex-col gap-2" role="">
        {navLinks.map(link => (
          <li key={link.path} role="menuitem">
            <ScaleAnimated className="w-full">
              <NavLink
                aria-label={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `flex w-full items-center gap-2 px-3 py-3 rounded-lg md:px-1 md:justify-center lg:justify-normal lg:px-3 transition-colors duration-300 
                  ${isActive ? 'gradient-background ' : 'bg-purple-light dark:bg-purple-dark hover:bg-pink-light dark:hover:bg-pink-dark'} `
                }
              >
                {React.createElement(link.Icon, { size: 20 })}
                <span className="md:hidden lg:block">{link.name}</span>
              </NavLink>
            </ScaleAnimated>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
