import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log('Menu Open:', isMenuOpen); // Debugging line
  };

  return (
    <header className="flex justify-between items-center p-6 bg-black text-white">
      <h1 className="text-2xl font-normal tracking-widest uppercase">Pushparaj K</h1>
      <nav className="hidden md:flex gap-6 items-center">
        <a href="#about" className="hover:text-blue-500 font-normal">About me</a>
        <a href="#skills" className="hover:text-blue-500 font-normal">Skills</a>
        <a href="#experience" className="hover:text-blue-500 font-normal">Experience</a>
        <a href="#contact" className="hover:text-blue-500 font-normal">Contact me</a>
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
        <a href="#about" className="block py-2 hover:text-blue-500">About me</a>
        <a href="#skills" className="block py-2 hover:text-blue-500">Skills</a>
        <a href="#experience" className="block py-2 hover:text-blue-500">Experience</a>
        <a href="#contact" className="block py-2 hover:text-blue-500">Contact me</a>
        <button className="bg-gradient-to-r from-orange-500 to-blue-600 text-white px-4 py-1 rounded-full">Hire me</button>
      </div>
    </header>
  );
};

export default Header;
