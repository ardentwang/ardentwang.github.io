import Navbar from "@/components/Navbar"
import Link from "next/link"
import Image from "next/image"
import SocialButtons from "@/components/contact-components/SocialButtons"

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
                  Arden Wang
                </span>
                <br />
                <span className="text-[#2d2d2d] dark:text-[#ca2a2a]">Full-Stack Engineer</span>
              </h1>
              <p className="text-xl md:text-2xl text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 mb-8 max-w-3xl mx-auto leading-relaxed">
                Building innovative web applications and AI-powered solutions that solve real problems. 
                Currently generating $5.1K+ MRR across multiple projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/projects" className="px-8 py-4 bg-[#ff7979] dark:bg-[#342e2e] rounded-full text-white dark:text-[#ca2a2a] font-semibold hover:scale-105 transition-transform shadow-xl shadow-[#ff7979]/25 dark:shadow-[#342e2e]/25">
                  View My Work
                </Link>
                <Link href="/contact" className="px-8 py-4 border-2 border-[#ff7979] dark:border-[#342e2e] rounded-full text-[#ff7979] dark:text-[#342e2e] font-semibold hover:bg-[#ff7979] dark:hover:bg-[#342e2e] hover:text-white dark:hover:text-[#ca2a2a] transition-colors">
                  Get In Touch
                </Link>
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
                I&#39;m a passionate full-stack engineer specializing in building scalable web applications 
                and AI-powered platforms. With expertise in modern technologies like Next.js, TypeScript, 
                and OpenAI, I transform complex problems into elegant solutions.
              </p>
              <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-lg leading-relaxed mb-8">
                Currently working on multiple successful projects including AI Admits (EdTech), 
                BuyHomePro (Real Estate), and BadgerBash (Gaming). I believe in building products 
                that make a real impact on users&#39; lives.
              </p>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Supabase', 'OpenAI API', 'Prisma', 'Tailwind CSS'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 border border-[#ff7979]/30 dark:border-[#342e2e]/30 rounded-full text-[#ff7979] dark:text-[#342e2e] text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#ff7979]/20 dark:from-[#342e2e]/20 to-[#ff7979]/5 dark:to-[#342e2e]/5 rounded-3xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-2xl shadow-xl overflow-hidden relative">
                  <Image 
                    src="/home/profile.png" 
                    alt="Arden Wang"
                    fill
                    className="object-cover"
                    priority
                  />
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
            {/* AI Admits */}
            <Link href="/projects#ai-admits" className="group relative">
              <div className="bg-white dark:bg-[#ca2a2a]/10 rounded-2xl p-6 border border-gray-200 dark:border-[#342e2e]/30 hover:border-[#ff7979]/50 dark:hover:border-[#342e2e]/50 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-[#F59E0B]/20 to-[#F59E0B]/5 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#F59E0B]">AI</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] dark:text-[#ca2a2a] mb-3">AI Admits</h3>
                <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-sm mb-4">
                  AI-powered college admissions platform with $1.1K+ MRR, helping 400+ students with essays and applications.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">EdTech</span>
                  <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">OpenAI</span>
                </div>
              </div>
            </Link>

            {/* BuyHomePro */}
            <Link href="/projects#buyhome-pro" className="group relative">
              <div className="bg-white dark:bg-[#ca2a2a]/10 rounded-2xl p-6 border border-gray-200 dark:border-[#342e2e]/30 hover:border-[#ff7979]/50 dark:hover:border-[#342e2e]/50 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-[#10B981]/20 to-[#10B981]/5 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#10B981]">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] dark:text-[#ca2a2a] mb-3">BuyHomePro</h3>
                <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-sm mb-4">
                  AI real estate platform saving buyers $1M+ through intelligent property insights and agent connections.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">SaaS</span>
                  <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">Real Estate</span>
                </div>
              </div>
            </Link>

            {/* BadgerBash */}
            <Link href="/projects#badger-bash" className="group relative">
              <div className="bg-white dark:bg-[#ca2a2a]/10 rounded-2xl p-6 border border-gray-200 dark:border-[#342e2e]/30 hover:border-[#ff7979]/50 dark:hover:border-[#342e2e]/50 hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="h-48 bg-gradient-to-br from-[#8B5CF6]/20 to-[#8B5CF6]/5 rounded-xl mb-6 flex items-center justify-center">
                  <span className="text-4xl font-bold text-[#8B5CF6]">🎮</span>
                </div>
                <h3 className="text-xl font-semibold text-[#2d2d2d] dark:text-[#ca2a2a] mb-3">BadgerBash</h3>
                <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-sm mb-4">
                  Lightweight multiplayer gaming platform with 300+ games played, built without heavy game engines.
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">Gaming</span>
                  <span className="px-3 py-1 bg-[#ff7979]/10 dark:bg-[#342e2e]/20 text-[#ff7979] dark:text-[#342e2e] text-xs rounded-full font-medium">Real-time</span>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center text-[#ff7979] dark:text-[#342e2e] hover:text-[#ff5757] dark:hover:text-[#231d1d] transition-colors font-medium">
              View All Projects
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-gray-50 dark:bg-[#ca2a2a]/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d2d2d] dark:text-[#ca2a2a] mb-6">
            Let&#39;s Work Together
          </h2>
          <p className="text-[#2d2d2d]/70 dark:text-[#ca2a2a]/70 text-lg mb-8 max-w-2xl mx-auto">
            Have a project in mind? I&#39;d love to hear about it. Let&#39;s create something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-[#ff7979] dark:bg-[#342e2e] rounded-full text-white dark:text-[#ca2a2a] font-semibold hover:scale-105 transition-transform shadow-lg">
              Contact Me
            </Link>
            <SocialButtons />
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-gray-200 dark:border-[#342e2e]/30">
        <div className="max-w-6xl mx-auto text-center text-[#2d2d2d]/60 dark:text-[#ca2a2a]/60">
          <p>&copy; 2025 Arden Wang. Built with Next.js and Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;