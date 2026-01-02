// src/components/About.jsx
export default function About() {
    return (
      <section id="about" className="about" data-aos="fade-up" aria-labelledby="about-title">
        <div className="container">
          <h2 id="about-title" className="section-title">About Us</h2>
          <div className="about-content">
            <p>At Meticon Solutions, we empower eCommerce brands to grow through impactful graphic design,
              targeted digital marketing, and full-service brand support.</p>
            <p>Our expertise spans Amazon Private Label, TikTok Shop, and web development, allowing us to
              create, launch, and scale brands across multiple platforms.</p>
            <p>From building high-converting visuals to crafting complete online storefronts, we blend
              creativity, strategy, and technology to help you stand out and succeed in today’s digital
              marketplace.</p>
          </div>
  
          <div className="about-features" data-aos="fade-up" data-aos-delay="200">
            <div className="feature-item">
              <div className="feature-icon">🚀</div>
              <h4>Growth-Focused</h4>
              <p>We design strategies that don’t just deliver short-term wins but build a strong foundation for long-term brand success.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎨</div>
              <h4>Creative Excellence</h4>
              <p>Our team blends design and strategy to craft visuals, storefronts, and campaigns that inspire trust and boost conversions.</p>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🌍</div>
              <h4>Global Reach</h4>
              <p>From Amazon to TikTok Shop, we help brands expand into international markets with scalable systems and proven expertise.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  