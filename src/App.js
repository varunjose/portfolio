import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const navItems = [
  ['Work', '#projects'],
  ['About', '#about'],
  ['Experience', '#experience'],
  ['Skills', '#skills'],
  ['Contact', '#contact'],
];

const projects = [
  {
    number: '01',
    title: 'Agentic Real-Time Streaming Intelligence',
    description:
      'A distributed RTP/UDP streaming system with packetization, observability, and sub-500ms adaptive control under changing network conditions.',
    category: 'Systems & Networking',
    tags: ['Python', 'RTP / UDP', 'Observability'],
    link: 'https://github.com/varunjose',
    color: 'blue',
    featured: true,
  },
  {
    number: '02',
    title: 'Multi-Client TCP Chat System',
    description:
      'A concurrent C/Linux chat server using BSD sockets, select() multiplexing, CRC32 error detection, and Hamming(7,4) correction.',
    category: 'Systems & Networking',
    tags: ['C', 'Linux', 'Sockets'],
    link: 'https://github.com/varunjose',
    color: 'yellow',
    featured: true,
  },
  {
    number: '03',
    title: 'OSA Prediction Inference System',
    description:
      'A TensorFlow and OpenCV desktop inference pipeline delivering sub-200ms OSA predictions from facial depth maps.',
    category: 'AI & Machine Learning',
    tags: ['TensorFlow', 'OpenCV', 'Inference'],
    link: 'https://github.com/varunjose',
    color: 'green',
  },
  {
    number: '04',
    title: 'FinanceMate',
    description:
      'A production full-stack finance app with cloud infrastructure and CI/CD that reduces release cycles from hours to minutes.',
    category: 'Full-Stack & Cloud',
    tags: ['React', 'Cloud', 'CI/CD'],
    link: 'https://github.com/varunjose/FinanceMate',
    color: 'red',
  },
  {
    number: '05',
    title: 'MobileRecommender',
    description:
      'A recommendation application built with React, backend APIs, and production-style cloud deployment patterns.',
    category: 'Full-Stack & Cloud',
    tags: ['React', 'APIs', 'Personalization'],
    link: 'https://github.com/varunjose/MobileRecommender',
    color: 'blue',
  },
];

const experience = [
  {
    company: 'Excelerate',
    role: 'Software Engineer',
    period: 'May 2024 — Dec 2025',
    accent: 'red',
    points: [
      'Designed automation tools for AI pipeline orchestration supporting 10K+ daily interactions.',
      'Built observability systems for latency, throughput, error rates, and service health.',
      'Developed scalable Python and FastAPI services with asyncio-based parallel processing.',
      'Reduced ML validation cycle time by 40% with Redis caching, Docker, and repeatable CI/CD.',
    ],
  },
  {
    company: 'NYSDOT',
    role: 'Python Developer',
    period: 'Jun 2023 — May 2024',
    accent: 'blue',
    points: [
      'Built data infrastructure pipelines for 50+ large-scale construction datasets.',
      'Automated ingestion, validation, and transformation across 50+ stakeholder workflows.',
      'Cut SQL and multiprocessing workflow execution from 45 minutes to under 10 minutes.',
    ],
  },
  {
    company: 'Cognier Insights',
    role: 'ML Engineer',
    period: 'May 2020 — Mar 2022',
    accent: 'green',
    points: [
      'Built scalable ML inference systems for an e-commerce platform serving 50K+ users.',
      'Improved model accuracy from 82% to 87% while cutting inference latency by 40%.',
      'Tracked 100+ MLflow runs and reduced model selection time by 60%.',
    ],
  },
];

const skillGroups = [
  {
    title: 'Languages & Runtime',
    index: 'A',
    color: 'yellow',
    skills: ['Python', 'Go', 'TypeScript', 'C / C++', 'SQL', 'Bash / Shell'],
  },
  {
    title: 'Systems & Infrastructure',
    index: 'B',
    color: 'blue',
    skills: ['Linux Internals', 'Kubernetes', 'Docker', 'Terraform', 'VMware vSphere', 'GitHub Actions'],
  },
  {
    title: 'AI & Machine Learning',
    index: 'C',
    color: 'green',
    skills: ['OpenAI APIs', 'LangChain', 'LangGraph', 'TensorFlow', 'RAG Pipelines', 'ChromaDB / FAISS'],
  },
  {
    title: 'Backend & Observability',
    index: 'D',
    color: 'red',
    skills: ['FastAPI', 'PostgreSQL', 'Redis', 'Asyncio', 'Distributed Tracing', 'GCP / AWS'],
  },
];

const education = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'University at Albany, SUNY',
    period: '2023 — 2025',
  },
  {
    degree: 'Bachelor of Technology, Computer Science',
    school: 'Kommuri Pratap Reddy Institute of Technology',
    period: '2018 — 2022',
  },
];

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h13M13 6l6 6-6 6" />
  </svg>
);

const Spark = ({ className = '' }) => (
  <svg className={`spark ${className}`} viewBox="0 0 100 100" aria-hidden="true">
    <path d="M50 3C54 31 69 46 97 50 69 54 54 69 50 97 46 69 31 54 3 50 31 46 46 31 50 3Z" />
  </svg>
);

const ScribbleArrow = ({ className = '' }) => (
  <svg className={`scribble-arrow ${className}`} viewBox="0 0 110 80" aria-hidden="true">
    <path d="M7 18c25-14 48-1 43 17-6 24 21 31 44 11" />
    <path d="m80 34 15 12-14 13" />
  </svg>
);

const SectionHeading = ({ kicker, title, note }) => (
  <div className="section-heading">
    <span className="section-kicker">{kicker}</span>
    <h2>{title}</h2>
    {note && <p>{note}</p>}
  </div>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formState, setFormState] = useState('idle');

  useEffect(() => {
    const selectors = [
      '.section-heading',
      '.project-card',
      '.about-quote',
      '.about-story',
      '.fact-strip > div',
      '.experience-row',
      '.skill-card',
      '.education-intro',
      '.education-list article',
      '.contact-copy',
      '.contact-form',
    ];
    const elements = document.querySelectorAll(selectors.join(','));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    elements.forEach((element, index) => {
      element.classList.add('motion-reveal');
      element.style.setProperty('--reveal-delay', `${(index % 4) * 75}ms`);
    });

    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -55px' }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const sendEmail = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setFormState('sending');

    try {
      await emailjs.sendForm('service_atopqwi', 'template_6ieuew9', form, {
        publicKey: 'vIZEPHnfw3RalneAY',
      });
      form.reset();
      setFormState('sent');
    } catch {
      setFormState('error');
    }
  };

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Varun Jose home">
          <span className="wordmark-mark" aria-hidden="true">
            <span />
            <span />
          </span>
          <span>VARUN<br />JOSE</span>
        </a>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? 'Close' : 'Menu'}
        </button>

        <nav id="primary-navigation" className={menuOpen ? 'nav-links nav-links--open' : 'nav-links'} aria-label="Primary navigation">
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>

        <a className="header-cta" href="#contact">Let&apos;s talk <ArrowIcon /></a>
      </header>

      <main id="main-content">
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow-row">
              <span className="eyebrow">A systems engineer&apos;s portfolio</span>
              <span className="issue">Issue No. 01</span>
            </div>

            <h1>
              I BUILD<br />
              <span className="highlight highlight-blue">RELIABLE</span><br />
              AI SYSTEMS.
            </h1>

            <p className="hero-intro">
              I am Varun Jose — a systems-focused software engineer building automation tooling,
              observability platforms, and resilient AI backends.
            </p>

            <div className="hero-actions">
              <a className="brutal-button brutal-button--blue" href="#projects">Explore my work <ArrowIcon /></a>
              <a
                className="brutal-button brutal-button--paper"
                href={`${process.env.PUBLIC_URL}/Varun_Jose_Madanu_AI_Evaluation.pdf`}
                target="_blank"
                rel="noreferrer"
              >
                View résumé <ArrowIcon />
              </a>
            </div>

            <div className="social-proof">
              <div className="avatar-stack" aria-hidden="true"><span>PY</span><span>AI</span><span>☁</span></div>
              <p><strong>5+ years</strong> turning complex infrastructure into dependable products.</p>
            </div>
          </div>

          <div className="hero-art" aria-label="Illustration of Varun's engineering toolkit">
            <div className="browser-illustration">
              <div className="browser-bar">
                <div><span className="dot dot-red" /><span className="dot dot-yellow" /><span className="dot dot-green" /></div>
                <span className="browser-label">varun.systems</span>
              </div>
              <div className="browser-grid">
                <div className="code-pane">
                  <span className="code-symbol">&lt;/&gt;</span>
                  <span className="code-caption">BUILD · MEASURE · IMPROVE</span>
                </div>
                <div className="signal-pane">
                  <span className="signal-sun" />
                  <svg viewBox="0 0 150 50" aria-hidden="true"><path d="M4 25c12-22 24 22 36 0s24 22 36 0 24 22 36 0 24 22 34 0" /></svg>
                </div>
                <div className="steps-pane"><span /><span /><span /><span /></div>
              </div>
            </div>
            <div className="hero-sticker"><Spark /><span>OPEN TO<br />AMBITIOUS<br />PROBLEMS</span></div>
            <ScribbleArrow className="hero-arrow" />
            <span className="doodle-x" aria-hidden="true">×</span>
          </div>
        </section>

        <div className="ticker" aria-label="Current focus areas">
          <span className="ticker-label">● NOW BUILDING</span>
          <div className="ticker-items">
            <span>Agentic AI systems</span>
            <span>High-throughput APIs</span>
            <span>Observable infrastructure</span>
            <span>Reliable ML platforms</span>
          </div>
          <div className="traffic-lights" aria-hidden="true"><span /><span /><span /></div>
        </div>

        <section className="projects-section editorial-section" id="projects">
          <SectionHeading
            kicker="Selected work / 01—05"
            title="PROJECTS BUILT FOR THE REAL WORLD"
            note="A field guide to systems, machine learning, and cloud products designed to perform beyond the demo."
          />

          <div className="featured-projects">
            {projects.filter((project) => project.featured).map((project) => (
              <article className={`project-card project-card--featured accent-${project.color}`} key={project.number}>
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  <div className="project-window">
                    <div className="mini-bar"><span /><span /><span /></div>
                    <div className="project-glyph" aria-hidden="true">
                      {project.number === '01' ? '< / >' : 'TCP'}
                    </div>
                    <div className="project-lines" aria-hidden="true"><span /><span /><span /></div>
                  </div>
                </div>
                <div className="project-copy">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link} target="_blank" rel="noreferrer">View project <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="project-grid">
            {projects.filter((project) => !project.featured).map((project) => (
              <article className={`project-card project-card--compact accent-${project.color}`} key={project.number}>
                <div className="compact-topline">
                  <span className="project-number">{project.number}</span>
                  <Spark />
                </div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.link} target="_blank" rel="noreferrer">Open case study <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section editorial-section" id="about">
          <div className="about-quote">
            <span className="hand-note">THE SHORT VERSION →</span>
            <h2>I TURN MESSY TECHNICAL PROBLEMS INTO <span>CALM, RELIABLE SYSTEMS.</span></h2>
            <ScribbleArrow />
          </div>
          <div className="about-story">
            <span className="section-kicker">About / the longer version</span>
            <p>
              Systems-focused software engineer with 5+ years of experience building production AI
              platforms, backend services, and infrastructure automation. I specialize in Python,
              Linux, observability, networking, and scalable service design.
            </p>
            <p>
              My recent work centers on reducing operational toil, improving system reliability,
              and debugging performance bottlenecks across FastAPI, Redis, Docker, Kubernetes, and cloud infrastructure.
            </p>
            <a className="text-link" href="mailto:varunjosemadanu@gmail.com">Start a conversation <ArrowIcon /></a>
          </div>
          <div className="fact-strip">
            <div><strong>5+</strong><span>Years building</span></div>
            <div><strong>10K+</strong><span>Daily interactions supported</span></div>
            <div><strong>40%</strong><span>Faster validation cycles</span></div>
            <div><strong>50+</strong><span>Data workflows automated</span></div>
          </div>
        </section>

        <section className="experience-section editorial-section" id="experience">
          <SectionHeading
            kicker="Professional log / 2020—2025"
            title="EXPERIENCE IN THE FIELD"
            note="Open each dispatch for a closer look at the systems, performance gains, and engineering decisions behind the role."
          />
          <div className="experience-list">
            {experience.map((job, index) => (
              <details className={`experience-row accent-${job.accent}`} key={job.company} open={index === 0}>
                <summary>
                  <span className="experience-index">0{index + 1}</span>
                  <span className="experience-company">{job.company}</span>
                  <span className="experience-role">{job.role}</span>
                  <span className="experience-period">{job.period}</span>
                  <span className="experience-toggle" aria-hidden="true">+</span>
                </summary>
                <div className="experience-details">
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </details>
            ))}
          </div>
        </section>

        <section className="skills-section editorial-section" id="skills">
          <SectionHeading
            kicker="Toolbox / organized by use"
            title="A PRACTICAL TECH STACK"
            note="The languages, platforms, and infrastructure I use to move from an idea to a dependable production system."
          />
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <article className={`skill-card accent-${group.color}`} key={group.index}>
                <div className="skill-card-heading"><span>{group.index}</span><h3>{group.title}</h3></div>
                <ul>{group.skills.map((skill) => <li key={skill}><span aria-hidden="true">✓</span>{skill}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="skill-marquee" aria-hidden="true">
            <span>PYTHON</span><i>✦</i><span>FASTAPI</span><i>✦</i><span>KUBERNETES</span><i>✦</i><span>AI SYSTEMS</span><i>✦</i><span>LINUX</span>
          </div>
        </section>

        <section className="education-section editorial-section" id="education">
          <div className="education-intro">
            <span className="section-kicker">Education / foundation</span>
            <h2>COMPUTER SCIENCE,<br /><span>FROM THEORY TO SYSTEMS.</span></h2>
            <div className="book-doodle" aria-hidden="true"><span /><span /><i>CS</i></div>
          </div>
          <div className="education-list">
            {education.map((item, index) => (
              <article key={item.degree}>
                <span className="education-number">0{index + 1}</span>
                <div><h3>{item.degree}</h3><p>{item.school}</p></div>
                <span className="education-period">{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">Contact / say hello</span>
            <h2>HAVE A HARD<br />PROBLEM? <span>LET&apos;S<br />BUILD.</span></h2>
            <p>I am always interested in ambitious engineering work, thoughtful teams, and systems that need to scale reliably.</p>
            <div className="contact-direct">
              <a href="mailto:varunjosemadanu@gmail.com">varunjosemadanu@gmail.com</a>
              <a href="tel:+15185964160">+1 (518) 596-4160</a>
              <a href="https://www.linkedin.com/in/varun-jose-madanu/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            </div>
            <ScribbleArrow className="contact-arrow" />
          </div>

          <form className="contact-form" onSubmit={sendEmail}>
            <div className="form-heading"><span>NEW MESSAGE</span><div aria-hidden="true"><i /><i /><i /></div></div>
            <label htmlFor="name">Your name</label>
            <input id="name" name="name" type="text" placeholder="Jane Smith" required />
            <label htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" placeholder="jane@company.com" required />
            <label htmlFor="message">What are we building?</label>
            <textarea id="message" name="message" rows="5" placeholder="Tell me about the problem, product, or role..." required />
            <button className="brutal-button brutal-button--yellow" type="submit" disabled={formState === 'sending'}>
              {formState === 'sending' ? 'Sending…' : 'Send message'} <ArrowIcon />
            </button>
            <p className={`form-status form-status--${formState}`} aria-live="polite">
              {formState === 'sent' && 'Message sent — I will get back to you soon.'}
              {formState === 'error' && 'Something went wrong. Please email me directly instead.'}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home"><span className="wordmark-mark" aria-hidden="true"><span /><span /></span><span>VARUN<br />JOSE</span></a>
        <p>Systems engineering, AI platforms, and reliable software.</p>
        <div className="footer-links">
          <a href="https://github.com/varunjose" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/varun-jose-madanu/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#home">Back to top ↑</a>
        </div>
        <span>© {new Date().getFullYear()} Varun Jose Madanu</span>
      </footer>
    </div>
  );
}

export default App;
