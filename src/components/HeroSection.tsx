import React from 'react';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-blue-950"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12 mb-12 lg:mb-0">
            <div className="animate-fade-in-up">
              <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                Hello, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                John Doe
              </h1>
              <h2 className="text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-300 mb-6">
                Frontend Developer & UI Designer
              </h2>
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-8 max-w-2xl">
                I craft beautiful, functional user interfaces with a focus on user experience and pixel-perfect design.
                Let's build something amazing together.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Get in Touch
                </a>
                <a
                  href="#portfolio"
                  className="px-6 py-3 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 font-medium rounded-lg border border-blue-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-gray-600 transition-colors shadow-sm hover:shadow-md"
                >
                  View My Work
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-80 dark:opacity-40 absolute -top-6 -left-6 blur-3xl"></div>
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 opacity-80 dark:opacity-40 absolute -bottom-6 -right-6 blur-3xl"></div>
              <div className="rounded-2xl overflow-hidden border-8 border-white dark:border-gray-800 shadow-2xl relative z-10">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="John Doe"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={28} />
      </a>
    </section>
  );
};

export default HeroSection;