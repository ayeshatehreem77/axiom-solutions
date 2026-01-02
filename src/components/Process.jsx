import React from "react";

const defaultSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We start by understanding your business goals, target audience, and unique requirements to create a tailored strategy.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Our designers create stunning, user-friendly interfaces that align with your brand and drive conversions.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your solution using cutting-edge technologies, ensuring it's fast, secure, and scalable.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description:
      "We launch your project and provide ongoing support to ensure continued success and growth.",
  },
];

export default function Process({ steps = defaultSteps }) {
  return (
    <section className="process" id="process" data-aos="fade-up" aria-labelledby="process-title">
      <div className="container">
        <h2 id="process-title" className="section-title">How We Work</h2>
        <div className="process-grid">
          {steps.map((s, i) => (
            <div className="process-step" data-aos="fade-up" data-aos-delay={100 + i * 100} key={s.number}>
              <div className="step-number">{s.number}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
