'use client';

import { useState } from 'react';

const skillCategories = {
  'AI & Machine Learning': [
    { name: 'Python', level: 90 },
    { name: 'TensorFlow', level: 85 },
    { name: 'PyTorch', level: 80 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'OpenCV', level: 75 },
    { name: 'Natural Language Processing', level: 80 }
  ],
  'Cloud & DevOps': [
    { name: 'AWS', level: 85 },
    { name: 'Azure', level: 80 },
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 75 },
    { name: 'Terraform', level: 70 },
    { name: 'CI/CD', level: 80 }
  ],
  'Programming': [
    { name: 'Python', level: 90 },
    { name: 'JavaScript/TypeScript', level: 85 },
    { name: 'Java', level: 80 },
    { name: 'C++', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'React', level: 80 }
  ],
  'Data & Analytics': [
    { name: 'Data Analysis', level: 85 },
    { name: 'Data Visualization', level: 80 },
    { name: 'Statistical Modeling', level: 75 },
    { name: 'Big Data', level: 70 },
    { name: 'MongoDB', level: 75 },
    { name: 'PostgreSQL', level: 80 }
  ]
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('AI & Machine Learning');

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Skills & Expertise</h2>
          <p className="text-purple-300 text-lg">Technologies and tools I work with</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(skillCategories).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">{activeCategory}</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300 font-medium">{skill.name}</span>
                  <span className="text-purple-300 text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-300 mb-2">5+</div>
            <div className="text-gray-300">Programming Languages</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-300 mb-2">10+</div>
            <div className="text-gray-300">AI/ML Frameworks</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <div className="text-3xl font-bold text-purple-300 mb-2">15+</div>
            <div className="text-gray-300">Cloud Technologies</div>
          </div>
        </div>
      </div>
    </section>
  );
}