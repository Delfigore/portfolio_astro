import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const Hero: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();

  const animationProps = shouldReduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: -20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 },
      };

  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 dark:from-blue-700 dark:to-purple-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          {...animationProps}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Delfigore
        </motion.h1>
        <motion.p
          {...animationProps}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8"
        >
          A passionate full-stack developer specializing in modern web technologies
        </motion.p>
        <motion.p
          {...animationProps}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-xl mb-8"
        >
          With expertise in React, Node.js, and cloud technologies, I create scalable and efficient web applications
        </motion.p>
        <motion.div
          {...(shouldReduceMotion ? {} : {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: 0.6 },
          })}
          className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#projects"
            className="bg-white text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md hover:shadow-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-500 transition duration-300 shadow-md hover:shadow-lg"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;