import ThemeToggle from "@/components/theme-toggle"
import Navbar from "@/components/Navbar"

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-[#ca2a2a] transition-colors">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="opacity-100 translate-y-0">
            <div className="text-center">
              <h1 className="text-6xl md:text-8xl font-bold mb-6">
                <span className="text-[#ff7979] dark:text-[#342e2e]">
                  Creative
                </span>
                <br />
                <span className="text-[#2d2d2d] dark:text-[#ca2a2a]">Developer</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                I craft digital experiences that blend beautiful design with powerful functionality. 
                Welcome to my corner of the internet.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="px-8 py-4 bg-[#ff7979] dark:bg-[#342e2e] rounded-full text-white dark:text-[#ca2a2a] font-semibold hover:scale-105 transition-transform shadow-xl shadow-[#ff7979]/25 dark:shadow-[#342e2e]/25">
                  View My Work
                </button>
                <button className="px-8 py-4 border-2 border-[#ff7979] dark:border-[#342e2e] rounded-full text-[#ff7979] dark:text-[#342e2e] font-semibold hover:bg-[#ff7979] dark:hover:bg-[#342e2e] hover:text-white dark:hover:text-[#ca2a2a] transition-colors">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> 

      <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-[#ca2a2a]/10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-[#ca2a2a] mb-6">
                About Me
              </h2>
              <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-lg leading-relaxed mb-6">
                I'm a passionate developer with a love for creating seamless digital experiences. 
                With expertise in modern web technologies, I bring ideas to life through clean code 
                and thoughtful design.
              </p>
              <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-lg leading-relaxed mb-8">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
                or sharing knowledge with the developer community.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 border border-[#ff7979]/30 dark:border-[#342e2e]/30 rounded-full text-[#ff7979] dark:text-[#342e2e] text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#ff7979]/20 dark:from-[#342e2e]/20 to-[#ff7979]/5 dark:to-[#342e2e]/5 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-white dark:bg-[#ca2a2a]/20 rounded-2xl shadow-xl border border-[#ff7979]/20 dark:border-[#342e2e]/20 flex items-center justify-center">
                  <span className="text-[#2d2d2d]/60 dark:text-[#ca2a2a]/60 text-lg">Your Photo Here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-[#ca2a2a] text-center mb-16">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="group relative">
                <div className="bg-white dark:bg-[#ca2a2a]/10 rounded-2xl p-6 border border-gray-200 dark:border-[#342e2e]/30 hover:border-[#ff7979]/50 dark:hover:border-[#342e2e]/50 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                  <div className="h-48 bg-gradient-to-br from-[#ff7979]/20 dark:from-[#342e2e]/20 to-[#ff7979]/5 dark:to-[#342e2e]/5 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-[#2d2d2d]/60 dark:text-[#ca2a2a]/60">Project {project}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#2d2d2d] dark:text-[#ca2a2a] mb-3">Project Title</h3>
                  <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-sm mb-4">
                    A brief description of what this project does and the technologies used to build it.
                  </p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">React</span>
                    <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">Next.js</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-[#ca2a2a]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-[#ca2a2a] mb-6">
            Let's Work Together
          </h2>
          <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:your@email.com" className="px-8 py-4 bg-[#ff7979] dark:bg-[#342e2e] rounded-full text-white dark:text-[#ca2a2a] font-semibold hover:scale-105 transition-transform shadow-lg">
              Send Email
            </a>
            <div className="flex gap-4 justify-center items-center">
              <a href="#" className="w-12 h-12 bg-white dark:bg-[#ca2a2a]/20 border-2 border-[#ff7979]/30 dark:border-[#342e2e]/30 rounded-full flex items-center justify-center text-[#ff7979] dark:text-[#342e2e] hover:bg-[#ff7979] dark:hover:bg-[#342e2e] hover:text-white dark:hover:text-[#ca2a2a] transition-colors shadow-md">
                <span className="text-sm font-medium">GH</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white dark:bg-[#ca2a2a]/20 border-2 border-[#ff7979]/30 dark:border-[#342e2e]/30 rounded-full flex items-center justify-center text-[#ff7979] dark:text-[#342e2e] hover:bg-[#ff7979] dark:hover:bg-[#342e2e] hover:text-white dark:hover:text-[#ca2a2a] transition-colors shadow-md">
                <span className="text-sm font-medium">LI</span>
              </a>
              <a href="#" className="w-12 h-12 bg-white dark:bg-[#ca2a2a]/20 border-2 border-[#ff7979]/30 dark:border-[#342e2e]/30 rounded-full flex items-center justify-center text-[#ff7979] dark:text-[#342e2e] hover:bg-[#ff7979] dark:hover:bg-[#342e2e] hover:text-white dark:hover:text-[#ca2a2a] transition-colors shadow-md">
                <span className="text-sm font-medium">TW</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200 dark:border-[#342e2e]/30">
        <div className="max-w-6xl mx-auto text-center text-[#2d2d2d]/60 dark:text-[#ca2a2a]/60">
          <p>&copy; 2025 Your Name. Built with Next.js and deployed on GitHub Pages.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;