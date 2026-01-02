// src/components/Services/Services.jsx
import { useEffect, useState } from "react";
import ServiceModal from "./ServiceModal";
import { servicesCards } from "../../data/servicesData";

export default function Services() {
  const [servicesMap, setServicesMap] = useState({});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/services.json");
        const data = await res.json();
        setServicesMap(data || {});
      } catch (e) { console.error("Error loading services.json", e); }
    };
    load();
  }, []);

  const openModal = (key) => {
    const svc = servicesMap[key];
    if (svc) {
      setActive({ id: key, ...svc });
      setOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const closeModal = () => {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = "auto";
  };

  const cards = servicesCards;

  return (
    <section id="services" className="services" data-aos="fade-up" aria-labelledby="services-title">
      <div className="container">
        <h2 id="services-title" className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Meticon Solutions helps eCommerce brands launch, grow, and scale with end-to-end services tailored for global success.
        </p>
        <div className="services-grid">
          {cards.map((card) => (
            <article className="service-card" data-service={card.key} key={card.key} onClick={() => openModal(card.key)}>
              <div className="service-icon"><img src={card.icon} alt={`${card.title} icon`} width="60" height="60" loading="lazy" /></div>
              <h3>{card.title}</h3>
              <ul className="service-features">
                {card.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <button className="btn-see-more" onClick={(e) => { e.stopPropagation(); openModal(card.key); }}>
                See More
              </button>
            </article>
          ))}
        </div>
      </div>

      {open && active && (
        <ServiceModal service={active} onClose={closeModal} />
      )}
    </section>
  );
}
