'use client';

import { useState } from 'react';

const experiences = [
  {
    id: 1,
    title: 'Senior Principal Designer',
    company: 'Fortune 500 Financial Services',
    duration: '2020 - Present • 4+ years',
    location: 'Global Remote',
    type: 'Senior Leadership',
    achievements: [
      'Led design system strategy across 50+ product teams serving 15 countries',
      'Reduced design-to-development time by 60% through standardization',
      'Established design operations framework reducing design debt by 70%',
      'Mentored 20+ designers across multiple product squads',
      'Achieved 98% designer adoption rate for new design system'
    ],
    technologies: ['Figma', 'Design Systems', 'Storybook', 'Design Tokens', 'Zeroheight', 'User Research'],
    impact: '$2M annual cost savings',
    category: 'Design Leadership'
  },
  {
    id: 2,
    title: 'Head of UX Design',
    company: 'Series B Fintech Startup',
    duration: '2017 - 2020 • 3 years',
    location: 'San Francisco, CA',
    type: 'Design Leadership',
    achievements: [
      'Built design team from ground up, scaling to 12 designers',
      'Led product design for AI-powered investment platform',
      'Grew user base from 50K to 300K+ active users through UX optimization',
      'Established design culture and scalable design processes',
      'Achieved 4.8/5 App Store rating through user-centered design'
    ],
    technologies: ['Figma', 'Principle', 'InVision', 'Hotjar', 'Mixpanel', 'User Testing'],
    impact: '500% user growth',
    category: 'Product Design'
  },
  {
    id: 3,
    title: 'Lead Product Designer',
    company: 'Healthcare Technology',
    duration: '2014 - 2017 • 3 years',
    location: 'Boston, MA',
    type: 'Senior Design',
    achievements: [
      'Redesigned provider portal serving 10,000+ healthcare professionals',
      'Reduced task completion time by 35% through workflow optimization',
      'Led user research initiatives including 50+ user interviews',
      'Achieved HIPAA compliance while improving user experience',
      'Decreased support tickets by 50% through intuitive design'
    ],
    technologies: ['Sketch', 'Axure', 'UserZoom', 'Optimal Workshop', 'Usability Testing'],
    impact: '35% efficiency improvement',
    category: 'UX Strategy'
  },
  {
    id: 4,
    title: 'Senior UX Designer',
    company: 'Global E-commerce Platform',
    duration: '2012 - 2014 • 2 years',
    location: 'Seattle, WA',
    type: 'Senior Design',
    achievements: [
      'Led UX transformation of B2B marketplace serving 100K+ merchants',
      'Improved seller onboarding completion rate by 45%',
      'Increased GMV by 30% through conversion optimization',
      'Reduced cart abandonment by 20% through checkout redesign',
      'Supported expansion into 15 new international markets'
    ],
    technologies: ['Adobe XD', 'Maze', 'Amplitude', 'Optimizely', 'A/B Testing'],
    impact: '30% GMV increase',
    category: 'Product Strategy'
  },
  {
    id: 5,
    title: 'UX Designer',
    company: 'Municipal Government Tech',
    duration: '2010 - 2012 • 2 years',
    location: 'Austin, TX',
    type: 'Government Design',
    achievements: [
      'Designed smart city IoT dashboard for municipal officials',
      'Created accessible interfaces meeting WCAG 2.1 AA standards',
      'Improved incident response time by 50% through data visualization',
      'Won Government Innovation Design Award for civic impact',
      'Enhanced resource allocation efficiency by 25%'
    ],
    technologies: ['D3.js', 'Tableau', 'Figma', 'React', 'Accessibility Testing'],
    impact: '50% faster response',
    category: 'Data Visualization'
  },
  {
    id: 6,
    title: 'Product Designer',
    company: 'Enterprise Software Company',
    duration: '2008 - 2010 • 2 years',
    location: 'Austin, TX',
    type: 'Early Career',
    achievements: [
      'Led UX transformation of SaaS platform used by 1M+ professionals',
      'Increased daily active users by 40% through redesign',
      'Reduced onboarding time by 60% with streamlined flows',
      'Improved feature adoption by 35% through better information architecture',
      'Decreased churn rate by 20% with enhanced user experience'
    ],
    technologies: ['Sketch', 'InVision', 'Framer', 'Jira', 'Confluence'],
    impact: '40% user growth',
    category: 'Enterprise UX'
  }
];

export default function Experience() {
  const [filter, setFilter] = useState('All');
  const [selectedExp, setSelectedExp] = useState<number | null>(null);

  const categories = ['All', 'Design Leadership', 'Senior Design', 'Product Strategy', 'Government Design', 'Early Career'];
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
            20+ Years of
            <br />
            <span className="text-gradient">Design Excellence</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            From startup environments to Fortune 500 enterprises, leading transformative design initiatives
            that drive business growth and create exceptional user experiences.
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