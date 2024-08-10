import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaCodeBranch, FaFigma, FaTools, FaCode, FaProjectDiagram, FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { icon: <FaReact className='text-red-500' />, title: "Front-End Development", description: "React.js, Tailwind CSS, JavaScript, HTML5, CSS3, jQuery" },
    { icon: <FaNodeJs className='text-red-500' />, title: "Back-End Development", description: "PHP, Laravel, ExpressJs" },
    { icon: <FaDatabase className='text-red-500' />, title: "Databases", description: "MySQL, Mongo" },
    { icon: <FaCodeBranch className='text-red-500' />, title: "Version Control", description: "Git/GitHub/Bitbucket" },
    { icon: <FaFigma className='text-red-500' />, title: "Design Tools", description: "Figma (wireframing & prototyping)" },
    { icon: <FaTools className='text-red-500' />, title: "Build Tools", description: "Webpack or Parcel" },
    { icon: <FaCode className='text-red-500' />, title: "State Management", description: "Redux" },
    { icon: <FaProjectDiagram className='text-red-500' />, title: "API Integration", description: "Fetching and manipulating data from APIs" },
    { icon: <FaLaptopCode className='text-red-500' />, title: "Testing Frameworks", description: "Jest" },
    { icon: <FaTools className='text-red-500' />, title: "DevOps Tools", description: "Github CI/CD" }
  ];

  return (
    <motion.section
      id="skills"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1, staggerChildren: 0.2 }}
      className="text-white p-6 z-40 md:h-[calc(100vh-92px)] overflow-auto scrollbar-hidden"
    >
      {/* <h2 className="text-4xl font-semibold mb-6 text-center">Skills</h2> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            // variants={skillVariants}
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r border p-5 rounded-lg shadow-lg flex items-center gap-4 hover:scale-105"
          >
            <div className="text-4xl">
              {skill.icon}
            </div>
            <div>
              <h3 className="text-xl font-semibold">{skill.title}</h3>
              <p className="text-sm text-gray-200">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Skills;
