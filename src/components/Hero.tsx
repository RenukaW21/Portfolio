"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <section
      style={{
        backgroundColor: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        paddingTop: 80,
        paddingBottom: 64,
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* ─── Faint Watermark Text ─── */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.03, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%) rotate(-10deg)",
          fontSize: "clamp(120px, 20vw, 350px)",
          fontWeight: 900,
          color: "var(--fg)",
          whiteSpace: "nowrap",
          pointerEvents: "none",
          zIndex: 0,
          fontFamily: "var(--font-bricolage), serif",
          letterSpacing: "-0.05em"
        }}
      >
        DEVELOPER
      </motion.div>

      {/* Shared container */}
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px", width: "100%", zIndex: 10 }}>
        
        <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ display: "flex", flexDirection: "column", gap: 8 }}
          >
            <p style={{
              color: "var(--muted)", fontFamily: "var(--font-bricolage), sans-serif", fontSize: "clamp(16px, 2vw, 20px)",
              fontWeight: 400, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px"
            }}>
              Hi, I'm Renuka
            </p>
            <h1 style={{
              color: "var(--fg)", fontSize: "clamp(60px, 9vw, 120px)",
              fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.04em",
              fontFamily: "var(--font-bricolage), sans-serif", margin: 0,
            }}>
              Full Stack<br />
              Software<br />
              Developer<span style={{ color: "#06b6d4" }}>.</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="https://github.com/RenukaW21"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "var(--fg)",
                color: "var(--bg)",
                padding: "16px 40px", fontSize: 16, fontWeight: 600,
                borderRadius: 50, display: "inline-flex", alignItems: "center", justifyContent: "center",
                transition: "all 0.3s ease",
                fontFamily: "var(--font-bricolage), sans-serif",
                letterSpacing: "0.01em",
                border: "1px solid var(--fg)",
              }}
              onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
              onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              onMouseDown={e => e.currentTarget.style.transform = "scale(0.96)"}
              onMouseUp={e => e.currentTarget.style.transform = "scale(1)"}
            >
              Previous Projects
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
