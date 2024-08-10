import { motion } from 'framer-motion';
import { FaLaptopCode, FaCode } from 'react-icons/fa'; // FontAwesome icons

const Experience = () => {
  const experienceVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="experience" className="relative text-white p-6 z-40 md:h-[calc(100vh-92px)] overflow-auto scrollbar-hidden">
      <div className="relative flex flex-col gap-12">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-gray-500"></div>

        {/* Experience items */}
        <motion.div
          className="relative"
          variants={experienceVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-500 rounded-full"></div>
          <div className="max-w-[44%] border p-6 rounded-md hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaLaptopCode className="text-red-500 text-3xl mr-4" />
              <h3 className="text-2xl font-medium">Frontend Developer | Vahmine Technologies | 2022 - Present | HSR Layout</h3>
            </div>
            <ul className="list-disc pl-10">
              <li>Improved usability and accessibility across a diverse user base.</li>
              <li>Integrated third-party APIs to expand product functionalities.</li>
              <li>Championed the creation of reusable components.</li>
              <li>Collaborated with backend developers for seamless integration.</li>
              <li>Mentored team members on complex workflows.</li>
              <li>Led a team of 2 to achieve KPI targets.</li>
            </ul>
          </div>
        </motion.div>

        <motion.div
          className="relative"
          variants={experienceVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, staggerChildren: 0.3 }}
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full"></div>
          <div className="max-w-[44%] ml-auto border p-6 rounded-md hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <FaCode className="text-red-500 text-3xl mr-4" />
              <h3 className="text-2xl font-medium">PHP / Laravel Developer | Pixeltre Solutions | 2021 - 2022 | Hosur</h3>
            </div>
            <ul className="list-disc pl-10">
              <li>Developed well-structured, maintainable, and well-tested code.</li>
              <li>Built scalable software applications.</li>
              <li>Implemented innovative coding solutions.</li>
              <li>Developed functional web applications using clean code.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
