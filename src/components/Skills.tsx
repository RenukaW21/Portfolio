"use client";

import { motion } from "framer-motion";

const categories = [
  {
    label: "Languages",
    color: "#002DFF",
    bg: "#EEF2FF",
    icon: "{ }",
    skills: ["JavaScript", "TypeScript", "Java", "PHP"],
  },
  {
    label: "Frontend",
    color: "#0891b2",
    bg: "#ECFEFF",
    icon: "◇",
    skills: ["React.js", "Next.js", "HTML & CSS", "Bootstrap", "Tailwind CSS"],
  },
  {
    label: "Backend",
    color: "#7c3aed",
    bg: "#F5F3FF",
    icon: "⚙",
    skills: ["Node.js", "Express.js", "REST APIs", "PHP"],
  },
  {
    label: "Databases",
    color: "#059669",
    bg: "#ECFDF5",
    icon: "▦",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    label: "CS Fundamentals",
    color: "#d97706",
    bg: "#FFFBEB",
    icon: "∑",
    skills: ["DSA", "DBMS", "OOP", "OS", "TOC"],
  },
  {
    label: "Tools",
    color: "#dc2626",
    bg: "#FEF2F2",
    icon: "⚒",
    skills: ["Git", "GitHub", "VS Code", "Postman", "XAMPP"],
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const card = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export function Skills() {
  return (
    <section
      id="skills"
      style={{ backgroundColor: "var(--bg)" }}
      className="w-full py-24"
    >
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{
            color: "#002DFF", fontSize: 11, fontWeight: 700,
            letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12,
          }}>
            Tech Stack
          </p>
          <h2 style={{
            color: "var(--fg)",
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            lineHeight: 1,
            fontFamily: "var(--font-bricolage), sans-serif",
          }}>
            Skills
          </h2>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.label}
              variants={card}
              whileHover={{ y: -4 }}
              style={{
                background: "var(--card, #fff)",
                border: "1.5px solid var(--border)",
                borderRadius: 28,
                padding: "28px 32px",
                display: "flex",
                flexDirection: "column",
                gap: 20,
                transition: "box-shadow 0.3s",
                cursor: "default",
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = `0 12px 40px ${cat.color}18`)}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
            >
              {/* Card header */}
              <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 14,
                  background: cat.bg, display: "flex",
                  alignItems: "center", justifyContent: "center",
                  fontSize: 18, color: cat.color, fontWeight: 700,
                  fontFamily: "monospace",
                }}>
                  {cat.icon}
                </div>
                <h3 style={{
                  fontFamily: "var(--font-bricolage), sans-serif",
                  fontSize: "1.1rem", fontWeight: 800,
                  color: "var(--fg)", letterSpacing: "-0.01em",
                }}>
                  {cat.label}
                </h3>
              </div>

              {/* Skill pills */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      background: cat.bg,
                      color: cat.color,
                      border: `1px solid ${cat.color}28`,
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
