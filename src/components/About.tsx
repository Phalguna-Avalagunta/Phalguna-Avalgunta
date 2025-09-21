export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">About Me</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            Two Decades of
            <br />
            <span className="text-gradient">Design Leadership</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Leadership Philosophy */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-effect rounded-3xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-white design-heading">Design Philosophy</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                I believe great design is invisible—it solves problems so elegantly that users accomplish their goals
                without friction. My approach combines <span className="text-gradient font-semibold">human-centered design principles</span> with
                <span className="text-gradient font-semibold"> data-driven insights</span> to create experiences that not only delight users
                but drive measurable business outcomes.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Over 20+ years, I&apos;ve learned that the best designs emerge from deep collaboration, rigorous user research,
                and iterative refinement. I&apos;m passionate about building <span className="text-gradient font-semibold">design systems that scale</span> and
                mentoring the next generation of design leaders.
              </p>
            </div>

            {/* Career Journey */}
            <div className="glass-effect rounded-3xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white design-heading">Career Highlights</h3>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-bold text-white mb-2">Senior Principal Designer</h4>
                  <p className="text-purple-300 font-semibold mb-1">Fortune 500 Financial Services</p>
                  <p className="text-white/60 mb-3">2020 - Present</p>
                  <p className="text-white/80">
                    Leading design system strategy across 50+ product teams. Established design operations framework
                    that reduced design debt by 70% and improved cross-platform consistency.
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-bold text-white mb-2">Head of UX Design</h4>
                  <p className="text-blue-300 font-semibold mb-1">Series B Fintech Startup</p>
                  <p className="text-white/60 mb-3">2017 - 2020</p>
                  <p className="text-white/80">
                    Built design team from ground up. Led product design for AI-powered investment platform
                    that grew from 50K to 300K+ active users. Established design culture and processes.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-xl font-bold text-white mb-2">Lead Product Designer</h4>
                  <p className="text-green-300 font-semibold mb-1">Healthcare Technology</p>
                  <p className="text-white/60 mb-3">2014 - 2017</p>
                  <p className="text-white/80">
                    Redesigned provider portal serving 10,000+ healthcare professionals. Reduced task completion
                    time by 35% through user-centered design and workflow optimization.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Recognition */}
          <div className="space-y-8">

            {/* Core Expertise */}
            <div className="glass-effect rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🏆</span>
                Core Expertise
              </h3>
              <div className="space-y-4">
                {[
                  { skill: 'Design Systems', level: 95 },
                  { skill: 'UX Strategy', level: 98 },
                  { skill: 'Product Design', level: 92 },
                  { skill: 'User Research', level: 88 },
                  { skill: 'Design Leadership', level: 96 },
                  { skill: 'Prototyping', level: 90 }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white font-medium">{item.skill}</span>
                      <span className="text-purple-300">{item.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="premium-gradient h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recognition */}
            <div className="glass-effect rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🎖️</span>
                Recognition
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-white font-semibold">Design Excellence Award</h4>
                  <p className="text-yellow-300 text-sm">UX Design Institute</p>
                  <p className="text-white/60 text-sm">2023</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="text-white font-semibold">Innovation in Design</h4>
                  <p className="text-purple-300 text-sm">Government Tech Awards</p>
                  <p className="text-white/60 text-sm">2022</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-white font-semibold">Top 40 Under 40</h4>
                  <p className="text-blue-300 text-sm">Design Leadership Forum</p>
                  <p className="text-white/60 text-sm">2019</p>
                </div>
              </div>
            </div>

            {/* Speaking & Teaching */}
            <div className="glass-effect rounded-3xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <span className="text-2xl mr-3">🎤</span>
                Speaking & Teaching
              </h3>
              <div className="space-y-3 text-white/80">
                <p className="text-sm">• Keynote Speaker at UX Conference 2023</p>
                <p className="text-sm">• Guest Lecturer at Design Institute</p>
                <p className="text-sm">• Design Mentor Program (50+ mentees)</p>
                <p className="text-sm">• Workshop Leader: &quot;Scaling Design Systems&quot;</p>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="glass-effect rounded-3xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-4">Ready to Collaborate?</h3>
              <p className="text-white/70 text-sm mb-6">
                Let&apos;s discuss how I can help drive your design initiatives forward.
              </p>
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="button-premium text-white px-6 py-3 rounded-xl font-semibold text-sm w-full block text-center"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: '20+', label: 'Years Experience', description: 'Leading design teams' },
            { number: '500+', label: 'Projects Delivered', description: 'Across multiple industries' },
            { number: '50+', label: 'Teams Mentored', description: 'Designers and product teams' },
            { number: '15+', label: 'Industries', description: 'Fintech, Healthcare, E-commerce' }
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