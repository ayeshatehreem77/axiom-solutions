import React from "react";

export default function CTA() {
  const handleClick = (e) => {
    e.preventDefault();
    if (window && window.Calendly && typeof window.Calendly.initPopupWidget === "function") {
      window.Calendly.initPopupWidget({ url: "https://calendly.com/scale-meticonsolutions/30min" });
    } else {
      // fallback: open calendly url
      window.open("https://calendly.com/scale-meticonsolutions/30min", "_blank");
    }
  };

  return (
    <section id="cta-banner" className="cta-banner" aria-label="Call to action">
      <h2>Ready to grow your digital presence?</h2>
      <p>Let's discuss your project and bring your vision to life</p>

      <a
        className="btn-primary"
        href="#"
        onClick={handleClick}
        aria-label="Start your project with METICOIN SOLUTIONS"
      >
        Book a Meeting
      </a>
    </section>
  );
}
