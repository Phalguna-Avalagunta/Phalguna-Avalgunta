'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [currentTime, setCurrentTime] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    setCurrentTime(new Date());
  }, []);

  useEffect(() => {
    const phrases = [
      'python -c "import tensorflow as tf; print(\'AI Engineer Ready\')"',
      'aws lambda invoke --function-name deploy_ml_model',
      'docker run -p 8080:8080 phalguna/ai-pipeline',
      'pytest ml_models/ --coverage=92%'
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

  useEffect(() => {
    if (mounted) {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mounted]);

  useEffect(() => {
    const terminalCommands = [
      '$ whoami',
      'phalguna.avalgunta',
      '$ cat /proc/cpuinfo | grep "AI Engineer"',
      'Found: Machine Learning Specialist',
      '$ aws sts get-caller-identity',
      'UserId: Cloud-Native-Developer',
      '$ echo $SKILLS',
      'Python,TensorFlow,AWS,Docker,React'
    ];

    let currentIndex = 0;
    const terminalTimer = setInterval(() => {
      if (currentIndex < terminalCommands.length) {
        const command = terminalCommands[currentIndex];
        setTerminalLines(prev => [...prev, command]);
        currentIndex++;
      } else {
        clearInterval(terminalTimer);
      }
    }, 800);

    return () => clearInterval(terminalTimer);
  }, []);

  return (
    <section className="min-h-screen relative overflow-hidden neural-grid">
      {/* Neural Network Background */}
      <div className="absolute inset-0">
        {/* Animated Data Orbs */}
        <div
          className="absolute w-80 h-80 rounded-full neural-gradient opacity-15 blur-3xl animate-float"
          style={{
            left: `${20 + mousePosition.x * 0.015}%`,
            top: `${10 + mousePosition.y * 0.015}%`,
          }}
        ></div>
        <div
          className="absolute w-64 h-64 rounded-full neural-gradient opacity-12 blur-3xl animate-float"
          style={{
            right: `${15 + mousePosition.x * 0.012}%`,
            bottom: `${20 + mousePosition.y * 0.012}%`,
            animationDelay: '2s'
          }}
        ></div>
        <div
          className="absolute w-96 h-96 rounded-full neural-gradient opacity-10 blur-3xl animate-float"
          style={{
            left: `${60 + mousePosition.x * 0.008}%`,
            top: `${60 + mousePosition.y * 0.008}%`,
            animationDelay: '4s'
          }}
        ></div>

        {/* Data Flow Lines */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-gradient-to-r from-transparent via-green-400 to-transparent"
              style={{
                top: `${20 + i * 15}%`,
                left: '0',
                right: '0',
                animationDelay: `${i * 0.5}s`,
                animation: 'dataFlow 8s ease-in-out infinite'
              }}
            />
          ))}
        </div>
      </div>

      {/* Terminal Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-50 p-4 md:p-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2 md:space-x-3">
            <div className="terminal-glass px-3 py-1 md:px-4 md:py-2 rounded-lg mono-text text-xs md:text-sm">
              <span className="text-green-400">phalguna@portfolio:~$</span>
            </div>
            <div className="text-lg md:text-xl font-bold ai-text-gradient design-heading">
              ./phalguna-avalgunta
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {mounted && currentTime && (
              <div className="terminal-glass px-3 py-2 rounded-lg text-xs mono-text">
                <span className="text-green-400">{currentTime.toLocaleTimeString()}</span>
              </div>
            )}
            <div className="flex space-x-6 ml-6">
              {['work', 'about', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className="text-white/80 hover:text-green-400 transition-all duration-300 relative group mono-text text-sm"
                >
                  ./{item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-orange-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="terminal-glass p-2 rounded-lg mono-text text-sm text-green-400"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 terminal-glass rounded-lg p-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {['work', 'about', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/80 hover:text-green-400 transition-all duration-300 mono-text text-sm py-2"
                >
                  $ cd ./{item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

          {/* Left Column - Terminal Interface */}
          <div className="space-y-6 md:space-y-8 animate-slideUp">
            {/* System Status */}
            <div className="terminal-glass px-4 md:px-6 py-3 md:py-4 rounded-lg">
              <div className="flex items-center justify-between mb-3 md:mb-4">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 mono-text text-xs md:text-sm">SYSTEM_STATUS: ONLINE</span>
                </div>
                <div className="flex space-x-1 md:space-x-2">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>
              <div className="mono-text text-xs text-green-300">
                Available for immediate deployment • MSc Computer Science @ UEL
              </div>
            </div>

            {/* Terminal Header */}
            <div className="space-y-3 md:space-y-4">
              <div className="terminal-glass p-4 md:p-6 rounded-lg">
                <div className="mono-text text-xs md:text-sm text-green-400 mb-2">
                  $ cat /home/phalguna/profile.json
                </div>
                <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-white leading-none mb-3 md:mb-4 font-bold">
                  <span className="ai-text-gradient">Phalguna</span>
                  <br />
                  <span className="text-white">Avalgunta</span>
                </h1>
                <div className="mono-text text-orange-400 text-sm md:text-base lg:text-lg">
                  {`{`}
                  <br />
                  &nbsp;&nbsp;&quot;role&quot;: &quot;<span className="ai-text-gradient font-semibold">AI/ML Engineer</span>&quot;,
                  <br />
                  &nbsp;&nbsp;&quot;specialization&quot;: &quot;Cloud &amp; Data Science&quot;,
                  <br />
                  &nbsp;&nbsp;&quot;status&quot;: &quot;Ready for Production&quot;
                  <br />
                  {`}`}
                </div>
              </div>

              {/* Animated Command Line */}
              <div className="terminal-glass p-4 md:p-6 rounded-lg">
                <div className="h-12 md:h-16 flex items-center">
                  <div className="mono-text text-xs md:text-sm">
                    <span className="text-green-400">$ </span>
                    <span className="text-white break-all">{text}</span>
                    <span className="border-r-2 border-green-400 animate-pulse ml-2"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-time Metrics */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="terminal-glass p-3 md:p-4 rounded-lg text-center neural-card">
                <div className="text-lg md:text-2xl font-bold ai-text-gradient mono-text">3+</div>
                <div className="text-white/60 text-xs mono-text">YRS_EXP</div>
              </div>
              <div className="terminal-glass p-3 md:p-4 rounded-lg text-center neural-card">
                <div className="text-lg md:text-2xl font-bold ai-text-gradient mono-text">92%</div>
                <div className="text-white/60 text-xs mono-text">ML_ACC</div>
              </div>
              <div className="terminal-glass p-3 md:p-4 rounded-lg text-center neural-card">
                <div className="text-lg md:text-2xl font-bold ai-text-gradient mono-text">AWS</div>
                <div className="text-white/60 text-xs mono-text">CLOUD</div>
              </div>
            </div>

            {/* Action Commands */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <a
                href="#work"
                className="ai-button text-white px-6 md:px-8 py-3 md:py-4 rounded-lg mono-text font-semibold text-center text-sm md:text-base"
              >
                $ ./view_projects.sh
              </a>
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="terminal-border text-white px-6 md:px-8 py-3 md:py-4 rounded-lg mono-text font-semibold text-center text-sm md:text-base"
              >
                $ mail --opportunity
              </a>
            </div>
          </div>

          {/* Right Column - Live Terminal */}
          <div className="relative flex justify-center lg:justify-end animate-fadeIn mt-8 lg:mt-0">
            <div className="w-full max-w-sm md:max-w-md">
              {/* Live Terminal Window */}
              <div className="terminal-glass rounded-lg overflow-hidden">
                {/* Terminal Header */}
                <div className="bg-black/50 px-3 md:px-4 py-2 md:py-3 flex items-center justify-between border-b border-green-400/20">
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="mono-text text-xs text-green-400 hidden sm:block">
                    phalguna@ai-engineer
                  </div>
                  {mounted && currentTime && (
                    <div className="mono-text text-xs text-white/60 hidden md:block">
                      {currentTime.toLocaleTimeString()}
                    </div>
                  )}
                </div>

                {/* Terminal Content */}
                <div className="p-3 md:p-4 h-64 md:h-80 lg:h-96 overflow-hidden relative">
                  {/* IDE Background with Profile Image for whoami section */}
                  {terminalLines.some(line => line === '$ whoami' || line === 'phalguna.avalgunta') && (
                    <div className="absolute inset-0 opacity-10 pointer-events-none">
                      <Image
                        src="/images/profile/Pha.A.png"
                        alt="Phalguna Avalgunta Profile"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-green-900/20 to-black/80"></div>
                    </div>
                  )}

                  <div className="space-y-1 md:space-y-2 mono-text text-xs md:text-sm relative z-10">
                    {terminalLines.filter(line => line !== undefined).map((line, index) => (
                      <div
                        key={index}
                        className={`${
                          line?.startsWith('$')
                            ? 'text-green-400'
                            : line?.includes(':')
                            ? 'text-orange-400'
                            : 'text-white/80'
                        } animate-fadeIn break-all ${
                          line === 'phalguna.avalgunta' ? 'text-white font-bold bg-green-400/20 px-2 py-1 rounded' : ''
                        }`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        {line}
                      </div>
                    ))}
                    <div className="flex items-center">
                      <span className="text-green-400">$ </span>
                      <span className="border-r-2 border-green-400 animate-pulse ml-1"></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges - Hidden on small screens */}
              <div className="hidden md:block absolute -top-4 -left-4 lg:-top-6 lg:-left-6 terminal-glass px-2 py-1 lg:px-3 lg:py-2 rounded-lg animate-float">
                <span className="text-green-400 mono-text text-xs">Python 3.11</span>
              </div>
              <div className="hidden md:block absolute top-6 lg:top-8 -right-6 lg:-right-8 terminal-glass px-2 py-1 lg:px-3 lg:py-2 rounded-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-orange-400 mono-text text-xs">AWS CLI</span>
              </div>
              <div className="hidden md:block absolute -bottom-4 lg:-bottom-6 right-3 lg:right-4 terminal-glass px-2 py-1 lg:px-3 lg:py-2 rounded-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-purple-400 mono-text text-xs">Docker</span>
              </div>
              <div className="hidden md:block absolute bottom-12 lg:bottom-16 -left-6 lg:-left-8 terminal-glass px-2 py-1 lg:px-3 lg:py-2 rounded-lg animate-float" style={{ animationDelay: '3s' }}>
                <span className="text-blue-400 mono-text text-xs">React</span>
              </div>

              {/* Data Visualization - Responsive */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] md:w-[130%] h-[120%] md:h-[130%] border border-green-400/10 rounded-lg animate-pulse-slow pointer-events-none"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[140%] md:w-[150%] h-[140%] md:h-[150%] border border-orange-400/5 rounded-lg animate-pulse-slow pointer-events-none" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="terminal-glass p-3 rounded-lg">
          <div className="mono-text text-xs text-green-400">scroll_down()</div>
        </div>
      </div>
    </section>
  );
}