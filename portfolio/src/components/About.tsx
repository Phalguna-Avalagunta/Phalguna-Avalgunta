export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
          <p className="text-purple-300 text-lg">Get to know who I am and what drives me</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m currently pursuing my Master of Science in Computer Science at the University of East London,
              where I&apos;m deepening my expertise in cutting-edge technologies that shape our digital future.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My passion lies at the intersection of Artificial Intelligence and Cloud Computing. I believe
              these technologies have the power to transform industries and solve complex real-world problems.
              From machine learning algorithms to scalable cloud architectures, I&apos;m constantly exploring
              innovative solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I thrive on challenges that push the boundaries of what&apos;s possible, whether it&apos;s developing
              intelligent systems, optimizing cloud infrastructure, or creating seamless user experiences
              that leverage the latest AI capabilities.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 p-8 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Education & Focus</h3>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-400 pl-4">
                <h4 className="text-lg font-semibold text-purple-300">MSc Computer Science</h4>
                <p className="text-gray-300">University of East London</p>
                <p className="text-gray-400 text-sm">Current Student</p>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold text-white mb-4">Key Areas of Interest</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Machine Learning & Deep Learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Cloud Architecture & DevOps
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Data Science & Analytics
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                    Software Engineering
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 p-6 rounded-2xl backdrop-blur-sm border border-purple-500/20">
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">MSc</div>
              <div className="text-gray-400 text-sm">Student</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">AI</div>
              <div className="text-gray-400 text-sm">Passionate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-300">Cloud</div>
              <div className="text-gray-400 text-sm">Focused</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}