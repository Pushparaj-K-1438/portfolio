import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
      className="p-6"
    >
      <h2 className="text-3xl md:text-5xl font-medium">About Me</h2>
      <p className="mt-4">This is the About page content.</p>
    </motion.div>
  );
};

export default About;
