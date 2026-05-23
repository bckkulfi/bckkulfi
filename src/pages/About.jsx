import './About.css'

const values = [
  { icon: '✦', title: 'Authenticity', desc: 'We follow traditional Bombay kulfi recipes passed down through generations, never compromising on taste.' },
  { icon: '◈', title: 'Purity', desc: 'Only the finest natural ingredients go into every kulfi we make — pure milk, real fruits, premium dry fruits.' },
  { icon: '❖', title: 'Quality', desc: 'In-house manufacturing under strict quality controls ensures every piece is perfect, every single time.' },
  { icon: '✶', title: 'Community', desc: 'We believe in building lasting bonds — with our customers, franchise partners, and the communities we serve.' },
]

export default function About() {
  return (
    <div className="about-page page-enter">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">Our Heritage</span>
          <h1 className="page-hero-title">The BCK Story</h1>
          <div className="gold-divider" />
          <p className="page-hero-sub">
            A journey that began on the streets of Bombay and found a home in Bangalore.
          </p>
        </div>
        <div className="page-hero-deco">1999</div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container story-grid">
          <div className="story-visual">
            <div className="story-card-main">
              <div className="story-year">Est.</div>
              <div className="story-year-num">1999</div>
              <div className="story-city">Bangalore, India</div>
            </div>
            <div className="story-card-accent">
              <span>Authentic Bombay</span>
              <span>Street Kulfi</span>
            </div>
          </div>
          <div className="story-text">
            <span className="section-label">How It Began</span>
            <h2 className="section-title">From Bombay's Streets<br />to Your Heart</h2>
            <div className="gold-divider" />
            <p>
              Bombay Chowpaty Kulfi was born from a simple but powerful dream — to bring the 
              authentic taste of Mumbai's iconic street kulfi to Bangalore. The founder, deeply 
              rooted in the flavors of Chowpaty Beach, carried those beloved recipes across cities 
              to create something truly special.
            </p>
            <p>
              Since our establishment in 1999, we have stayed true to the original Bombay kulfi 
              tradition: slow-frozen, dense, creamy, and bursting with natural flavors. No shortcuts. 
              No artificial additives. Just pure, honest kulfi the way it was meant to be enjoyed.
            </p>
            <p>
              Today, BCK stands as a trusted name in Bangalore's food culture, beloved by families, 
              food lovers, and anyone who knows that the best things in life are made with care.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Message */}
      <section className="founder-section">
        <div className="container">
          <div className="founder-box">
            <div className="founder-quote-mark">"</div>
            <blockquote className="founder-quote">
              Our kulfi is not just a product — it is a memory, a tradition, and a promise. 
              When you taste BCK Kulfi, you taste the streets of Bombay, the love of a mother's 
              kitchen, and the pride of 25 years spent doing one thing exceptionally well.
            </blockquote>
            <div className="founder-attr">
              <div className="founder-line" />
              <div>
                <strong>Founder, Bombay Chowpaty Kulfi</strong>
                <span>Established 1999, Bangalore</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <div className="container">
          <div className="values-header">
            <span className="section-label">What We Stand For</span>
            <h2 className="section-title">Our Core Values</h2>
            <div className="gold-divider" />
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-item">
                <div className="value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Promise */}
      <section className="promise-section">
        <div className="container promise-inner">
          <div className="promise-text">
            <span className="section-label">Our Commitment</span>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>
              Crafted with Care,<br />Delivered with Pride
            </h2>
            <div className="gold-divider" />
            <p>
              Every BCK kulfi is manufactured in-house, ensuring complete quality control 
              from the first ingredient to the final freeze. We source the finest milk, 
              the purest dry fruits, and the most authentic spices — because our customers 
              deserve nothing less.
            </p>
            <ul className="promise-list">
              <li>✦ In-house manufacturing facility</li>
              <li>✦ No artificial flavors or preservatives</li>
              <li>✦ Fresh production daily</li>
              <li>✦ Traditional slow-freeze method</li>
              <li>✦ Premium quality dry fruits and ingredients</li>
            </ul>
          </div>
          <div className="promise-visual">
            <div className="promise-badge">
              <span>Pure</span>
              <span className="promise-and">&amp;</span>
              <span>Natural</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
