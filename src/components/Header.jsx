import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import myLogo from '../assets/pushparajk_logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-transparent text-white z-50">
      <NavLink to="/" className="text-2xl font-normal tracking-widest uppercase">
      <img src={myLogo} alt="Pushparaj.K"  className='h-11'/>
      </NavLink>
      <nav className="hidden md:flex gap-6 items-center">
        <NavLink 
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-normal' : 'hover:text-red-500 font-normal'
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-normal' : 'hover:text-red-500 font-normal'
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-normal' : 'hover:text-red-500 font-normal'
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-normal' : 'hover:text-red-500 font-normal'
          }
        >
          Projects
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-red-500 font-normal' : 'hover:text-red-500 font-normal'
          }
        >
          Contact me
        </NavLink> */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pushparaj-k-51937312b/"
          className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 rounded-full"
        >
          Hire me
        </a>
      </nav>
      <button
        className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white"
        onClick={toggleMenu}
      >
        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 5h20v2H0V8zm0 5h20v2H0v-2z" />
        </svg>
      </button>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden absolute top-16 right-0 w-full bg-black text-white z-50 p-3`}>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-red-500 block py-2' : 'hover:text-red-500 block py-2'
          }
        >
          About me
        </NavLink>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? 'text-red-500 block py-2' : 'hover:text-red-500 block py-2'
          }
        >
          Skills
        </NavLink>
        <NavLink
          to="/experience"
          className={({ isActive }) =>
            isActive ? 'text-red-500 block py-2' : 'hover:text-red-500 block py-2'
          }
        >
          Experience
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? 'text-red-500 block py-2' : 'hover:text-red-500 block py-2'
          }
        >
          Projects
        </NavLink>
        {/* <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-red-500 block py-2' : 'hover:text-red-500 block py-2'
          }
        >
          Contact me
        </NavLink> */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/pushparaj-k-51937312b/"
          className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 rounded-full"
        >
          Hire me
        </a>
      </div>
    </header>
  );
};

export default Header;
