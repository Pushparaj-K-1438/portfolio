import { motion } from 'framer-motion';
import { AiOutlineHtml5 } from "react-icons/ai";
import { TbBrandCss3, TbBrandJavascript } from "react-icons/tb";
import { RiLinkedinLine, RiTwitterXLine, RiThreadsLine } from "react-icons/ri";
import { FiGithub } from "react-icons/fi";
import { FaReact, FaNodeJs, FaInstagram } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";


const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white p-6 rounded-lg flex flex-col md:flex-row items-center gap-8 z-40"
    >
      <div className="flex-1">
        <h2 className="text-4xl font-bold mb-4 flex flex-col md:flex-row items-center gap-4">
          About Me
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-3xl"
          >
            <AiOutlineHtml5 className="text-orange-500" />
            <TbBrandCss3 className="text-blue-500" />
            <TbBrandJavascript className="text-yellow-400" />
            <FaReact className="text-blue-400" />
            <FaNodeJs className="text-green-500" />
            <SiExpress className="text-gray-400" />
            <SiMongodb className="text-green-600" />
          </motion.div>
        </h2>
        <p className="text-lg leading-relaxed mb-4">
          I'm a React.js developer with a passion for crafting exceptional web experiences. With 3.3 years of experience in building dynamic and user-friendly interfaces, I excel in using React.js, Tailwind CSS, and JavaScript to create innovative solutions. My approach is to turn challenges into opportunities for growth and excellence.
        </p>
        <p className="text-lg leading-relaxed">
          My expertise lies in creating reusable components, integrating APIs, and delivering high-quality solutions that drive user engagement. Let's collaborate to build something remarkable together!
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-6 text-3xl"
        >
          <a href="https://www.linkedin.com/in/pushparaj-k-51937312b/" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine className="text-blue-700 hover:text-red-500 transition-colors duration-300 h-6" />
          </a>
          <a href="https://github.com/Pushparaj-K-1438" target="_blank" rel="noopener noreferrer">
            <FiGithub className="text-gray-300 hover:text-red-500 transition-colors duration-300 h-6" />
          </a>
          <a href="https://x.com/Sanjura74147860" target="_blank" rel="noopener noreferrer">
            <RiTwitterXLine className="text-blue-400 hover:text-red-500 transition-colors duration-300 h-6" />
          </a>
          <a href="https://www.instagram.com/pushparaj.k_?igsh=Nmo2YXZsbHUzd2E0" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-600 hover:text-red-500 transition-colors duration-300 h-6" />
          </a>
          <a href="https://www.threads.net/@pushparaj.k_?invite=4" target="_blank" rel="noopener noreferrer">
            <RiThreadsLine className="hover:text-red-500 transition-colors duration-300 h-6" />
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-lg text-center flex flex-col items-start gap-4"
        >
          <div className="flex items-center gap-3">
            <MdOutlinePhone className="text-red-500" />
            <a href="tel:+917806995770" className="hover:text-red-500 transition-colors duration-300">
              +91-7806995770
            </a>
          </div>
          <div className="flex items-center gap-3">
            <MdOutlinePhone className="text-red-500" />
            <a href="tel:+917708873026" className="hover:text-red-500 transition-colors duration-300">
              +91-7708873026
            </a>
          </div>
          <div className="flex items-center gap-3">
            <IoMailOutline className="text-red-500" />
            <a href="mailto:sanjuraj.1438@gmail.com" className="hover:text-red-500 transition-colors duration-300">
              sanjuraj.1438@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <IoMailOutline className="text-red-500" />
            <a href="mailto:sanjuraj.1438@protonmail.com" className="hover:text-red-500 transition-colors duration-300">
              sanjuraj.1438@protonmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
