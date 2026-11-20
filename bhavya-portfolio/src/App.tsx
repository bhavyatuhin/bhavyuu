import { useMemo, useState, type ReactNode } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  ExternalLink,
  FileBadge,
  Menu,
  Microscope,
  X,
} from 'lucide-react'
import {
  achievements,
  interests,
  navigation,
  profile,
  projects,
  publications,
  researchItems,
  socialLinks,
} from './data/portfolio'

const filters = ['All', 'Projects', 'Research', 'Publications', 'Recognition'] as const
type Filter = (typeof filters)[number]

function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <span className="section-label-line" />
      <span className="section-label-text">{children}</span>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const archiveItems = useMemo(() => {
    const items = [
      ...projects.map((item) => ({ ...item, kind: 'Projects' as const })),
      ...researchItems.map((item, index) => ({
        id: `research-${index}`,
        number: `R${String(index + 1).padStart(2, '0')}`,
        title: item.title,
        category: 'Research note',
        status: 'Exploration',
        description: item.detail,
        contribution: `Related project: ${item.relatedProject}`,
        link: '',
        linkLabel: '',
        certificate: false,
        year: '2026',
        kind: 'Research' as const,
      })),
      ...publications.map((item) => ({
        id: item.id,
        number: 'P01',
        title: item.title,
        category: item.type,
        status: item.status,
        description: item.description,
        contribution: 'Publication',
        link: item.link,
        linkLabel: item.link ? 'View publication' : '',
        certificate: false,
        year: '',
        kind: 'Publications' as const,
      })),
      ...achievements.map((item, index) => ({
        id: item.id,
        number: `A${String(index + 1).padStart(2, '0')}`,
        title: item.title,
        category: item.category,
        status: 'Certificate received',
        description: item.detail,
        contribution: 'Recognition',
        link: '',
        linkLabel: '',
        certificate: true,
        year: item.year,
        kind: 'Recognition' as const,
      })),
    ]
    return activeFilter === 'All' ? items : items.filter((item) => item.kind === activeFilter)
  }, [activeFilter])

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bhavya Thakor home">
          Bhavya Thakor<span>.</span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={() => setMenuOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">{profile.eyebrow}</p>
            <h1>{profile.firstName}<br /><span>{profile.lastName}.</span></h1>
            <p className="hero-intro">{profile.headline}</p>
            <p className="hero-description">{profile.introduction}</p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore my work <ArrowUpRight size={16} /></a>
              <a className="hero-secondary-link" href="#about">About me <ArrowDown size={15} /></a>
            </div>
          </div>
          <div className="hero-aside">
            {profile.portrait ? (
              <img className="hero-portrait" src={profile.portrait} alt={`Portrait of ${profile.name}`} />
            ) : (
              <div className="portrait-placeholder" aria-label="Portrait photograph to be added">
                <span className="portrait-placeholder-initials">BT</span>
                <span>Portrait photograph</span>
                <small>To be added</small>
              </div>
            )}
            <div className="hero-aside-note">
              <span className="status-dot" />
              <span>{profile.availability}</span>
            </div>
          </div>
          <a className="scroll-cue" href="#work"><span>Scroll to explore</span><ArrowDown size={15} /></a>
          <span className="hero-index">PORTFOLIO / 2026</span>
        </section>

        <section className="work-section section-wrap" id="work">
          <div className="section-heading-row">
            <div>
              <SectionLabel number="01">The archive</SectionLabel>
              <h2>Selected work &amp; <span>ideas.</span></h2>
              <p className="section-lead">A growing collection of projects, research, writing and experiences.</p>
            </div>
            <p className="section-side-note">Explore the work by category. New entries can be added as the archive grows.</p>
          </div>

          <div className="archive-toolbar" aria-label="Filter archive entries">
            <div className="filter-list">
              {filters.map((filter) => (
                <button
                  type="button"
                  key={filter}
                  className={activeFilter === filter ? 'filter-button active' : 'filter-button'}
                  aria-pressed={activeFilter === filter}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
            <span className="archive-count">{String(archiveItems.length).padStart(2, '0')} ENTRIES</span>
          </div>

          <div className="archive-list">
            {archiveItems.map((item) => (
              <article className="archive-item" key={item.id}>
                <span className="archive-number">{item.number}</span>
                <div className="archive-main">
                  <div className="archive-meta"><span>{item.kind}</span><span>{item.category}</span></div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="archive-bottomline">
                    <span className="entry-status"><span className="status-dot" />{item.status}</span>
                    {item.contribution && <span>{item.contribution}</span>}
                  </div>
                </div>
                <div className="archive-action">
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noreferrer" aria-label={`${item.linkLabel}: ${item.title}`}>
                      {item.linkLabel} <ExternalLink size={15} />
                    </a>
                  ) : item.certificate ? (
                    <span className="certificate-note"><FileBadge size={16} /> Certificate</span>
                  ) : (
                    <span className="archive-no-link">{item.year || 'In archive'}</span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="research-section section-wrap" id="research">
          <div className="section-heading-row compact-heading">
            <div>
              <SectionLabel number="02">Research &amp; exploration</SectionLabel>
              <h2>Questions worth <span>exploring.</span></h2>
            </div>
            <Microscope className="section-heading-icon" size={30} strokeWidth={1.4} />
          </div>
          <div className="research-grid">
            {researchItems.map((item, index) => (
              <article className="research-card" key={item.title}>
                <span className="research-number">0{index + 1}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <span className="research-related">Related work: {item.relatedProject}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="publication-section section-wrap" id="publications">
          <div className="publication-heading">
            <SectionLabel number="03">Publications</SectionLabel>
            <h2>Work in <span>words.</span></h2>
            <p className="section-lead">Books and written work by Bhavya.</p>
          </div>
          <div className="publication-list">
            {publications.map((publication) => (
              <article className="publication-row" key={publication.id}>
                <div className="publication-icon"><BookOpen size={22} strokeWidth={1.5} /></div>
                <div className="publication-details">
                  <span>{publication.type} · {publication.status}</span>
                  <h3>{publication.title}</h3>
                  <p>{publication.description}</p>
                </div>
                {publication.link ? (
                  <a href={publication.link} target="_blank" rel="noreferrer" aria-label={`Open ${publication.title}`}><ArrowUpRight /></a>
                ) : <span className="link-pending">Link to be added</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="recognition-section section-wrap" id="recognition">
          <div className="section-heading-row compact-heading">
            <div>
              <SectionLabel number="04">Recognition</SectionLabel>
              <h2>Milestones along <span>the way.</span></h2>
              <p className="section-lead">Certificates and recognitions connected to collaborative work.</p>
            </div>
            <CheckCircle2 className="section-heading-icon" size={30} strokeWidth={1.4} />
          </div>
          <div className="recognition-list">
            {achievements.map((achievement) => (
              <article className="recognition-row" key={achievement.id}>
                <div className="recognition-icon"><FileBadge size={19} /></div>
                <div><h3>{achievement.title}</h3><p>{achievement.detail}</p></div>
                <span>{achievement.year}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section-wrap" id="about">
          <div className="about-heading">
            <SectionLabel number="05">A little about me</SectionLabel>
            <h2>Learning, making<br />and <span>moving forward.</span></h2>
          </div>
          <div className="about-body">
            {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="interests-block">
              <h3>Beyond the projects</h3>
              <div className="interest-list">
                {interests.map((interest) => (
                  <div className="interest-item" key={interest.title}>
                    <span>{interest.title}</span><p>{interest.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <div>
              <SectionLabel number="06">Connect</SectionLabel>
              <h2>Let's start a <span>conversation.</span></h2>
              <p>For thoughtful collaborations, shared ideas and new opportunities.</p>
            </div>
            {profile.email ? (
              <a className="contact-link" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={18} /></a>
            ) : (
              <span className="contact-pending">Contact details will be added</span>
            )}
          </div>
          <div className="contact-footer"><span>{profile.name}</span><span>PERSONAL PORTFOLIO · 2026</span></div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="brand" href="#home">Bhavya Thakor<span>.</span></a>
        <span>© 2026 Bhavya Thakor. All rights reserved.</span>
        <div className="footer-socials">
          {socialLinks.map((social) => <a href={social.url} key={social.label}>{social.label}</a>)}
          <a href="#home" aria-label="Back to top">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
