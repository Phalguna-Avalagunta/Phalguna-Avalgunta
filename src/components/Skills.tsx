'use client';

import { useState } from 'react';

const skillCategories = {
  'ai_ml_stack': [
    { name: 'Python', level: 90, years: 3 },
    { name: 'TensorFlow', level: 85, years: 2 },
    { name: 'PyTorch', level: 80, years: 1 },
    { name: 'Machine Learning', level: 85, years: 2 },
    { name: 'Deep Learning', level: 78, years: 1 },
    { name: 'Computer Vision', level: 75, years: 1 }
  ],
  'cloud_devops': [
    { name: 'AWS', level: 85, years: 2 },
    { name: 'Docker', level: 80, years: 2 },
    { name: 'Kubernetes', level: 70, years: 1 },
    { name: 'Lambda Functions', level: 85, years: 1 },
    { name: 'EC2 & S3', level: 88, years: 2 },
    { name: 'SageMaker', level: 75, years: 1 }
  ],
  'programming': [
    { name: 'Python', level: 90, years: 3 },
    { name: 'JavaScript', level: 82, years: 2 },
    { name: 'React', level: 80, years: 2 },
    { name: 'Node.js', level: 75, years: 1 },
    { name: 'SQL', level: 88, years: 3 },
    { name: 'Git', level: 85, years: 3 }
  ],
  'data_analytics': [
    { name: 'Data Analysis', level: 92, years: 3 },
    { name: 'Data Visualization', level: 85, years: 2 },
    { name: 'SQL', level: 88, years: 3 },
    { name: 'Excel/Sheets', level: 95, years: 3 },
    { name: 'PostgreSQL', level: 80, years: 2 },
    { name: 'APIs & ETL', level: 82, years: 2 }
  ]
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ai_ml_stack');

  return (
    <section id="skills" className="py-32 px-6 relative neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="terminal-glass px-6 py-3 rounded-lg mb-8 inline-block">
            <span className="text-green-400 mono-text">$ ls -la /skills/</span>
          </div>
          <h2 className="heading-lg text-white mb-6 design-heading">
            <span className="mono-text text-green-400"># </span>Technical
            <br />
            <span className="ai-text-gradient">Stack & Proficiencies</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mono-text">
            Real-world experience with production systems, cloud infrastructure,<br/>
            and machine learning deployment. Immediate impact capabilities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 mono-text text-sm ${
                activeCategory === category
                  ? 'terminal-glass ai-glow text-green-400'
                  : 'text-white/60 hover:text-white terminal-border'
              }`}
            >
              ./{category.replace('_', '-')}
            </button>
          ))}
        </div>

        <div className="terminal-glass p-8 rounded-lg neural-card">
          <h3 className="text-xl font-semibold text-white mb-8 text-center design-heading mono-text">
            $ cat {activeCategory}.json
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div key={index} className="space-y-3 terminal-glass p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium mono-text text-sm">{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    <span className="ai-text-gradient font-semibold mono-text text-sm">{skill.level}%</span>
                    <span className="text-white/40 mono-text text-xs">({skill.years}y)</span>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="neural-gradient h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs mono-text text-white/60">
                  <span>└── proficiency: {skill.level >= 85 ? 'expert' : skill.level >= 70 ? 'advanced' : 'intermediate'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'years_exp', description: 'production systems', color: 'green' },
            { number: '20+', label: 'technologies', description: 'actively used', color: 'orange' },
            { number: '6+', label: 'major_projects', description: 'delivered on AWS', color: 'blue' },
            { number: '92%', label: 'ml_accuracy', description: 'avg model performance', color: 'purple' }
          ].map((stat, index) => (
            <div key={index} className="terminal-glass rounded-lg p-6 text-center neural-card">
              <div className={`text-2xl font-bold text-${stat.color}-400 mb-2 mono-text`}>{stat.number}</div>
              <div className="text-white font-semibold mb-1 mono-text text-sm">{stat.label}</div>
              <div className="text-white/60 text-xs mono-text">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}