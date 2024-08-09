import { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <Link to="/" className="text-2xl font-normal tracking-widest uppercase">Pushparaj K</Link>
      <nav className="hidden md:flex gap-6 items-center">
        <Link to="/about" className="hover:text-blue-500 font-normal">About me</Link>
        <Link to="/skills" className="hover:text-blue-500 font-normal">Skills</Link>
        <Link to="/experience" className="hover:text-blue-500 font-normal">Experience</Link>
        <Link to="/contact" className="hover:text-blue-500 font-normal">Contact me</Link>
        <a target="_blank" href="https://www.linkedin.com/in/pushparaj-k-51937312b/" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 rounded-full">Hire me</a>
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
        <Link to="/about" className="block py-2 hover:text-blue-500">About me</Link>
        <Link to="/skills" className="block py-2 hover:text-blue-500">Skills</Link>
        <Link to="/experience" className="block py-2 hover:text-blue-500">Experience</Link>
        <Link to="/contact" className="block py-2 hover:text-blue-500">Contact me</Link>
        <a target="_blank" href="https://www.linkedin.com/in/pushparaj-k-51937312b/" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 rounded-full">Hire me</a>
      </div>
    </header>
  );
};

export default Header;
