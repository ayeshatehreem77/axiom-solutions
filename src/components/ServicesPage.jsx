// src/components/ServicesPage.jsx
import { useEffect, useState } from "react";
import { servicesCards } from "../data/servicesData";
import ServiceDetails from "./Services/ServiceDetails";

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(null);
  const [servicesMap, setServicesMap] = useState({});

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("/services.json");
        const data = await res.json();
        setServicesMap(data || {});
        // Set default active to first service
        if (data && Object.keys(data).length > 0) {
          const firstKey = Object.keys(data)[0];
          setActiveService({ id: firstKey, ...data[firstKey] });
        }
      } catch (e) { console.error("Error loading services.json", e); }
    };
    load();
  }, []);

  return (
    <section id="services-page" className="services-page" data-aos="fade-up">
      <div className="container">
        <h1 className="page-title">Our Services</h1>
        <p className="page-subtitle">
          Meticon Solutions helps eCommerce brands launch, grow, and scale with end-to-end services tailored for global success.
        </p>
        <div className="services-page-container">
          <div className="services-page-left">
            <ul className="services-list">
              {servicesCards.map((card) => (
                <li
                  key={card.key}
                  className={`service-item ${activeService?.id === card.key ? 'active' : ''}`}
                  onClick={() => {
                    const svc = servicesMap[card.key];
                    if (svc) setActiveService({ id: card.key, ...svc });
                  }}
                >
                  <img src={card.icon} alt={`${card.title} icon`} width="24" height="24" />
                  <span>{card.title}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="services-page-right">
            {activeService && <ServiceDetails service={activeService} />}
          </div>
        </div>
      </div>
    </section>
  );
}