import { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Check, CircleDot, ExternalLink, GitBranch, Layers3, LockKeyhole, Workflow } from 'lucide-react';
import { profile, projects } from '../data/portfolio';
import './portfolio.css';

export default function CaseStudyPage({ slug }: { slug: string }) {
  const project = projects.find((item) => item.slug === slug);
  const hasPublicLinks = Boolean(project?.githubUrl || project?.liveDemoUrl);

  useEffect(() => {
    if (!project) return;
    document.title = `${project.title} — ${profile.name}`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    description?.setAttribute('content', `${project.summary} Read the case study by Yash Parte.`);
  }, [project]);

  if (!project) {
    return <div className="portfolio case-portfolio"><main className="not-found"><span className="section-eyebrow">404 <i />PROJECT NOT FOUND</span><h1>This case study is <em>unavailable.</em></h1><a className="button button-primary" href="/#projects"><ArrowLeft size={15} /> Back to projects</a></main></div>;
  }

  const steps = ['Team need', 'Requirements', 'Application or platform', 'Everyday workflow'];

  return (
    <div className="portfolio case-portfolio">
      <a className="skip-link" href="#case-main">Skip to content</a>
      <header className="site-header case-header">
        <a className="wordmark" href="/" aria-label={`${profile.name}, home`}><span className="wordmark-mark"><b>YP</b><i aria-hidden="true" /></span><span className="wordmark-name">{profile.name}<small>DEVELOPER · DIGITAL DELIVERY</small></span></a>
        <a className="header-contact" href="/#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </header>
      <main id="case-main">
        <section className="case-hero">
          <div className="hero-grid" aria-hidden="true" />
          <a href="/#projects" className="case-back"><ArrowLeft size={15} /> All projects</a>
          <div className="section-eyebrow"><span>{project.number}</span><i />{project.category}</div>
          <h1>{project.title}</h1>
          <p>{project.summary}</p>
          <div className="case-hero-meta"><span><b>ROLE</b> Requirements & delivery coordination</span><span><b>FOCUS</b> Business application delivery</span><span><b>ACCESS</b>{hasPublicLinks ? 'Public details' : 'Private work'}</span></div>
          <div className="case-project-visual">
            <div className="case-screen-bar"><span><i /><i /><i /></span><b>{project.title.toUpperCase()} / WORKSPACE</b><span>CASE STUDY · {project.number}</span></div>
            <div className={`case-screen-body preview-${project.visual}`}>
              <div className="case-screen-sidebar"><i /><i /><i /><i /></div>
              <div className="case-screen-content"><div className="case-screen-heading"><span>{project.category}</span><b>Overview</b></div><div className="case-screen-widgets"><div><small>WORKFLOW</small><b>{project.stack[0]}</b><span><Check size={12} /> Connected</span></div><div><small>TEAM VIEW</small><b>Shared context</b><span><CircleDot size={12} /> In progress</span></div><div className="case-screen-wide"><small>DESIGNED AROUND</small><b>{project.outcome}</b><span>People <i>+</i> process <i>+</i> technology</span></div></div></div>
            </div>
          </div>
        </section>

        <section className="case-overview section-pad">
          <div className="case-overview-label"><span>THE PROJECT</span><GitBranch size={18} /></div>
          <div className="case-overview-copy"><h2>Context before <em>code.</em></h2><p>{project.context}</p><div className="case-stack"><span>PLATFORMS & WORKFLOWS</span><div>{project.stack.map((tag) => <b key={tag}>{tag}</b>)}</div></div></div>
        </section>

        <section className="case-details section-pad">
          <article className="case-detail-card"><span className="case-detail-number">01 / THE CHALLENGE</span><h2>What needed to <em>change?</em></h2><p>{project.challenge}</p></article>
          <article className="case-detail-card"><span className="case-detail-number">02 / THE APPROACH</span><h2>Make it work for <em>the team.</em></h2><p>{project.approach}</p></article>
          <article className="case-detail-card"><span className="case-detail-number">03 / THE TRADEOFF</span><h2>Choose the useful <em>path.</em></h2><p>{project.tradeoff}</p></article>
        </section>

        <section className="case-architecture section-pad">
          <div className="section-eyebrow"><span>04</span><i />Architecture & data flow</div>
          <h2>From a team need to <em>a working system.</em></h2>
          <p className="architecture-note">A high-level view of how requirements move through delivery. Project specifics are private, so this diagram describes the approach without exposing internal systems.</p>
          <div className="flow-diagram" role="img" aria-label="Flow from team need to requirements to a business application or platform to an everyday workflow">
            {steps.map((step, index) => <div className="flow-step" key={step}><span>{index === 0 ? <CircleDot /> : index === 1 ? <Layers3 /> : index === 2 ? <Workflow /> : <Check />}</span><b>{step}</b>{index < steps.length - 1 && <i className="flow-connector" aria-hidden="true" />}</div>)}
          </div>
          <div className="case-screen-states"><div><span>UI STATE 01</span><b>Requirements capture</b><p>Describe the team's current workflow and what it needs to do better.</p></div><div><span>UI STATE 02</span><b>Shared progress</b><p>Keep delivery partners and stakeholders aligned as the solution takes shape.</p></div><div><span>UI STATE 03</span><b>Everyday use</b><p>Support adoption with a workflow that fits real work.</p></div></div>
        </section>

        <section className="case-results section-pad">
          <div className="case-result-icon"><Check size={22} /></div><div><span>OUTCOME / QUALITATIVE</span><h2>What changed</h2><p>{project.outcome}</p></div>
          <div className="case-result-note"><LockKeyhole size={16} /><p>Internal project. Quantitative results and implementation details are not published.</p></div>
        </section>

        <section className="case-next section-pad">
          <div><div className="section-eyebrow"><span>05</span><i />KEEP EXPLORING</div><h2>Good work starts with <em>a conversation.</em></h2><p>If you’re working on a similar challenge, I’d be glad to compare notes.</p></div>
          <div className="case-next-actions"><a className="button button-primary" href={`mailto:${profile.email}?subject=${encodeURIComponent(`Ask about ${project.title}`)}`}>Ask about this project <ArrowUpRight size={15} /></a><a className="case-next-back" href="/#projects"><ArrowLeft size={14} /> All projects</a></div>
          {!hasPublicLinks && <div className="case-private-note"><LockKeyhole size={14} /> Repository and live demo links are not public for this internal project.</div>}
          {project.githubUrl && <a className="case-external-link" href={project.githubUrl} target="_blank" rel="noreferrer">Source repository <ExternalLink size={13} /></a>}
          {project.liveDemoUrl && <a className="case-external-link" href={project.liveDemoUrl} target="_blank" rel="noreferrer">Live demo <ExternalLink size={13} /></a>}
        </section>
      </main>
      <footer className="site-footer case-footer"><a className="wordmark" href="/"><span className="wordmark-mark"><b>YP</b><i aria-hidden="true" /></span><span className="wordmark-name">{profile.name}<small>DEVELOPER · DIGITAL DELIVERY</small></span></a><a href="/#contact">Contact <ArrowUpRight size={13} /></a></footer>
    </div>
  );
}

