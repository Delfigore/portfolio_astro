import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A fully-featured e-commerce platform with user authentication, product management, and payment integration.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    liveDemo: 'https://example-ecommerce.com',
    githubRepo: 'https://github.com/yourusername/ecommerce-platform',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates and team features.',
    technologies: ['React', 'Firebase', 'Material-UI', 'Redux'],
    liveDemo: 'https://example-taskapp.com',
    githubRepo: 'https://github.com/yourusername/task-management-app',
  },
  {
    id: 3,
    title: 'Weather Forecast Dashboard',
    description: 'A responsive weather forecast dashboard that provides real-time weather information for multiple locations.',
    technologies: ['Vue.js', 'Vuex', 'OpenWeatherMap API', 'Chart.js'],
    liveDemo: 'https://example-weather.com',
    githubRepo: 'https://github.com/yourusername/weather-dashboard',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 dark:text-white"
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2 dark:text-white">Technologies used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 px-2 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-blue-600 transition duration-300"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-900 transition duration-300"
                  >
                    GitHub Repo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;