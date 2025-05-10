import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  demoLink: string;
  githubLink: string;
  tags: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'Web Development',
    description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product search, cart functionality, and secure checkout.',
    image: 'https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: '#',
    githubLink: '#',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe API']
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    description: 'A comprehensive financial dashboard designed for personal finance tracking. Includes expense categorization, budget planning, and interactive data visualization.',
    image: 'https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: '#',
    githubLink: '#',
    tags: ['React', 'TypeScript', 'Chart.js', 'Tailwind CSS']
  },
  {
    id: 3,
    title: 'Task Management App',
    category: 'Mobile App',
    description: 'A productivity application for task management and team collaboration. Features include drag-and-drop task organization, deadline tracking, and team sharing.',
    image: 'https://images.pexels.com/photos/6804581/pexels-photo-6804581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: '#',
    githubLink: '#',
    tags: ['React Native', 'Firebase', 'Redux']
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Web Design',
    description: 'A beautifully designed portfolio website for a photographer. Features include image galleries, contact form, and blog integration.',
    image: 'https://images.pexels.com/photos/5632397/pexels-photo-5632397.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: '#',
    githubLink: '#',
    tags: ['HTML', 'CSS', 'JavaScript', 'Netlify']
  },
  {
    id: 5,
    title: 'Weather Application',
    category: 'Web Development',
    description: 'A weather forecasting application that provides real-time weather updates and forecasts for any location worldwide.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: '#',
    githubLink: '#',
    tags: ['React', 'Weather API', 'Geolocation']
  },
  {
    id: 6,
    title: 'Recipe Finder',
    category: 'Mobile App',
    description: 'A recipe discovery application that allows users to find recipes based on available ingredients, dietary preferences, and meal types.',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    demoLink: '#',
    githubLink: '#',
    tags: ['React', 'API Integration', 'Responsive Design']
  }
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Web Design', 'Mobile App'];

const PortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Explore my latest projects and see my skills in action. Each project represents a unique challenge and solution.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-opacity-10 transition-all flex items-center justify-center opacity-0 hover:opacity-100">
                  <button
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lg transform -translate-y-4 hover:translate-y-0 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }}
                  >
                    View Details
                  </button>
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{project.category}</span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-2 mb-3">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70" onClick={() => setSelectedProject(null)}>
          <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative h-64 md:h-80 overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 dark:bg-gray-800/80 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{selectedProject.category}</span>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{selectedProject.title}</h3>
                </div>
                <div className="flex gap-3">
                  <a
                    href={selectedProject.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} /> Demo
                  </a>
                  <a
                    href={selectedProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-lg transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-6">{selectedProject.description}</p>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-sm font-medium bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;