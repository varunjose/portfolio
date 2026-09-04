import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const navItems = [
  ['Work', '#projects'],
  ['What I Deliver', '#story'],
  ['Capabilities', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

const projects = [
  {
    number: '01',
    title: 'Realtime Voice-Agent Test Harness',
    description:
      'An outbound patient simulator that calls a medical-office AI, stays in one of 12 test personas, handles natural turn-taking and interruptions, and saves recordings, two-sided transcripts, events, metadata, and structured evaluations.',
    category: 'Flagship · Voice AI, Agents & Evaluation',
    tags: ['Python', 'FastAPI', 'OpenAI Realtime', 'Twilio', 'WebSockets'],
    link: 'https://github.com/varunjose/PGAI-Assignment',
    linkLabel: 'Inspect the working voice-agent system',
    glyph: 'AI',
    signal: 'Production loop: scenario → live call → evidence bundle → automated evaluation.',
    color: 'blue',
    featured: true,
  },
  {
    number: '02',
    title: 'JobSignal — U.S. Jobs Aggregator',
    description:
      'A deployable service that collects fresh U.S. roles from public feeds and direct ATS connectors, normalizes them into one schema, preserves source provenance, deduplicates results, and scores profile fit.',
    category: 'Data Product, APIs & Automation',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker', 'GitHub Actions'],
    link: 'https://github.com/varunjose/JobsAggregator',
    linkLabel: 'Explore the ingestion and API architecture',
    glyph: 'API',
    signal: 'Automated pipeline: ingest → normalize → deduplicate → rank → serve every two hours.',
    color: 'green',
    featured: false,
  },
  {
    number: '03',
    title: 'Agentic Real-Time Streaming System',
    description:
      'A C++ live-video system that fragments and reassembles H.264 frames over UDP, observes latency, loss, jitter, and quality, then adapts the encoder using fixed, rule-based, learned, and hybrid controllers.',
    category: 'Agentic Control & Systems Engineering',
    tags: ['C++', 'UDP / RTP', 'OpenCV', 'H.264', 'RL Control'],
    link: 'https://github.com/varunjose/Agentic-Real-Time-Streaming-System-RL-',
    linkLabel: 'Review the adaptive control loop',
    glyph: 'RL',
    signal: 'Feedback loop: network telemetry → QoE score → bounded encoder action.',
    color: 'yellow',
    featured: false,
  },
  {
    number: '04',
    title: 'Semantic Book Recommender',
    description:
      'An NLP retrieval pipeline that represents book descriptions as embeddings, ranks them by semantic similarity, and adds emotion-aware filtering to produce more useful and explainable recommendations.',
    category: 'NLP, Embeddings & Retrieval',
    tags: ['Python', 'NLP', 'Vector Search', 'Embeddings'],
    link: 'https://github.com/varunjose/SemanticBookRecommender',
    linkLabel: 'Inspect the retrieval pipeline',
    glyph: 'NLP',
    signal: 'Retrieval loop: text → embeddings → similarity ranking → emotion filter.',
    color: 'red',
    featured: false,
  },
  {
    number: '05',
    title: 'Sleep Apnea Screening Research',
    description:
      'A computer-vision research prototype using VGG-19 transfer learning and custom CNN layers to explore non-invasive screening from facial depth maps, with preprocessing, model persistence, and interactive inference.',
    category: 'Computer Vision & Deep Learning',
    tags: ['Python', 'TensorFlow', 'VGG-19', 'OpenCV'],
    link: 'https://github.com/varunjose/SleepApneaPrediction',
    linkLabel: 'View the computer-vision workflow',
    glyph: 'CV',
    signal: 'ML lifecycle: prepare data → train → persist → run an interactive prediction.',
    color: 'blue',
    featured: false,
  },
  {
    number: '06',
    title: 'Reliable Multi-Client Chat',
    description:
      'A concurrent C/Linux chat server with public and private messaging, select()-based I/O multiplexing, persistent history, CRC32 error detection, and Hamming-code correction.',
    category: 'Reliable Network Software',
    tags: ['C', 'Linux', 'TCP Sockets', 'CRC32', 'Hamming'],
    link: 'https://github.com/varunjose/Multi-Client-Chat-System-with-Error-Detection-Correction',
    linkLabel: 'Review the network implementation',
    glyph: 'TCP',
    signal: 'Reliability layer: concurrent clients + integrity checks + recoverable transmission errors.',
    color: 'green',
    featured: false,
  },
  {
    number: '07',
    title: 'Looop Product Experience',
    description:
      'A responsive product site for an AI app builder, translating a generate, verify, and repair loop into a focused product narrative, native interface visuals, and an automated GitHub Pages delivery path.',
    category: 'AI Product UI & Frontend Delivery',
    tags: ['JavaScript', 'HTML / CSS', 'Product UX', 'GitHub Pages'],
    link: 'https://github.com/varunjose/Looop',
    linkLabel: 'See the product implementation',
    glyph: 'WEB',
    signal: 'Product layer: technical workflow → clear value story → responsive interface.',
    color: 'yellow',
    featured: false,
  },
];

const skillGroups = [
  {
    title: 'Generative AI & Agents',
    index: 'A',
    color: 'yellow',
    skills: ['LLM Applications', 'Agent Workflows', 'RAG', 'Prompt Design', 'Tool Calling', 'Realtime Voice AI'],
  },
  {
    title: 'Retrieval & Evaluation',
    index: 'B',
    color: 'blue',
    skills: ['Embeddings', 'Vector Search', 'Grounding', 'Structured Evaluation', 'Guardrails', 'Regression Testing'],
  },
  {
    title: 'Python & Backend',
    index: 'C',
    color: 'green',
    skills: ['Python', 'FastAPI', 'AsyncIO', 'REST APIs', 'WebSockets', 'Background Jobs'],
  },
  {
    title: 'ML & Data Systems',
    index: 'D',
    color: 'red',
    skills: ['PyTorch / TensorFlow', 'ML Pipelines', 'PostgreSQL', 'SQL', 'Data Validation', 'Model Inference'],
  },
  {
    title: 'Product Engineering',
    index: 'E',
    color: 'blue',
    skills: ['React', 'JavaScript / TypeScript', 'Product UX', 'Responsive UI', 'API Integration', 'Accessible Interfaces'],
  },
  {
    title: 'Reliability & Delivery',
    index: 'F',
    color: 'green',
    skills: ['AWS / GCP', 'Docker / Kubernetes', 'Observability', 'CI/CD', 'GitHub Actions', 'Latency & Cost Tuning'],
  },
];

const education = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'New Jersey Institute of Technology',
    period: 'Aug 2023 — May 2025',
    details: 'Distributed Systems · Machine Learning · NLP · Software Engineering · Database Systems · Algorithms',
  },
  {
    degree: 'Bachelor of Technology, Computer Science & Engineering',
    school: 'Kommuri Pratap Reddy Institute of Technology · Hyderabad, India',
    period: '2019 — 2023',
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
      '.story-step',
      '.fact-strip > div',
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
              <span className="eyebrow">AI/ML & software engineering · selected work</span>
              <span className="issue">Build log / 2026</span>
            </div>

            <h1>
              I BUILD AI<br />
              THAT <span className="highlight highlight-blue">WORKS</span><br />
              IN PRODUCTION.
            </h1>

            <p className="hero-intro">
              I am Varun Jose Madanu. I design and ship LLM agents, retrieval systems, realtime voice
              workflows, Python APIs, and full-stack AI products — from prototype and evaluation to deployment,
              observability, and improvement.
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
              <div className="avatar-stack" aria-hidden="true"><span>AI</span><span>API</span><span>OPS</span></div>
              <p><strong>Working proof, not just keywords:</strong> live voice automation, scheduled data pipelines, adaptive systems, ML inference, and shipped product interfaces.</p>
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
                  <span className="code-caption">OBSERVE · DECIDE · ADAPT</span>
                </div>
                <div className="signal-pane">
                  <span className="signal-sun" />
                  <svg viewBox="0 0 150 50" aria-hidden="true"><path d="M4 25c12-22 24 22 36 0s24 22 36 0 24 22 36 0 24 22 34 0" /></svg>
                </div>
                <div className="steps-pane"><span /><span /><span /><span /></div>
              </div>
            </div>
            <div className="hero-sticker"><Spark /><span>BUILD<br />MEASURE<br />IMPROVE</span></div>
            <ScribbleArrow className="hero-arrow" />
            <span className="doodle-x" aria-hidden="true">×</span>
          </div>
        </section>

        <div className="ticker" aria-label="Current focus areas">
          <span className="ticker-label">● NOW BUILDING</span>
          <div className="ticker-items">
            <span>LLM agents & RAG</span>
            <span>Realtime voice AI</span>
            <span>Python backend systems</span>
            <span>Evaluation & observability</span>
          </div>
          <div className="traffic-lights" aria-hidden="true"><span /><span /><span /></div>
        </div>

        <section className="projects-section editorial-section" id="projects">
          <SectionHeading
            kicker="Selected work / 01—07"
            title="PROOF OF WHAT I CAN BUILD"
            note="These repositories show complete engineering decisions: the problem, architecture, implementation, tradeoffs, tests, evidence, and path to deployment."
          />

          <div className="featured-projects featured-projects--single">
            {projects.filter((project) => project.featured).map((project) => (
              <article className={`project-card project-card--featured accent-${project.color}`} key={project.number}>
                <div className="project-visual">
                  <span className="project-number">{project.number}</span>
                  <div className="project-window">
                    <div className="mini-bar"><span /><span /><span /></div>
                    <div className="project-glyph" aria-hidden="true">
                      {project.glyph}
                    </div>
                    <div className="project-lines" aria-hidden="true"><span /><span /><span /></div>
                  </div>
                </div>
                <div className="project-copy">
                  <span className="project-category">{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p className="project-signal">{project.signal}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="project-grid project-grid--work">
            {projects.filter((project) => !project.featured).map((project) => (
              <article className={`project-card project-card--compact accent-${project.color}`} key={project.number}>
                <div className="compact-topline">
                  <span className="project-number">{project.number}</span>
                  <Spark />
                </div>
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-signal">{project.signal}</p>
                <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                <a href={project.link} target="_blank" rel="noreferrer">{project.linkLabel} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section editorial-section" id="story">
          <div className="about-quote">
            <span className="hand-note">WHAT I DELIVER →</span>
            <h2>I TAKE AN <span>AMBIGUOUS PROBLEM</span> TO A MEASURABLE, RELIABLE <span>PRODUCT.</span></h2>
            <ScribbleArrow />
          </div>
          <div className="about-profile">
            <div className="about-story">
              <span className="section-kicker">What I do / where I contribute</span>
              <p>
                My strongest contribution is connecting AI capability to dependable software. I can design an LLM or
                retrieval workflow, build the Python service around it, integrate data and external APIs, and add the
                evaluation, guardrails, logging, and deployment work required to operate it responsibly.
              </p>
              <p>
                I have worked across AI/ML evaluation, backend engineering, automation, data workflows, and systems
                troubleshooting. My public projects make the implementation visible; professional work is described through
                responsibilities and outcomes without exposing confidential code, customer data, or internal architecture.
              </p>
              <a className="text-link" href="https://github.com/varunjose" target="_blank" rel="noreferrer">Follow the work on GitHub <ArrowIcon /></a>
            </div>
            <div className="story-steps" aria-label="Ways Varun contributes to an engineering team">
              <article className="story-step"><span>01</span><h3>Build the intelligence</h3><p>LLM agents, RAG and semantic retrieval, voice workflows, ML inference, prompt and tool orchestration, and structured evaluation.</p></article>
              <article className="story-step"><span>02</span><h3>Engineer the system</h3><p>Async Python APIs, databases, data pipelines, integrations, Docker, cloud delivery, CI/CD, monitoring, and failure handling.</p></article>
              <article className="story-step"><span>03</span><h3>Improve the outcome</h3><p>Turn telemetry and user feedback into better accuracy, latency, reliability, cost, safety, and product clarity.</p></article>
            </div>
          </div>
          <div className="fact-strip">
            <div><strong>12</strong><span>Voice-agent scenarios implemented</span></div>
            <div><strong>2h</strong><span>Scheduled job-ingestion cadence</span></div>
            <div><strong>4</strong><span>Adaptive streaming controller modes</span></div>
            <div><strong>E2E</strong><span>From prototype to observable product</span></div>
          </div>
        </section>

        <section className="skills-section editorial-section" id="skills">
          <SectionHeading
            kicker="Capabilities / proven in the work"
            title="WHAT I CAN CONTRIBUTE ON DAY ONE"
            note="A production-focused toolkit spanning AI behavior, backend services, data, product delivery, and system reliability."
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
            <span>LLM APPLICATIONS</span><i>✦</i><span>AI AGENTS</span><i>✦</i><span>PYTHON BACKENDS</span><i>✦</i><span>RAG & EVALUATION</span><i>✦</i><span>RELIABLE SOFTWARE</span>
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
                <div>
                  <h3>{item.degree}</h3>
                  <p>{item.school}</p>
                  {item.details && <p className="education-details">{item.details}</p>}
                </div>
                <span className="education-period">{item.period}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-copy">
            <span className="section-kicker">Contact / say hello</span>
            <h2>HAVE A HARD<br />PROBLEM? <span>LET&apos;S<br />BUILD.</span></h2>
            <p>If your team needs an engineer who can reason about both model behavior and runtime behavior, I would like to hear about the system you are building.</p>
            <div className="contact-direct">
              <a href="mailto:varunjosemadanu@gmail.com">varunjosemadanu@gmail.com</a>
              <a href="tel:+15185964160">+1 (518) 596-4160</a>
              <a href="https://www.linkedin.com/in/varun-jose-madan/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
              <span>New York · NYC/NJ, remote, or relocation</span>
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
        <p>AI products engineered from idea to evaluation to reliable production.</p>
        <div className="footer-links">
          <a href="https://github.com/varunjose" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/varun-jose-madan/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="#home">Back to top ↑</a>
        </div>
        <span>© {new Date().getFullYear()} Varun Jose Madanu</span>
      </footer>
    </div>
  );
}

export default App;
