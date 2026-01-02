import React from "react";

const defaultFaqs = [
  {
    id: 1,
    q: "What services does Meticon Solutions offer?",
    a: "We provide complete e-commerce solutions, including Amazon PPC management, brand strategy, storefront & listing optimization, inventory planning, creative design, AI-powered automation, and Shopify/TikTok Shop integration.",
  },
  {
    id: 2,
    q: "How can you help improve my Amazon sales?",
    a: "Our team optimizes product listings, creates high-converting storefronts, and manages PPC campaigns to maximize ROI while reducing wasted ad spend.",
  },
  {
    id: 3,
    q: "Do you work with new brands?",
    a: "Yes — we help launch brands from scratch, including product research, brand identity creation, and full marketplace setup on Amazon, TikTok Shop, and Shopify.",
  },
  {
    id: 4,
    q: "What is your approach to PPC management?",
    a: "We use data-driven strategies, negative keyword optimization, and continuous performance tracking to ensure predictable growth and lower costs.",
  },
  {
    id: 5,
    q: "Can you handle product photography and creative content?",
    a: "Absolutely — we offer professional product images, A+ content, videos, and social media creatives tailored to boost engagement and conversions.",
  },
  {
    id: 6,
    q: "Do you provide support for international sellers?",
    a: "Yes, we work with brands worldwide and adapt strategies for both local and global markets.",
  },
  {
    id: 7,
    q: "How do you ensure smooth inventory management?",
    a: "We forecast demand, manage stock levels, and plan fulfillment to avoid both overstock and stockouts.",
  },
  {
    id: 8,
    q: "What makes Meticon Solutions different from other agencies?",
    a: "Our integrated approach combines marketing, creative design, automation, and marketplace expertise — delivering measurable results with ongoing support.",
  },
];

export default function FAQ({ items = defaultFaqs }) {
  return (
    <section className="faq" id="faq" data-aos="fade-up" aria-labelledby="faq-title">
      <div className="container">
        <h2 id="faq-title" className="section-title">Frequently Asked Questions</h2>
        <p className="section-subtitle">Everything you need to know about working with us</p>

        <div className="faq-grid">
          {items.map((f, i) => (
            <div className="faq-item" data-aos="fade-up" data-aos-delay={100 + (i % 4) * 100} key={f.id}>
              <h3>{f.q}</h3>
              <p>{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
