import React from "react";

// Platforms component reproduces the original #platforms section markup
// Keeps ids, class names and structure so it can be dropped into a React page
// Images reference the same relative paths used in the original project.

const defaultPlatforms = [
  { id: "amazon", img: "Assets/amazon-svgrepo-com.svg", label: "Amazon" },
  { id: "shopify", img: "Assets/shopify.svg", label: "Shopify" },
  { id: "meta", img: "Assets/meta.svg", label: "Meta" },
  { id: "tiktok", img: "Assets/tiktok.svg", label: "TikTok" },
  { id: "wordpress", img: "Assets/wordpress.svg", label: "Wordpress" },
];

export default function Platforms({ platforms = defaultPlatforms }) {
  return (
    <section className="tech-stack" id="platforms" aria-labelledby="tech-title">
      <div className="container">
        <h2 id="tech-title" className="section-title">Platforms we work on</h2>
        <p className="section-subtitle">We empower brands to grow across top eCommerce and digital platforms.</p>

        <div className="swiper tech-carouse" aria-label="Technology showcase">
          <div className="swiper-wrapper">
            {platforms.map((p) => (
              <div className="swiper-slide tech-card" key={p.id}>
                <img src={p.img} alt={p.label + " logo"} width="60" height="60" loading="lazy" />
                <p>{p.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
