'use client';

import { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'AI-Powered Customer Analytics Platform',
    description: 'Developed a machine learning platform that analyzes customer behavior patterns using advanced AI algorithms, helping businesses increase conversion rates by 35%.',
    technologies: ['Python', 'TensorFlow', 'AWS', 'React', 'PostgreSQL'],
    category: 'AI/ML',
    features: [
      'Real-time customer behavior tracking',
      'Predictive analytics dashboard',
      'Automated recommendation engine',
      'Cloud-native architecture'
    ]
  },
  {
    id: 2,
    title: 'Cloud Infrastructure Automation',
    description: 'Built a comprehensive DevOps solution for automating cloud infrastructure deployment and management across multiple cloud providers.',
    technologies: ['Terraform', 'Kubernetes', 'Docker', 'AWS', 'Azure'],
    category: 'Cloud',
    features: [
      'Multi-cloud deployment automation',
      'Container orchestration',
      'Infrastructure as Code (IaC)',
      'Monitoring and alerting system'
    ]
  },
  {
    id: 3,
    title: 'Intelligent Document Processing System',
    description: 'Created an NLP-powered system that automatically extracts and processes information from unstructured documents with 95% accuracy.',
    technologies: ['Python', 'spaCy', 'OpenCV', 'FastAPI', 'MongoDB'],
    category: 'AI/ML',
    features: [
      'OCR and text extraction',
      'Entity recognition and classification',
      'Automated data validation',
      'RESTful API integration'
    ]
  },
  {
    id: 4,
    title: 'Scalable Microservices Architecture',
    description: 'Designed and implemented a cloud-native microservices architecture that handles millions of requests daily with 99.9% uptime.',
    technologies: ['Node.js', 'Kubernetes', 'Redis', 'GraphQL', 'AWS'],
    category: 'Cloud',
    features: [
      'Event-driven architecture',
      'Auto-scaling capabilities',
      'Circuit breaker pattern',
      'Distributed caching'
    ]
  },
  {
    id: 5,
    title: 'Computer Vision Quality Control',
    description: 'Developed a real-time quality control system using computer vision to detect defects in manufacturing processes.',
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Edge Computing', 'IoT'],
    category: 'AI/ML',
    features: [
      'Real-time defect detection',
      'Edge computing optimization',
      'IoT sensor integration',
      'Statistical analysis dashboard'
    ]
  },
  {
    id: 6,
    title: 'Data Pipeline Orchestration Platform',
    description: 'Built a robust data pipeline platform that processes and analyzes large-scale datasets for business intelligence.',
    technologies: ['Apache Airflow', 'Spark', 'Kafka', 'Python', 'Elasticsearch'],
    category: 'Data',
    features: [
      'ETL/ELT pipeline automation',
      'Real-time stream processing',
      'Data quality monitoring',
      'Interactive analytics dashboard'
    ]
  }
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const categories = ['All', 'AI/ML', 'Cloud', 'Data'];
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-purple-300 text-lg">Showcasing my expertise in AI, Cloud, and Data Engineering</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl p-6 backdrop-blur-sm border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              <div className="mb-4">
                <span className="inline-block bg-purple-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {selectedProject === project.id && (
                <div className="mt-6 space-y-4 animate-fadeIn">
                  <div>
                    <h4 className="text-purple-300 font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, index) => (
                        <li key={index} className="text-gray-300 text-sm flex items-center">
                          <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              <div className="mt-6">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-4 flex justify-between items-center">
                <button className="text-purple-400 text-sm hover:text-purple-300 transition-colors">
                  {selectedProject === project.id ? 'Show Less' : 'Learn More'}
                </button>
                <div className="flex space-x-2">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-3 py-1 rounded transition-colors">
                    Demo
                  </button>
                  <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white text-xs px-3 py-1 rounded transition-colors">
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6">Interested in seeing more of my work?</p>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:scale-105 transform transition-all duration-300 inline-flex items-center space-x-2"
          >
            <span>View GitHub Profile</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}