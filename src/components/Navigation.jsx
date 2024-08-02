import React, { useState } from 'react';
import { homeNav } from '../lib/navigation';
import { NavLink, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="p-4 text-white flex justify-between items-center">
        <div className="hidden md:flex gap-10">
          {homeNav.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={`${
                link.path === location.pathname
                  ? 'underline underline-offset-8 text-[#5E77A8] decoration-white'
                  : ''
              }`}
              style={{ textDecoration: 'none' }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? (
              <CloseIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 p-4 bg-gray-800 text-white absolute top-0 right-0 h-full w-[300px] z-10 ">
          {homeNav.map((link, i) => (
            <NavLink
              key={i}
              to={link.path}
              className={`${
                link.path === location.pathname
                  ? 'underline underline-offset-8 text-[#5E77A8] decoration-white'
                  : ''
              }`}
              style={{ textDecoration: 'none' }}
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </>
  );
};

export default Navigation;
