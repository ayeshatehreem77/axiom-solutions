// src/pages/Services.jsx
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAOS from "../hooks/useAOS";
import { servicesCards } from "../data/servicesData";
import ServiceDetails from "../components/Services/ServiceDetails";

export default function Services() {
  useAOS();

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

  // handle nav scrolled class
  useEffect(() => {
    const nav = document.querySelector("nav");
    const onScroll = () => {
      if (window.scrollY > 500) nav?.classList.add("scrolled");
      else nav?.classList.remove("scrolled");
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <Header />
      <main id="main-content" role="main">
        <div className="services-page" data-aos="fade-up">
          <div className="container">
            <h1 className="page-title">Our Services</h1>
            <p className="page-subtitle">
              Meticon Solutions helps eCommerce brands launch, grow, and scale with end-to-end services tailored for global success.
            </p>
            <div className="mobile-service-nav">
              <div className="mobile-tabs">
                {servicesCards.map((card) => (
                  <div
                    key={card.key}
                    className={`mobile-tab ${activeService?.id === card.key ? 'active' : ''}`}
                    onClick={() => {
                      const svc = servicesMap[card.key];
                      if (svc) setActiveService({ id: card.key, ...svc });
                    }}
                  >
                    {card.title}
                  </div>
                ))}
              </div>
              {activeService && <ServiceDetails service={activeService} />}
            </div>
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
        </div>
      </main>
      <Footer />
    </>
  );
}