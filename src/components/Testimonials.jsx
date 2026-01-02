import React from "react";

const defaultReviews = [
  { id: 1, img: "Assets/clientreview.png", alt: "Client Review Screenshot 1" },
  { id: 2, img: "Assets/clientreview2.png", alt: "Client Review Screenshot 2" },
];

export default function Testimonials({ reviews = defaultReviews }) {
  return (
    <section className="testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="container">
        <h2 id="testimonials-title" className="section-title" data-aos="fade-up">What Our Clients Say</h2>
        <p className="section-subtitle" data-aos="fade-up">Real feedback from real clients</p>

        <div className="review-grid">
          {reviews.map((r, i) => (
            <div className="review-card" data-aos="fade-up" data-aos-delay={100 + i * 100} key={r.id}>
              <img src={r.img} alt={r.alt} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
