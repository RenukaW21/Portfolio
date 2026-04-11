"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    name: "Warehouse Management Software",
    tagline: "Full-stack web app managing 1000+ inventory records with real-time chatbot support.",
    bg: "#EDE8F5",
    tech: ["React (TypeScript)", "Node.js (Express)", "MySQL", "REST APIs", "SMTP"],
    link: "https://github.com/RenukaW21",
    highlights: [
      "Engineered 10+ RESTful APIs with full CRUD — 30% better data processing",
      "Integrated AI-powered chatbot, reducing manual support by 40%",
      "SMTP email notifications & automation workflows",
      "25% faster response time via backend & query optimisation",
    ],
  },
  {
    id: "02",
    name: "SkillServe Platform",
    tagline: "A full-stack Service Commerce web application to discover, book, and pay for skilled services.",
    bg: "#EAF5EA",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
    link: "https://github.com/RenukaW21/Skill-Serve---Service-Commerce-Platform",
    highlights: [
      "Built with the MERN Stack for robust and scalable performance.",
      "Manages services, bookings, and a complete service lifecycle.",
      "Real-world application supporting various types of skilled workers.",
    ],
  },
  {
    id: "03",
    name: "E-Commerce Dashboard",
    tagline: "A fullstack e-commerce dashboard featuring robust architecture and dynamic data handling.",
    bg: "#FFF2EC",
    tech: ["React.js", "PHP", "MySQL", "Tailwind CSS"],
    link: "https://github.com/RenukaW21/react-php-ecommerce",
    highlights: [
      "Implemented secure user authentication and session-based shopping cart.",
      "Developed dynamic category hierarchy and scalable routing.",
      "Responsive UI/UX designed for real-world deployment.",
    ],
  },
  {
    id: "04",
    name: "Developer Portfolio",
    tagline: "Premium, horizontally-scrolling portfolio built with Next.js and Framer Motion.",
    bg: "#FDF8EF",
    tech: ["Next.js 16", "TypeScript", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/RenukaW21/Portfolio",
    highlights: [
      "Horizontal scroll About page inspired by premium editorial design.",
      "Dark contact card with email CTA and social links.",
      "Responsive Navbar with smooth cross-page navigation.",
      "Deployed on Vercel with modern SEO metadata.",
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "var(--bg)" }} className="w-full py-24">
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ color:"#002DFF", fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>
            Selected Work
          </p>
          <h2 style={{ color:"var(--fg)", fontSize:"clamp(40px,6vw,72px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1, fontFamily:"var(--font-bricolage),sans-serif" }}>
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-60px" }}
              transition={{ duration:0.6, delay:i*0.07, ease:[0.16,1,0.3,1] }}
              style={{
                backgroundColor: p.bg,
                borderRadius: 40,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
                width: "100%",
              }}
            >
              {/* LEFT — info */}
              <div style={{ flex:"0 0 50%", padding:"44px 48px", display:"flex", flexDirection:"column", gap:16, justifyContent:"space-between" }}>
                {/* Faint number */}
                <div style={{ fontSize:96, fontWeight:900, lineHeight:1, color:"rgba(0,45,255,0.08)", fontFamily:"var(--font-bricolage),sans-serif", userSelect:"none" }}>
                  {p.id}
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:10, marginTop:-20 }}>
                  <h3 style={{ color:"#002DFF", fontSize:"clamp(24px,3vw,40px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1.05, fontFamily:"var(--font-bricolage),sans-serif" }}>
                    {p.name}
                  </h3>
                  <p style={{ color:"rgba(10,10,10,0.6)", fontSize:15, lineHeight:1.65, fontWeight:500, maxWidth:340 }}>
                    {p.tagline}
                  </p>
                </div>

                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      padding:"5px 12px", borderRadius:999, fontSize:11, fontWeight:600,
                      background:"rgba(255,255,255,0.75)", border:"1px solid rgba(0,0,0,0.1)", color:"rgba(10,10,10,0.6)"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 6,
                    color: "#002DFF", fontWeight: 600, fontSize: 13,
                    width: "fit-content",
                  }}
                >
                  View on GitHub <ArrowUpRight size={14} />
                </a>
              </div>

              {/* RIGHT — highlights */}
              <div style={{
                flex:"0 0 50%", margin:16, borderRadius:28, overflow:"hidden",
                background:"rgba(255,255,255,0.55)", border:"1px solid rgba(255,255,255,0.8)",
                display:"flex", flexDirection:"column", justifyContent:"center", padding:"32px 36px", gap:16,
              }}>
                <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase", color:"rgba(0,45,255,0.6)", marginBottom:4 }}>
                  Highlights
                </p>
                {p.highlights.map((h, hi) => (
                  <div key={hi} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                    <span style={{ color:"#002DFF", fontWeight:700, fontSize:14, marginTop:1, flexShrink:0 }}>→</span>
                    <p style={{ fontSize:13.5, lineHeight:1.6, color:"rgba(10,10,10,0.75)", fontWeight:500 }}>{h}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Banner */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.2 }}
          style={{
            marginTop: 48,
            padding: "36px 48px",
            borderRadius: 32,
            background: "#0a0a0a",
            color: "#F5F3ED",
            display:"flex", alignItems:"center", justifyContent:"space-between", flexWrap:"wrap", gap:24,
          }}
        >
          <div>
            <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"rgba(245,243,237,0.5)", marginBottom:8 }}>
              Experience
            </p>
            <h3 style={{ fontSize:"clamp(20px,2.5vw,30px)", fontWeight:800, fontFamily:"var(--font-bricolage),sans-serif", letterSpacing:"-0.02em" }}>
              Elsner Technologies Pvt. Ltd.
            </h3>
            <p style={{ fontSize:14, color:"rgba(245,243,237,0.6)", marginTop:4 }}>
              Software Developer Intern &nbsp;·&nbsp; Jan 2026 – Present &nbsp;·&nbsp; Onsite
            </p>
          </div>
          <ul style={{ display:"flex", flexDirection:"column", gap:8, maxWidth:460 }}>
            {[
              "Backend development using PHP & MySQL for live web applications",
              "CRUD operations & RESTful APIs for dynamic data handling",
              "Collaborating with senior devs to debug and optimise performance",
            ].map((item, i) => (
              <li key={i} style={{ display:"flex", gap:10, alignItems:"flex-start" }}>
                <span style={{ color:"#4d77ff", fontWeight:700, flexShrink:0 }}>✦</span>
                <span style={{ fontSize:13.5, lineHeight:1.6, color:"rgba(245,243,237,0.75)" }}>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.6, delay:0.3 }}
          style={{
            marginTop: 24,
            padding: "36px 48px",
            borderRadius: 32,
            background: "#F5F3ED",
            display:"flex", flexDirection:"column", gap:16,
          }}
        >
          <p style={{ fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", color:"#002DFF" }}>
            Achievements
          </p>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))", gap:16 }}>
            {[
              { val:"130+", label:"DSA Problems solved on LeetCode using Java" },
              { val:"2nd", label:"Place at intra-college quiz competition \"CodeFiesta\"" },
              { val:"97.78%", label:"Naukri Campus Young Turks 2025 Aptitude Test percentile" },
              { val:"85th %ile", label:"NPTEL IIT Guwahati — Elite+Silver recognition" },
            ].map((a) => (
              <div key={a.val} style={{ display:"flex", flexDirection:"column", gap:4 }}>
                <span style={{ fontSize:"clamp(24px,3vw,36px)", fontWeight:900, color:"#002DFF", fontFamily:"var(--font-bricolage),sans-serif", lineHeight:1 }}>{a.val}</span>
                <span style={{ fontSize:13, color:"rgba(10,10,10,0.65)", lineHeight:1.5 }}>{a.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
