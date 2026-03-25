import React, { useState, useEffect } from 'react';
import './PdfReveal.css';
import { X } from 'lucide-react';

const PdfReveal = ({ pdfUrl, onClose }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRevealed(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pdf-reveal-overlay">
      {/* SVG Wave Definitions */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <clipPath id="wave-left" clipPathUnits="objectBoundingBox">
            <path d="M 0,0 L 1,0 C 0.85,0.1 1.15,0.2 1,0.3 C 0.85,0.4 1.15,0.5 1,0.6 C 0.85,0.7 1.15,0.8 1,0.9 C 0.85,1 1,1 1,1 L 0,1 Z" />
          </clipPath>
          <clipPath id="wave-right" clipPathUnits="objectBoundingBox">
            <path d="M 1,0 L 0,0 C 0.15,0.1 -0.15,0.2 0,0.3 C 0.15,0.4 -0.15,0.5 0,0.6 C 0.15,0.7 -0.15,0.8 0,0.9 C 0.15,1 0,1 0,1 L 1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="origami-container">
        {/* Left Side Panels */}
        <div className={`origami-panel left-outer ${isRevealed ? 'open' : ''}`}>
          <div className="panel-content">
            <div className={`origami-panel left-inner ${isRevealed ? 'open' : ''}`}>
              <div className="panel-content"></div>
            </div>
          </div>
        </div>

        {/* Right Side Panels */}
        <div className={`origami-panel right-outer ${isRevealed ? 'open' : ''}`}>
          <div className="panel-content">
            <div className={`origami-panel right-inner ${isRevealed ? 'open' : ''}`}>
              <div className="panel-content"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={`pdf-content-container ${isRevealed ? 'visible' : ''}`}>
        <button className="pdf-close-btn" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="pdf-viewer-wrapper">
          <iframe 
            src={`${pdfUrl}#toolbar=0`} 
            title="Handbook PDF"
            className="pdf-iframe"
          />
        </div>
      </div>
    </div>
  );
};

export default PdfReveal;
