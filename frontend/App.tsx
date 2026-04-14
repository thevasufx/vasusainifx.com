import React, { useState, useEffect } from 'react';
import { USER_DATA } from './constants';
import { AIChat } from './components/AIChat';
import { GlowCard } from './components/GlowCard';
import { SkillChart } from './components/SkillChart';
import { SparklesCore } from './components/SparklesCore';
import { StarButton } from './components/StarButton';

const CORE_COMPETENCIES = [
  {
    title: 'Data Science',
    summary: 'Data cleaning, analysis, and insight extraction for smarter decision-making.',
    points: ['EDA', 'Insight Building', 'Data Storytelling'],
  },
  {
    title: 'Web Designing',
    summary: 'Responsive interface design with intentional layout, branding, and usability.',
    points: ['Responsive UI', 'Visual Design', 'User Experience'],
  },
  {
    title: 'Data Querying',
    summary: 'Structured querying and reporting basics for dependable data access and interpretation.',
    points: ['SQL Basics', 'Filtering', 'Reporting'],
  },
  {
    title: 'Predictive Basics',
    summary: 'Core prediction concepts with an emphasis on models, evaluation, and practical understanding.',
    points: ['Regression', 'Classification', 'Evaluation'],
  },
  {
    title: 'Generative AI',
    summary: 'Prompting, AI-assisted workflows, and applied generative systems for modern products.',
    points: ['Prompt Design', 'LLM Apps', 'AI Integration'],
  },
];

// Shared Layout Components
const Section: React.FC<{ title: string; icon: string; children: React.ReactNode; id?: string }> = ({ title, icon, children, id }) => (
  <section id={id} className="py-20 px-6 max-w-6xl mx-auto opacity-0 translate-y-8 transition-all duration-1000 scroll-mt-20" ref={(el) => {
    if (el) {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          el.classList.remove('opacity-0', 'translate-y-8');
          el.classList.add('opacity-100', 'translate-y-0');
        }
      }, { threshold: 0.1 });
      observer.observe(el);
    }
  }}>
    <div className="flex items-center space-x-4 mb-12">
      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl shadow-lg flex items-center justify-center text-2xl text-white">
        {icon}
      </div>
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-100 sm:text-4xl">{title}</h2>
    </div>
    {children}
  </section>
);

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen text-gray-100">
      <video
        className="fixed inset-0 -z-20 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/CRT_FULL_CODE_02.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 -z-10 bg-black/50"></div>
      <div className="relative z-10 min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-center items-center">
          <div className="hidden md:flex space-x-4 text-xs font-medium text-gray-300">
            <StarButton
              className="text-gray-300 w-[180px] justify-center"
              textClassName="from-gray-100 to-gray-400"
              lightColor="#9ca3af"
              backgroundColor="#111827"
              duration={0.7}
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              About
            </StarButton>
            <StarButton
              className="text-gray-300 w-[180px] justify-center"
              textClassName="from-gray-100 to-gray-400"
              lightColor="#9ca3af"
              backgroundColor="#111827"
              duration={0.7}
              onClick={() => document.getElementById('academics')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Academics
            </StarButton>
            <StarButton
              className="text-gray-300 w-[180px] justify-center"
              textClassName="from-gray-100 to-gray-400"
              lightColor="#9ca3af"
              backgroundColor="#111827"
              duration={0.7}
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Projects
            </StarButton>
            <StarButton
              className="text-gray-300 w-[180px] justify-center"
              textClassName="from-gray-100 to-gray-400"
              lightColor="#9ca3af"
              backgroundColor="#111827"
              duration={0.7}
              onClick={() => document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Certifications
            </StarButton>
            <StarButton
              className="text-gray-300 w-[180px] justify-center"
              textClassName="from-gray-100 to-gray-400"
              lightColor="#9ca3af"
              backgroundColor="#111827"
              duration={0.7}
              onClick={() => document.getElementById('core-competencies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Core Competencies
            </StarButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div
        id="about"
        className="relative pt-16 pb-14 px-6 overflow-hidden min-h-[65vh] flex items-center"
      >
        <div className="absolute inset-0 bg-black/15"></div>
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-blue-900 rounded-full blur-3xl opacity-30 -mr-64 -mt-64 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-indigo-900 rounded-full blur-3xl opacity-30 -ml-32 -mb-32"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left lg:order-2">
              <div className="relative inline-block">
                <h1 className="text-3xl md:text-5xl font-black text-gray-100 mb-4 tracking-tight">
                  Hi, I'm <span className="gradient-text">{USER_DATA.name}</span>
                </h1>
                <SparklesCore
                  className="pointer-events-none absolute left-0 right-0 -bottom-2 h-6"
                  background="transparent"
                  particleColor="#60a5fa"
                  particleDensity={40}
                  minSize={0.4}
                  maxSize={1.2}
                  speed={2}
                />
              </div>
              <p className="text-base md:text-lg text-gray-300 max-w-xl font-light leading-relaxed mb-7">
                Junior Full-Stack Engineer | AI Specialist | Visual Data Designer | Data Analyst | Video Editor
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <GlowCard
                  customSize
                  glowColor="gray"
                  radius={999}
                  borderWidth={1}
                  backdrop="hsl(220 12% 16% / 0.66)"
                  borderColor="hsl(215 10% 36% / 0.9)"
                  className="rounded-full p-0 shadow-none"
                >
                  <a
                    href="#ai-twin"
                    className="px-6 py-3 text-gray-100 rounded-full text-sm font-semibold transition-all flex items-center hover:scale-105 active:scale-95"
                  >
                    <span>Get in Touch</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </GlowCard>
                <GlowCard
                  customSize
                  glowColor="gray"
                  radius={999}
                  borderWidth={1}
                  backdrop="hsl(220 12% 16% / 0.66)"
                  borderColor="hsl(215 10% 36% / 0.9)"
                  className="rounded-full p-0 shadow-none"
                >
                  <a
                    href="/vasu-resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 text-gray-100 rounded-full text-sm font-semibold transition-all flex items-center hover:scale-105 active:scale-95"
                  >
                    Resume
                  </a>
                </GlowCard>
              </div>
            </div>
            <div className="w-full flex justify-center lg:order-1">
              <div className="relative w-full max-w-[520px] h-[320px] md:h-[420px] lg:h-[480px]">
                <div className="pointer-events-none absolute inset-x-12 top-12 bottom-16 z-0 rounded-full bg-slate-200/10 blur-3xl" />
                <SparklesCore
                  className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-40 z-0"
                  background="transparent"
                  particleColor="#9ca3af"
                  particleDensity={70}
                  minSize={0.6}
                  maxSize={1.6}
                  speed={3.5}
                  moveDirection="top"
                />
                <model-viewer
                  src="/groot.glb/scene.gltf"
                  auto-rotate
                  camera-controls
                  disable-zoom
                  exposure="1.8"
                  shadow-intensity="0.85"
                  poster="/header-bg.jpg"
                  className="relative z-10 h-full w-full"
                  style={{ filter: 'saturate(1.45) contrast(1.12) brightness(1.12) drop-shadow(0 18px 30px rgba(255,255,255,0.08))' }}
                ></model-viewer>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats/Metrics Visualizations */}
      <div className="bg-black/30 py-10">
        <div className="max-w-6xl mx-auto px-6">
          <SkillChart />
        </div>
      </div>

      {/* Academics Section */}
      <Section title="Academic Performance" icon="🎓" id="academics">
        <div className="space-y-8">
          {USER_DATA.education.map((edu, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-gray-700 relative group hover:shadow-2xl transition-all duration-500">
              <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z" />
                </svg>
              </div>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-100">{edu.institution}</h3>
                  <p className="text-blue-600 font-semibold">{edu.degree}</p>
                </div>
                <div className="mt-2 md:mt-0 text-right">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">{edu.period}</span>
                  <p className="text-gray-400 text-sm mt-1">{edu.location}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-lg font-bold text-gray-200">GPA: <span className="text-blue-400">{edu.cgpa}</span></p>
              </div>
              <ul className="space-y-2">
                {edu.achievements.map((ach, i) => (
                  <li key={i} className="flex items-center text-gray-300">
                    <span className="mr-2 text-blue-500">✦</span>
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Projects Section */}
      <Section title="Projects" icon="✨" id="projects">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {USER_DATA.projects
            .filter((proj) => proj.title !== 'Quantum Ledger')
            .map((proj, idx) => (
              <div key={idx} className="group glass-panel rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-700">
                <div className="h-64 overflow-hidden relative">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <a
                      href={idx === 0 ? '/jarvis-project.pdf' : proj.link}
                      target={idx === 0 ? '_blank' : undefined}
                      rel={idx === 0 ? 'noreferrer' : undefined}
                      className="px-4 py-2 bg-gray-900 text-gray-100 rounded-lg text-sm font-bold shadow-lg hover:bg-gray-800 transition-colors"
                    >
                      View Case Study
                    </a>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">
                    {proj.title === 'Omni-Sense AI' ? 'Jarvis : Voice Assisstant' : proj.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {proj.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-xs font-semibold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </Section>
      
      {/* Certifications Section */}
      <Section title="Certifications" icon="📜" id="certifications">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {USER_DATA.certifications.map((cert, idx) => (
            <GlowCard
              key={idx}
              customSize
              glowColor={idx % 3 === 0 ? 'blue' : idx % 3 === 1 ? 'purple' : 'green'}
              className="h-full transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-widest text-blue-400 mb-3">{cert.date}</p>
              <h3 className="text-lg font-bold text-gray-100 mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-300 mb-3">{cert.issuer}</p>
              {cert.credentialId && (
                <p className="text-xs text-gray-400 mb-4">ID: {cert.credentialId}</p>
              )}
              <div className="flex flex-wrap gap-2 mb-4">
                {(cert.skills || []).map((skill, skillIdx) => (
                  <span key={skillIdx} className="px-2 py-1 bg-gray-800 text-gray-300 rounded-md text-[10px] font-semibold uppercase tracking-wide">
                    {skill}
                  </span>
                ))}
              </div>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block text-sm font-semibold text-blue-400 hover:text-blue-300"
                >
                  Open Certificate
                </a>
              )}
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Core Competencies Section */}
      <Section title="Core Competencies" icon="🧠" id="core-competencies">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {CORE_COMPETENCIES.map((item, idx) => (
            <GlowCard
              key={item.title}
              customSize
              glowColor={idx % 3 === 0 ? 'gray' : idx % 3 === 1 ? 'blue' : 'green'}
              className="h-full transition-all duration-300 hover:-translate-y-1"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-gray-400 mb-3">Core Area</p>
              <h3 className="text-xl font-bold text-gray-100 mb-3">{item.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed mb-5">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.points.map((point) => (
                  <span key={point} className="px-3 py-1 rounded-full bg-gray-900/70 border border-gray-700 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-300">
                    {point}
                  </span>
                ))}
              </div>
            </GlowCard>
          ))}
        </div>
      </Section>

      {/* Get In Touch Section */}
      <Section title="Get in Touch" icon="🤖" id="ai-twin">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-100">Let&apos;s start a conversation.</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              I&apos;ve built this AI chat channel using <strong>Google Gemini</strong> so we can connect directly, explore ideas, and talk through opportunities.
            </p>
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-sm font-medium text-gray-400 uppercase tracking-widest">Direct Conversation Channel</p>
            </div>
          </div>
          <AIChat />
        </div>
      </Section>


      {/* Footer */}
      <footer className="bg-gray-900 py-20 px-6 mt-20">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="font-black text-3xl text-white mb-8 tracking-tighter">
            {USER_DATA.name.split(' ').map(n => n[0]).join('')}<span className="text-blue-500">.</span>
          </div>
          <p className="text-gray-400 text-center max-w-md mb-10">
            Let's connect and build something extraordinary together. Available for high-impact collaborations.
          </p>
          <div className="flex space-x-6 mb-12">
            <a href={`mailto:${USER_DATA.email}`} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-all transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a href={`https://${USER_DATA.github}`} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-all transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a href={`https://${USER_DATA.linkedin}`} className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-blue-600 transition-all transform hover:-translate-y-1">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {USER_DATA.name}. All Rights Reserved.
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
};

export default App;
