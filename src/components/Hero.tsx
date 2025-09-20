'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const phrases = ['Data Analyst | 3+ Years Experience', 'AWS Cloud & AI Developer', 'MSc Computer Science @ UEL', 'Ready for Immediate Opportunities'];
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setText(currentPhrase.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 80);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="text-center max-w-6xl mx-auto relative z-10">
        {/* Availability Status */}
        <div className="inline-flex items-center px-6 py-3 bg-green-500/20 border border-green-500/30 rounded-full text-green-300 text-lg font-semibold mb-8 animate-pulse">
          <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-ping"></div>
          AVAILABLE FOR IMMEDIATE START
        </div>

        <div className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
            Phalguna Avalagunta
          </h1>

          <div className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 font-bold mb-10 h-20 flex items-center justify-center min-h-[5rem]">
            <span>{text}</span>
            <span className="border-r-3 border-blue-400 animate-pulse ml-2 h-12"></span>
          </div>

          <p className="text-2xl md:text-3xl text-gray-200 mb-8 max-w-5xl mx-auto leading-relaxed font-medium">
            <span className="text-blue-300 font-bold">3+ Years</span> Data Analysis Experience |
            <span className="text-purple-300 font-bold"> AWS Cloud Specialist</span> |
            <span className="text-green-300 font-bold"> London-Based</span>
          </p>

          {/* Achievement Highlights */}
          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-blue-300">30%</div>
              <div className="text-blue-200 font-medium">Process Efficiency Boost</div>
              <div className="text-xs text-gray-400 mt-1">Morae Analytics</div>
            </div>
            <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-sm rounded-xl p-6 border border-purple-500/30 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-purple-300">99%</div>
              <div className="text-purple-200 font-medium">Data Accuracy</div>
              <div className="text-xs text-gray-400 mt-1">High-Volume Processing</div>
            </div>
            <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-sm rounded-xl p-6 border border-green-500/30 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-green-300">AWS</div>
              <div className="text-green-200 font-medium">Solutions Architect</div>
              <div className="text-xs text-gray-400 mt-1">Certification In Progress</div>
            </div>
            <div className="bg-gradient-to-br from-orange-600/20 to-orange-800/20 backdrop-blur-sm rounded-xl p-6 border border-orange-500/30 hover:scale-105 transition-transform">
              <div className="text-3xl font-bold text-orange-300">UK</div>
              <div className="text-orange-200 font-medium">Work Authorization</div>
              <div className="text-xs text-gray-400 mt-1">Immediate Start</div>
            </div>
          </div>
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mb-12">
          <a
            href="mailto:phalguna.avalagunta252@outlook.com"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-blue-500/30 min-w-[280px] group"
          >
            <span className="group-hover:hidden">💼 HIRE ME NOW</span>
            <span className="hidden group-hover:inline">📧 Send Email</span>
          </a>
          <a
            href="tel:+447741820922"
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:scale-110 transform transition-all duration-300 shadow-2xl hover:shadow-green-500/30 min-w-[280px] group"
          >
            <span className="group-hover:hidden">📞 CALL NOW</span>
            <span className="hidden group-hover:inline">+44 07741820922</span>
          </a>
          <a
            href="#projects"
            className="border-3 border-purple-400 text-purple-300 px-12 py-5 rounded-xl text-xl font-bold hover:bg-purple-400 hover:text-white transform transition-all duration-300 min-w-[280px]"
          >
            📁 VIEW PORTFOLIO
          </a>
        </div>

        {/* Professional Contact Info */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto border border-white/10 mb-16">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="text-gray-300">
              <div className="text-2xl mb-2">📍</div>
              <div className="font-semibold text-white">London, UK</div>
              <div className="text-sm">Croydon, England</div>
            </div>
            <div className="text-gray-300">
              <div className="text-2xl mb-2">📧</div>
              <div className="font-semibold text-white">Email Ready</div>
              <div className="text-sm">phalguna.avalagunta252@outlook.com</div>
            </div>
            <div className="text-gray-300">
              <div className="text-2xl mb-2">💼</div>
              <div className="font-semibold text-white">LinkedIn</div>
              <div className="text-sm">linkedin.com/in/phalguna-cloud-ai</div>
            </div>
          </div>
        </div>

        <div className="animate-bounce">
          <svg className="w-10 h-10 text-blue-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}