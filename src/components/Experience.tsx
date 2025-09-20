'use client';

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Data Analyst',
    company: 'Morae',
    duration: 'Jul 2022 - Sep 2024 • 2 yrs 2 mos',
    location: 'Bengaluru, Karnataka, India',
    type: 'Professional Experience',
    achievements: [
      'Analyzed complex datasets to identify patterns and insights using Python and SQL',
      'Automated repetitive processes reducing manual work by 30% through scripting',
      'Built Excel dashboards and data visualization tools for performance tracking',
      'Managed databases with 10,000+ records ensuring data integrity',
      'Collaborated in Agile environment with daily standups and sprint planning'
    ],
    technologies: ['Python', 'SQL', 'Excel', 'Data Analysis', 'APIs', 'Automation'],
    impact: '30% efficiency improvement',
    category: 'Data Analysis'
  },
  {
    id: 2,
    title: 'Operations Analyst',
    company: 'Sagility (formerly Hinduja Global Solutions)',
    duration: 'Jul 2021 - Jul 2022 • 1 yr',
    location: 'Bengaluru, Karnataka, India',
    type: 'Professional Experience',
    achievements: [
      'Processed high-volume data with 99% accuracy using automated tools',
      'Developed process improvements adopted team-wide increasing efficiency by 25%',
      'Worked with APIs and data integration tools for seamless data flow',
      'Created documentation and training materials for new team members',
      'Collaborated with cross-functional teams to resolve complex issues'
    ],
    technologies: ['Data Processing', 'APIs', 'Automation', 'Documentation', 'Training'],
    impact: '25% team efficiency boost',
    category: 'Operations'
  },
  {
    id: 3,
    title: 'E-Commerce Platform on AWS',
    company: 'University Project',
    duration: 'Current Academic Project',
    location: 'University of East London',
    type: 'Academic Project',
    achievements: [
      'Deployed full-stack application using EC2, RDS, S3 with auto-scaling',
      'Integrated load balancing to handle 1000+ concurrent users',
      'Achieved 99.9% uptime through proper AWS architecture',
      'Integrated Stripe API for secure payment processing',
      'Implemented CI/CD pipeline for automated deployment'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'AWS', 'Stripe'],
    impact: '1000+ concurrent users',
    category: 'Cloud Development'
  },
  {
    id: 4,
    title: 'ML Model for Prediction Analysis',
    company: 'University Project',
    duration: 'Current Academic Project',
    location: 'University of East London',
    type: 'Academic Project',
    achievements: [
      'Building cloud-based ML model using AWS SageMaker',
      'Achieved 85% accuracy in stock price prediction using LSTM',
      'Deployed model as REST API for real-time predictions',
      'Processing 10,000+ predictions daily with sub-second latency',
      'Implemented data pipeline for continuous model training'
    ],
    technologies: ['Python', 'TensorFlow', 'AWS SageMaker', 'Flask', 'APIs'],
    impact: '85% prediction accuracy',
    category: 'Machine Learning'
  },
  {
    id: 5,
    title: 'Serverless Analytics Dashboard',
    company: 'University Project',
    duration: 'Current Academic Project',
    location: 'University of East London',
    type: 'Academic Project',
    achievements: [
      'Developing serverless application using AWS Lambda and API Gateway',
      'Real-time data processing with WebSocket implementation',
      'Processing 1M+ events daily with DynamoDB integration',
      'Interactive dashboard with Chart.js visualizations',
      'Cost-effective serverless architecture design'
    ],
    technologies: ['Python', 'JavaScript', 'AWS Lambda', 'DynamoDB', 'Chart.js'],
    impact: '1M+ daily events',
    category: 'Cloud Development'
  },
  {
    id: 6,
    title: 'Computer Vision Quality Control',
    company: 'Personal Project',
    duration: 'Self-Directed Learning',
    location: 'London, UK',
    type: 'Personal Project',
    achievements: [
      'Built real-time quality control system using computer vision',
      'Achieved 92% accuracy in defect detection with CNN',
      'Deployed as containerized microservice on AWS ECS',
      'Optimized for edge computing with IoT sensor integration',
      'Created statistical analysis dashboard for quality metrics'
    ],
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Docker', 'AWS ECS'],
    impact: '92% defect detection accuracy',
    category: 'AI/Computer Vision'
  }
];

export default function Experience() {
  const [filter, setFilter] = useState('All');
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const categories = ['All', 'Professional Experience', 'Academic Project', 'Personal Project'];
  const filteredExperiences = filter === 'All'
    ? experiences
    : experiences.filter(exp => exp.type === filter);

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Professional Experience</h2>
          <p className="text-blue-300 text-xl font-semibold">Real Projects • Quantified Results • Immediate Impact</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-3xl p-8 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group cursor-pointer"
              onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                      exp.type === 'Professional Experience'
                        ? 'bg-green-600/20 text-green-300 border border-green-500/30'
                        : exp.type === 'Academic Project'
                        ? 'bg-purple-600/20 text-purple-300 border border-purple-500/30'
                        : 'bg-blue-600/20 text-blue-300 border border-blue-500/30'
                    }`}>
                      {exp.type}
                    </div>
                    <div className="text-2xl">
                      {exp.type === 'Professional Experience' ? '💼' :
                       exp.type === 'Academic Project' ? '🎓' : '🚀'}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {exp.title}
                  </h3>

                  <div className="text-xl text-blue-300 font-semibold mb-2">
                    {exp.company}
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 text-gray-400 mb-4">
                    <span className="flex items-center">
                      <span className="mr-2">📅</span>
                      {exp.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="mr-2">📍</span>
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 px-4 py-2 rounded-xl border border-green-500/30">
                      <span className="text-green-300 font-bold">{exp.impact}</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 px-4 py-2 rounded-xl border border-blue-500/30">
                      <span className="text-blue-300 font-medium">{exp.category}</span>
                    </div>
                  </div>

                  {selectedExp === exp.id && (
                    <div className="mt-6 space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                          <span className="mr-2">🎯</span>
                          Key Achievements:
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="text-gray-300 flex items-start">
                              <span className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:w-80">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                    <span className="mr-2">🛠️</span>
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-800/80 text-gray-300 text-sm px-3 py-2 rounded-lg border border-gray-600/50 hover:bg-gray-700/80 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-blue-400 hover:text-blue-300 font-medium transition-colors flex items-center justify-center w-full">
                      {selectedExp === exp.id ? '👆 Show Less' : '👇 View Details'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Contribute</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              With <strong className="text-blue-300">3+ years of proven results</strong> and
              <strong className="text-purple-300"> cutting-edge skills</strong>, I&apos;m ready to deliver immediate impact to your team.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl"
              >
                💼 Let&apos;s Work Together
              </a>
              <a
                href="https://linkedin.com/in/phalguna-cloud-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-blue-400 text-blue-300 px-12 py-5 rounded-xl text-xl font-bold hover:bg-blue-400 hover:text-white transform transition-all duration-300"
              >
                💼 View LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}