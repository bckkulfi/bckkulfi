import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-mark">BCK</div>
              <div>
                <div className="footer-name">Bombay Chowpaty Kulfi</div>
                <div className="footer-tagline">Authentic Since 1999</div>
              </div>
            </div>
            <p className="footer-desc">
              Bringing the authentic taste of Bombay street kulfi to your city. 
              Pure ingredients, royal flavors, unforgettable memories.
            </p>
            <div className="footer-gold-line" />
          </div>

          <div className="footer-nav">
            <h4 className="footer-heading">Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/flavors">Our Flavors</Link></li>
              <li><Link to="/franchise">Franchise</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-contact">
            <h4 className="footer-heading">Visit Us</h4>
            <address>
              <p>41/B HSIS Mosque Complex,</p>
              <p>Frazer Town, Bangalore,</p>
              <p>India</p>
            </address>
            <div className="footer-contacts">
              <a href="tel:+919844119941">+91 98441 19941</a>
              <a href="tel:+917892539163">+91 78925 39163</a>
              <a href="mailto:bckkulfi@gmail.com">bckkulfi@gmail.com</a>
            </div>
          </div>

          <div className="footer-franchise">
            <h4 className="footer-heading">Franchise</h4>
            <p>Own your BCK outlet. Starting at just ₹3 Lakhs investment with proven brand support.</p>
            <Link to="/franchise" className="btn-primary" style={{ marginTop: '16px', fontSize: '0.78rem', padding: '10px 20px' }}>
              <span>Explore Franchise</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} Bombay Chowpaty Kulfi. All rights reserved.</p>
          <p className="footer-crafted">Crafted with ❤️ in Bangalore</p>
        </div>
      </div>
    </footer>
  )
}
