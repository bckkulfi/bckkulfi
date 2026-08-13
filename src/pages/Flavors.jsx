import { useState } from 'react'
import './Flavors.css'

const regularFlavors = [
  { name: 'Malai', desc: 'The timeless classic — rich, creamy, and perfectly sweet.' },
  { name: 'Pista', desc: 'Luxurious pistachio kulfi, a crowd favorite for decades.' },
  { name: 'Kesar Pista', desc: 'Saffron-kissed pistachio kulfi, our signature masterpiece.' },
  { name: 'Chocolate', desc: 'Velvety chocolate kulfi loved by young and old alike.' },
  { name: 'Coffee', desc: 'Bold and rich coffee kulfi for the discerning palate.' },
  { name: 'Elaichi Kaju', desc: 'Fragrant cardamom with premium cashews — utterly indulgent.' },
  { name: 'Walnut', desc: 'Creamy kulfi studded with crunchy walnut pieces.' },
  { name: 'Mixed Dry Fruit', desc: 'A royal blend of premium dry fruits in every bite.' },
  { name: 'Anjeer', desc: 'Luscious fig kulfi with a natural sweetness that lingers.' },
  { name: 'Badam', desc: 'Classic almond kulfi — pure, wholesome, and deeply satisfying.' },
  { name: 'Gulab', desc: 'Delicate rose-flavored kulfi with a floral elegance.' },
  { name: 'Banana', desc: 'Naturally sweet banana kulfi made with ripe Bangalore bananas.' },
  { name: 'Black Currant', desc: 'Tangy-sweet black currant kulfi with a vibrant color and flavor.' },
  { name: 'Dates', desc: 'Naturally sweetened dates kulfi — a guilt-free indulgence.' },
]

const seasonalFlavors = [
  { name: 'Mango', desc: 'The king of fruits meets the king of kulfis. Summer\'s finest.' },
  { name: 'Strawberry', desc: 'Fresh strawberry kulfi — bright, fruity, and irresistible.' },
  { name: 'Custard Apple', desc: 'Creamy sitaphal kulfi — a winter treasure from nature.' },
  { name: 'Chickoo', desc: 'Sapodilla kulfi with its unique caramel-like sweetness.' },
  { name: 'Muskmelon', desc: 'Refreshing muskmelon kulfi — summer joy in every bite.' },
  { name: 'Guava', desc: 'Tangy guava kulfi with a fresh tropical character.' },
  { name: 'Watermelon', desc: 'Light and refreshing watermelon kulfi for hot days.' },
]

const flavorImages = {
  'Malai': 'Malai_IMG_6585.jpg', 'Pista': 'Pista_IMG_6603.jpg', 'Kesar Pista': 'KPPPPIMG_6611.jpg',
  'Chocolate': 'Chocolate_IMG_6657.jpg', 'Coffee': 'IMG_6655.jpg', 'Elaichi Kaju': 'IMG_6605.jpg',
  'Walnut': 'IMG_6608.jpg', 'Mixed Dry Fruit': 'IMG_6618.jpg', 'Anjeer': 'IMG_6619.jpg',
  'Badam': 'IMG_6632.jpg', 'Gulab': 'Gulab_IMG_6663.jpg', 'Banana': 'IMG_6638.jpg',
  'Black Currant': 'BC_IMG_6680.jpg', 'Dates': 'Dates__IMG_6622.jpg', 'Mango': 'Mango_IMG_6646.jpg',
  'Strawberry': 'IMG_6648.jpg', 'Custard Apple': 'IMG_6661.jpg', 'Chickoo': 'IMG_6669.jpg',
  'Muskmelon': 'IMG_6672.jpg', 'Guava': 'IMG_6674.jpg', 'Watermelon': 'IMG_6677.jpg',
}

export default function Flavors() {
  const [tab, setTab] = useState('regular')

  return (
    <div className="flavors-page page-enter">
      {/* Hero */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">The BCK Menu</span>
          <h1 className="page-hero-title">Our Flavors</h1>
          <div className="gold-divider" />
          <p className="page-hero-sub">
            From timeless classics to seasonal specials — every flavor crafted with pure ingredients and an open heart.
          </p>
        </div>
        <div className="page-hero-deco">20+</div>
      </section>

      {/* Tab Switch */}
      <section className="flavors-main">
        <div className="container">
          <div className="tab-bar">
            <button
              className={`tab-btn ${tab === 'regular' ? 'active' : ''}`}
              onClick={() => setTab('regular')}
            >
              <span>Regular Flavors</span>
              <span className="tab-count">{regularFlavors.length}</span>
            </button>
            <button
              className={`tab-btn ${tab === 'seasonal' ? 'active' : ''}`}
              onClick={() => setTab('seasonal')}
            >
              <span>Seasonal Flavors</span>
              <span className="tab-count">{seasonalFlavors.length}</span>
            </button>
          </div>

          {tab === 'regular' && (
            <div className="flavor-section">
              <div className="flavor-section-header">
                <h2>Regular Flavors</h2>
                <p>Available year-round at all BCK outlets</p>
              </div>
              <div className="flavor-list-grid">
                {regularFlavors.map((f, i) => (
                  <FlavorItem key={i} flavor={f} index={i} />
                ))}
              </div>
            </div>
          )}

          {tab === 'seasonal' && (
            <div className="flavor-section">
              <div className="flavor-section-header seasonal">
                <div className="seasonal-badge">Seasonal</div>
                <h2>Seasonal Flavors</h2>
                <p>Nature's finest, available while the season lasts</p>
              </div>
              <div className="flavor-list-grid">
                {seasonalFlavors.map((f, i) => (
                  <FlavorItem key={i} flavor={f} index={i} seasonal />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Bottom note */}
      <section className="flavors-note">
        <div className="container">
          <div className="note-box">
            <div className="note-icon">✦</div>
            <div className="note-content">
              <h3>All Flavors. Pure Ingredients.</h3>
              <p>
                Every BCK kulfi is made in-house with natural ingredients — no artificial flavors, 
                no preservatives. Seasonal flavors vary based on fruit availability. Ask your nearest 
                BCK outlet for today's available selections.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function FlavorItem({ flavor, index, seasonal }) {
  return (
    <div
      className={`flavor-item ${seasonal ? 'seasonal' : ''}`}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <img
        className="flavor-item-image"
        src={`/flavors/${encodeURIComponent(flavorImages[flavor.name])}`}
        alt={`${flavor.name} kulfi`}
        loading="lazy"
        decoding="async"
      />
      <div className="flavor-item-num">{String(index + 1).padStart(2, '0')}</div>
      <div className="flavor-item-content">
        <h3>{flavor.name}</h3>
        <p>{flavor.desc}</p>
      </div>
      <div className="flavor-item-icon">{seasonal ? '✿' : '✦'}</div>
    </div>
  )
}
