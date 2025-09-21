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
    <section id="experience" className="py-32 px-6 relative data-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="terminal-glass px-6 py-3 rounded-lg mb-8 inline-block">
            <span className="text-green-400 mono-text">$ grep -r &quot;experience&quot; ./career/</span>
          </div>
          <h2 className="heading-lg text-white mb-6 design-heading">
            <span className="mono-text text-green-400"># </span>Professional
            <br />
            <span className="ai-text-gradient">Experience & Projects</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mono-text">
            3+ years in data analysis • Current MSc Computer Science @ UEL<br/>
            Building production ML models • AWS cloud infrastructure • Ready to deploy
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 mono-text text-xs md:text-sm ${
                filter === category
                  ? 'terminal-glass ai-glow text-green-400'
                  : 'text-white/60 hover:text-white terminal-border'
              }`}
            >
              ./{category.toLowerCase().replace(' ', '_')}
            </button>
          ))}
        </div>

        <div className="space-y-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="terminal-glass rounded-lg p-6 md:p-8 neural-card cursor-pointer"
              onClick={() => setSelectedExp(selectedExp === exp.id ? null : exp.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <div className={`px-3 py-1 rounded-lg mono-text text-xs font-bold ${
                      exp.type === 'Professional Experience'
                        ? 'bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 border border-green-400/30'
                        : exp.type === 'Academic Project'
                        ? 'bg-gradient-to-r from-orange-500/20 to-purple-500/20 text-orange-400 border border-orange-400/30'
                        : 'bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 border border-purple-400/30'
                    }`}>
                      {exp.type.toLowerCase().replace(' ', '_')}
                    </div>
                    <div className="text-xl">
                      {exp.type === 'Professional Experience' ? '💼' :
                       exp.type === 'Academic Project' ? '🎓' : '🚀'}
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 design-heading">
                    {exp.title}
                  </h3>

                  <div className="text-lg ai-text-gradient font-semibold mb-2">
                    {exp.company}
                  </div>

                  <div className="flex flex-col md:flex-row gap-2 md:gap-4 text-white/60 mb-4 mono-text text-xs md:text-sm">
                    <span className="flex items-center">
                      <span className="text-green-400 mr-2">$</span>
                      {exp.duration}
                    </span>
                    <span className="flex items-center">
                      <span className="text-orange-400 mr-2">@</span>
                      {exp.location}
                    </span>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-6">
                    <div className="terminal-glass px-3 py-1 rounded-lg">
                      <span className="ai-text-gradient font-bold mono-text text-xs">{exp.impact}</span>
                    </div>
                    <div className="terminal-glass px-3 py-1 rounded-lg">
                      <span className="text-white font-medium mono-text text-xs">{exp.category}</span>
                    </div>
                  </div>

                  {selectedExp === exp.id && (
                    <div className="mt-6 space-y-6 animate-fadeIn">
                      <div>
                        <h4 className="text-lg font-bold text-white mb-4 flex items-center mono-text">
                          <span className="text-green-400 mr-2">$</span>
                          cat achievements.log
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, index) => (
                            <li key={index} className="text-white/80 flex items-start text-sm">
                              <span className="text-green-400 mr-3 flex-shrink-0 mono-text">▸</span>
                              <span className="leading-relaxed">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:w-80">
                  <h4 className="text-sm md:text-base font-bold text-white mb-4 flex items-center mono-text">
                    <span className="text-orange-400 mr-2">$</span>
                    tech_stack.json
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="terminal-glass text-white/80 text-xs px-2 py-1 rounded-lg hover:text-green-400 transition-colors mono-text"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <button className="text-green-400 hover:text-green-300 font-medium transition-colors flex items-center justify-center w-full mono-text text-sm">
                      {selectedExp === exp.id ? '[-] collapse' : '[+] expand'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="terminal-glass rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 design-heading">
              <span className="mono-text text-green-400">$ </span>Ready for Production Deployment?
            </h3>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto mono-text">
              <span className="ai-text-gradient">3+ years experience</span> •
              <span className="ai-text-gradient"> AWS certified path</span> •
              <span className="ai-text-gradient"> MSc Computer Science</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="ai-button text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold mono-text"
              >
                $ contact --immediate
              </a>
              <a
                href="#contact"
                className="terminal-border text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold hover:bg-white/10 transition-all duration-300 mono-text"
              >
                $ view --portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}