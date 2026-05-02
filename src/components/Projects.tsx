"use client";

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';

const categories = [
  '🎯 All Projects',
  '🤖 Agentic AI',
  '🧠 ML & Deep Learning',
  '⛓️ Blockchain',
  '🌐 Web Development',
];

const projects = [
  {
    title: 'DynamicBI - AI-Powered BI Platform',
    description: 'Architected an 11-stage LangGraph multi-agent pipeline for autonomous data ingestion and insight generation. Features specialized agents for CSV, Excel, SQL, and MongoDB.',
    tags: ['LangGraph', 'FastAPI', 'React', 'FAISS', 'Prophet'],
    categories: ['🤖 Agentic AI', '🌐 Web Development'],
    github: 'https://github.com/AkshithSai-24',
    image: '/project-dynamicbi.png',
  },
  {
    title: 'Data Dynomo 2.0 - Event Management',
    description: 'A comprehensive event management system designed for hackathons. Features include participant tracking, team management, real-time announcements, and an AI-powered query engine.',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'AI Query Engine'],
    categories: ['🌐 Web Development', '🤖 Agentic AI'],
    github: 'https://github.com/gouravkumar23/datadynomo2',
    image: '/project-datadynomo.png',
  },
  {
    title: 'Agentic RAG with MCP',
    description: 'An advanced Retrieval-Augmented Generation system utilizing the Model Context Protocol (MCP) for building autonomous agents with deep context awareness and tool-use capabilities.',
    tags: ['MCP', 'LangChain', 'Python', 'RAG', 'Agentic AI'],
    categories: ['🤖 Agentic AI'],
    github: 'https://github.com/AkshithSai-24/Agentic-RAG-MCP',
    image: '/project-rag.png',
  },
  {
    title: 'RAG Streamlit App',
    description: 'A Retrieval-Augmented Generation (RAG) application built with Streamlit, allowing users to chat with their PDF documents using LangChain and Google Gemini.',
    tags: ['Streamlit', 'LangChain', 'Google Gemini', 'FAISS', 'Python'],
    categories: ['🤖 Agentic AI'],
    github: 'https://github.com/AkshithSai-24/RAG-StreamLit-App',
    image: '/project-rag.png',
  },
  {
    title: 'Heart Disease Prediction',
    description: 'A machine learning project that predicts the likelihood of heart disease based on clinical parameters using various classification algorithms and data analysis.',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Machine Learning'],
    categories: ['🧠 ML & Deep Learning'],
    github: 'https://github.com/AkshithSai-24/HeartDiseasePrediction',
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'eduEase - Educational Management Platform',
    description: 'An integrated educational platform designed to streamline learning management and student engagement. Features a responsive dashboard, course tracking, and interactive learning modules.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS'],
    categories: ['🌐 Web Development'],
    github: 'https://github.com/gouravkumar23/eduEase',
    image: '/project-eduease.jpg',
  },
  {
    title: 'Handwritten Digit Recognition',
    description: 'Designed and trained a CNN from scratch in PyTorch on the MNIST dataset. Deployed as a Flask REST API for real-time inference.',
    tags: ['PyTorch', 'Flask', 'CNN', 'NumPy', 'MNIST'],
    categories: ['🧠 ML & Deep Learning'],
    github: 'https://github.com/AkshithSai-24',
    image: '/project-neural.png',
  },
  {
    title: 'Decentralized Banking DApp',
    description: 'Blockchain transaction platform on Ethereum for secure on-chain deposits and withdrawals. Features gas-optimized Solidity smart contracts.',
    tags: ['Solidity', 'Web3.js', 'Ethereum', 'MetaMask', 'Node.js'],
    categories: ['⛓️ Blockchain'],
    github: 'https://github.com/AkshithSai-24',
    image: '/project-hotel.png',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [showAll, setShowAll] = useState(false);
  const [activeCategory, setActiveCategory] = useState('🎯 All Projects');

  const filteredProjects = projects.filter(project =>
    activeCategory === '🎯 All Projects' || project.categories.includes(activeCategory)
  );

  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in autonomous AI agents, deep learning, and decentralized systems.
          </p>
        </motion.div>

        {/* Category Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105'
                : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex flex-col bg-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-border group min-h-[500px]"
              style={{ boxShadow: '0 8px 32px 0 hsl(var(--card) / 0.16)' }}
            >
              <div className="relative w-full aspect-[4/2.2] bg-secondary overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 px-6 pt-6 pb-7">
                <h3 className="font-display font-bold text-xl lg:text-2xl mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-normal line-clamp-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={18} />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        {filteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mt-16"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-secondary"
            >
              {showAll ? 'Show Less' : 'View All Projects'}
              <ChevronRight size={18} className={`transition-transform ${showAll ? 'rotate-90' : ''}`} />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};