import React from 'react';
import { Code, Layout, Palette, Monitor, Zap, Award } from 'lucide-react';

interface SkillProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Skill: React.FC<SkillProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-blue-600 dark:text-blue-400 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'Creating responsive, interactive user interfaces with React, Next.js, and TypeScript.'
    },
    {
      icon: <Layout size={32} />,
      title: 'UI/UX Design',
      description: 'Designing intuitive, user-friendly interfaces with Figma and Adobe Creative Suite.'
    },
    {
      icon: <Palette size={32} />,
      title: 'Web Design',
      description: 'Crafting visually appealing websites with modern design principles and techniques.'
    },
    {
      icon: <Monitor size={32} />,
      title: 'Responsive Design',
      description: 'Ensuring applications work flawlessly across all devices and screen sizes.'
    },
    {
      icon: <Zap size={32} />,
      title: 'Performance Optimization',
      description: 'Optimizing websites for speed, accessibility, and search engine visibility.'
    },
    {
      icon: <Award size={32} />,
      title: 'Best Practices',
      description: 'Writing clean, maintainable code following industry standards and best practices.'
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm a passionate frontend developer and designer with over 5 years of experience creating beautiful digital experiences.
            My approach combines technical expertise with creative problem-solving to build websites that not only look great but also
            perform exceptionally.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Skill
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>

        <div className="mt-16 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 md:p-10">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">My Journey</h3>
              <p className="text-blue-600 dark:text-blue-400 font-medium">
                From design enthusiast to professional developer
              </p>
            </div>
            <div className="md:w-2/3 md:pl-10">
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-300 mt-2">
                    Bachelor's degree in Computer Science from University of Technology, graduated with honors in 2018.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Experience</h4>
                  <div className="mt-2 space-y-4">
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        Senior Frontend Developer at TechCorp (2021-Present)
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Leading the frontend development team for enterprise client projects.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-800 dark:text-gray-200">
                        UI Developer at DesignStudio (2018-2021)
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        Designed and developed user interfaces for startups and established businesses.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;