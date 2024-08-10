import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Projects from './components/Projects';
import transparentStar from './assets/transparentStar.png';
import bardlogo from './assets/bardlogo.png';

// Component to conditionally render the transparentStar image
const ConditionalStar = () => {
  const location = useLocation();

  return location.pathname === '/' ? (
    <>
      <img src={transparentStar} className="fixed top-24 right-36 h-5 w-5" alt="star icon 1" />
      <img src={bardlogo} className="fixed bottom-24 left-36 h-8 w-8" alt="bard logo" />
    </>

  ) : null;
};

const App = () => {
  const profileImage = '../src/assets/profile_img.png';

  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col z-40 relative">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection profileImage={profileImage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-40 blur-3xl absolute -left-32 top-0"></div>
          <div className="w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-40 blur-3xl absolute -right-32 bottom-0"></div>
        </div>
        <ConditionalStar />
      </div>
    </Router>
  );
};

export default App;
