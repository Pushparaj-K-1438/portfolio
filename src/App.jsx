import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

const App = () => {
  const profileImage = '../src/assets/profile_img.png';

  return (
    <Router>
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection profileImage={profileImage} />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
