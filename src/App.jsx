import React, { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
 

import {
  ArrowDown, ArrowRight, ArrowUpRight, Download, Github, Linkedin,
  Mail, Menu, X, Code2, GraduationCap, MapPin, Sparkles, ExternalLink,
  Terminal, Database, Globe, Layers3, Braces, GitBranch, Send, CheckCircle2
} from "lucide-react";

const PROFILE = {
  name: "VEMA VENKATA MANI GUPTA",
  role: "Associate Software Engineer · Python Developer",
  email: "vvmanigupta@gmail.com",
  linkedin: "https://www.linkedin.com/in/vvmanigupta",
  github: "https://github.com/VManiGupta",
  location: "Andhra Pradesh, India",
};

const projects = [
  {
    number: "01",
    name: "CampusLaunch",
    type: "Web Application",
    description: "A campus placement preparation platform designed to bring aptitude practice, coding questions, and interview resources into one place.",
    tech: ["React", "JavaScript", "HTML", "CSS"],
    icon: "CL",
    className: "project-purple",
    github: "https://github.com/VManiGupta",
    demo: "",
  },
  {
    number: "02",
    name: "BookHub",
    type: "Web Application",
    description: "An online bookstore concept with an organized catalogue and a simple, responsive browsing experience for discovering books.",
    tech: ["React", "JavaScript", "CSS"],
    icon: "BH",
    className: "project-blue",
    github: "https://github.com/VManiGupta",
    demo: "",
  },
  
];

const skillGroups = [
  { title: "Programming", icon: Braces, items: ["Python", "JavaScript", "SQL"] },
  { title: "Frontend", icon: Globe, items: ["HTML5", "CSS3", "React"] },
  { title: "Backend", icon: Terminal, items: ["Node.js", "REST API fundamentals"] },
  { title: "Database", icon: Database, items: ["MongoDB", "MySQL"] },
  { title: "Tools", icon: GitBranch, items: ["Git", "GitHub", "VS Code"] },
  { title: "Python Libraries", icon: Layers3, items: ["Pandas", "NumPy", "Scikit-learn"] },
];

const navItems = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Projects", "#projects"],
  ["Resume", "#resume"],
  ["Contact", "#contact"],
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
   const [theme, setTheme] = useState(
    () => localStorage.getItem("portfolio-theme") || "dark"
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formNotice, setFormNotice] = useState("");

  const handleContact = (event) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setFormNotice("Your email app should open with your message prepared.");
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        
<button
  type="button"
  className="theme-toggle"
  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
  aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
  title="Toggle dark and light mode"
>
  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
  <span>{theme === "dark" ? "Light" : "Dark"}</span>
</button>

        <a className="brand" href="#home" aria-label="MANI home">VEMA VENKATA MANI GUPTA<span>.</span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "nav-links nav-open" : "nav-links"} aria-label="Main navigation">
          <a className="nav-home" href="#home" onClick={closeMenu}>Home</a>
          {navItems.map(([label, href]) => (
            <a key={label} href={href} onClick={closeMenu}>{label}</a>
          ))}
        </nav>
        <a className="button button-small button-primary top-cta" href="#contact">Let's connect <ArrowUpRight size={16} /></a>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> Open to entry-level opportunities</div>
            <p className="hello"><span>✳</span> Hi, I'm</p>
            <h1>MANI GUPTA<span className="gradient-text">.</span></h1>
            <h2>Building useful software.<br /><span className="muted-heading">One thoughtful line at a time.</span></h2>
            <p className="hero-description">
              Final-year B.Tech Information Technology student (2023–2027), focused on Python,
              web development, and building practical solutions to real-world problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              
<a
  className="button button-ghost"
  href="https://drive.google.com/file/d/1hkXSjCnWzBfnY6lR9wfGJAM65x8caa2I/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Download size={17} /> Download resume
</a>

            </div>
            <div className="social-row">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
              <a href={`mailto:${PROFILE.email}`} aria-label="Email"><Mail size={18} /></a>
              <span className="social-caption">Find me online</span>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract developer workspace illustration">
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="code-window">
              <div className="window-bar"><span /><span /><span /><small>mani.py</small></div>
              <div className="code-content">
                <p><span className="code-purple">class</span> <span className="code-blue">Developer</span>:</p>
                <p className="indent"><span className="code-purple">def</span> <span className="code-yellow">build</span>(self):</p>
                <p className="indent2">skills = [</p>
                <p className="indent3"><span className="code-green">"Python"</span>,</p>
                <p className="indent3"><span className="code-green">"React"</span>,</p>
                <p className="indent3"><span className="code-green">"Problem Solving"</span></p>
                <p className="indent2">]</p>
                <p className="indent"><span className="code-purple">return</span> <span className="code-green">"keep_learning()"</span></p>
                <div className="code-cursor" />
              </div>
            </div>
            <div className="floating-chip chip-python"><span>Py</span> Python</div>
            <div className="floating-chip chip-react"><span>⚛</span> React</div>
            <div className="floating-chip chip-git"><GitBranch size={15} /> Git & GitHub</div>
            <div className="hero-art-caption"><Sparkles size={16} /> Curious mind. Practical builder.</div>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="about-stamp">
            <div className="stamp-icon"><GraduationCap size={31} /></div>
            <span className="stamp-label">CURRENT CHAPTER</span>
            <strong>B.Tech · IT</strong>
            <span className="stamp-sub">2023 — 2027</span>
            <div className="stamp-rule" />
            <span className="stamp-note">Learning today.<br />Building for tomorrow.</span>
          </div>
          <div className="about-copy">
            <SectionHeading eyebrow="A LITTLE ABOUT ME" title={<>Turning curiosity<br />into <span className="gradient-text">real solutions.</span></>} />
            <p>
              I'm a final-year Information Technology student who enjoys understanding how things work
              and turning ideas into useful applications. I am developing my foundation in software
              engineering, Python, and full-stack web development through hands-on projects.
            </p>
            <p>
              I value clean code, clear communication, continuous learning, and software that makes
              everyday tasks easier. I'm looking for opportunities to learn from a team and contribute
              to meaningful products.
            </p>
            <div className="about-facts">
              <div><Code2 size={18} /><span><strong>Developer mindset</strong><small>Build · Test · Improve</small></span></div>
              <div><MapPin size={18} /><span><strong>Based in India</strong><small>Open to opportunities</small></span></div>
            </div>
          </div>
          <aside className="values-card">
            <span className="eyebrow">WHAT DRIVES ME</span>
            {["Solving practical problems", "Learning new technologies", "Building useful applications", "Growing with a team"].map((value, i) => (
              <div className="value-line" key={value}><span>0{i + 1}</span>{value}</div>
            ))}
          </aside>
        </section>

        <section className="section-wrap section-block" id="skills">
          <SectionHeading eyebrow="MY TOOLKIT" title={<>Technologies I <span className="gradient-text">work with.</span></>} description="A growing set of tools and technologies I use to learn, build, and solve problems." />
          <div className="skills-grid">
            {skillGroups.map(({ title, icon: Icon, items }, index) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top"><span className="skill-icon"><Icon size={19} /></span><span className="skill-index">0{index + 1}</span></div>
                <h3>{title}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
          <p className="skills-footnote"><span className="status-dot" /> Always learning, always improving.</p>
        </section>

        <section className="section-wrap section-block" id="projects">
          <div className="projects-heading-row">
            <SectionHeading eyebrow="SELECTED WORK" title={<>Projects with <span className="gradient-text">purpose.</span></>} description="A selection of academic and personal projects. Repository and demo links can be updated as each project is published." />
            <a className="text-link" href={PROFILE.github} target="_blank" rel="noreferrer">View GitHub <ArrowUpRight size={16} /></a>
          </div>
          <div className="projects-grid">
            {projects.map(project => (
              <article className="project-card" key={project.number}>
                <div className={`project-preview ${project.className}`}>
                  <div className="preview-top"><span className="preview-dots"><i /><i /><i /></span><span className="preview-label">{project.type}</span></div>
                  <div className="preview-mark">{project.icon}</div>
                  <div className="preview-lines"><span /><span /><span /></div>
                  <div className="preview-glow" />
                  <span className="project-number">{project.number}</span>
                </div>
                <div className="project-body">
                  <div className="project-title-row"><h3>{project.name}</h3><ArrowUpRight size={17} /></div>
                  <p>{project.description}</p>
                  <div className="project-tags">{project.tech.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><Github size={16} /> Source code</a>
                    {project.demo ? <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ExternalLink size={14} /></a> : <span className="link-pending">Demo link to add</span>}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="project-disclaimer"><span>✳</span> Project descriptions are editable. Link each card to its actual repository and only claim features that are implemented.</div>
        </section>

        <section className="section-wrap section-block resume-section" id="resume">
          <div className="resume-copy">
            <SectionHeading eyebrow="THE NEXT STEP" title={<>A little more <span className="gradient-text">about my journey.</span></>} />
            <p>My resume brings together my education, technical skills, and project experience in one place.</p>
           
<a
  className="button button-primary"
  href="https://drive.google.com/file/d/1hkXSjCnWzBfnY6lR9wfGJAM65x8caa2I/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
>
  <Download size={17} /> Download resume <ArrowRight size={16} />
</a>

            <small className="resume-note">Add your PDF as <code>public/resume.pdf</code> to activate this button.</small>
          </div>
          <div className="resume-details">
            <div className="resume-detail"><span className="detail-icon"><GraduationCap size={20} /></span><div><small>EDUCATION</small><strong>B.Tech in Information Technology</strong><p>2023–2027 · Final year</p></div></div>
            <div className="resume-detail"><span className="detail-icon"><Code2 size={20} /></span><div><small>TECHNICAL FOCUS</small><strong>Software Development</strong><p>Python · Web Development · SQL</p></div></div>
            <div className="resume-detail"><span className="detail-icon"><Sparkles size={20} /></span><div><small>CAREER INTEREST</small><strong>Associate Software Engineer</strong><p>Learning, collaboration, and impact</p></div></div>
          </div>
        </section>

        <section className="section-wrap section-block contact-section" id="contact">
          <div className="contact-copy">
            <SectionHeading eyebrow="SAY HELLO" title={<>Let's build something <span className="gradient-text">meaningful.</span></>} />
            <p>I'm open to entry-level opportunities, collaborations, and conversations about software development. Feel free to reach out.</p>
            <a className="contact-email" href={`mailto:${PROFILE.email}`}><Mail size={18} /> {PROFILE.email} <ArrowUpRight size={15} /></a>
            <div className="contact-socials">
              <a href={PROFILE.github} target="_blank" rel="noreferrer"><Github size={17} /> GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} /> LinkedIn</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContact}>
            <div className="form-row">
              <label>Your name<input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" /></label>
              <label>Email address<input required type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} placeholder="jane@example.com" /></label>
            </div>
            <label>Message<textarea required rows="4" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} placeholder="Tell me what you have in mind..." /></label>
            <button className="button button-primary send-button" type="submit">Prepare message <Send size={16} /></button>
            {formNotice && <p className="form-notice"><CheckCircle2 size={15} /> {formNotice}</p>}
            <small className="form-help">This form opens your email application; it does not send data to a server.</small>
          </form>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home">MANI GUPTA<span>.</span></a>
        <p>Designed with intention. Built with curiosity.</p>
        <span>© {new Date().getFullYear()} MANI GUPTA</span>
      </footer>
    </div>
  );
}

export default App;
