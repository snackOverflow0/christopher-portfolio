
import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Database,
  Mail,
  Menu,
  Moon,
  Sun,
  Terminal,
  X,
} from 'lucide-react'
import './App.css'

const navigation = [
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Highlights', href: '#highlights' },
  { label: 'Community', href: '#community' },
]

const technologies = ['TypeScript', 'Node.js', 'Express', 'React', 'PostgreSQL']

const projects = [
  {
    number: '01',
    name: 'StreamFlix',
    category: 'FULL-STACK APPLICATION',
    description:
      'A streaming platform focused on authentication, profiles, subscriptions, and content discovery.',
    stack: ['React', 'TypeScript', 'Supabase'],
    icon: Code2,
  },
  {
    number: '02',
    name: 'Weather Journal API',
    category: 'BACKEND ENGINEERING',
    description:
      'A weather API exploring external integrations, persistent data, and clean server-side architecture.',
    stack: ['Node.js', 'TypeScript', 'PostgreSQL'],
    icon: Database,
  },
  {
    number: '03',
    name: 'Developer Portfolio',
    category: 'WEB DEVELOPMENT',
    description:
      'A personal space for sharing projects, technical growth, and the things I build.',
    stack: ['React', 'Vite', 'Tailwind CSS'],
    icon: Terminal,
  },
]

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={`site-shell ${darkMode ? 'dark' : 'light'}`}>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Home" onClick={closeMenu}>
          <span className="brand-mark">C.</span>
          <span className="brand-name">christopher<span className="brand-dot">.</span></span>
        </a>

        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.label} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <span className="nav-divider" />
          <button
            className="theme-toggle mobile-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            type="button"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle desktop-theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'}
            type="button"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <a className="header-contact" href="mailto:christopher.castelo@example.com">
            Let&apos;s talk <ArrowUpRight size={15} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-topline">
            <span className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES</span>
            <span className="hero-location">BASED IN THE PHILIPPINES <span>↗</span></span>
          </div>

          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-greeting">Hey there, I&apos;m</p>
              <h1>
                Christopher
                <br />
                <span>Castelo.</span>
              </h1>
              <div className="hero-role">
                <span className="role-line" />
                <p>Full Stack Developer <span>·</span> Backend-focused</p>
              </div>
              <p className="hero-description">
                I build thoughtful digital experiences and reliable backend
                systems. I care about clean code, solving real problems, and
                turning ideas into products people can use.
              </p>

              <div className="hero-actions">
                <a className="button-primary" href="#projects">
                  Explore my work <ArrowDownRight size={17} />
                </a>
                <a className="button-secondary" href="mailto:christopher.castelo@example.com">
                  Get in touch <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="social-links" aria-label="Social links">
                <a
                  href="https://github.com/snackOverflow0"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.51-1.29-1.25-1.63-1.25-1.63-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.22 1.16-3-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.1-1.45 3.05-1.15 3.05-1.15.61 1.55.23 2.7.11 2.98.72.78 1.16 1.78 1.16 3 0 4.27-2.6 5.21-5.08 5.49.4.35.76 1.02.76 2.06v3.1c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.9H4.96V9.34h2.97v9.56ZM6.45 8.03a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM19.04 18.9h-2.97v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.76V9.34h2.85v1.3h.04c.4-.75 1.37-1.55 2.82-1.55 3.01 0 3.57 1.98 3.57 4.56v5.25Z" />
                  </svg>
                </a>

                <a href="mailto:christopher.castelo@example.com" aria-label="Email">
                  <Mail size={18} />
                </a>

                <span className="social-caption">FIND ME AROUND THE WEB</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-glow" />
              <div className="profile-card">
                <div className="profile-card-top">
                  <span className="profile-label">DEVELOPER PROFILE</span>
                  <span className="profile-indicator"><span /> ONLINE</span>
                </div>
                <div className="profile-monogram">CC<span>.</span></div>
                <p className="profile-card-name">Christopher Castelo</p>
                <p className="profile-card-role">Building things for the web.</p>
                <div className="profile-card-bottom">
                  <span><Code2 size={14} /> FRONTEND</span>
                  <span><Database size={14} /> BACKEND</span>
                </div>
              </div>
              <div className="floating-tag floating-tag-top"><Code2 size={15} /> Clean code</div>
              <div className="floating-tag floating-tag-bottom"><Database size={15} /> Solid foundations</div>
              <span className="visual-coordinate">14°35&apos; N / 121°00&apos; E</span>
            </div>
          </div>

          <div className="hero-bottom">
            <div className="tech-intro">
              <span className="tech-overline">MY TOOLKIT</span>
              <span className="tech-caption">Tools I use to bring ideas to life</span>
            </div>
            <div className="tech-list">
              {technologies.map((technology) => (
                <span className="tech-pill" key={technology}>{technology}</span>
              ))}
            </div>
            <a href="#projects" className="scroll-cue" aria-label="Scroll to projects">
              <ArrowDownRight size={19} />
            </a>
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <div className="section-heading">
            <div>
              <p className="eyebrow">A FEW THINGS I&apos;VE BUILT</p>
              <h2>Selected <span>work.</span></h2>
            </div>
            <a className="text-link" href="https://github.com/snackOverflow0" target="_blank" rel="noreferrer">
              More on GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => {
              const ProjectIcon = project.icon
              return (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <ProjectIcon size={21} strokeWidth={1.5} />
                  </div>
                  <p className="project-category">{project.category}</p>
                  <h3>{project.name}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-stack">
                    {project.stack.map((item) => <span key={item}>{item}</span>)}
                  </div>
                  <a
                    href="https://github.com/snackOverflow0"
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                    aria-label={`View ${project.name} on GitHub`}
                  >
                    View project <ArrowRight size={16} />
                  </a>
                </article>
              )
            })}
          </div>
        </section>

        <section className="about-section section-wrap" id="experience">
          <div className="about-label">
            <p className="eyebrow">A LITTLE ABOUT ME</p>
            <h2>Curious by nature.<br /><span>Builder by choice.</span></h2>
          </div>
          <div className="about-copy">
            <p>
              I&apos;m a developer focused on building a strong foundation in
              full-stack engineering, with a particular interest in backend
              architecture, APIs, databases, and authentication.
            </p>
            <p>
              I learn by building real projects, testing what I write, and
              improving each iteration. My goal is to create software that is
              maintainable, useful, and ready to grow.
            </p>
            <a className="text-link" href="https://github.com/snackOverflow0" target="_blank" rel="noreferrer">
              Follow my journey <ArrowUpRight size={16} />
            </a>
          </div>
        </section>

        <section className="small-sections section-wrap" id="highlights">
          <div>
            <p className="eyebrow">WHAT I VALUE</p>
            <h2>Good software is built with <span>intention.</span></h2>
          </div>
          <div className="value-list">
            <div><span>01</span><p>Clarity over unnecessary complexity</p></div>
            <div><span>02</span><p>Learning through real-world projects</p></div>
            <div><span>03</span><p>Reliable, maintainable code</p></div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="community">
          <p className="eyebrow">HAVE SOMETHING IN MIND?</p>
          <h2>Let&apos;s build something<br /><span>meaningful.</span></h2>
          <a className="button-primary" href="mailto:christopher.castelo@example.com">
            Say hello <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home">
          <span className="brand-mark">C.</span>
          <span className="brand-name">christopher<span className="brand-dot">.</span></span>
        </a>
        <p>Designed with care. Built with React.</p>
        <a href="#home" className="back-to-top">BACK TO TOP ↑</a>
        <span className="copyright">© {new Date().getFullYear()} Christopher Castelo</span>
      </footer>
    </div>
  )
}

export default App
