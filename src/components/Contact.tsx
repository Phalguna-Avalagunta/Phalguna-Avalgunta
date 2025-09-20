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

    // Simulate form submission (replace with actual email service)
    try {
      // Create mailto link with form data
      const mailtoLink = `mailto:phalguna.avalagunta252@outlook.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
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
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Let&apos;s Work Together</h2>
          <p className="text-blue-300 text-xl font-semibold">Ready for Immediate Opportunities | London-Based</p>
        </div>

        {/* Quick Contact Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:phalguna.avalagunta252@outlook.com"
            className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-3xl border border-blue-500/30 text-center hover:scale-105 transform transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="text-2xl font-bold text-white mb-2">Email Me</h3>
            <p className="text-blue-300 font-medium mb-4">Direct Communication</p>
            <p className="text-gray-300 text-sm break-all">phalguna.avalagunta252@outlook.com</p>
            <div className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-xl font-semibold group-hover:bg-blue-500 transition-colors">
              Send Email Now
            </div>
          </a>

          <a
            href="tel:+447741820922"
            className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-3xl border border-green-500/30 text-center hover:scale-105 transform transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📞</div>
            <h3 className="text-2xl font-bold text-white mb-2">Call Me</h3>
            <p className="text-green-300 font-medium mb-4">Immediate Response</p>
            <p className="text-gray-300 text-lg font-mono">+44 07741820922</p>
            <div className="mt-4 bg-green-600 text-white px-6 py-2 rounded-xl font-semibold group-hover:bg-green-500 transition-colors">
              Call Now
            </div>
          </a>

          <a
            href="https://linkedin.com/in/phalguna-cloud-ai"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-8 rounded-3xl border border-purple-500/30 text-center hover:scale-105 transform transition-all duration-300 group backdrop-blur-sm"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">💼</div>
            <h3 className="text-2xl font-bold text-white mb-2">LinkedIn</h3>
            <p className="text-purple-300 font-medium mb-4">Professional Profile</p>
            <p className="text-gray-300 text-sm">linkedin.com/in/phalguna-cloud-ai</p>
            <div className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-xl font-semibold group-hover:bg-purple-500 transition-colors">
              View Profile
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="text-4xl mr-4">🚀</span>
                Ready to Make an Impact
              </h3>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I&apos;m <strong className="text-blue-300">immediately available</strong> for full-time opportunities in London.
                  With <strong className="text-green-300">3+ years of proven experience</strong> and current
                  <strong className="text-purple-300"> advanced studies in AI/Cloud Computing</strong>, I&apos;m ready to contribute from day one.
                </p>
                <p>
                  Whether you need someone to optimize data processes, build cloud solutions, or drive AI initiatives,
                  I bring both <strong className="text-blue-300">practical experience</strong> and
                  <strong className="text-purple-300"> cutting-edge knowledge</strong>.
                </p>
              </div>
            </div>

            {/* Professional Details */}
            <div className="bg-gradient-to-br from-blue-600/10 to-purple-600/10 p-8 rounded-3xl border border-blue-500/20 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-6">Professional Details</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <span className="text-white text-xl">📍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Location</h4>
                    <p className="text-blue-300">Croydon, London, UK</p>
                    <p className="text-gray-400 text-sm">Available for office/hybrid/remote</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-green-600 p-3 rounded-lg">
                    <span className="text-white text-xl">✅</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Work Authorization</h4>
                    <p className="text-green-300">Full UK Work Rights</p>
                    <p className="text-gray-400 text-sm">No sponsorship required</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-purple-600 p-3 rounded-lg">
                    <span className="text-white text-xl">⚡</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Availability</h4>
                    <p className="text-purple-300">Immediate Start</p>
                    <p className="text-gray-400 text-sm">Notice period: None</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="bg-orange-600 p-3 rounded-lg">
                    <span className="text-white text-xl">🎯</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Focus Areas</h4>
                    <p className="text-orange-300">Data Analysis, AI/ML, Cloud Computing</p>
                    <p className="text-gray-400 text-sm">AWS, Python, Data Engineering</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
              <span className="text-4xl mr-4">💬</span>
              Send a Message
            </h3>

            {submitStatus === 'success' && (
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-4 mb-6">
                <p className="text-green-300 font-medium">✅ Message sent! I&apos;ll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-4 mb-6">
                <p className="text-red-300 font-medium">❌ Please try again or contact me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-gray-300 font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-800/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                    required
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-gray-300 font-medium mb-2">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-800/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors"
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="Job Opportunity - Data Analyst">Job Opportunity - Data Analyst</option>
                  <option value="Job Opportunity - Cloud Engineer">Job Opportunity - Cloud Engineer</option>
                  <option value="Job Opportunity - AI/ML Engineer">Job Opportunity - AI/ML Engineer</option>
                  <option value="Freelance/Contract Work">Freelance/Contract Work</option>
                  <option value="Interview Request">Interview Request</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-medium mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full bg-gray-800/80 border border-gray-600 rounded-xl px-4 py-3 text-white focus:border-blue-400 focus:outline-none transition-colors resize-vertical"
                  required
                  placeholder="Tell me about the opportunity, your company, required skills, etc."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl text-lg font-bold hover:scale-105 transform transition-all duration-300 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? '✉️ Sending...' : '🚀 Send Message'}
              </button>

              <p className="text-gray-400 text-sm text-center">
                Or contact me directly: <a href="mailto:phalguna.avalagunta252@outlook.com" className="text-blue-400 hover:underline">phalguna.avalagunta252@outlook.com</a>
              </p>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-4xl font-bold text-white mb-6">Let&apos;s Build Something Amazing</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              Ready to bring <strong className="text-blue-300">immediate value</strong> to your team with
              <strong className="text-purple-300"> proven experience</strong> and
              <strong className="text-green-300"> cutting-edge skills</strong>.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com?subject=Job Opportunity&body=Hi Phalguna, I'd like to discuss a job opportunity with you."
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl"
              >
                💼 Hire Me Now
              </a>
              <a
                href="tel:+447741820922"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-12 py-5 rounded-xl text-xl font-bold hover:scale-105 transform transition-all duration-300 shadow-2xl"
              >
                📞 Call for Interview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}