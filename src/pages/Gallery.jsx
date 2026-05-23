import './Gallery.css'

const categories = ['All', 'Kulfi', 'Outlet', 'Events', 'Behind the Scenes']

const galleryItems = [
  { id: 1, title: 'Classic Malai Kulfi', category: 'Kulfi', size: 'large', bg: '#f0e0c0' },
  { id: 2, title: 'Kesar Pista Special', category: 'Kulfi', size: 'small', bg: '#e8d4a0' },
  { id: 3, title: 'BCK Frazer Town Outlet', category: 'Outlet', size: 'small', bg: '#d4c4a0' },
  { id: 4, title: 'Dry Fruit Assortment', category: 'Kulfi', size: 'medium', bg: '#e0cca0' },
  { id: 5, title: 'Mango Season Special', category: 'Kulfi', size: 'small', bg: '#f5d880' },
  { id: 6, title: 'Festival Celebrations', category: 'Events', size: 'large', bg: '#c8b890' },
  { id: 7, title: 'In-House Production', category: 'Behind the Scenes', size: 'small', bg: '#d8c8a8' },
  { id: 8, title: 'Chocolate Kulfi Display', category: 'Kulfi', size: 'medium', bg: '#c0a880' },
  { id: 9, title: 'Franchise Opening', category: 'Events', size: 'small', bg: '#d0bc94' },
  { id: 10, title: 'Premium Packaging', category: 'Behind the Scenes', size: 'small', bg: '#e4d4b0' },
  { id: 11, title: 'Fresh Ingredients', category: 'Behind the Scenes', size: 'large', bg: '#dcc8a4' },
  { id: 12, title: 'Happy Customers', category: 'Events', size: 'small', bg: '#c8b890' },
]

export default function Gallery() {
  return (
    <div className="gallery-page page-enter">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="container">
          <span className="section-label">Visual Story</span>
          <h1 className="gallery-hero-title">Our Gallery</h1>
          <div className="gold-divider" />
          <p className="gallery-hero-sub">
            A glimpse into the world of Bombay Chowpaty Kulfi — our flavors, our people, our passion.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Note */}
      <section className="gallery-note">
        <div className="container">
          <div className="note-center">
            <div className="note-icon-lg">✦</div>
            <h3>Follow Our Story</h3>
            <p>
              More photos and videos on our social channels. Join thousands of kulfi lovers 
              who follow the BCK journey every day.
            </p>
            <div className="gallery-social">
              <a href="mailto:bckkulfi@gmail.com" className="btn-primary">
                <span>Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GalleryCard({ item }) {
  return (
    <div className={`gallery-card size-${item.size}`} style={{ '--card-color': item.bg }}>
      <div className="gallery-card-inner">
        <div className="gallery-placeholder">
          <div className="gallery-placeholder-text">
            <span className="gallery-cat">{item.category}</span>
            <span className="gallery-title">{item.title}</span>
          </div>
          <div className="gallery-overlay">
            <span className="gallery-zoom">✦</span>
          </div>
        </div>
      </div>
    </div>
  )
}
