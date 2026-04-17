"use client";

import { motion } from "framer-motion";

export function Contact() {
  return (
    <div id="contact" className="w-full" style={{ maxWidth: 1120, padding: "0 24px" }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          backgroundColor: "#0a0a0a",
          color: "#F5F3ED",
          borderRadius: 48,
          padding: "80px 72px",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 60,
          flexWrap: "wrap",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left */}
        <div style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", gap: 32 }}>
          <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,243,237,0.6)" }}>
            Get In Touch
          </p>
          <h2 style={{ fontSize: "clamp(40px,5vw,64px)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1.05, fontFamily: "var(--font-bricolage),sans-serif" }}>
            Have an idea?<br />Let&apos;s work<br />together.
          </h2>
          <a
            href="mailto:renukawarkade21@gmail.com"
            style={{
              display: "inline-flex", alignItems: "center", width: "fit-content",
              padding: "16px 36px", backgroundColor: "#F5F3ED", color: "#0a0a0a",
              borderRadius: 999, fontSize: 15, fontWeight: 700,
              transition: "transform 0.2s", letterSpacing: "-0.01em", marginTop: 8
            }}
            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
          >
            Say Hi — renukawarkade21@gmail.com
          </a>
        </div>

        {/* Right: links */}
        <div style={{ flex: "0 0 auto", display: "flex", flexDirection: "column", gap: 8, minWidth: 200, paddingTop: 64 }}>
          {[["Resume","https://drive.google.com/file/d/1gybao_59nsFNc-WltcNBF-7bo83tfIKP/view?usp=drivesdk"], ["GitHub","https://github.com/RenukaW21"], ["LinkedIn","https://www.linkedin.com/in/renuka-warkade-a56691256/"], ["Instagram","#"]].map(([l, h]) => (
            <a
              key={l} href={h}
              style={{
                display: "flex", justifyContent: "space-between", alignItems: "center", gap: 60,
                padding: "16px 0", fontSize: 15, fontWeight: 600, color: "rgba(245,243,237,0.6)",
                borderBottom: "1px solid rgba(245,243,237,0.1)", transition: "color 0.2s"
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#F5F3ED")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(245,243,237,0.6)")}
            >
              <span>{l}</span><span style={{ fontSize: 18 }}>↗</span>
            </a>
          ))}
        </div>

        {/* Decoration blobs */}
        <div style={{ position:"absolute", top:"-60px", right:"-60px", width:240, height:240, background:"rgba(0,45,255,0.12)", borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"-60px", width:240, height:240, background:"rgba(0,45,255,0.08)", borderRadius:"50%", filter:"blur(80px)", pointerEvents:"none" }} />
      </motion.div>
    </div>
  );
}
