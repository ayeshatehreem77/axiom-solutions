import React from "react";

// CaseModal mirrors the original DOM modal so existing script logic can populate it.
export default function CaseModal() {
  return (
    <div id="case-modal" className="case-modal-overlay" style={{ display: "none" }}>
      <div className="case-modal-content" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out">

        <div className="modal-header custom-header">
          <h2 id="case-title"></h2>
          <button id="case-modal-close" className="modal-close btn-close ms-auto">&times;</button>
        </div>

        <div className="modal-body">
          <div id="case-sections" className="case-sections mb-4"></div>
          <div id="case-images" className="case-images"></div>
        </div>
      </div>
    </div>
  );
}
