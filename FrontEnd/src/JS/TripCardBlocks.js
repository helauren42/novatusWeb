// src/components/Capabilities.jsx

import React from 'react'
import '../CSS/TripCardBlocks.css'

export const Capabilities = () => {
  const cards = [
    {
      title: 'Context Aware Threat Detection',
      text: 'Identify suspicious behavior patterns like loitering, group formation, and face-covering before an incident unfolds.',
    },
    {
      title: 'Real Time Alerts and Incident Logging',
      text: 'Trigger smart notifications when critical thresholds are crossed. Events are logged with contextual metadata for instant review and response.',
    },
    {
      title: 'Searchable Surveillance with AI Summaries',
      text: 'Find key footage using natural language. Instantly retrieve clips that match queries like “Somebody with a black bag fighting”.',
    },
  ]

  return (
    <section className="tc-wrapper">
      <div className="tc-section">
        <h1 className="tc-title">
          Level up your security with intelligent surveillance and threat detection
        </h1>
        <div className="tc-cards">
          {cards.map(({ title, text, img, alt }) => (
            <div key={title} className="tc-card">
              <div className="tc-card-image">
                <img src={img} alt={alt} />
              </div>
              <div className="tc-card-content">
                <h2>{title}</h2>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
