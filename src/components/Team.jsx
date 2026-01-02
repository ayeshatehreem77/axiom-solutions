import React from "react";

// Team component reproduces the original #team section markup
// Keeps ids, class names and structure so it can be dropped into a React page

const defaultMembers = [
  {
    id: 1,
    name: "Muhammad Muzamil",
    role: "Co-Founder",
    bio: "Amazon and Ecommerce specialist with 4+ Years Experience.",
    avatar: null,
  },
  {
    id: 2,
    name: "Umar Anas",
    role: "Co Founder",
    bio: "Marketing Specialist From Meta, Tiktok and Amazon Marketing with 5+ Years Experience",
    avatar: null,
  },
  {
    id: 3,
    name: "Ahsan Raza",
    role: "Graphics Designer",
    bio: "Graphic Designer with 4+ Years Experience in Brand Identity & Digital Assets.",
    avatar: null,
  },
  {
    id: 4,
    name: "Ahtesham",
    role: "Web developer",
    bio: "Web Developer with 5+ Years Experience in Responsive Websites, Web Applications & Performance Optimization.",
    avatar: null,
  },
  {
    id: 5,
    name: "Afshan",
    role: "Tiktok Shop Expert",
    bio: "E-commerce & TikTok Shop Specialist with 5+ Years Experience in Store Optimization & Ad Campaigns.",
    avatar: null,
  },
  {
    id: 6,
    name: "Salah ud Din",
    role: "Amazon Brand Manager",
    bio: "3+ years in product research, sourcing, and listing optimization — scaling brands on Amazon.",
    avatar: null,
  },
];

export default function Team({ members = defaultMembers }) {
  return (
    <section className="team" id="team" data-aos="fade-up" aria-labelledby="team-title">
      <div className="container">
        <h2 id="team-title" className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">The talented minds behind your success</p>

        <div className="team-grid">
          {members.map((m, idx) => (
            <div
              className="team-member"
              data-aos="fade-up"
              data-aos-delay={100 + (idx % 3) * 100}
              key={m.id}
            >
              <div className="member-avatar">
                <div className="avatar-placeholder">{m.avatar || (m.name.split(" ")[0].charAt(0) || "👤")}</div>
              </div>
              <h3>{m.name}</h3>
              <p className="member-role">{m.role}</p>
              <p className="member-bio">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
