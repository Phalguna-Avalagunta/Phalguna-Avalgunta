'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const phrases = ['AI Engineer', 'Cloud Engineer', 'MSc Computer Science Student'];
    const timeout = setTimeout(() => {
      const currentPhrase = phrases[currentIndex];

      if (!isDeleting) {
        setText(currentPhrase.substring(0, text.length + 1));

        if (text === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1500);
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

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            Phalguna Avalgunta
          </h1>
          <div className="text-2xl md:text-3xl text-purple-300 font-light mb-8 h-12">
            <span>{text}</span>
            <span className="border-r-2 border-purple-400 animate-pulse ml-1"></span>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Passionate about leveraging artificial intelligence and cloud technologies
            to solve complex problems. Currently pursuing MSc Computer Science at
            University of East London.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a
            href="#contact"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-400 hover:text-white transform transition-all duration-300"
          >
            View My Work
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <svg className="w-6 h-6 text-purple-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}