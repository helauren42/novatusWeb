import React from 'react'
import '../CSS/Header.css'
export const Header = () => (
  <section className="hero" id="hero">
    <div className="hero-inner">
      <div className="hero-text">
        <h1 className="hero-title">
          Pioneering the Future of Video Intelligence
        </h1>
        <p className="hero-subtitle">
          Real time awareness and insight, when and where it matters most.
        </p>
        <div className="hero-cta">
          <button className="hero-button primary">
            Request Early Access
          </button>
          <button className="hero-button secondary">
            Demo
          </button>
        </div>
      </div>
      <div className="hero-media">
        <div className="hero-image">
          <img
            src="https://framerusercontent.com/images/zogTLCjttwoXrFmAX8aZM9X4uU.png"
            alt="Abel Police"
          />
        </div>
        <div className="blob blue-blob">
          <img
            src="https://framerusercontent.com/images/IXzqurK2DeoUkzOW33oaQf44O0.png"
            alt="Background blue graphic"
          />
        </div>
        <div className="blob red-blob">
          <img
            src="https://framerusercontent.com/images/UVRcEvUdXp6nveUKDB8uNsewsy8.png"
            alt="Background red graphic"
          />
        </div>
      </div>
      <div id="header-btn-cont">
        <button className='classic-btn std-hover-active' id="service-btn">Request demo</button>
      </div >
      <div id="arrow-down-div"><ArrowDownSvg id="arrow-down-img" /></div>
    </header >
  )
}
