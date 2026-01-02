import React from "react";

const defaultStudies = [
  {
    id: 1,
    title: "Catch-All Campaign Success",
    description: "Scaled Amazon PPC with a Catch-All strategy, boosting sales while optimizing ad spend.",
    image: "Assets/case1-1.png",
    bullets: [
      "⬆ More conversions & sales",
      "💰 Better ROI with bidding",
      "📉 Reduced ACOS for cost efficiency",
      "🔑 Expanded keyword reach",
    ],
  },
  {
    id: 2,
    title: "25% Conversion Rate in a Competitive Niche",
    description: "Achieved 25% conversion rate by optimizing listings and PPC in a competitive category.",
    image: "Assets/case2-1.png",
    bullets: ["🔥 25% conversion rate", "⚔️ Won in competition", "💡 Ongoing optimization", "⚖️ Balanced ACOS growth"],
  },
  {
    id: 3,
    title: "Driving Organic Growth with Amazon Posts",
    description: "Leveraged Amazon Posts (images & videos) to boost visibility and organic engagement.",
    image: "Assets/case3-1.png",
    bullets: ["📈 Increased organic impressions", "🎯 Higher CTR with engaging creatives", "🏆 Strengthened brand authority", "💰 Incremental sales without extra ads"],
  },
  // Add more default entries as needed
];

export default function CaseStudies({ studies = defaultStudies }) {
  return (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <p className="section-subtitle">Results that matter — proven growth stories from Amazon brands</p>

        <div className="case-studies-grid">
          {studies.map((s) => (
            <div className="case-card" data-aos="fade-up" data-aos-delay={100} key={s.id}>
              <a href="#" onClick={(e) => e.preventDefault()} data-lightbox={`case${s.id}`} data-title={s.title}>
                <img src={s.image} alt={s.title} className="case-img" />
              </a>

              <div className="case-content">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <ul>
                  {s.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
                <button className="btn btn-primary view-case" data-id={s.id} data-bs-toggle="modal" data-bs-target="#case-modal">
                  View More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
