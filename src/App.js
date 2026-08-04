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
    title: 'Enterprise API Integration & RAG Pipeline',
    description:
      'A production REST API pipeline with audit logging, role-based access tiers, PII redaction, cloud-hosted SQL storage, and an operational runbook for an AI-backed enterprise workflow.',
    category: 'AI Integration & APIs',
    tags: ['Python', 'RAG', 'PostgreSQL', 'Docker'],
    link: '#contact',
    linkLabel: 'Discuss this system',
    glyph: 'RAG',
    color: 'blue',
    featured: true,
  },
  {
    number: '02',
    title: 'Cloud-Based Multi-Tenant SaaS Platform',
    description:
      'A subscription-aware SaaS platform spanning React and Next.js dashboards, a FastAPI backend, PostgreSQL, JWT/OAuth 2.0, RBAC, and containerized CI/CD on Azure and AWS.',
    category: 'Full-Stack & Cloud',
    tags: ['React', 'FastAPI', 'Azure / AWS', 'CI/CD'],
    link: '#contact',
    linkLabel: 'Discuss this platform',
    glyph: 'SaaS',
    color: 'yellow',
    featured: false,
  },
  {
    number: '03',
    title: 'Predictive ML Decision-Support Application',
    description:
      'An end-to-end transportation predictive-maintenance tool with a React interface, Python services, and AWS data layers, validating model outputs against real operational outcomes.',
    category: 'Applied Machine Learning',
    tags: ['Python', 'SQL', 'React', 'AWS'],
    link: '#contact',
    linkLabel: 'Discuss this application',
    glyph: 'ML',
    color: 'green',
    featured: false,
  },
];

const experience = [
  {
    company: 'Handshake',
    role: 'AI Models Evaluation Analyst · Remote, United States',
    period: 'Mar 2026 — Present',
    accent: 'red',
    points: [
      'Design and apply evaluation rubrics, scoring criteria, and structured preference data to benchmark Gemini, Claude, and GPT-4o across reasoning, code generation, debugging, and agentic workflows.',
      'Perform trace-level analysis of multi-step agent reasoning and tool-use behavior to identify failure modes, hallucination patterns, and gaps in user-perceived quality.',
      'Conduct side-by-side experiments and gap analyses across model versions, documenting reproducible findings and audit trails that inform prompts, evaluation criteria, and safety guardrails.',
      'Collaborate with evaluation, data, and engineering stakeholders to translate recurring failures into benchmark refinements and training-data feedback.',
    ],
  },
  {
    company: 'Excelerate',
    role: 'AI Engineer · Remote',
    period: 'May 2025 — Feb 2026',
    accent: 'blue',
    points: [
      'Built cloud-based full-stack applications with React and Next.js front ends, FastAPI REST backends, and PostgreSQL and Redis data layers on Azure and AWS.',
      'Designed REST, GraphQL, and webhook integrations with JWT/OAuth 2.0 authentication and role-based access control.',
      'Delivered a production RAG pipeline and Claude, GPT-4o, and LangChain integrations with audit logging, PII redaction, and tiered access controls.',
      'Provisioned infrastructure with Terraform and automated GitHub Actions CI/CD to improve environment consistency and release speed.',
    ],
  },
  {
    company: 'New York State Dept. of Transportation',
    role: 'Python Developer · Albany, NY',
    period: 'Jun 2024 — May 2025',
    accent: 'green',
    points: [
      'Developed decision-support applications with Python services, SQL/PostgreSQL data layers, and React dashboards integrated with state-level enterprise systems.',
      'Optimized SQL queries, stored procedures, and AWS data pipelines, improving query throughput by 40% with vectorized processing and partition-aware joins.',
      'Operated AWS ECS, Lambda, and RDS infrastructure at 99.9% uptime through capacity planning, monitoring, and incident response.',
      'Partnered with analysts, data teams, and IT leadership to scope and ship features from ambiguous, open-ended requirements.',
    ],
  },
  {
    company: 'Apollo Home Healthcare Ltd.',
    role: 'Back-End Developer — API Engineering',
    period: 'Mar 2022 — Jun 2023',
    accent: 'yellow',
    points: [
      'Built NLP-powered document processing systems with Python and Hugging Face Transformers, reducing manual intake and claims-processing time by 60%.',
      'Designed and tuned FastAPI services handling 50K+ records using indexing, query optimization, and caching.',
      'Maintained REST integrations with enterprise patient-management systems for dependable healthcare workflows.',
    ],
  },
];

const skillGroups = [
  {
    title: 'AI/ML Evaluation',
    index: 'A',
    color: 'yellow',
    skills: ['LLM Benchmarking', 'Evaluation Rubrics', 'Model-Based Judging', 'Preference Data', 'Agent Trace Analysis', 'Gap Analysis'],
  },
  {
    title: 'Languages & Back-End',
    index: 'B',
    color: 'blue',
    skills: ['Python / FastAPI / Flask', 'C# / .NET', 'RESTful APIs', 'Microservices', 'PostgreSQL / T-SQL / MySQL', 'Redis / ORM'],
  },
  {
    title: 'Front-End Engineering',
    index: 'C',
    color: 'green',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5 / CSS3', 'Responsive Design'],
  },
  {
    title: 'Cloud & Distributed Systems',
    index: 'D',
    color: 'red',
    skills: ['AWS ECS / Lambda / RDS', 'AWS S3 / EC2 / VPC / IAM', 'Azure App Services', 'Azure Functions / SQL / DevOps', 'GCP / Vertex AI', 'High-Availability Services'],
  },
  {
    title: 'DevOps & Tooling',
    index: 'E',
    color: 'blue',
    skills: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions CI/CD', 'Datadog', 'Structured Logging'],
  },
  {
    title: 'AI Integration',
    index: 'F',
    color: 'green',
    skills: ['Anthropic Claude API', 'OpenAI GPT-4o', 'Google Gemini', 'LangChain', 'RAG Pipelines', 'GraphQL / Webhooks'],
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
              <span className="eyebrow">AI/ML evaluation + software engineering</span>
              <span className="issue">Issue No. 01</span>
            </div>

            <h1>
              I EVALUATE<br />
              <span className="highlight highlight-blue">FRONTIER AI</span><br />
              &amp; BUILD SYSTEMS.
            </h1>

            <p className="hero-intro">
              I am Varun Jose Madanu — a software engineer with 4+ years building production systems,
              evaluating frontier models, and shipping full-stack AI applications across Azure and AWS.
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
              <p><strong>4+ years</strong> across AI evaluation, APIs, cloud platforms, and production software.</p>
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
            <span>LLM evaluation frameworks</span>
            <span>Agentic trace analysis</span>
            <span>Production RAG pipelines</span>
            <span>Cloud-native SaaS platforms</span>
          </div>
          <div className="traffic-lights" aria-hidden="true"><span /><span /><span /></div>
        </div>

        <section className="projects-section editorial-section" id="projects">
          <SectionHeading
            kicker="Selected work / 01—03"
            title="PRODUCTION SYSTEMS BEYOND THE DEMO"
            note="Résumé-backed work across enterprise AI integration, multi-tenant SaaS, and predictive decision support."
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
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <a href={project.link}>{project.linkLabel} <ArrowIcon /></a>
                </div>
              </article>
            ))}
          </div>

          <div className="project-grid project-grid--two">
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
                <a href={project.link}>{project.linkLabel} <ArrowIcon /></a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section editorial-section" id="about">
          <div className="about-quote">
            <span className="hand-note">THE SHORT VERSION →</span>
            <h2>I MAKE FRONTIER AI <span>MEASURABLE</span> AND PRODUCTION SYSTEMS <span>DEPENDABLE.</span></h2>
            <ScribbleArrow />
          </div>
          <div className="about-profile">
            <div className="about-story">
              <span className="section-kicker">About / the longer version</span>
              <p>
                I design evaluation rubrics, scoring frameworks, preference-data workflows, and trace-level analyses
                that expose how frontier language models reason, use tools, and fail.
              </p>
              <p>
                That evaluation depth is grounded in full-stack delivery: Python and FastAPI services, React and Next.js
                applications, SQL and NoSQL data layers, RAG pipelines, and distributed systems on Azure and AWS.
              </p>
              <a className="text-link" href="mailto:varunjosemadanu@gmail.com">Start a conversation <ArrowIcon /></a>
            </div>
          </div>
          <div className="fact-strip">
            <div><strong>4+</strong><span>Years building production systems</span></div>
            <div><strong>40%</strong><span>Higher query throughput</span></div>
            <div><strong>99.9%</strong><span>Production uptime</span></div>
            <div><strong>60%</strong><span>Less manual processing</span></div>
          </div>
        </section>

        <section className="experience-section editorial-section" id="experience">
          <SectionHeading
            kicker="Professional log / 2022—Present"
            title="EXPERIENCE IN THE FIELD"
            note="Open each role for résumé-aligned details spanning frontier-model evaluation, AI engineering, cloud applications, and API systems."
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
            kicker="Toolbox / résumé aligned"
            title="EVALUATION DEPTH, FULL-STACK RANGE"
            note="The evaluation methods, languages, platforms, integrations, and infrastructure I use across the AI product lifecycle."
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
            <span>LLM EVALUATION</span><i>✦</i><span>PYTHON</span><i>✦</i><span>FASTAPI</span><i>✦</i><span>REACT</span><i>✦</i><span>CLOUD SYSTEMS</span>
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
            <p>I am open to ambitious AI evaluation and software engineering work with thoughtful teams building systems that must perform reliably.</p>
            <div className="contact-direct">
              <a href="mailto:varunjosemadanu@gmail.com">varunjosemadanu@gmail.com</a>
              <a href="tel:+15185964160">+1 (518) 596-4160</a>
              <a href="https://www.linkedin.com/in/varun-jose-madanu/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
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
        <p>Frontier AI evaluation, full-stack systems, and reliable software.</p>
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
