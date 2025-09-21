'use client';

import { useState } from 'react';

const skillCategories = {
  'AI & Machine Learning': [
    { name: 'Python', level: 90 },
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'Machine Learning', level: 85 },
    { name: 'Deep Learning', level: 80 },
    { name: 'Computer Vision', level: 75 }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 85 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 75 },
    { name: 'Terraform', level: 70 },
    { name: 'CI/CD', level: 80 },
    { name: 'Jenkins', level: 75 }
  ],
  'Programming & Development': [
    { name: 'Python', level: 90 },
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'Git', level: 80 }
  ],
  'Data & Analytics': [
    { name: 'Data Analysis', level: 85 },
    { name: 'Data Visualization', level: 80 },
    { name: 'SQL', level: 85 },
    { name: 'Excel', level: 80 },
    { name: 'PostgreSQL', level: 75 },
    { name: 'MongoDB', level: 70 }
  ]
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('AI & Machine Learning');

  return (
    <section id="skills" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">Core Competencies</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Technical
            <br />
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Hands-on experience with modern technologies including cloud computing, machine learning,
            and full-stack development. Ready to contribute immediately.
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
            { number: '3+', label: 'Years Experience', description: 'Professional development' },
            { number: '25+', label: 'Technologies', description: 'Mastered and applied' },
            { number: '6+', label: 'Major Projects', description: 'Delivered successfully' },
            { number: '99%', label: 'Data Accuracy', description: 'Consistent quality' }
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