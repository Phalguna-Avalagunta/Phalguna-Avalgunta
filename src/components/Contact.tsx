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
    <section id="contact" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">Get In Touch</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Ready to Transform
            <br />
            <span className="text-gradient">Your Design Strategy?</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how 20+ years of design leadership can drive your next breakthrough product.
            Available for senior design roles globally.
          </p>
        </div>

        {/* Quick Contact Actions */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <a
            href="mailto:phalguna.avalagunta252@outlook.com"
            className="glass-effect p-8 rounded-3xl text-center interactive-card group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">📧</div>
            <h3 className="text-2xl font-bold text-white mb-2 design-heading">Email Me</h3>
            <p className="text-gradient font-medium mb-4">Direct Communication</p>
            <p className="text-white/70 text-sm break-all">phalguna.avalagunta252@outlook.com</p>
            <div className="mt-4 button-premium text-white px-6 py-2 rounded-xl font-semibold">
              Send Email Now
            </div>
          </a>

          <a
            href="#work"
            className="glass-effect p-8 rounded-3xl text-center interactive-card group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">🎯</div>
            <h3 className="text-2xl font-bold text-white mb-2 design-heading">View Portfolio</h3>
            <p className="text-gradient font-medium mb-4">20+ Years of Excellence</p>
            <p className="text-white/70 text-sm">Enterprise Design Systems & Strategy</p>
            <div className="mt-4 button-premium text-white px-6 py-2 rounded-xl font-semibold">
              Explore Work
            </div>
          </a>

          <a
            href="#about"
            className="glass-effect p-8 rounded-3xl text-center interactive-card group"
          >
            <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">👑</div>
            <h3 className="text-2xl font-bold text-white mb-2 design-heading">Design Leadership</h3>
            <p className="text-gradient font-medium mb-4">Senior Principal Designer</p>
            <p className="text-white/70 text-sm">Fortune 500 & Startup Experience</p>
            <div className="mt-4 button-premium text-white px-6 py-2 rounded-xl font-semibold">
              Learn More
            </div>
          </a>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center design-heading">
                <span className="text-4xl mr-4">🎯</span>
                Ready to Transform Your Design Strategy
              </h3>
              <div className="space-y-4 text-white/80 text-lg leading-relaxed">
                <p>
                  I&apos;m <strong className="text-gradient">immediately available</strong> for senior design leadership roles globally.
                  With <strong className="text-gradient">20+ years of proven expertise</strong> and a track record of
                  <strong className="text-gradient"> transformative design initiatives</strong>, I&apos;m ready to drive your design strategy forward.
                </p>
                <p>
                  Whether you need to scale design systems, build design culture, or lead product strategy,
                  I bring both <strong className="text-gradient">strategic vision</strong> and
                  <strong className="text-gradient"> hands-on execution</strong>.
                </p>
              </div>
            </div>

            {/* Professional Details */}
            <div className="glass-effect p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-white mb-6 design-heading">Design Leadership Profile</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                    <span className="text-white text-xl">🌍</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Global Availability</h4>
                    <p className="text-gradient">Remote-First Design Leader</p>
                    <p className="text-white/60 text-sm">Available for senior roles worldwide</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                    <span className="text-white text-xl">👑</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Leadership Level</h4>
                    <p className="text-gradient">Senior Principal Designer</p>
                    <p className="text-white/60 text-sm">Design systems & strategy expert</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                    <span className="text-white text-xl">💼</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Experience</h4>
                    <p className="text-gradient">20+ Years Design Leadership</p>
                    <p className="text-white/60 text-sm">Fortune 500 to startup experience</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                    <span className="text-white text-xl">🎨</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Specializations</h4>
                    <p className="text-gradient">Design Systems, UX Strategy, Product Design</p>
                    <p className="text-white/60 text-sm">Figma, User Research, Design Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-effect p-8 rounded-3xl">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center design-heading">
              <span className="text-4xl mr-4">💬</span>
              Let&apos;s Connect
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
                    className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors placeholder-white/50"
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
                    className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors placeholder-white/50"
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
                  className="w-full glass-effect border border-white/20 rounded-xl px-4 py-3 text-white focus:border-purple-400 focus:outline-none transition-colors placeholder-white/50"
                  required
                >
                  <option value="">Select inquiry type</option>
                  <option value="Senior Design Leadership Role">Senior Design Leadership Role</option>
                  <option value="Design Systems Architecture">Design Systems Architecture</option>
                  <option value="UX Strategy Consultation">UX Strategy Consultation</option>
                  <option value="Design Team Leadership">Design Team Leadership</option>
                  <option value="Product Design Partnership">Product Design Partnership</option>
                  <option value="Speaking/Workshop Opportunity">Speaking/Workshop Opportunity</option>
                  <option value="General Design Inquiry">General Design Inquiry</option>
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
                  placeholder="Tell me about your design challenges, team needs, or how we can collaborate..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full button-premium text-white py-4 rounded-xl text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              <p className="text-white/60 text-sm text-center">
                Or contact me directly: <a href="mailto:phalguna.avalagunta252@outlook.com" className="text-gradient hover:underline">phalguna.avalagunta252@outlook.com</a>
              </p>
            </form>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-20 text-center">
          <div className="glass-effect p-12 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6 design-heading">Ready to Elevate Your Design?</h3>
            <p className="text-xl text-white/70 mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how <strong className="text-gradient">20+ years of design leadership</strong> can transform
              <strong className="text-gradient"> your product strategy</strong> and
              <strong className="text-gradient"> scale your design impact</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com?subject=Design Leadership Opportunity&body=Hi Phalguna, I'd like to discuss a design leadership opportunity with you."
                className="button-premium text-white px-12 py-5 rounded-2xl text-xl font-bold"
              >
                Start the Conversation
              </a>
              <a
                href="#work"
                className="glass-effect border-2 border-white/20 text-white px-12 py-5 rounded-2xl text-xl font-bold hover:bg-white/10 transition-all duration-300"
              >
                Explore My Work
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}