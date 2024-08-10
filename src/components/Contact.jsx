import { motion } from 'framer-motion';

const ContactMe = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-white p-6 z-40"
    >
      <h2 className="text-4xl font-semibold mb-4">Contact Me</h2>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="p-2 bg-gray-800 text-white rounded-md" />
        <input type="email" placeholder="Your Email" className="p-2 bg-gray-800 text-white rounded-md" />
        <textarea placeholder="Your Message" className="p-2 bg-gray-800 text-white rounded-md h-32"></textarea>
        <button type="submit" className="bg-blue-600 p-2 rounded-md hover:bg-blue-700 transition-all">
          Send Message
        </button>
      </form>
    </motion.section>
  );
};

export default ContactMe;
