'use client';

import { useState } from 'react';

const skillCategories = {
  'Design Leadership': [
    { name: 'Design Strategy', level: 98 },
    { name: 'Team Leadership', level: 96 },
    { name: 'Design Operations', level: 94 },
    { name: 'Stakeholder Management', level: 92 },
    { name: 'Mentoring & Coaching', level: 95 },
    { name: 'Design Culture Building', level: 90 }
  ],
  'Design Systems': [
    { name: 'Component Libraries', level: 95 },
    { name: 'Design Tokens', level: 92 },
    { name: 'Figma', level: 98 },
    { name: 'Storybook', level: 88 },
    { name: 'Documentation', level: 90 },
    { name: 'Accessibility Standards', level: 85 }
  ],
  'UX Research & Strategy': [
    { name: 'User Research', level: 92 },
    { name: 'Usability Testing', level: 90 },
    { name: 'Journey Mapping', level: 88 },
    { name: 'Information Architecture', level: 85 },
    { name: 'Service Design', level: 80 },
    { name: 'Design Thinking', level: 94 }
  ],
  'Product & Interaction Design': [
    { name: 'Product Strategy', level: 90 },
    { name: 'Interaction Design', level: 92 },
    { name: 'Prototyping', level: 88 },
    { name: 'Visual Design', level: 85 },
    { name: 'Mobile Design', level: 87 },
    { name: 'Responsive Design', level: 90 }
  ]
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Design Leadership');

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">Core Competencies</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Mastery Across
            <br />
            <span className="text-gradient">Design Disciplines</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Two decades of hands-on experience spanning design leadership, systems thinking,
            user research, and strategic product design.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'glass-effect neon-glow text-white'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="glass-effect p-8 rounded-3xl interactive-card">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center design-heading">{activeCategory}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-gradient font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-3">
                  <div
                    className="premium-gradient h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: '20+', label: 'Years of Expertise', description: 'Leading design teams' },
            { number: '50+', label: 'Design Systems', description: 'Created and scaled' },
            { number: '500+', label: 'Projects Delivered', description: 'Across industries' },
            { number: '200+', label: 'Designers Mentored', description: 'Career development' }
          ].map((stat, index) => (
            <div key={index} className="glass-effect rounded-2xl p-6 text-center interactive-card">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-white font-semibold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}