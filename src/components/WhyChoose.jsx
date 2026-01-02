// src/components/WhyChoose.jsx
export default function WhyChoose() {
    return (
      <section className="why-choose-us" id="why-choose" aria-labelledby="why-choose-title">
        <div className="container my-5">
          <h2 id="why-choose-title" className="section-title">Why Brands Choose Meticon Solutions</h2>
          <p className="section-subtitle">What sets us apart from the competition</p>
          <div className="choose-grid" role="list" aria-label="Reasons to choose BYTE BUILD TECH">
            {[
              { icon: "🌍", title: "Global Vision, Local Precision", desc: "We understand diverse markets worldwide while tailoring strategies to fit local consumer behavior." },
              { icon: "⚡", title: "One Team. Every Solution.", desc: "From product research to full-scale marketing, our unified team manages all aspects of your e-commerce growth." },
              { icon: "📈", title: "Proven Results. Predictable Growth", desc: "Data-driven strategies that deliver consistent, measurable results." },
              { icon: "💡", title: "Innovation That Leads", desc: "We adopt the latest tools, trends, and creative approaches to keep your brand ahead of the competition." },
              { icon: "🤝", title: "Your Brand, Our Priority", desc: "Every decision is made with your brand’s long-term success in mind." },
              { icon: "♻️", title: "Ongoing Support", desc: "Dedicated guidance and optimization to ensure your brand continues to thrive." }
            ].map((c, i) => (
              <article className={`choose-card ${i===1 ? "choose-card-2" : ""}`} data-aos="fade-up" data-aos-delay={i*100} role="listitem" key={i}>
                <span className="choose-icon" aria-hidden="true">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
  