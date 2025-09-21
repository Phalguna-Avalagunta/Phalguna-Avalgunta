export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative data-matrix">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 animate-slideUp">
          <div className="terminal-glass px-6 py-3 rounded-lg mb-8 inline-block">
            <span className="text-green-400 mono-text">$ cat about.md</span>
          </div>
          <h2 className="heading-lg text-white mb-6 design-heading">
            <span className="mono-text text-green-400"># </span>About
            <br />
            <span className="ai-text-gradient">Phalguna Avalgunta</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">

          {/* Technical Profile */}
          <div className="lg:col-span-2 space-y-12">
            <div className="terminal-glass rounded-lg p-8 neural-card">
              <div className="flex items-center gap-4 mb-6">
                <div className="terminal-glass p-3 rounded-lg">
                  <span className="text-green-400 text-xl">⚡</span>
                </div>
                <h3 className="text-xl font-bold text-white design-heading mono-text">## Profile.init()</h3>
              </div>
              <div className="mono-text text-white/90 leading-relaxed space-y-4">
                <p>
                  <span className="text-green-400">const engineer = {`{`}</span>
                  <br />
                  <span className="ml-4">name: <span className="text-orange-400">&quot;Phalguna Avalgunta&quot;</span>,</span>
                  <br />
                  <span className="ml-4">role: <span className="text-orange-400">&quot;AI/ML Engineer&quot;</span>,</span>
                  <br />
                  <span className="ml-4">specialization: [<span className="text-orange-400">&quot;Cloud Computing&quot;, &quot;Data Science&quot;</span>],</span>
                  <br />
                  <span className="ml-4">education: <span className="text-orange-400">&quot;MSc Computer Science @ UEL&quot;</span>,</span>
                  <br />
                  <span className="ml-4">availability: <span className="text-green-400">true</span>,</span>
                  <br />
                  <span className="ml-4">experience: <span className="text-blue-400">3.2</span> <span className="text-gray-400">{/* years */}</span></span>
                  <br />
                  <span className="text-green-400">{`};`}</span>
                </p>
                <p className="text-white/80">
                  Experienced data analyst transitioning to AI/ML engineering with hands-on AWS experience.
                  Currently completing advanced studies while building production-ready ML applications.
                </p>
              </div>
            </div>

            {/* Timeline */}
            <div className="terminal-glass rounded-lg p-8 neural-card">
              <div className="flex items-center gap-4 mb-8">
                <div className="terminal-glass p-3 rounded-lg">
                  <span className="text-orange-400 text-xl">📊</span>
                </div>
                <h3 className="text-xl font-bold text-white design-heading mono-text">## timeline.log</h3>
              </div>

              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-6 terminal-glass p-4 rounded-r-lg">
                  <div className="mono-text text-sm">
                    <div className="text-green-400 mb-2">[2024-09] MSc Computer Science Started</div>
                    <div className="text-white font-semibold mb-1">University of East London</div>
                    <div className="text-white/60 mb-3">Expected Jan 2026</div>
                    <div className="text-white/80 text-sm">
                      ▸ AWS Cloud Computing & Architecture<br/>
                      ▸ Machine Learning & Deep Learning<br/>
                      ▸ Big Data Analytics & Processing<br/>
                      ▸ Building production ML pipelines
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-orange-400 pl-6 terminal-glass p-4 rounded-r-lg">
                  <div className="mono-text text-sm">
                    <div className="text-orange-400 mb-2">[2022-07 → 2024-09] Data Analyst</div>
                    <div className="text-white font-semibold mb-1">Morae • Bengaluru, India</div>
                    <div className="text-white/60 mb-3">2 years 2 months</div>
                    <div className="text-white/80 text-sm">
                      ▸ Python & SQL data analysis pipelines<br/>
                      ▸ 30% automation of manual processes<br/>
                      ▸ Dashboard development & visualization<br/>
                      ▸ 10,000+ records database management
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-400 pl-6 terminal-glass p-4 rounded-r-lg">
                  <div className="mono-text text-sm">
                    <div className="text-blue-400 mb-2">[2021-07 → 2022-07] Operations Analyst</div>
                    <div className="text-white font-semibold mb-1">Sagility (HGS) • Bengaluru, India</div>
                    <div className="text-white/60 mb-3">1 year</div>
                    <div className="text-white/80 text-sm">
                      ▸ 99% accuracy in high-volume data processing<br/>
                      ▸ 25% efficiency improvement through optimization<br/>
                      ▸ API integration & workflow automation<br/>
                      ▸ Cross-team collaboration & documentation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* System Metrics */}
          <div className="space-y-8">

            {/* Performance Stats */}
            <div className="terminal-glass rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center mono-text">
                <span className="text-green-400 mr-3">⚡</span>
                performance.stats
              </h3>
              <div className="space-y-4">
                {[
                  { skill: 'Python & ML', level: 90, color: 'green' },
                  { skill: 'AWS Cloud', level: 85, color: 'orange' },
                  { skill: 'Data Analysis', level: 92, color: 'blue' },
                  { skill: 'SQL & Databases', level: 88, color: 'purple' },
                  { skill: 'React & Frontend', level: 80, color: 'cyan' },
                  { skill: 'Docker & DevOps', level: 75, color: 'yellow' }
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm mono-text">
                      <span className="text-white">{item.skill}</span>
                      <span className={`text-${item.color}-400`}>{item.level}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div
                        className="neural-gradient h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Current Focus */}
            <div className="terminal-glass rounded-lg p-6">
              <h3 className="text-lg font-bold text-white mb-6 flex items-center mono-text">
                <span className="text-blue-400 mr-3">🎯</span>
                current_focus.json
              </h3>
              <div className="space-y-4 mono-text text-sm">
                <div className="terminal-glass p-3 rounded-lg">
                  <div className="text-green-400 mb-1">education:</div>
                  <div className="text-white/80 ml-4">▸ MSc Computer Science @ UEL</div>
                  <div className="text-white/80 ml-4">▸ AWS Cloud Architecture</div>
                  <div className="text-white/80 ml-4">▸ Machine Learning Systems</div>
                </div>
                <div className="terminal-glass p-3 rounded-lg">
                  <div className="text-orange-400 mb-1">projects:</div>
                  <div className="text-white/80 ml-4">▸ E-commerce on AWS</div>
                  <div className="text-white/80 ml-4">▸ ML Prediction Models</div>
                  <div className="text-white/80 ml-4">▸ Serverless Analytics</div>
                </div>
                <div className="terminal-glass p-3 rounded-lg">
                  <div className="text-purple-400 mb-1">learning:</div>
                  <div className="text-white/80 ml-4">▸ TensorFlow & PyTorch</div>
                  <div className="text-white/80 ml-4">▸ Kubernetes & Docker</div>
                  <div className="text-white/80 ml-4">▸ Data Engineering</div>
                </div>
              </div>
            </div>

            {/* Contact Terminal */}
            <div className="terminal-glass rounded-lg p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-4 mono-text">./contact_me.sh</h3>
              <p className="text-white/70 text-sm mb-6 mono-text">
                Ready for immediate deployment to your engineering team.
              </p>
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="ai-button text-white px-6 py-3 rounded-lg mono-text text-sm w-full block text-center"
              >
                $ send_message --to=&quot;phalguna&quot;
              </a>
            </div>
          </div>
        </div>

        {/* System Status */}
        <div className="mt-20 grid md:grid-cols-4 gap-8">
          {[
            { number: '3+', label: 'years_experience', description: 'professional development', color: 'green' },
            { number: '92%', label: 'ml_accuracy', description: 'prediction models', color: 'orange' },
            { number: '30%', label: 'automation_gain', description: 'efficiency improvement', color: 'blue' },
            { number: 'AWS', label: 'cloud_platform', description: 'production ready', color: 'purple' }
          ].map((stat, index) => (
            <div key={index} className="terminal-glass rounded-lg p-6 text-center neural-card">
              <div className={`text-2xl font-bold text-${stat.color}-400 mb-2 mono-text`}>{stat.number}</div>
              <div className="text-white font-semibold mb-1 mono-text text-sm">{stat.label}</div>
              <div className="text-white/60 text-xs mono-text">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}