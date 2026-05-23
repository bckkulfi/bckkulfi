import { Link } from 'react-router-dom'
import './Home.css'

const features = [
  {
    icon: '✦',
    title: 'Pure Ingredients',
    desc: 'Every kulfi made with the finest natural ingredients — no artificial flavors, no compromises.',
  },
  {
    icon: '◈',
    title: 'In-House Manufacturing',
    desc: 'Crafted fresh daily in our own facility, preserving the authentic Bombay street kulfi taste.',
  },
  {
    icon: '❖',
    title: 'Proven Since 1999',
    desc: 'Over two decades of spreading joy across Bangalore with our beloved kulfi recipes.',
  },
  {
    icon: '✶',
    title: '20+ Royal Flavors',
    desc: 'From classic Malai and Kesar Pista to exotic seasonal specials — something for every palate.',
  },
]

const featuredFlavors = [
  { name: 'Malai', tag: 'Classic', color: '#f5e8d0' },
  { name: 'Kesar Pista', tag: 'Signature', color: '#f0e4c0' },
  { name: 'Mixed Dry Fruit', tag: 'Premium', color: '#ead4a8' },
  { name: 'Mango', tag: 'Seasonal', color: '#f5d88a' },
  { name: 'Chocolate', tag: 'Beloved', color: '#e0c4a0' },
  { name: 'Anjeer', tag: 'Special', color: '#e8d4b8' },
]

export default function Home() {
  return (
    <div className="home page-enter">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg-pattern" />
        <div className="hero-content container">
          <div className="hero-badge">
            <span>Est. 1999 · Bangalore</span>
          </div>
          <h1 className="hero-title">
            Authentic Bombay<br />
            <em>Kulfi</em> Since 1999
          </h1>
          <p className="hero-subtitle">
            The royal taste of Mumbai's finest street kulfi, now in the heart of Bangalore.
            Pure ingredients, time-honoured recipes, unforgettable flavors.
          </p>
          <div className="hero-actions">
            <Link to="/flavors" className="btn-primary hero-btn">
              <span>Explore Flavors</span>
            </Link>
            <Link to="/about" className="btn-outline hero-btn">
              Our Story
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-num">25+</span>
              <span className="stat-label">Years of Excellence</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">20+</span>
              <span className="stat-label">Flavor Varieties</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Pure Ingredients</span>
            </div>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>Scroll to explore</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Features */}
      <section className="features-section">
        <div className="container">
          <div className="features-header">
            <span className="section-label">Why Choose BCK</span>
            <h2 className="section-title">A Legacy of Authentic Taste</h2>
            <div className="gold-divider" />
          </div>
          <div className="features-grid">
            {features.map((f, i) => (
              <div key={i} className="feature-card">
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Flavors */}
      <section className="flavors-preview">
        <div className="container">
          <div className="section-header-flex">
            <div>
              <span className="section-label">Our Offerings</span>
              <h2 className="section-title">Flavors That Delight</h2>
              <div className="gold-divider" />
            </div>
            <Link to="/flavors" className="btn-outline">View All Flavors</Link>
          </div>
          <div className="flavors-grid">
            {featuredFlavors.map((f, i) => (
              <div key={i} className="flavor-card" style={{ '--card-bg': f.color }}>
                <div className="flavor-inner">
                  <span className="flavor-tag">{f.tag}</span>
                  <div className="flavor-name">{f.name}</div>
                  <div className="flavor-bar" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="about-strip">
        <div className="container about-strip-inner">
          <div className="about-strip-text">
            <span className="section-label">Our Heritage</span>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>
              From Bombay Streets<br />to Your City
            </h2>
            <div className="gold-divider" />
            <p>
              Bombay Chowpaty Kulfi was born from a passion for preserving the 
              authentic taste of Mumbai's iconic street kulfi. Founded in 1999, 
              we've built a legacy on quality, tradition, and the pure joy of 
              sharing something genuinely delicious.
            </p>
            <Link to="/about" className="btn-outline" style={{ borderColor: 'var(--gold)', color: 'var(--gold)' }}>
              Read Our Story
            </Link>
          </div>
          <div className="about-strip-visual">
            <div className="visual-circle">
              <div className="visual-inner">
                <span className="visual-year">1999</span>
                <span className="visual-line">— Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise CTA */}
      <section className="franchise-cta">
        <div className="container">
          <div className="cta-box">
            <div className="cta-content">
              <span className="section-label">Business Opportunity</span>
              <h2>Own a BCK Franchise</h2>
              <p>
                Join the BCK family and bring authentic kulfi to your city. 
                With a proven model, brand support, and in-house manufacturing — 
                your success is our commitment.
              </p>
              <div className="cta-highlights">
                <div className="cta-highlight">
                  <strong>₹2 Lakhs</strong>
                  <span>Royalty Fee</span>
                </div>
                <div className="cta-highlight">
                  <strong>₹1 Lakh</strong>
                  <span>Refundable Deposit</span>
                </div>
                <div className="cta-highlight">
                  <strong>40%</strong>
                  <span>Product Discount</span>
                </div>
              </div>
              <Link to="/franchise" className="btn-primary">
                <span>Explore Franchise</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
