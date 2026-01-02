// src/components/Header.jsx
import { useState, useEffect, useRef } from "react";
import { servicesCards } from "../data/servicesData";
import ServiceDetails from "./Services/ServiceDetails";

export default function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(v => !v);

  const [showMenu, setShowMenu] = useState(false);
  const [activeService, setActiveService] = useState(null);
  const [servicesMap, setServicesMap] = useState({});

  const [showCompanyMenu, setShowCompanyMenu] = useState(false);
  const [showMediaMenu, setShowMediaMenu] = useState(false);
  const [showCareersMenu, setShowCareersMenu] = useState(false);

  const servicesTimerRef = useRef(null);
  const companyTimerRef = useRef(null);
  const mediaTimerRef = useRef(null);
  const careersTimerRef = useRef(null);

  const servicesCloseTimerRef = useRef(null);
  const companyCloseTimerRef = useRef(null);
  const mediaCloseTimerRef = useRef(null);
  const careersCloseTimerRef = useRef(null);

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

  useEffect(() => {
    if (!open) return;
    const closeOnLink = (e) => {
      const target = e.target;
      if (target.tagName === "A" && target.closest(".nav-links")) setOpen(false);
    };
    document.addEventListener("click", closeOnLink);
    return () => document.removeEventListener("click", closeOnLink);
  }, [open]);

  return (
    <header role="banner">
      <div className="container">
        <nav role="navigation" aria-label="Main navigation" className={open ? "open" : ""}>
          <div className="logo">
            <a href="#hero" aria-label="BYTE BUILD TECH - Home">
              <div className="logo-icon">
                <img id="logo-img" src="/Assets/logo.jpg" alt="BYTE BUILD TECH Logo" width="40" height="40" />
              </div>
              <div className="logo-text">Axiom Solutions</div>
            </a>
          </div>

          <button
            className={`menu-toggle ${open ? "open" : ""}`}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={toggle}
          >
            <span></span><span></span><span></span>
          </button>

          <div id="nav-links" className={`nav-links ${open ? "open" : ""}`} role="menubar">
            <div 
              className="services-menu-trigger" 
              onMouseEnter={() => {
                if (servicesCloseTimerRef.current) clearTimeout(servicesCloseTimerRef.current);
                servicesTimerRef.current = setTimeout(() => setShowMenu(true), 200);
              }}
              onMouseLeave={() => {
                if (servicesTimerRef.current) clearTimeout(servicesTimerRef.current);
                servicesCloseTimerRef.current = setTimeout(() => setShowMenu(false), 250);
              }}
              role="menuitem"
            >
              Services
            </div>
            <div 
              className="company-menu-trigger" 
              onMouseEnter={() => {
                if (companyCloseTimerRef.current) clearTimeout(companyCloseTimerRef.current);
                companyTimerRef.current = setTimeout(() => setShowCompanyMenu(true), 200);
              }}
              onMouseLeave={() => {
                if (companyTimerRef.current) clearTimeout(companyTimerRef.current);
                companyCloseTimerRef.current = setTimeout(() => setShowCompanyMenu(false), 250);
              }}
              role="menuitem"
            >
              Company
            </div>
            <div 
              className="media-menu-trigger" 
              onMouseEnter={() => {
                if (mediaCloseTimerRef.current) clearTimeout(mediaCloseTimerRef.current);
                mediaTimerRef.current = setTimeout(() => setShowMediaMenu(true), 200);
              }}
              onMouseLeave={() => {
                if (mediaTimerRef.current) clearTimeout(mediaTimerRef.current);
                mediaCloseTimerRef.current = setTimeout(() => setShowMediaMenu(false), 250);
              }}
              role="menuitem"
            >
              Media
            </div>
            <div 
              className="careers-menu-trigger" 
              onMouseEnter={() => {
                if (careersCloseTimerRef.current) clearTimeout(careersCloseTimerRef.current);
                careersTimerRef.current = setTimeout(() => setShowCareersMenu(true), 200);
              }}
              onMouseLeave={() => {
                if (careersTimerRef.current) clearTimeout(careersTimerRef.current);
                careersCloseTimerRef.current = setTimeout(() => setShowCareersMenu(false), 250);
              }}
              role="menuitem"
            >
              Careers
            </div>
            <a href="#cta-banner" role="menuitem">Contact</a>
          </div>
        </nav>

        {showMenu && (
          <div className="services-mega-menu" onMouseEnter={() => {
            if (servicesCloseTimerRef.current) clearTimeout(servicesCloseTimerRef.current);
          }} onMouseLeave={() => {
            servicesCloseTimerRef.current = setTimeout(() => setShowMenu(false), 250);
          }}>
            <div className="mega-menu-container">
              <div className="mega-menu-left">
                <ul className="services-list">
                  {servicesCards.map((card) => (
                    <li 
                      key={card.key} 
                      className={`service-item ${activeService?.id === card.key ? 'active' : ''}`}
                      onMouseEnter={() => {
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
              <div className="mega-menu-right">
                {activeService && <ServiceDetails service={activeService} />}
              </div>
            </div>
          </div>
        )}

        {showCompanyMenu && (
          <div className="company-mega-menu" onMouseEnter={() => {
            if (companyCloseTimerRef.current) clearTimeout(companyCloseTimerRef.current);
          }} onMouseLeave={() => {
            companyCloseTimerRef.current = setTimeout(() => setShowCompanyMenu(false), 250);
          }}>
            <div className="mega-menu-container company-container">
              <div className="company-column">
                <h3>About</h3>
                <ul>
                  <li><a href="#about">Who we are</a></li>
                  <li><a href="#customers">Our Customers</a></li>
                  <li><a href="#partners">Our Partners</a></li>
                </ul>
              </div>
              <div className="company-column">
                <h3>Contact</h3>
                <ul>
                  <li><a href="#contact-us">Contact Us</a></li>
                  <li><a href="#feedback">Send Feedback</a></li>
                </ul>
              </div>
              <div className="company-column">
                {/* Empty for now */}
              </div>
              <div className="company-column">
                {/* Empty for now */}
              </div>
            </div>
          </div>
        )}

        {showMediaMenu && (
          <div className="media-mega-menu" onMouseEnter={() => {
            if (mediaCloseTimerRef.current) clearTimeout(mediaCloseTimerRef.current);
          }} onMouseLeave={() => {
            mediaCloseTimerRef.current = setTimeout(() => setShowMediaMenu(false), 250);
          }}>
            <div className="mega-menu-container media-container">
              <ul className="media-list">
                <li><a href="#case-studies">Case Studies</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#blog">Blog / Insights</a></li>
              </ul>
            </div>
          </div>
        )}

        {showCareersMenu && (
          <div className="careers-mega-menu" onMouseEnter={() => {
            if (careersCloseTimerRef.current) clearTimeout(careersCloseTimerRef.current);
          }} onMouseLeave={() => {
            careersCloseTimerRef.current = setTimeout(() => setShowCareersMenu(false), 250);
          }}>
            <div className="mega-menu-container careers-container">
              <div className="careers-left">
                <ul className="careers-list">
                  <li><a href="#openings">Current Openings</a></li>
                  <li><a href="#life">Life at Company</a></li>
                  <li><a href="#why-choose">Why Work With Us</a></li>
                </ul>
              </div>
              <div className="careers-right">
                <div className="world-map-placeholder">
                  <div className="map-image">[World Map Illustration]</div>
                  <p>We are a global company...</p>
                  <button className="btn-primary">Check all locations</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
