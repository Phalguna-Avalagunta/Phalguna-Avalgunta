export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="inline-flex items-center glass-effect px-6 py-3 rounded-full mb-8">
            <span className="text-purple-300 font-semibold">About Me</span>
          </div>
          <h2 className="heading-lg text-white mb-6">
            About
            <br />
            <span className="text-gradient">Phalguna Avalagunta</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Leadership Philosophy */}
          <div className="lg:col-span-2 space-y-12">
            <div className="glass-effect rounded-3xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <h3 className="text-2xl font-bold text-white design-heading">Professional Summary</h3>
              </div>
              <p className="text-white/80 text-lg leading-relaxed mb-6">
                <span className="text-gradient font-semibold">Innovative Cloud & AI Developer</span> with hands-on experience building production-ready applications using AWS, Python, and Machine Learning.
                Currently completing MSc Computer Science at University of East London with <span className="text-gradient font-semibold">immediate availability</span> for full-time roles.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                Ready to contribute from day one with practical experience in <span className="text-gradient font-semibold">AWS Lambda, EC2, S3, and SageMaker</span>.
                Passionate about solving technical challenges with modern tech stack including Python, JavaScript, React, Node.js, Docker, and Kubernetes.
              </p>
            </div>

            {/* Career Journey */}
            <div className="glass-effect rounded-3xl p-8 interactive-card">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full premium-gradient flex items-center justify-center">
                  <span className="text-white text-xl">💼</span>
                </div>
                <h3 className="text-2xl font-bold text-white design-heading">Recent Achievements</h3>
              </div>

              <div className="space-y-8">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-bold text-white mb-2">Data Analyst</h4>
                  <p className="text-purple-300 font-semibold mb-1">Morae</p>
                  <p className="text-white/60 mb-3">Jul 2022 - Sep 2024 • 2 yrs 2 mos</p>
                  <p className="text-white/80">
                    Analyzed complex datasets using Python and SQL. Automated processes reducing manual work by 30%.
                    Built dashboards and managed databases with 10,000+ records ensuring data integrity.
                  </p>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-bold text-white mb-2">Operations Analyst</h4>
                  <p className="text-blue-300 font-semibold mb-1">Sagility (formerly Hinduja Global Solutions)</p>
                  <p className="text-white/60 mb-3">Jul 2021 - Jul 2022 • 1 yr</p>
                  <p className="text-white/80">
                    Processed high-volume data with 99% accuracy. Developed process improvements increasing efficiency by 25%.
                    Created documentation and collaborated with cross-functional teams on complex issues.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-6">
                  <h4 className="text-xl font-bold text-white mb-2">MSc Computer Science</h4>
                  <p className="text-green-300 font-semibold mb-1">University of East London</p>
                  <p className="text-white/60 mb-3">Sep 2024 - Jan 2026 (Expected)</p>
                  <p className="text-white/80">
                    Advanced studies in AWS Cloud Computing, AI, Machine Learning, and Big Data Analytics.
                    Building real-world projects including serverless applications and ML prediction models.
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
                <span className="text-2xl mr-3">🎓</span>
                Certifications
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