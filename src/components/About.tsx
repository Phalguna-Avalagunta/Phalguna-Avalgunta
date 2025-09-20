export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Hire Me?</h2>
          <p className="text-blue-300 text-xl font-semibold">3+ Years Experience | Immediate Impact | London-Based</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Value Proposition */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 p-8 rounded-3xl border border-blue-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="text-4xl mr-4">💼</span>
                Ready to Deliver
              </h3>
              <div className="space-y-4">
                <p className="text-gray-200 text-lg leading-relaxed">
                  <strong className="text-blue-300">3+ years professional experience</strong> as Data Analyst with proven track record at Morae and Sagility (Hinduja Global Solutions).
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  Currently pursuing <strong className="text-purple-300">MSc Computer Science at University of East London</strong>
                  with specializations in AWS Cloud Computing, AI, and Machine Learning.
                </p>
                <p className="text-gray-200 text-lg leading-relaxed">
                  <strong className="text-green-300">London-based with full UK work authorization</strong> - ready for immediate start.
                </p>
              </div>
            </div>

            {/* Quantified Achievements */}
            <div className="bg-gradient-to-br from-green-600/20 to-emerald-600/20 p-8 rounded-3xl border border-green-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="text-4xl mr-4">📊</span>
                Proven Results
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300">30%</div>
                  <div className="text-green-200">Process Efficiency</div>
                  <div className="text-sm text-gray-400">Automation & Optimization</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-300">99%</div>
                  <div className="text-blue-200">Data Accuracy</div>
                  <div className="text-sm text-gray-400">High-Volume Processing</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300">10K+</div>
                  <div className="text-purple-200">Records Managed</div>
                  <div className="text-sm text-gray-400">Database Operations</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-300">25%</div>
                  <div className="text-orange-200">Team Efficiency</div>
                  <div className="text-sm text-gray-400">Process Improvements</div>
                </div>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-purple-600/20 to-indigo-600/20 p-8 rounded-3xl border border-purple-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="text-4xl mr-4">🎓</span>
                Education & Growth
              </h3>

              <div className="space-y-6">
                <div className="border-l-4 border-purple-400 pl-6">
                  <h4 className="text-xl font-bold text-purple-300">MSc Computer Science</h4>
                  <p className="text-white font-semibold">University of East London</p>
                  <p className="text-gray-400">September 2024 - January 2026</p>
                  <div className="mt-3">
                    <p className="text-gray-300 font-medium mb-2">Key Modules:</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm">AWS Cloud Computing</span>
                      <span className="bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm">Artificial Intelligence</span>
                      <span className="bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm">Machine Learning</span>
                      <span className="bg-orange-600/30 text-orange-200 px-3 py-1 rounded-full text-sm">Big Data Analytics</span>
                    </div>
                  </div>
                </div>

                <div className="border-l-4 border-blue-400 pl-6">
                  <h4 className="text-xl font-bold text-blue-300">BSc Computer Science</h4>
                  <p className="text-white font-semibold">Sri Venkateswara University</p>
                  <p className="text-gray-400">2018 - 2021 | India</p>
                  <p className="text-gray-300 mt-2">Foundation in algorithms, data structures, and software development</p>
                </div>
              </div>
            </div>

            {/* Certifications in Progress */}
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 p-8 rounded-3xl border border-orange-500/30 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">
                <span className="text-4xl mr-4">🏆</span>
                Certifications
              </h3>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-orange-600/20 rounded-xl">
                  <div className="bg-orange-500 text-white p-3 rounded-lg font-bold text-lg">AWS</div>
                  <div>
                    <p className="text-white font-semibold">Solutions Architect - Associate</p>
                    <p className="text-green-400 text-sm font-medium">In Progress - January 2025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-blue-600/20 rounded-xl">
                  <div className="bg-blue-500 text-white p-3 rounded-lg font-bold text-lg">AWS</div>
                  <div>
                    <p className="text-white font-semibold">Developer - Associate</p>
                    <p className="text-yellow-400 text-sm font-medium">Planned - February 2025</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-green-600/20 rounded-xl">
                  <div className="bg-green-500 text-white p-3 rounded-lg font-bold text-lg">GCP</div>
                  <div>
                    <p className="text-white font-semibold">Cloud Digital Leader</p>
                    <p className="text-green-400 text-sm font-medium">In Progress</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-green-600/20 p-12 rounded-3xl backdrop-blur-sm border border-white/10">
            <h3 className="text-4xl font-bold text-white mb-6">Ready to Make an Impact</h3>
            <p className="text-xl text-gray-200 mb-8 max-w-4xl mx-auto">
              I bring a unique combination of <strong className="text-blue-300">real-world experience</strong>,
              <strong className="text-purple-300"> advanced education</strong>, and
              <strong className="text-green-300"> immediate availability</strong> in London.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:phalguna.avalagunta252@outlook.com"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transform transition-all duration-300"
              >
                📧 Contact Me Today
              </a>
              <a
                href="tel:+447741820922"
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-xl text-lg font-bold hover:scale-105 transform transition-all duration-300"
              >
                📞 Schedule Interview
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}