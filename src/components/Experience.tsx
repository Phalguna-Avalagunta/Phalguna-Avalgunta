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
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">Career Journey</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Professional
            <br />
            <span className="text-gradient">Experience & Projects</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Real-world experience in data analysis and cutting-edge academic projects in AI, cloud computing,
            and machine learning. Ready to deliver immediate impact.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'glass-effect neon-glow text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
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
              className="glass-effect rounded-3xl p-8 interactive-card cursor-pointer"
              onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`px-4 py-2 rounded-full text-sm font-bold ${
                      exp.type === 'Design Leadership'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                        : exp.type === 'Senior Design'
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
                        : 'bg-gradient-to-r from-green-500 to-blue-500 text-white'
                    }`}>
                      {exp.type}
                    </div>
                    <div className="text-2xl">
                      {exp.type === 'Design Leadership' ? '👑' :
                       exp.type === 'Senior Design' ? '🎯' :
                       exp.type === 'Product Strategy' ? '📊' :
                       exp.type === 'Government Design' ? '🏛️' : '🚀'}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 design-heading">
                    {exp.title}
                  </h3>

                  <div className="text-xl text-gradient font-semibold mb-2">
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
                    <div className="glass-effect px-4 py-2 rounded-xl">
                      <span className="text-gradient font-bold">{exp.impact}</span>
                    </div>
                    <div className="glass-effect px-4 py-2 rounded-xl">
                      <span className="text-white font-medium">{exp.category}</span>
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
                            <li key={index} className="text-white/80 flex items-start">
                              <span className="w-2 h-2 bg-purple-400 rounded-full mr-4 mt-2 flex-shrink-0"></span>
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
                        className="bg-white/10 text-white/80 text-sm px-3 py-2 rounded-lg hover:bg-white/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-purple-400 hover:text-purple-300 font-medium transition-colors flex items-center justify-center w-full">
                      {selectedExp === exp.id ? 'Show Less' : 'View Details'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 design-heading">
              Ready to Lead Your Next Design Initiative?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              With <strong className="text-gradient">20+ years of proven design leadership</strong> and
              <strong className="text-gradient"> transformative results</strong>, I&apos;m ready to drive your design strategy forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="button-premium text-white px-8 py-4 rounded-2xl text-lg font-semibold"
              >
                Start a Conversation
              </a>
              <a
                href="#contact"
                className="glass-effect border-2 border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                View Full Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}