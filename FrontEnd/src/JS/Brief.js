import React from 'react'
import '../CSS/Brief.css'

export const Brief = () => {
  return (
    <section id="section-brief">
      <div id="brief-cont">
        <h2 className="framer-text">
          Novatus transforms passive surveillance into real time video intelligence.
        </h2>
        <p className="framer-subtext">
          Our AI interprets what cameras see. Detecting early threats, understanding context, and delivering instant actionable insight. Designed in Germany. Deployable anywhere.
        </p>
        <div id="how-it-works">
          <h2 id="how-it-works-title">
            Plug the solution into any existing video surveillance system and have Novatus:
          </h2>
          <div id="mini-trip-cards-section">
            <div className="mini-trip-card">
              <h3>Interpret</h3>
              <p>AI detects context, behavior, and anomalies</p>
            </div>
            <div className="mini-trip-card">
              <h3>Act</h3>
              <p>Alerts and summaries are generated instantly</p>
            </div>
            <div className="mini-trip-card">
              <h3>Search</h3>
              <p>Retrieve footage using natural language or filters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
