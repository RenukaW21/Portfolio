"use client";

import { motion } from "framer-motion";

const skills = ["Next.js","React","TypeScript","Tailwind CSS","Node.js","Express","MongoDB","Java","PHP","Git","Docker"];

export function About() {
  return (
    <section id="about" style={{ backgroundColor: "var(--bg)" }} className="w-full py-28">
      {/* Shared container — same width & padding as every other section */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{ color: "#002DFF", fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}
        >
          About Me
        </motion.p>

        {/* Layout: heading (40%) | content (60%) */}
        <div style={{ display: "grid", gridTemplateColumns: "2fr 3fr", gap: 80, alignItems: "start" }}>

          {/* Left: heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ color: "var(--fg)", fontSize: "clamp(36px,4.5vw,52px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em", fontFamily: "var(--font-bricolage),sans-serif" }}
          >
            Engineering <br/><span style={{ color: "#002DFF" }}>with purpose.</span>
          </motion.h2>

          {/* Right: body */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.75 }}>
              I'm a passionate Full Stack Developer who loves turning complex problems into clean,
              elegant digital solutions that people genuinely enjoy using.
            </p>
            <p style={{ color: "var(--muted)", fontSize: 17, lineHeight: 1.75 }}>
              From pixel-perfect interfaces to scalable backend APIs — I care deeply about
              performance, accessibility, and craft at every layer of the stack.
            </p>

            {/* Stats */}
            <div style={{ display: "flex", gap: 40, paddingTop: 24, marginTop: 8, borderTop: "1px solid var(--border)" }}>
              {[["3+","Years"],["50+","Projects"],["10+","Clients"]].map(([n, l]) => (
                <div key={l}>
                  <div style={{ color: "var(--fg)", fontSize: 30, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>{n}</div>
                  <div style={{ color: "var(--muted)", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
                </div>
              ))}
            </div>

            {/* Skill chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {skills.map((s) => (
                <span key={s} style={{
                  padding: "6px 14px", borderRadius: 999, fontSize: 12, fontWeight: 600,
                  background: "var(--card)", border: "1px solid var(--border)", color: "var(--muted)"
                }}>
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
