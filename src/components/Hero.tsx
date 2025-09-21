'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const phrases = [
      'AI/ML Engineer | Cloud & AI Developer',
      'AWS Solutions Architect',
      'MSc Computer Science @ UEL',
      'Data Analysis & Automation Expert'
    ];

    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden grid-pattern">
      {/* Advanced Background Elements */}
      <div className="absolute inset-0">
        {/* Animated Gradient Orbs */}
        <div
          className="absolute w-96 h-96 rounded-full premium-gradient opacity-20 blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
          }}
        ></div>
        <div
          className="absolute w-80 h-80 rounded-full premium-gradient opacity-15 blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full premium-gradient opacity-10 blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.01}%`,
            top: `${60 + mousePosition.y * 0.01}%`,
            animationDelay: '4s'
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient design-heading">
            Phalguna A.
          </div>
          <div className="hidden md:flex space-x-8">
            {['Work', 'About', 'Experience', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-white transition-all duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - Content */}
          <div className="space-y-8 animate-slideUp">
            {/* Status Badge */}
            <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full neon-glow">
              <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
              <span className="text-green-300 font-semibold">Open to Work - Immediate Start</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="heading-xl text-white leading-none">
                Phalguna
                <br />
                <span className="text-gradient">Avalagunta</span>
              </h1>

              {/* Animated Subtitle */}
              <div className="h-20 flex items-center">
                <h2 className="text-2xl md:text-4xl font-light text-white/90 min-h-[3rem]">
                  <span className="text-gradient font-semibold">{text}</span>
                  <span className="border-r-3 border-purple-400 animate-pulse ml-2"></span>
                </h2>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="space-y-4">
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl">
                <span className="text-gradient font-semibold">Cloud & AI Developer</span> with hands-on AWS experience.
                <br />
                Currently completing <span className="text-white font-semibold">MSc Computer Science @ UEL</span>.
                <br />
                Specialized in <span className="text-gradient font-semibold">Python, Machine Learning & AWS</span>.
              </p>
            </div>

            {/* Achievement Stats */}
            <div className="grid grid-cols-3 gap-6 py-8">
              <div className="glass-effect p-6 rounded-2xl text-center interactive-card">
                <div className="text-3xl font-bold text-gradient">3+</div>
                <div className="text-white/60 text-sm">Years Experience</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center interactive-card">
                <div className="text-3xl font-bold text-gradient">6+</div>
                <div className="text-white/60 text-sm">Major Projects</div>
              </div>
              <div className="glass-effect p-6 rounded-2xl text-center interactive-card">
                <div className="text-3xl font-bold text-gradient">85%</div>
                <div className="text-white/60 text-sm">ML Accuracy</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#work"
                className="button-premium text-white px-8 py-4 rounded-2xl text-lg font-semibold text-center"
              >
                View My Work
              </a>
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="glass-effect border-2 border-white/20 text-white px-8 py-4 rounded-2xl text-lg font-semibold text-center hover:bg-white/10 transition-all duration-300"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* Right Column - Profile & Visual Elements */}
          <div className="relative flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative">
              {/* Main Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Animated Background Rings */}
                <div className="absolute inset-0 rounded-full premium-gradient opacity-20 animate-pulse-slow"></div>
                <div className="absolute inset-4 rounded-full premium-gradient opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

                {/* Profile Image */}
                <div className="absolute inset-8 profile-image animate-glow">
                  <Image
                    src="/images/profile/Pha.A.png"
                    alt="Phalguna Avalagunta - Senior UI/UX Engineer"
                    width={400}
                    height={400}
                    priority
                    className="rounded-full"
                    onError={(e) => {
                      // Fallback for when image doesn't exist yet
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center">
                          <span class="text-white text-6xl font-bold">PA</span>
                        </div>
                      `;
                    }}
                  />
                </div>

                {/* Floating Skill Badges */}
                <div className="absolute -top-8 -left-8 glass-effect px-4 py-2 rounded-full animate-float">
                  <span className="text-white font-semibold">Figma Expert</span>
                </div>
                <div className="absolute top-8 -right-12 glass-effect px-4 py-2 rounded-full animate-float" style={{ animationDelay: '1s' }}>
                  <span className="text-white font-semibold">Design Systems</span>
                </div>
                <div className="absolute -bottom-8 right-0 glass-effect px-4 py-2 rounded-full animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-white font-semibold">UX Strategy</span>
                </div>
                <div className="absolute bottom-16 -left-16 glass-effect px-4 py-2 rounded-full animate-float" style={{ animationDelay: '3s' }}>
                  <span className="text-white font-semibold">User Research</span>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/10 rounded-full animate-pulse-slow"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="glass-effect p-3 rounded-full">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}