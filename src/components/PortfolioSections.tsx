import { useEffect, useState, type FormEvent, type ReactNode } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Boxes,
  Check,
  ChevronDown,
  Code2,
  ExternalLink,
  Github,
  Mail,
  MessageCircle,
  MoveUpRight,
  Terminal,
} from 'lucide-react';
import { experience, profile, projects, roles, skillGroups, socialLinks } from '../data/portfolio';

export function SectionHeading({
  index,
  eyebrow,
  title,
  children,
  light = false,
}: {
  index: string;
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`section-heading ${light ? 'section-heading-light' : ''}`}>
      <div><div className="section-eyebrow"><span>{index}</span><i />{eyebrow}</div><h2>{title}</h2></div>
      {children && <p>{children}</p>}
    </div>
  );
}

export function HeroSection() {
  const [role, setRole] = useState('');

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRole(roles[0]);
      return;
    }
    let roleIndex = 0;
    let characterIndex = 0;
    let deleting = false;
    let timeout = 0;
    const tick = () => {
      const current = roles[roleIndex];
      if (!deleting) {
        characterIndex += 1;
        setRole(current.slice(0, characterIndex));
        if (characterIndex === current.length) {
          deleting = true;
          timeout = window.setTimeout(tick, 1300);
          return;
        }
      } else {
        characterIndex -= 1;
        setRole(current.slice(0, characterIndex));
        if (characterIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
        }
      }
      timeout = window.setTimeout(tick, deleting ? 38 : 78);
    };
    timeout = window.setTimeout(tick, 380);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero-grid" aria-hidden="true" /><div className="hero-glow" aria-hidden="true" />
      <div className="hero-layout">
        <div className="hero-copy">
          <p className="hero-kicker"><span className="availability-dot" /> BUILDING SOFTWARE THAT FITS THE WORK</p>
          <h1>Hi, I’m {profile.name.split(' ')[0]}.<br /><span>I make ideas</span><br /><em>work in code.</em></h1>
          <p className="hero-role-label">I’m a <span className="typing-role" aria-hidden="true">{role}<i aria-hidden="true" /></span><span className="sr-only">{roles.join(', ')}</span></p>
          <p className="hero-intro">I connect business needs with software delivery—building and guiding practical applications for service, logistics, engineering and operations teams.</p>
          <div className="hero-actions"><a className="button button-primary" href="#projects">View projects <ArrowDown size={15} /></a><a className="button button-outline" href="/yash-parte-resume.txt" download>Download resume <ArrowDown size={14} /></a></div>
          <nav className="hero-socials" aria-label="Social profiles"><a href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ExternalLink size={11} /></a>{socialLinks.filter((item) => item.label !== 'GitHub').map((item) => <a href={item.href} target="_blank" rel="noreferrer" key={item.label}>{item.label}<ExternalLink size={11} /></a>)}<a href={`mailto:${profile.email}`}><Mail size={15} /> Email</a></nav>
        </div>
        <div className="hero-terminal" aria-hidden="true">
          <div className="terminal-top"><div className="window-dots"><i /><i /><i /></div><span>yash@portfolio ~ 01</span><Terminal size={15} /></div>
          <div className="terminal-code"><span className="code-comment">// turn a real need into something useful</span><br /><b>const</b> solution = <b>await</b> build({'{'}<br /><span className="code-indent">problem: <i>'everyday friction'</i>,</span><br /><span className="code-indent">people: <i>'the ones doing the work'</i>,</span><br /><span className="code-indent">approach: <i>'listen, design, ship'</i></span><br />{'}'});<br /><br /><span className="code-comment">// keep making it better</span><br /><b>solution</b>.improve();<span className="terminal-cursor" /></div>
          <div className="terminal-status"><span><i /> AVAILABLE FOR GOOD PROBLEMS</span><span>INDIA · IST +05:30</span></div>
        </div>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><ChevronDown size={15} /></a>
    </section>
  );
}

export function CaseStudyPreview({ kind }: { kind: (typeof projects)[number]['visual'] }) {
  const previews = {
    communications: { icon: MessageCircle, label: 'CHANNELS / CONNECTED', title: 'Customer care', rows: ['WhatsApp support', 'Service desk', 'Call centre'] },
    crm: { icon: Boxes, label: 'SERVICE / OVERVIEW', title: 'Customer workspace', rows: ['Customer profile', 'Open service cases', 'Machine history'] },
    logistics: { icon: MoveUpRight, label: 'FLEET / LIVE STATUS', title: 'Shipment overview', rows: ['Pune → Mumbai', 'In transit', 'Delivery window'] },
    tracker: { icon: Code2, label: 'ENGINEERING / QUEUE', title: 'Change requests', rows: ['CDP · Product update', 'ECN · Design revision', 'Review · 4 items'] },
  };
  const preview = previews[kind];
  const Icon = preview.icon;
  return (
    <div className={`project-preview preview-${kind}`} aria-hidden="true">
      <div className="preview-window"><div className="preview-window-bar"><div className="window-dots"><i /><i /><i /></div><span>{preview.label}</span><Icon size={15} /></div><div className="preview-window-title"><span>{preview.title}</span><b>•••</b></div><div className="preview-rows">{preview.rows.map((row, index) => <div className="preview-row" key={row}><i>{index + 1}</i><span>{row}</span><b className={`preview-status status-${index}`}>{index === 0 ? 'ACTIVE' : index === 1 ? 'IN PROGRESS' : 'READY'}</b></div>)}</div></div>
      <div className="preview-orbit preview-orbit-one" /><div className="preview-orbit preview-orbit-two" /><span className="preview-caption">SYSTEMS THAT FIT THE WORK</span>
    </div>
  );
}

export function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <article className="project-card">
      <a className="project-card-link" href={`/projects/${project.slug}`} aria-label={`Read the ${project.title} case study`}>
        <CaseStudyPreview kind={project.visual} />
        <div className="project-content"><div className="project-category"><span>{project.number}</span>{project.category}{project.stars !== undefined && <span className="project-stars">★ {project.stars}</span>}<ArrowUpRight size={15} /></div><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tags">{project.stack.slice(0, 4).map((item) => <span key={item}>{item}</span>)}</div><div className="project-result"><Check size={15} /><span>{project.outcome}</span></div></div>
      </a>
      <div className="project-card-actions"><a href={`/projects/${project.slug}`}>Case study <ArrowRight size={14} /></a>{project.githubUrl ? <a href={project.githubUrl} target="_blank" rel="noreferrer">GitHub <ExternalLink size={13} /></a> : <span title="Repository details are private">Private work <Boxes size={13} /></span>}{project.liveDemoUrl ? <a href={project.liveDemoUrl} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13} /></a> : <a href={`mailto:${profile.email}?subject=${encodeURIComponent(`Ask about ${project.title}`)}`}>Ask about it <MessageCircle size={13} /></a>}</div>
    </article>
  );
}

export function ProjectGrid() {
  return (
    <section className="projects-section section-pad" id="projects">
      <SectionHeading index="03" eyebrow="Selected work" title={<>Built around people.<br /><em>Made for real work.</em></>} light>A few application and platform initiatives shaped with business teams and delivery partners. Some details are kept private; the case studies share the problem, approach and outcome at a useful level.</SectionHeading>
      <div className="project-grid">{projects.map((project) => <ProjectCard project={project} key={project.slug} />)}</div>
      <div className="projects-foot"><span>CASE STUDIES INCLUDE CONTEXT, CONSTRAINTS AND DELIVERY NOTES.</span><a href={profile.github} target="_blank" rel="noreferrer"><Github size={15} /> Visit GitHub <ArrowUpRight size={14} /></a></div>
    </section>
  );
}

export function SkillsCloud() {
  return (
    <section className="skills-section section-pad" id="skills">
      <SectionHeading index="02" eyebrow="Tools I work with" title={<>A toolkit for <em>shipping ideas.</em></>}>I like choosing the tools that fit the people, the problem and the team that will maintain the solution.</SectionHeading>
      <div className="skill-groups">{skillGroups.map(({ name, note, items }) => <article className="skill-group" key={name}><div className="skill-group-heading"><span>{name}</span><small>{note}</small></div><div className="skill-icons">{items.map(({ name: itemName, icon: Icon }) => <div className="skill-item" key={itemName}><span><Icon size={18} strokeWidth={1.7} /></span><b>{itemName}</b></div>)}</div></article>)}</div>
    </section>
  );
}

export function OpenSourceSection() {
  return (
    <section className="open-source-section section-pad" id="open-source">
      <div className="open-source-copy"><div className="section-eyebrow"><span>04</span><i />Open source & community</div><h2>Small contributions.<br /><em>Useful things shared.</em></h2><p>I’m building a more public record of the tools and lessons I’ve picked up across application delivery. Find my repositories and future contributions on GitHub.</p><ul className="focus-list"><li><Check size={14} /> Practical tools for everyday workflows</li><li><Check size={14} /> Notes on building and improving applications</li><li><Check size={14} /> Small experiments with web technologies</li></ul><a className="button button-primary" href={profile.github} target="_blank" rel="noreferrer"><Github size={16} /> View GitHub profile <ArrowUpRight size={14} /></a></div>
      <div className="contributions-card"><div className="contributions-top"><div><span>GITHUB ACTIVITY</span><b>Contribution graph</b></div><a href={profile.github} target="_blank" rel="noreferrer" aria-label="Open GitHub profile"><ArrowUpRight size={17} /></a></div><div className="contribution-chart-wrap"><img src="https://ghchart.rshah.org/3f6d51/YashParte" alt={`GitHub contribution activity for ${profile.name}`} loading="lazy" width="800" height="150" /></div><div className="contributions-bottom"><span><i /> Less</span><span className="contribution-legend"><i /><i /><i /><i /><i /></span><span>More</span></div><p>Chart loads from the public GitHub contribution graph.</p></div>
    </section>
  );
}

export function ExperienceTimeline() {
  return (
    <section className="experience-section section-pad" id="experience">
      <SectionHeading index="05" eyebrow="The path so far" title={<>Experience that <em>connects the dots.</em></>}>Across enterprise technology, business operations and the people who bring them together.</SectionHeading>
      <div className="experience-layout"><div className="timeline">{experience.map((item) => <article className="timeline-item" key={item.company}><div className="timeline-marker"><span /></div><div className="timeline-content"><div className="timeline-top"><span>{item.dates}</span>{item.current && <span className="current-badge"><i /> CURRENT</span>}</div><h3>{item.role}</h3><h4>{item.company}</h4><p>{item.summary}</p><div className="timeline-tags">{item.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
        <aside className="education-card"><span className="education-eyebrow">EDUCATION</span><div className="education-item"><span className="education-icon"><Code2 size={17} /></span><div><small>DIPLOMA</small><b>Electrical Engineering</b><span>Bharati Vidyapeeth</span></div></div><div className="education-item"><span className="education-icon"><Boxes size={17} /></span><div><small>BACHELOR’S</small><b>Computer Applications</b><span>Manipal University Jaipur</span></div></div><p>Two disciplines, one useful perspective: understanding the systems people and machines depend on.</p></aside>
      </div>
    </section>
  );
}

export function ContactCTA() {
  const [formStatus, setFormStatus] = useState('');
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') || '');
    const email = String(formData.get('email') || '');
    const message = String(formData.get('message') || '');
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`);
    setFormStatus('Your email app is opening with your message ready to send.');
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-copy"><div className="section-eyebrow"><span>06</span><i />Let’s talk</div><h2>Interested in working <em>together?</em></h2><p>Have a project, a workflow to improve, or a team that could use a thoughtful technical partner? I’m open to freelance, full-time and consulting conversations.</p><a className="contact-email" href={`mailto:${profile.email}`}><Mail size={18} />{profile.email}<ArrowUpRight size={16} /></a><span className="response-note">I’ll get back to you as soon as I can.</span></div>
      <form className="contact-form" onSubmit={handleSubmit}><label>Name<input name="name" autoComplete="name" required placeholder="Your name" /></label><label>Email<input name="email" type="email" autoComplete="email" required placeholder="you@example.com" /></label><label>Message<textarea name="message" required rows={4} placeholder="Tell me a little about what you’re working on…" /></label><button className="button button-primary" type="submit">Send a message <ArrowUpRight size={15} /></button><p className="form-note">This opens your email app to send the message.</p><p className="form-status" role="status">{formStatus}</p></form>
    </section>
  );
}

export function AboutSection() {
  return (
    <section className="about-section section-pad" id="about">
      <SectionHeading index="01" eyebrow="A little about me" title={<>Good software starts with understanding <em>the work behind it.</em></>}>I’m currently working at {profile.company}, leading business application initiatives and collaborating with operations teams, software vendors and developers to improve how work gets done.</SectionHeading>
      <div className="about-grid"><div className="about-story"><p>My work lives between people, process and technology. I turn real needs into clear requirements, guide delivery partners and stay close to the teams who use the tools every day.</p><p>I started with a diploma in electrical engineering and later studied computer applications. That mix keeps me curious about the systems around us, from machines on the floor to software on a screen.</p><a className="inline-link" href="#experience">More about my path <ArrowRight size={15} /></a></div><div className="about-terminal"><div className="about-terminal-label"><Terminal size={15} /> / ABOUT.ME</div><p><span>const</span> yash = {'{'}</p><p className="code-indent">focus: <b>'useful software'</b>,</p><p className="code-indent">currently: <b>'business applications'</b>,</p><p className="code-indent">based: <b>'India'</b>,</p><p className="code-indent">funFact: <b>'electrical → software'</b></p><p>{'}'};</p></div></div>
      <div className="stats-row"><div><b>6<span>+</span></b><span>YEARS IN BUSINESS & TECHNOLOGY</span></div><div><b>08</b><span>INITIATIVES ACROSS TEAMS</span></div><div><b>04</b><span>AREAS OF WORK</span></div><div className="stats-note"><span>MY APPROACH</span><b>People <i>+</i> process <i>+</i> technology</b></div></div>
    </section>
  );
}

