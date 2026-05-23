import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Franchise.css'

const benefits = [
  { icon: '✦', title: 'Proven Business Model', desc: 'A time-tested franchise system with over 25 years of market presence and loyal customer base.' },
  { icon: '◈', title: 'Brand Recognition', desc: 'Leverage the BCK name — a trusted, loved brand that customers seek out by name.' },
  { icon: '❖', title: 'Training & Support', desc: 'Comprehensive training on operations, recipes, and customer service — we set you up for success.' },
  { icon: '✶', title: 'In-House Manufacturing', desc: 'Products supplied directly from our facility, ensuring consistent quality and attractive margins.' },
  { icon: '⬡', title: 'Flexible Store Formats', desc: 'Works in kiosks, small outlets, cloud kitchens, and retail setups — minimal footprint needed.' },
  { icon: '◇', title: 'Marketing Assistance', desc: 'Access to brand assets, promotional materials, and guidance on local marketing activities.' },
]

const steps = [
  { num: '01', title: 'Inquiry', desc: 'Fill out our franchise form and we\'ll reach out within 48 hours.' },
  { num: '02', title: 'Discussion', desc: 'A detailed conversation about your city, location, and business goals.' },
  { num: '03', title: 'Agreement', desc: 'Finalize franchise terms and sign the partnership agreement.' },
  { num: '04', title: 'Training', desc: 'Undergo comprehensive product and operations training at our Bangalore facility.' },
  { num: '05', title: 'Launch', desc: 'Open your BCK outlet with our full support and marketing guidance.' },
]

export default function Franchise() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', city: '', area: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production: send to backend or email service
    setSubmitted(true)
  }

  return (
    <div className="franchise-page page-enter">
      {/* Hero */}
      <section className="franchise-hero">
        <div className="container">
          <span className="section-label">Business Opportunity</span>
          <h1 className="franchise-hero-title">Own a BCK Franchise</h1>
          <div className="gold-divider" />
          <p className="franchise-hero-sub">
            Join India's beloved kulfi brand. Build your business with our proven model, 
            brand power, and unwavering support.
          </p>
          <a href="#inquiry-form" className="btn-primary" style={{ marginTop: '32px' }}>
            <span>Apply Now</span>
          </a>
        </div>
        <div className="franchise-hero-deco">BCK</div>
      </section>

      {/* Investment Summary */}
      <section className="investment-section">
        <div className="container">
          <div className="investment-header">
            <span className="section-label">Investment Details</span>
            <h2 className="section-title">What It Takes to Start</h2>
            <div className="gold-divider" />
          </div>
          <div className="investment-cards">
            <div className="inv-card primary">
              <div className="inv-icon">₹</div>
              <div className="inv-amount">2 Lakhs</div>
              <div className="inv-label">Royalty Fee</div>
              <div className="inv-note">Non-refundable brand licensing fee</div>
            </div>
            <div className="inv-card">
              <div className="inv-icon">🔒</div>
              <div className="inv-amount">₹1 Lakh</div>
              <div className="inv-label">Security Deposit</div>
              <div className="inv-note">Fully refundable at end of agreement</div>
            </div>
            <div className="inv-card">
              <div className="inv-icon">📐</div>
              <div className="inv-amount">100 sq ft</div>
              <div className="inv-label">Minimum Area</div>
              <div className="inv-note">Works in small kiosks and outlets</div>
            </div>
            <div className="inv-card accent">
              <div className="inv-icon">%</div>
              <div className="inv-amount">40%</div>
              <div className="inv-label">Product Discount</div>
              <div className="inv-note">On all BCK products from our facility</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="benefits-section">
        <div className="container">
          <div className="benefits-header">
            <span className="section-label">Why Partner With BCK</span>
            <h2 className="section-title">Your Success is Our Mission</h2>
            <div className="gold-divider" />
          </div>
          <div className="benefits-grid">
            {benefits.map((b, i) => (
              <div key={i} className="benefit-card">
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.title}</h3>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="steps-section">
        <div className="container">
          <div className="steps-header">
            <span className="section-label">The Journey</span>
            <h2 className="section-title" style={{ color: 'var(--cream)' }}>How to Become a Partner</h2>
            <div className="gold-divider" />
          </div>
          <div className="steps-list">
            {steps.map((s, i) => (
              <div key={i} className="step-item">
                <div className="step-num">{s.num}</div>
                <div className="step-content">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
                {i < steps.length - 1 && <div className="step-connector" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="inquiry-section" id="inquiry-form">
        <div className="container">
          <div className="inquiry-wrapper">
            <div className="inquiry-info">
              <span className="section-label">Get Started</span>
              <h2>Franchise Inquiry</h2>
              <div className="gold-divider" />
              <p>
                Ready to bring authentic BCK Kulfi to your city? Fill out the form 
                and our franchise team will contact you within 48 hours.
              </p>
              <div className="inquiry-contact">
                <div className="inq-item">
                  <span className="inq-icon">📞</span>
                  <div>
                    <strong>Call Us</strong>
                    <a href="tel:+919844119941">+91 98441 19941</a>
                  </div>
                </div>
                <div className="inq-item">
                  <span className="inq-icon">✉</span>
                  <div>
                    <strong>Email Us</strong>
                    <a href="mailto:bckkulfi@gmail.com">bckkulfi@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="inquiry-form-box">
              {submitted ? (
                <div className="form-success">
                  <div className="success-icon">✦</div>
                  <h3>Thank You!</h3>
                  <p>
                    We've received your franchise inquiry. Our team will get back to 
                    you within 48 hours.
                  </p>
                </div>
              ) : (
                <div className="form-fields">
                  <h3>Tell Us About Yourself</h3>
                  <div className="field-row">
                    <div className="field-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="field-row">
                    <div className="field-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX"
                        required
                      />
                    </div>
                    <div className="field-group">
                      <label>Your City *</label>
                      <input
                        type="text"
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        placeholder="City where you want to open"
                        required
                      />
                    </div>
                  </div>
                  <div className="field-group">
                    <label>Available Space (sq ft)</label>
                    <input
                      type="text"
                      name="area"
                      value={form.area}
                      onChange={handleChange}
                      placeholder="Approximate area you have in mind"
                    />
                  </div>
                  <div className="field-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your business background and goals..."
                      rows={4}
                    />
                  </div>
                  <button className="btn-primary form-submit" onClick={handleSubmit}>
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
