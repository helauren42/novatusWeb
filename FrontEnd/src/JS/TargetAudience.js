import React from 'react';
import '../CSS/TargetAudience.css';

export const TargetAudience = () => {
  return (
    <section className="target-audience">
      <div className="target-audience-container">
        <div className="target-audience-content">
          <h2 className="target-audience-title">
            Designed for High Stakes Environments
          </h2>
          
          <div className="built-for-section">
            <h3 className="built-for-title">Built for:</h3>
            <ul className="target-list">
              <li className="target-item">
                <div className="target-icon">🚨</div>
                <span>Public Safety and Critical Infrastructure</span>
              </li>
              <li className="target-item">
                <div className="target-icon">🏪</div>
                <span>Retail and Transit Hubs</span>
              </li>
              <li className="target-item">
                <div className="target-icon">🏗️</div>
                <span>Construction and Industrial Sites</span>
              </li>
            </ul>
          </div>

          <div className="deploy-section">
            <h3 className="deploy-title">Deploy Anywhere:</h3>
            <p className="deploy-description">
              Cloud or edge. Camera agnostic. Novatus integrates seamlessly with your existing surveillance systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};