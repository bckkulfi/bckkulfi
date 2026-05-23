import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-page page-enter">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">Reach Out</span>
          <h1 className="contact-hero-title">Get in Touch</h1>
          <div className="gold-divider" />
          <p className="contact-hero-sub">
            We'd love to hear from you. Whether it's a question about our kulfi, 
            franchise inquiries, or simply a kind word.
          </p>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="contact-main">
        <div className="container contact-grid">
          {/* Info */}
          <div className="contact-info">
            <h2>Visit or Contact Us</h2>
            <div className="gold-divider" />

            <div className="contact-cards">
              <div className="contact-card">
                <div className="cc-icon">📍</div>
                <div className="cc-content">
                  <h4>Our Address</h4>
                  <p>41/B HSIS Mosque Complex,<br />Frazer Town, Bangalore,<br />India</p>
                </div>
              </div>

              <div className="contact-card">
                <div className="cc-icon">📞</div>
                <div className="cc-content">
                  <h4>Call Us</h4>
                  <a href="tel:+919844119941">+91 98441 19941</a>
                  <a href="tel:+917892539163">+91 78925 39163</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="cc-icon">✉</div>
                <div className="cc-content">
                  <h4>Email Us</h4>
                  <a href="mailto:bckkulfi@gmail.com">bckkulfi@gmail.com</a>
                </div>
              </div>

              <div className="contact-card">
                <div className="cc-icon">🕐</div>
                <div className="cc-content">
                  <h4>Business Hours</h4>
                  <p>Monday – Sunday<br />11:00 AM – 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="map-container">
              <iframe
                title="BCK Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8651987!2d77.6144!3d12.9832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzU5LjUiTiA3N8KwMzYnNTEuOCJF!5e0!3m2!1sen!2sin!4v1000000000000"
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: '4px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-box">
            <h3>Send Us a Message</h3>
            <p>Fill out the form and we'll get back to you within 24 hours.</p>

            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✦</div>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. We'll reply within 24 hours.</p>
              </div>
            ) : (
              <div className="form-fields">
                <div className="field-row">
                  <div className="field-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Full name"
                      required
                    />
                  </div>
                  <div className="field-group">
                    <label>Email *</label>
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
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div className="field-group">
                    <label>Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                    />
                  </div>
                </div>
                <div className="field-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    rows={5}
                    required
                  />
                </div>
                <button className="btn-primary form-submit" onClick={handleSubmit}>
                  <span>Send Message</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
