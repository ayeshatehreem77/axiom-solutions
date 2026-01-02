// src/components/Hero.jsx
export default function Hero() {
    return (
      <section id="hero" className="hero" aria-label="Hero section">
        <div className="hero-bg">
          <div className="background">
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
            <div className="cube"></div>
          </div>
          <div className="hero-overlay"></div>
        </div>
  
        <div className="hero-content" data-aos="fade-down">
          <h1>Axiom Solutions</h1>
          <p>Global E-Commerce Innovators | Transforming Online Vision into Profit</p>
          <a href="#cta-banner" className="btn-primary">Let's Talk</a>
  
          <div className="hero-socials">
            <a href="https://www.tiktok.com/@meticonsolutions?lang=en" target="_blank" rel="noreferrer">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/meticonsolutions?igsh=MTRuMWdtN2RpcTB1dQ==" target="_blank" rel="noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/meticonsolutions/" target="_blank" rel="noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://x.com/meticonsolu" target="_blank" rel="noreferrer">
              <i className="fab fa-x-twitter"></i>
            </a>
            <a href="https://linkedin.com/company/meticonsolutions" target="_blank" rel="noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    );
  }
  