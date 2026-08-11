import React, { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

const navItems = [
  ['Work', '#projects'],
  ['How I Build', '#story'],
  ['Systems Stack', '#skills'],
  ['Education', '#education'],
  ['Contact', '#contact'],
];

const projects = [
  {
    number: '01',
    title: 'Agentic Real-Time Streaming System',
    description:
      'A C++ live-video system that fragments and reassembles H.264 frames over UDP, measures latency, loss, jitter, and QoE, then adapts bitrate, FPS, GOP, and resolution through fixed, rule-based, RL, and agentic-hybrid controllers.',
    category: 'Flagship · Agentic Systems & Networking',
    tags: ['C++', 'UDP / RTP', 'OpenCV', 'H.264', 'RL Control'],
    link: 'https://github.com/varunjose/Agentic-Real-Time-Streaming-System-RL-',
    linkLabel: 'Explore the flagship repository',
    glyph: 'RL',
    signal: 'Feedback loop: network telemetry → QoE score → bounded encoder action.',
    color: 'blue',
    featured: true,
  },
  {
    number: '02',
    title: 'Sleep Apnea Prediction from Facial Depth Maps',
    description:
      'A medical-imaging research pipeline using VGG-19 transfer learning and custom CNN layers to classify facial depth maps, with repeatable preprocessing, saved model artifacts, and an interactive prediction workflow.',
    category: 'Computer Vision & Deep Learning',
    tags: ['Python', 'TensorFlow', 'VGG-19', 'OpenCV'],
    link: 'https://github.com/varunjose/SleepApneaPrediction',
    linkLabel: 'View the computer-vision work',
    glyph: 'CV',
    signal: 'Research-only screening workflow built around non-invasive visual features.',
    color: 'green',
    featured: false,
  },
  {
    number: '03',
    title: 'Semantic Book Recommender',
    description:
      'An NLP recommendation pipeline that retrieves books by semantic meaning and adds emotion-aware filtering, turning unstructured descriptions into more personal and explainable suggestions.',
    category: 'NLP, Embeddings & Retrieval',
    tags: ['Python', 'NLP', 'Vector Search', 'Embeddings'],
    link: 'https://github.com/varunjose/SemanticBookRecommender',
    linkLabel: 'Inspect the retrieval pipeline',
    glyph: 'NLP',
    signal: 'Representation layer: text → embeddings → similarity ranking → emotion filter.',
    color: 'yellow',
    featured: false,
  },
  {
    number: '04',
    title: 'Multi-Client Chat with Error Detection & Correction',
    description:
      'A concurrent C/Linux chat system with public and private messaging, select()-based I/O multiplexing, connection history, CRC32 error detection, and Hamming-code correction.',
    category: 'Reliable Network Software',
    tags: ['C', 'Linux', 'TCP Sockets', 'CRC32', 'Hamming'],
    link: 'https://github.com/varunjose/Multi-Client-Chat-System-with-Error-Detection-Correction',
    linkLabel: 'Review the network implementation',
    glyph: 'TCP',
    signal: 'Reliability layer: concurrent clients + integrity checks + recoverable transmission errors.',
    color: 'red',
    featured: false,
  },
  {
    number: '05',
    title: 'Mobile Recommender',
    description:
      'A JavaScript product experience for exploring mobile phones by specifications and visited items, demonstrating how recommendation logic becomes a clear, decision-oriented user flow.',
    category: 'Recommendation Product',
    tags: ['JavaScript', 'Product UI', 'Personalization'],
    link: 'https://github.com/varunjose/MobileRecommender',
    linkLabel: 'Open the product repository',
    glyph: 'REC',
    signal: 'Product layer: browsing context + specifications → guided device discovery.',
    color: 'blue',
    featured: false,
  },
  {
    number: '06',
    title: 'FinanceMate',
    description:
      'A personal-finance dashboard with transaction workflows, form validation, date controls, API integration, and Chart.js visualizations built with React and Material UI.',
    category: 'Full-Stack Data Product',
    tags: ['React', 'Material UI', 'Chart.js', 'Axios'],
    link: 'https://github.com/varunjose/FinanceMate',
    linkLabel: 'View the finance product',
    glyph: 'FIN',
    signal: 'Decision layer: financial records → validated workflows → readable visual summaries.',
    color: 'green',
    featured: false,
  },
  {
    number: '07',
    title: 'Portfolio — The System You Are Using',
    description:
      'A responsive React portfolio designed as an engineering narrative, with accessible navigation, reduced-motion support, project-led storytelling, and a GitHub Pages delivery path.',
    category: 'Developer Experience & Storytelling',
    tags: ['React', 'CSS', 'Accessibility', 'GitHub Pages'],
    link: 'https://github.com/varunjose/portfolio',
    linkLabel: 'See how this portfolio is built',
    glyph: 'WEB',
    signal: 'Communication layer: technical depth → scannable evidence → a clear hiring story.',
    color: 'yellow',
    featured: false,
  },
];

const skillGroups = [
  {
    title: 'Models & Representation',
    index: 'A',
    color: 'yellow',
    skills: ['TensorFlow / PyTorch', 'Transfer Learning', 'CNNs', 'Embeddings', 'Vector Search', 'Recommender Systems'],
  },
  {
    title: 'Agentic Decision Systems',
    index: 'B',
    color: 'blue',
    skills: ['RL Policy Control', 'Agentic Hybrid Control', 'QoE Optimization', 'Safety Overrides', 'Evaluation Loops', 'Experimentation'],
  },
  {
    title: 'Systems & Networking',
    index: 'C',
    color: 'green',
    skills: ['C / C++', 'UDP / RTP', 'TCP Sockets', 'Linux I/O', 'H.264', 'CRC32 / Hamming'],
  },
  {
    title: 'ML & Data Engineering',
    index: 'D',
    color: 'red',
    skills: ['Python', 'Data Preprocessing', 'Model Training', 'Inference Pipelines', 'SQL', 'FastAPI / REST'],
  },
  {
    title: 'Product Engineering',
    index: 'E',
    color: 'blue',
    skills: ['React', 'JavaScript', 'Material UI', 'Chart.js', 'Responsive UI', 'Accessible Navigation'],
  },
  {
    title: 'Reliability & Delivery',
    index: 'F',
    color: 'green',
    skills: ['Latency / Drop Metrics', 'Observability', 'Docker', 'CI/CD', 'GitHub Actions', 'Reproducible Builds'],
  },
];

const education = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'University at Albany, SUNY',
    period: 'Aug 2023 — May 2025',
    details: 'Distributed Systems · Machine Learning · NLP · Software Engineering · Database Systems · Algorithms',
  },
  {
    degree: 'Bachelor of Technology, Computer Science & Engineering',
    school: 'JNTUH · Hyderabad, India',
    period: 'Mar 2018 — Jun 2022',
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
              <span className="eyebrow">AI/ML systems engineering · selected work</span>
              <span className="issue">Worklog No. 01</span>
            </div>

            <h1>
              I TURN MODELS<br />
              INTO <span className="highlight highlight-blue">WORKING</span><br />
              SYSTEMS.
            </h1>

            <p className="hero-intro">
              I am Varun Jose Madanu — an AI/ML Systems Engineer who works across the full path from
              signal and data to model decisions, reliable runtimes, measurable behavior, and usable products.
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
              <div className="avatar-stack" aria-hidden="true"><span>ML</span><span>SYS</span><span>UX</span></div>
              <p><strong>7 public repositories</strong> spanning agentic control, computer vision, semantic retrieval, networking, and product engineering.</p>
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
            <div className="hero-sticker"><Spark /><span>MODELS THAT<br />LEARN<br />SYSTEMS THAT WORK</span></div>
            <ScribbleArrow className="hero-arrow" />
            <span className="doodle-x" aria-hidden="true">×</span>
          </div>
        </section>

        <div className="ticker" aria-label="Current focus areas">
          <span className="ticker-label">● NOW BUILDING</span>
          <div className="ticker-items">
            <span>Adaptive streaming control</span>
            <span>Deep-learning inference</span>
            <span>Semantic retrieval</span>
            <span>Reliable network software</span>
          </div>
          <div className="traffic-lights" aria-hidden="true"><span /><span /><span /></div>
        </div>

        <section className="projects-section editorial-section" id="projects">
          <SectionHeading
            kicker="Selected work / 01—07"
            title="FROM SIGNALS TO DECISIONS TO PRODUCTS"
            note="Each repository shows one part of how I engineer AI/ML systems: capture the input, build the decision path, measure its behavior, and ship an interface people can use."
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
            <span className="hand-note">THE ENGINEERING THREAD →</span>
            <h2>I START WITH <span>SIGNALS</span>, BUILD THE DECISION LOOP, AND SHIP THE <span>INTERFACE.</span></h2>
            <ScribbleArrow />
          </div>
          <div className="about-profile">
            <div className="about-story">
              <span className="section-kicker">How I build / one connected system</span>
              <p>
                My strongest work sits where AI meets systems engineering. I instrument the real-world inputs — frames,
                packets, images, text, and user behavior — then design the model or control loop that turns them into a decision.
              </p>
              <p>
                The agentic streaming project makes that approach visible end to end: transport telemetry becomes a QoE score,
                the controller selects a bounded action, and the encoder adapts while the stream stays observable. The same pattern
                carries into computer vision, semantic retrieval, recommendation products, and reliable network software.
              </p>
              <a className="text-link" href="https://github.com/varunjose" target="_blank" rel="noreferrer">Follow the work on GitHub <ArrowIcon /></a>
            </div>
            <div className="story-steps" aria-label="Varun's engineering approach">
              <article className="story-step"><span>01</span><h3>Observe</h3><p>Make the input and constraints measurable: quality, latency, loss, confidence, relevance, and user intent.</p></article>
              <article className="story-step"><span>02</span><h3>Decide</h3><p>Use models, retrieval, rules, or learned policies — then put guardrails and evaluation around the decision.</p></article>
              <article className="story-step"><span>03</span><h3>Deliver</h3><p>Connect the intelligence to a reliable runtime and a product surface that makes the result useful.</p></article>
            </div>
          </div>
          <div className="fact-strip">
            <div><strong>7</strong><span>Public systems and products</span></div>
            <div><strong>4</strong><span>Controller modes in the flagship system</span></div>
            <div><strong>3</strong><span>Layers: intelligence, runtime, product</span></div>
            <div><strong>1</strong><span>End-to-end engineering mindset</span></div>
          </div>
        </section>

        <section className="skills-section editorial-section" id="skills">
          <SectionHeading
            kicker="Systems stack / proven in the work"
            title="THE STACK BEHIND THE REPOSITORIES"
            note="A practical toolkit organized by the job it performs — modeling, control, transport, data, product delivery, and reliability."
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
            <span>AI/ML SYSTEMS</span><i>✦</i><span>AGENTIC CONTROL</span><i>✦</i><span>COMPUTER VISION</span><i>✦</i><span>SEMANTIC RETRIEVAL</span><i>✦</i><span>RELIABLE SOFTWARE</span>
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
              <span>Albany, NY · Open to relocate</span>
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
        <p>AI/ML systems engineered from signal to decision to product.</p>
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
