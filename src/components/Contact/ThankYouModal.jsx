import React from "react";

// ThankYouModal component mirrors the original modal markup and IDs.
export default function ThankYouModal() {
  return (
    <div id="thank-you-modal" className="modal-overlay" style={{ display: "none" }}>
      <div className="modal-content">
        <div className="modal-header">
          <div className="success-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22,4 12,14.01 9,11.01"></polyline>
            </svg>
          </div>
          <button className="modal-close" id="modal-close" aria-label="Close modal">×</button>
        </div>
        <div className="modal-body">
          <h3>Thank You! 🎉</h3>
          <p>Your message has been sent successfully!</p>
          <p className="subtitle">We'll get back to you within 24 hours.</p>
        </div>
        <div className="modal-footer">
          <button className="btn-primary modal-btn" id="modal-close-btn">Close</button>
        </div>
      </div>
    </div>
  );
}
