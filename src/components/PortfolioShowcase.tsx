'use client';

import { useState } from 'react';
import Image from 'next/image';

const portfolioProjects = [
  {
    id: 1,
    title: 'Enterprise Design System',
    client: 'Fortune 500 Financial Services',
    year: '2023',
    category: 'Design Systems',
    description: 'Led the creation of a comprehensive design system serving 50+ product teams across 15 countries. Reduced design-to-development time by 60% and improved consistency across 200+ digital touchpoints.',
    challenges: [
      'Unifying 15 different product experiences',
      'Creating scalable component library',
      'Establishing design governance',
      'Cross-team adoption strategy'
    ],
    results: [
      '60% faster design-to-development',
      '90% reduction in design inconsistencies',
      '$2M annual savings in development costs',
      '98% designer adoption rate'
    ],
    technologies: ['Figma', 'Storybook', 'React', 'Design Tokens', 'Zeroheight'],
    image: '/images/projects/design-system.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'AI-Powered Investment Platform',
    client: 'Fintech Startup (Series B)',
    year: '2022',
    category: 'Product Design',
    description: 'Designed end-to-end UX for an AI-driven investment platform. Led user research, created information architecture, and designed intuitive interfaces for complex financial data visualization.',
    challenges: [
      'Simplifying complex financial data',
      'Building trust in AI recommendations',
      'Mobile-first responsive design',
      'Regulatory compliance requirements'
    ],
    results: [
      '40% increase in user engagement',
      '25% improvement in conversion rate',
      '4.8/5 App Store rating',
      '300K+ active users'
    ],
    technologies: ['Figma', 'Principle', 'InVision', 'Hotjar', 'Mixpanel'],
    image: '/images/projects/fintech-app.jpg'
  },
  {
    id: 3,
    title: 'Healthcare Provider Portal',
    client: 'Major Healthcare Network',
    year: '2021',
    category: 'UX Strategy',
    description: 'Redesigned provider portal serving 10,000+ healthcare professionals. Conducted extensive user research and usability testing to streamline clinical workflows and improve patient care delivery.',
    challenges: [
      'Complex regulatory environment',
      'Legacy system integration',
      'Multi-role user needs',
      'Critical workflow optimization'
    ],
    results: [
      '35% reduction in task completion time',
      '50% decrease in support tickets',
      '95% user satisfaction score',
      'HIPAA compliance achieved'
    ],
    technologies: ['Sketch', 'Axure', 'UserZoom', 'Optimal Workshop'],
    image: '/images/projects/healthcare-portal.jpg'
  },
  {
    id: 4,
    title: 'E-commerce Marketplace Redesign',
    client: 'Global Retail Platform',
    year: '2020',
    category: 'Product Strategy',
    description: 'Led complete UX transformation of B2B marketplace serving 100,000+ merchants. Implemented design thinking methodology and data-driven optimization to improve seller onboarding and buyer experience.',
    challenges: [
      'Multi-sided marketplace complexity',
      'International localization',
      'Mobile commerce optimization',
      'Conversion funnel optimization'
    ],
    results: [
      '45% improvement in seller onboarding',
      '30% increase in GMV',
      '20% reduction in cart abandonment',
      '15 new market expansions'
    ],
    technologies: ['Adobe XD', 'Maze', 'Amplitude', 'Optimizely'],
    image: '/images/projects/ecommerce-redesign.jpg'
  },
  {
    id: 5,
    title: 'Smart City IoT Dashboard',
    client: 'Municipal Government',
    year: '2019',
    category: 'Data Visualization',
    description: 'Designed comprehensive dashboard for city officials to monitor and manage IoT infrastructure. Created intuitive data visualizations for complex urban systems including traffic, energy, and public safety.',
    challenges: [
      'Real-time data visualization',
      'Complex stakeholder requirements',
      'Accessibility standards',
      'Crisis management workflows'
    ],
    results: [
      '50% faster incident response',
      '25% improvement in resource allocation',
      'WCAG 2.1 AA compliance',
      'Award: Government Innovation Design'
    ],
    technologies: ['D3.js', 'Tableau', 'Figma', 'React', 'WebGL'],
    image: '/images/projects/smart-city.jpg'
  },
  {
    id: 6,
    title: 'Global SaaS Platform Redesign',
    client: 'Enterprise Software Company',
    year: '2018',
    category: 'Product Design',
    description: 'Led UX transformation of enterprise SaaS platform used by 1M+ professionals worldwide. Focused on workflow optimization, information hierarchy, and cross-platform consistency.',
    challenges: [
      'Legacy user base resistance',
      'Complex feature set',
      'Multi-platform consistency',
      'Enterprise security requirements'
    ],
    results: [
      '40% increase in daily active users',
      '60% reduction in onboarding time',
      '35% improvement in feature adoption',
      '20% decrease in churn rate'
    ],
    technologies: ['Sketch', 'InVision', 'Framer', 'Jira', 'Confluence'],
    image: '/images/projects/saas-platform.jpg'
  }
];

const categories = ['All', 'Design Systems', 'Product Design', 'UX Strategy', 'Product Strategy', 'Data Visualization'];

export default function PortfolioShowcase() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(project => project.category === selectedCategory);

  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">Portfolio Showcase</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            20+ Years of
            <br />
            <span className="text-gradient">Design Excellence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From Fortune 500 enterprises to innovative startups, I&apos;ve led design initiatives
            that drive business growth and create exceptional user experiences.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'glass-effect neon-glow text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Project */}
        {selectedCategory === 'All' && (
          <div className="mb-20">
            <div className="glass-effect rounded-3xl p-8 interactive-card">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Featured Project
                    </span>
                    <span className="text-white/60">{portfolioProjects[0].year}</span>
                  </div>
                  <h3 className="text-4xl font-bold text-white design-heading">
                    {portfolioProjects[0].title}
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    {portfolioProjects[0].description}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        {portfolioProjects[0].results.slice(0, 2).map((result, index) => (
                          <li key={index} className="text-white/70 flex items-center">
                            <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {portfolioProjects[0].technologies.slice(0, 3).map((tech, index) => (
                          <span
                            key={index}
                            className="bg-white/10 text-white/80 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-video glass-effect rounded-2xl overflow-hidden neon-glow">
                    <Image
                      src={portfolioProjects[0].image}
                      alt={portfolioProjects[0].title}
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = `
                          <div class="w-full h-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                            <span class="text-white text-2xl font-bold">Design System Preview</span>
                          </div>
                        `;
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.slice(selectedCategory === 'All' ? 1 : 0).map((project, index) => (
            <div
              key={project.id}
              className="glass-effect rounded-2xl overflow-hidden interactive-card cursor-pointer"
              onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}
            >
              {/* Project Image */}
              <div className="aspect-video relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={250}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                        <span class="text-white text-lg font-bold">${project.category}</span>
                      </div>
                    `;
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-white/60 text-sm">{project.year}</span>
                </div>
                <p className="text-white/70 text-sm">{project.client}</p>
                <p className="text-white/80 leading-relaxed">
                  {project.description.substring(0, 120)}...
                </p>

                {selectedProject === project.id && (
                  <div className="space-y-4 animate-fadeIn">
                    <div>
                      <h4 className="text-white font-semibold mb-2">Key Challenges</h4>
                      <ul className="space-y-1">
                        {project.challenges.slice(0, 3).map((challenge, idx) => (
                          <li key={idx} className="text-white/70 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-2">Results</h4>
                      <ul className="space-y-1">
                        {project.results.slice(0, 2).map((result, idx) => (
                          <li key={idx} className="text-green-400 text-sm flex items-center">
                            <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <button className="text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors">
                  {selectedProject === project.id ? 'Show Less' : 'View Details'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4 design-heading">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how my 20+ years of design leadership can drive your next breakthrough product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="button-premium text-white px-8 py-4 rounded-2xl text-lg font-semibold"
              >
                Start a Project
              </a>
              <a
                href="#contact"
                className="glass-effect border-2 border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}