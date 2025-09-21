'use client';

import { useState } from 'react';

const portfolioProjects = [
  {
    id: 1,
    title: 'E-Commerce Platform on AWS',
    type: 'Academic Project',
    year: '2024',
    category: 'Cloud Development',
    description: 'Full-stack e-commerce application deployed on AWS with auto-scaling capabilities. Built using React frontend, Node.js backend, PostgreSQL database, and containerized with Docker.',
    challenges: [
      'Implementing auto-scaling for 1000+ concurrent users',
      'Integrating Stripe payment processing',
      'Setting up CI/CD pipeline with AWS',
      'Optimizing database performance'
    ],
    results: [
      '99.9% uptime achieved',
      '1000+ concurrent users supported',
      'Sub-3s page load times',
      'Secure payment processing'
    ],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS EC2', 'AWS RDS', 'Docker', 'Stripe API'],
    demo: 'https://github.com/phalguna-avalgunta/ecommerce-aws',
    featured: true
  },
  {
    id: 2,
    title: 'ML Stock Price Prediction Model',
    type: 'Academic Project',
    year: '2024',
    category: 'Machine Learning',
    description: 'Deep learning model using LSTM networks to predict stock prices. Deployed as REST API on AWS SageMaker with real-time prediction capabilities.',
    challenges: [
      'Handling time-series data preprocessing',
      'Optimizing LSTM architecture',
      'Deploying model to AWS SageMaker',
      'Creating real-time prediction API'
    ],
    results: [
      '85% prediction accuracy achieved',
      '10,000+ predictions daily',
      'Sub-second API response time',
      'Scalable cloud deployment'
    ],
    technologies: ['Python', 'TensorFlow', 'LSTM', 'AWS SageMaker', 'Flask', 'Pandas', 'NumPy'],
    demo: 'https://github.com/phalguna-avalgunta/stock-prediction-ml'
  },
  {
    id: 3,
    title: 'Serverless Analytics Dashboard',
    type: 'Academic Project',
    year: '2024',
    category: 'Cloud Development',
    description: 'Real-time analytics dashboard using serverless architecture. Built with AWS Lambda, API Gateway, and DynamoDB for processing 1M+ events daily.',
    challenges: [
      'Designing serverless architecture',
      'Real-time data processing',
      'Cost optimization',
      'Interactive data visualizations'
    ],
    results: [
      '1M+ events processed daily',
      '80% cost reduction vs traditional',
      'Real-time dashboard updates',
      'Auto-scaling capabilities'
    ],
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'JavaScript', 'Chart.js', 'WebSocket'],
    demo: 'https://github.com/phalguna-avalgunta/serverless-analytics'
  },
  {
    id: 4,
    title: 'Computer Vision Quality Control',
    type: 'Personal Project',
    year: '2024',
    category: 'AI/Computer Vision',
    description: 'Real-time quality control system using computer vision for defect detection. Containerized and deployed on AWS ECS with IoT sensor integration.',
    challenges: [
      'Training CNN for defect detection',
      'Real-time image processing',
      'Edge computing optimization',
      'IoT sensor integration'
    ],
    results: [
      '92% defect detection accuracy',
      'Real-time processing capability',
      'Reduced manual inspection by 70%',
      'Edge deployment ready'
    ],
    technologies: ['Python', 'OpenCV', 'PyTorch', 'Docker', 'AWS ECS', 'IoT Core'],
    demo: 'https://github.com/phalguna-avalgunta/cv-quality-control'
  },
  {
    id: 5,
    title: 'Data Analysis Automation Pipeline',
    type: 'Professional Experience',
    year: '2023',
    category: 'Data Analysis',
    description: 'Automated data analysis pipeline at Morae, reducing manual processing time by 30%. Built using Python, SQL, and integrated with existing business systems.',
    challenges: [
      'Legacy system integration',
      'Complex data transformation',
      'Error handling and validation',
      'Performance optimization'
    ],
    results: [
      '30% reduction in manual work',
      '99% data accuracy maintained',
      '10,000+ records processed daily',
      'Zero-downtime deployment'
    ],
    technologies: ['Python', 'SQL', 'Pandas', 'Excel API', 'Automation Scripts'],
    demo: 'Proprietary - Morae Internal System'
  },
  {
    id: 6,
    title: 'Process Optimization System',
    type: 'Professional Experience',
    year: '2022',
    category: 'Operations',
    description: 'Developed process improvement system at Sagility, increasing team efficiency by 25%. Implemented API integrations and workflow automation.',
    challenges: [
      'Complex workflow analysis',
      'Multi-system integration',
      'User training and adoption',
      'Performance monitoring'
    ],
    results: [
      '25% efficiency improvement',
      '99% accuracy maintained',
      '50% reduction in processing time',
      'Team-wide adoption achieved'
    ],
    technologies: ['Python', 'APIs', 'Database Management', 'Process Automation'],
    demo: 'Proprietary - Sagility Internal System'
  }
];

const categories = ['All', 'Cloud Development', 'Machine Learning', 'AI/Computer Vision', 'Data Analysis', 'Operations'];

export default function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="py-32 px-6 relative neural-grid">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slideUp">
          <div className="terminal-glass px-6 py-3 rounded-lg mb-8 inline-block">
            <span className="text-green-400 mono-text">$ find ./projects -type f -name &quot;*.md&quot;</span>
          </div>
          <h2 className="heading-lg text-white mb-6 design-heading">
            <span className="mono-text text-green-400"># </span>Project
            <br />
            <span className="ai-text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mono-text">
            Real-world projects spanning cloud development, machine learning,<br/>
            and data analysis • 3+ years of hands-on experience
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 md:px-6 py-2 md:py-3 rounded-lg font-semibold transition-all duration-300 mono-text text-xs md:text-sm ${
                selectedCategory === category
                  ? 'terminal-glass ai-glow text-green-400'
                  : 'text-white/60 hover:text-white terminal-border'
              }`}
            >
              ./{category.toLowerCase().replace(' ', '_')}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {selectedCategory === 'All' && (
          <div className="mb-20">
            <div className="terminal-glass rounded-lg p-6 md:p-8 neural-card">
              <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <span className="bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 px-3 py-1 rounded-lg text-xs font-bold border border-green-400/30 mono-text">
                      featured_project
                    </span>
                    <span className="text-white/60 mono-text text-sm">{portfolioProjects[0].year}</span>
                    <span className="text-orange-400 mono-text text-sm">{portfolioProjects[0].type}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white design-heading">
                    {portfolioProjects[0].title}
                  </h3>
                  <p className="text-white/80 text-base leading-relaxed">
                    {portfolioProjects[0].description}
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3 mono-text text-sm">Key Results:</h4>
                      <ul className="space-y-2">
                        {portfolioProjects[0].results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-white/70 flex items-center text-sm">
                            <span className="text-green-400 mr-3 mono-text">▸</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3 mono-text text-sm">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {portfolioProjects[0].technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="terminal-glass text-white/80 px-2 py-1 rounded-lg text-xs mono-text"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={portfolioProjects[0].demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ai-button text-white px-4 py-2 rounded-lg font-semibold mono-text text-sm"
                    >
                      $ view --demo
                    </a>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video terminal-glass rounded-lg overflow-hidden ai-glow">
                    <div className="w-full h-full bg-gradient-to-br from-green-600/20 to-blue-600/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl md:text-5xl mb-4">☁️</div>
                        <span className="text-white text-lg md:text-xl font-bold mono-text">AWS Cloud Project</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.slice(selectedCategory === 'All' ? 1 : 0).map((project) => (
            <div
              key={project.id}
              className="terminal-glass rounded-lg overflow-hidden neural-card cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Preview */}
              <div className="aspect-video relative overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-cyan-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-3xl mb-2">
                      {project.category === 'Cloud Development' ? '☁️' :
                       project.category === 'Machine Learning' ? '🤖' :
                       project.category === 'AI/Computer Vision' ? '👁️' :
                       project.category === 'Data Analysis' ? '📊' : '⚙️'}
                    </div>
                    <span className="text-white text-sm font-bold mono-text">{project.category}</span>
                  </div>
                </div>
                <div className="absolute top-3 left-3">
                  <span className="terminal-glass text-white px-2 py-1 rounded-lg text-xs font-semibold mono-text">
                    {project.type}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-4 md:p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg md:text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-white/60 text-sm mono-text">{project.year}</span>
                </div>
                <p className="text-white/80 leading-relaxed text-sm">
                  {project.description.substring(0, 100)}...
                </p>

                {selectedProject === project.id && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="text-white font-semibold mb-2 mono-text text-sm">$ cat challenges.log</h4>
                      <ul className="space-y-1">
                        {project.challenges.slice(0, 3).map((challenge, idx) => (
                          <li key={idx} className="text-white/70 text-sm flex items-center">
                            <span className="text-orange-400 mr-2 mono-text">▸</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2 mono-text text-sm">$ cat results.log</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-green-400 text-sm flex items-center">
                            <span className="text-green-400 mr-2 mono-text">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {project.demo !== 'Proprietary - Morae Internal System' && project.demo !== 'Proprietary - Sagility Internal System' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ai-button text-white px-4 py-2 rounded-lg font-semibold mono-text text-xs inline-block"
                      >
                        $ git show --demo
                      </a>
                    )}
                  </div>
                )}

                <button className="text-green-400 hover:text-green-300 font-medium text-sm transition-colors mono-text">
                  {selectedProject === project.id ? '[-] collapse' : '[+] expand'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="terminal-glass rounded-lg p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 design-heading">
              <span className="mono-text text-green-400">$ </span>Ready to Collaborate?
            </h3>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto mono-text">
              Let&apos;s build something amazing with
              <span className="ai-text-gradient"> Python</span> •
              <span className="ai-text-gradient"> AWS</span> •
              <span className="ai-text-gradient"> Machine Learning</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="ai-button text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-lg font-semibold mono-text"
              >
                $ start --project
              </a>
              <a
                href="#contact"
                className="terminal-border text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-lg font-semibold hover:bg-white/10 transition-all duration-300 mono-text"
              >
                $ schedule --call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}