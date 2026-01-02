// src/components/Services/ServiceModal.jsx
export default function ServiceModal({ service, onClose }) {
    const heroClass = (() => {
      switch (service?.id) {
        case "web-development": return "hero-web-development";
        case "ai-ml": return "hero-ai-ml";
        case "game-development": return "hero-game-development";
        case "cad-design": return "hero-cad-design";
        case "research-modeling": return "hero-research-modeling";
        default: return "";
      }
    })();
  
    return (
      <div id="service-modal" className="service-modal-overlay" onClick={(e) => e.target.id === "service-modal" && onClose()}>
        <div className="service-modal-content" data-aos="zoom-in" data-aos-duration="500" data-aos-easing="ease-in-out">
          <div className="modal-header custom-header">
            <button id="service-modal-close" className="modal-close btn-close ms-auto" onClick={onClose} aria-label="Close">&times;</button>
          </div>
  
          <section className={`service-hero ${heroClass}`}>
            <h4 id="service-subtitle">{service?.subtitle || ""}</h4>
            <h2 id="service-title">{service?.title || ""}</h2>
            <p id="service-description">{service?.description || ""}</p>

          </section>
  
          <div id="service-sections" className="sub-services">
            {service?.sub_services && <div className="modal-service-title"><h4>{service.sub_services}</h4></div>}
            <div className="modal-service-container">
              {(service?.services || []).map((s, i) => (
                <div className="modal-service-block" key={i}>
                  <div className="category-header">
                    <div className="service-icon" dangerouslySetInnerHTML={{ __html: s.icon || "" }} />
                    <div className="category-title">{s.category}</div>
                  </div>
                  {s.category_description && <div className="category-description">{s.category_description}</div>}
                  <hr className="separator" />
                  <ul className="category-items">
                    {s.items.map((it, j) => <li key={j}>{it}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
  
          {service?.drivers && (
            <div id="service-drivers" className="service-drivers">
              <h4 className="driver-title">{service?.drivers_title}</h4>
              <div className="drivers-container">
                {service.drivers.map((d, i) => (
                  <div className="driver-block" key={i}>
                    <div className="driver-icon" dangerouslySetInnerHTML={{ __html: d.icon || "" }} />
                    <div className="driver-info">
                      <h5>{d.title}</h5>
                      <p>{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
  
          {service?.tools && (
            <div id="service-tools">
              <h4 className="tools-title">{service.tools_title}</h4>
              <div className="tools-grid">
                {service.tools.map((t, i) => (
                  <div className="tool-card" key={i}>
                    <img className="tool-icon" src={t.logo} alt={t.title} />
                    <span>{t.title}</span>
                  </div>
                ))}
              </div>
              <p className="tools-note">...and other industry-standard tools for professional results</p>
            </div>
          )}
  
          {service?.why_us && (
            <div id="why-us" className="why-us">
              <h4 className="why-us-title">Why Choose Meticoin Solutions?</h4>
              <div className="why-us-list">
                {service.why_us.map((w, i) => <div className="why-us-item" key={i}>{w}</div>)}
              </div>
            </div>
          )}
  
          {service?.cta && (
            <div id="service-cta" className="service-cta">
              <div className="cta-content">
                <h4 className="cta-title">{service.cta.title}</h4>
                <p className="cta-description">{service.cta.description}</p>
                <p className="cta-note"><em>{service.cta.note}</em></p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
  