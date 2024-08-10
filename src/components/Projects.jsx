import { projects } from './projects';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      id="projects"
      className="z-40 overflow-auto scrollbar-hidden flex items-center justify-center md:h-[calc(100vh-92px)]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="rounded-lg shadow-lg overflow-hidden p-1 flex flex-col hover:scale-105 border"
            whileHover={{ scale: 1.1 }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <img
              className="w-full h-24 object-cover rounded-md"
              src={project.image}
              alt={project.title}
            />
            <div className="p-3 flex flex-col gap-2 h-full text-white">
              <h3 className="text-sm font-semibold mb-1">
                {project.title}
              </h3>
              <p className="text-gray-200 text-xs" title={project.description}>
                {project.description}
              </p>
              <div className='flex justify-between mt-auto'>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline text-xs block"
                >
                  Watch Live
                </a>
                <a
                  href={project.git_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-500 hover:underline text-xs block"
                >
                  View Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
