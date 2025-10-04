'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const mailtoLink = `mailto:phalguna.avalagunta252@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoLink;
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-6 relative neural-grid">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="terminal-glass px-6 py-3 rounded-lg mb-8 inline-block">
            <span className="text-green-400 mono-text">$ ./contact.sh --init</span>
          </div>
          <h2 className="heading-lg text-white mb-6 design-heading">
            <span className="mono-text text-green-400"># </span>Let&apos;s Build
            <br />
            <span className="ai-text-gradient">Something Amazing</span>
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed mono-text">
            AI/ML Engineer • AWS Cloud Developer • MSc Computer Science @ UEL<br/>
            Available for immediate start • Remote or London-based opportunities
          </p>
        </div>

        {/* Quick Contact Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <a
            href="mailto:phalguna.avalagunta252@gmail.com"
            className="terminal-glass p-6 md:p-8 rounded-lg text-center neural-card group"
          >
            <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 design-heading mono-text">email.send()</h3>
            <p className="ai-text-gradient font-medium mb-4 mono-text text-sm">Direct Connection</p>
            <p className="text-white/70 text-xs mono-text break-all">phalguna.avalagunta252@gmail.com</p>
            <div className="mt-4 ai-button text-white px-4 py-2 rounded-lg font-semibold mono-text text-xs">
              $ mail --compose
            </div>
          </a>

          <a
            href="https://github.com/phalguna-avalgunta"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-glass p-6 md:p-8 rounded-lg text-center neural-card group"
          >
            <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">🐙</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 design-heading mono-text">github.view()</h3>
            <p className="ai-text-gradient font-medium mb-4 mono-text text-sm">Code Repository</p>
            <p className="text-white/70 text-xs mono-text">Projects & Contributions</p>
            <div className="mt-4 ai-button text-white px-4 py-2 rounded-lg font-semibold mono-text text-xs">
              $ git show --all
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/phalguna-avalgunta/"
            target="_blank"
            rel="noopener noreferrer"
            className="terminal-glass p-6 md:p-8 rounded-lg text-center neural-card group"
          >
            <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 design-heading mono-text">linkedin.connect()</h3>
            <p className="ai-text-gradient font-medium mb-4 mono-text text-sm">Professional Network</p>
            <p className="text-white/70 text-xs mono-text">3+ Years Experience</p>
            <div className="mt-4 ai-button text-white px-4 py-2 rounded-lg font-semibold mono-text text-xs">
              $ connect --now
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="terminal-glass p-6 md:p-8 rounded-lg">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center design-heading">
                <span className="text-green-400 mr-4 mono-text">$</span>
                system.profile --verbose
              </h3>
              <div className="space-y-4 text-white/80 text-sm md:text-base leading-relaxed mono-text">
                <div className="terminal-glass p-4 rounded-lg">
                  <p className="text-green-400"># Current Status</p>
                  <p>
                    ▸ <span className="ai-text-gradient">MSc Computer Science</span> @ UEL (Jan 2026)
                  </p>
                  <p>
                    ▸ <span className="ai-text-gradient">3+ years</span> professional experience
                  </p>
                  <p>
                    ▸ <span className="ai-text-gradient">Available immediately</span> for opportunities
                  </p>
                </div>
                <div className="terminal-glass p-4 rounded-lg">
                  <p className="text-orange-400"># Tech Stack</p>
                  <p>▸ Python, TensorFlow, PyTorch, Scikit-learn</p>
                  <p>▸ AWS (Lambda, EC2, S3, SageMaker)</p>
                  <p>▸ React, Node.js, Docker, Kubernetes</p>
                </div>
              </div>
            </div>

            {/* Professional Details */}
            <div className="terminal-glass p-6 md:p-8 rounded-lg">
              <h3 className="text-lg md:text-xl font-bold text-white mb-6 design-heading mono-text">
                <span className="text-orange-400">$</span> cat professional.json
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="terminal-glass p-3 rounded-lg">
                    <span className="text-green-400 text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mono-text">location:</h4>
                    <p className="ai-text-gradient mono-text text-sm">London, UK</p>
                    <p className="text-white/60 text-xs mono-text">Open to remote & relocation</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="terminal-glass p-3 rounded-lg">
                    <span className="text-orange-400 text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mono-text">seeking:</h4>
                    <p className="ai-text-gradient mono-text text-sm">AI/ML Engineer • Data Scientist</p>
                    <p className="text-white/60 text-xs mono-text">Cloud Developer • Software Engineer</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="terminal-glass p-3 rounded-lg">
                    <span className="text-purple-400 text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mono-text">expertise:</h4>
                    <p className="ai-text-gradient mono-text text-sm">Machine Learning • Cloud Architecture</p>
                    <p className="text-white/60 text-xs mono-text">Data Analysis • API Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="terminal-glass p-6 md:p-8 rounded-lg">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-6 flex items-center design-heading">
              <span className="text-green-400 mr-4 mono-text">$</span>
              message.compose()
            </h3>

            {submitStatus === 'success' && (
              <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
                <p className="text-green-300 font-medium mono-text">✅ Message sent successfully!</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-600/20 border border-red-500/30 rounded-lg p-4 mb-6">
                <p className="text-red-300 font-medium mono-text">❌ Error: Please try again</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2 mono-text text-sm">name:</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full terminal-glass border border-green-400/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder-white/30 mono-text text-sm"
                    required
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2 mono-text text-sm">email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full terminal-glass border border-green-400/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors placeholder-white/30 mono-text text-sm"
                    required
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2 mono-text text-sm">subject:</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full terminal-glass border border-green-400/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors mono-text text-sm"
                  required
                >
                  <option value="">--select-option</option>
                  <option value="AI/ML Engineering Position">AI/ML Engineering Position</option>
                  <option value="Cloud Developer Role">Cloud Developer Role</option>
                  <option value="Data Science Opportunity">Data Science Opportunity</option>
                  <option value="Software Engineering Role">Software Engineering Role</option>
                  <option value="Project Collaboration">Project Collaboration</option>
                  <option value="Freelance/Contract Work">Freelance/Contract Work</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2 mono-text text-sm">message:</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full terminal-glass border border-green-400/30 rounded-lg px-4 py-3 text-white focus:border-green-400 focus:outline-none transition-colors resize-vertical mono-text text-sm placeholder-white/30"
                  required
                  placeholder="Tell me about the opportunity, project requirements, or how we can work together..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full ai-button text-white py-4 rounded-lg text-base font-bold disabled:opacity-50 disabled:cursor-not-allowed mono-text"
              >
                {isSubmitting ? 'Sending...' : '$ send --message'}
              </button>

              <p className="text-white/60 text-xs text-center mono-text">
                Direct email: <a href="mailto:phalguna.avalagunta252@gmail.com" className="ai-text-gradient hover:underline">phalguna.avalagunta252@gmail.com</a>
              </p>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="terminal-glass p-8 md:p-12 rounded-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 design-heading">
              <span className="mono-text text-green-400">$ </span>Ready to Deploy?
            </h3>
            <p className="text-base md:text-lg text-white/70 mb-8 max-w-3xl mx-auto mono-text">
              <span className="ai-text-gradient">Python</span> •
              <span className="ai-text-gradient"> AWS</span> •
              <span className="ai-text-gradient"> Machine Learning</span> •
              <span className="ai-text-gradient"> React</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@gmail.com?subject=Job Opportunity&body=Hi Phalguna, I'd like to discuss an opportunity with you."
                className="ai-button text-white px-8 md:px-12 py-3 md:py-5 rounded-lg text-sm md:text-lg font-bold mono-text"
              >
                $ contact --immediate
              </a>
              <a
                href="#work"
                className="terminal-border text-white px-8 md:px-12 py-3 md:py-5 rounded-lg text-sm md:text-lg font-bold hover:bg-white/10 transition-all duration-300 mono-text"
              >
                $ view --portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}