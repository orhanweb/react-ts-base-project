import React, { useEffect, useState } from 'react';
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';
import { AnimatePresence, motion } from 'framer-motion';

const Layout: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMainClick = () => {
    if (isSidebarOpen && window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const autoCloseFuncForMobile = () => {
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  // Side Bar Animation Settings
  const sidebarVariants = {
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 25,
        mass: 1.5,
      },
    },
    closed: {
      x: 'calc(-100% - 8px)',
      transition: {
        type: 'spring',
        stiffness: 450,
        damping: 30,
      },
    },
  };

  return (
    <div className="flex p-2 flex-col gap-2 h-screen bg-gradient-to-br from-purple-light to-blue dark:from-purple-dark dark:to-blue-darkest dark:text-white">
      {/* Navbar */}
      <Navbar toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex flex-1 gap-2 relative overflow-hidden">
        <AnimatePresence mode="popLayout">
          {isSidebarOpen && (
            <motion.div
              key="sidebar"
              initial={window.innerWidth >= 768 ? 'open' : 'closed'}
              animate="open"
              exit="closed"
              variants={sidebarVariants}
              className="flex absolute md:relative inset-0 z-10 md:z-auto w-64 md:w-auto shadow-lg"
            >
              <Sidebar closeSidebar={autoCloseFuncForMobile} />
            </motion.div>
          )}

          <motion.main
            layout
            onClick={handleMainClick}
            className={`flex-1 bg-white/80 dark:bg-black-light p-4 rounded-lg shadow-md overflow-auto ${isSidebarOpen ? 'blur-sm md:blur-none' : ''} `}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>
      </div>

      <footer>
        <p className="text-center">
          This basic React application was made by Orhan.{' '}
          <a target="_blank" rel="noopener noreferrer" className="font-bold underline" href="https://github.com/orhanweb/react-ts-base-project">
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Layout;
