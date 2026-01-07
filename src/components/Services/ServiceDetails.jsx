export default function ServiceDetails({ service }) {
  if (!service) return null;

  return (
    <div className="service-details-content">
      <section className="service-hero">
        <h4 id="service-subtitle">{service.subtitle}</h4>
        <h2 id="service-title">{service.title}</h2>
        <p id="service-description">{service.description}</p>
      </section>

      {service.sub_services && (
        <div id="service-sections" className="sub-services">
          <div className="modal-service-title">
            <h4>{service.sub_services}</h4>
          </div>

          <div className="modal-service-container">
            {(service.services || []).map((s, i) => (
              <div className="modal-service-block" key={i}>
                <div className="category-header">
                  <div className="category-title">{s.category}</div>
                </div>

                {s.category_description && (
                  <div className="category-description">
                    {s.category_description}
                  </div>
                )}

                <hr className="separator" />

                <ul className="category-items">
                  {(s.items || []).map((it, j) => (
                    <li key={j}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {service.projects && (
        <div id="service-projects">
          <h4 className="projects-title">Projects</h4>
          <div className="projects-grid">
            {service.projects.map((p, i) => (
              <div className="project-card" key={i}>
                <img src={p.image} alt={p.alt || p.title || 'Project image'} className="project-image" />
                {p.title && <span className="project-title">{p.title}</span>}
              </div>
            ))}
          </div>
        </div>
      )}

      {service.tools && (
        <div id="service-tools">
          <h4 className="tools-title">{service.tools_title}</h4>
          <div className="tools-grid">
            {service.tools.map((t, i) => (
              <div className="tool-card" key={i}>
                <img src={t.logo} alt={t.title} className="tool-icon" />
                <span>{t.title}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {service.why_us && (
        <div id="why-us" className="why-us">
          <h4 className="why-us-title">Why Choose Axiom Solutions?</h4>
          <div className="why-us-list">
            {service.why_us.map((w, i) => (
              <div className="why-us-item" key={i}>{w}</div>
            ))}
          </div>
        </div>
      )}

      {service.cta && (
        <div id="service-cta" className="service-cta">
          <div className="cta-content">
            <h4 className="cta-title">{service.cta.title}</h4>
            <p className="cta-description">{service.cta.description}</p>
            <p className="cta-note"><em>{service.cta.note}</em></p>
          </div>
        </div>
      )}
    </div>
  );
}
