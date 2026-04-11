"use client";

import { motion } from "framer-motion";
import React from "react";
import Link from "next/link";

type Style = "filled" | "outlined";
interface Char { char: string; style: Style; }

const line1: Char[] = [
  { char: "H", style: "filled"   },
  { char: "e", style: "outlined" },
  { char: "l", style: "filled"   },
  { char: "l", style: "filled"   },
  { char: "o", style: "outlined" },
  { char: " ", style: "filled"   },
  { char: "I", style: "filled"   },
  { char: "\u2019", style: "filled" },
  { char: "m", style: "outlined" },
];

const line2: Char[] = [
  { char: "R", style: "outlined" },
  { char: "e", style: "filled"   },
  { char: "n", style: "filled"   },
  { char: "u", style: "filled"   },
  { char: "k", style: "outlined" },
  { char: "a", style: "filled"   },
];

function Letter({ char, style, delay }: Char & { delay: number }) {
  if (char === " ") {
    return <span style={{ display: "inline-block", width: "0.22em" }} />;
  }
  return (
    <motion.span
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-bricolage), var(--font-inter), sans-serif",
        fontWeight: 800,
        lineHeight: 0.88,
        letterSpacing: "-0.025em",
        color:            style === "filled"   ? "#002DFF"     : "transparent",
        WebkitTextStroke: style === "outlined" ? "2px #002DFF" : "0px",
        WebkitTextFillColor: style === "filled" ? "#002DFF" : "transparent",
      }}
    >
      {char}
    </motion.span>
  );
}

const floatingIcons = [
  // Placed just down of the "Hello" word (~center left, below first line)
  { id: 'react',   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",    top: "38%", left: "34%",  rotate: -8,  delay: 0 },
  
  // Randomly scattered (no ring/circle pattern)
  { id: 'mongo',   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",top: "14%", left: "82%",  rotate: 15,  delay: 0.8 },
  { id: 'vscode',  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",  top: "72%", left: "12%",  rotate: -15, delay: 0.3 },
  { id: 'node',    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",  top: "58%", left: "88%",  rotate: 10,  delay: 1.1 },
  { id: 'git',     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",        top: "85%", left: "25%",  rotate: 6,   delay: 0.6 },
  { id: 'github',  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",  top: "8%",  left: "65%",  rotate: -12, delay: 0.4 },
  { id: 'mysql',   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",    top: "82%", left: "75%",  rotate: -4,  delay: 0.9 },
  { id: 'postman', icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",top: "36%", left: "94%",  rotate: -6,  delay: 0.2 },
  { id: 'html',    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",    top: "10%", left: "20%",  rotate: 18,  delay: 0.5 },
  { id: 'css',     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",      top: "15%", left: "48%",  rotate: -10, delay: 0.7 },
  { id: 'js',      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "50%", left: "5%",  rotate: 8, delay: 1.2 },
  { id: 'ts',      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", top: "25%", left: "72%", rotate: -5, delay: 0.1 },
  { id: 'java',    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",      top: "88%", left: "55%",  rotate: 12,  delay: 1.0 },
];

export function Hero() {
  return (
    <section
      style={{ backgroundColor: "var(--bg)" }}
      className="w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-20 relative overflow-hidden"
    >
      {/* ─── Floating Icons Background ─── */}
      <div className="absolute inset-0 pointer-events-none hidden md:block z-0 max-w-[1400px] mx-auto">
        {floatingIcons.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.65, scale: 1 }}
            transition={{ duration: 1, delay: item.delay, ease: "easeOut" }}
            className="absolute flex items-center justify-center"
            style={{
              top: item.top,
              left: item.left,
              transform: `rotate(${item.rotate}deg)`,
            }}
          >
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            >
              <img 
                src={item.icon} 
                alt={item.id} 
                width={32} 
                height={32} 
                style={{ objectFit: "contain", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.06))" }} 
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* ─── Big text block ─── */}
      <div className="w-full flex flex-col items-center gap-2 z-10">
        {/* Hello I'm */}
        <div
          className="text-center leading-none"
          style={{ fontSize: "clamp(52px, 10vw, 152px)" }}
        >
          {line1.map((c, i) => <Letter key={i} {...c} delay={0.04 * i} />)}
        </div>

        {/* Renuka */}
        <div
          className="text-center leading-none"
          style={{ fontSize: "clamp(52px, 10vw, 152px)" }}
        >
          {line2.map((c, i) => <Letter key={i} {...c} delay={0.3 + 0.05 * i} />)}
        </div>
      </div>

      {/* ─── Tagline + CTA ─── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="mt-12 flex flex-col items-center gap-5 text-center"
      >
        <p style={{ color: "var(--muted)", fontWeight: 500 }} className="text-base md:text-lg max-w-sm leading-relaxed">
          Software Developer Intern @ Elsner Technologies · B.Tech CSE · MITS Gwalior
        </p>

        <div className="flex gap-3 flex-wrap justify-center">
          <Link
            href="/#projects"
            onClick={(e: any) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{ backgroundColor: "#002DFF", color: "#fff" }}
            className="px-8 py-3.5 text-sm font-semibold rounded-full hover:opacity-85 active:scale-95 transition-all flex items-center justify-center"
          >
            View Work
          </Link>
          <Link
            href="/contact"
            style={{ color: "#002DFF", border: "1.5px solid #002DFF" }}
            className="px-8 py-3.5 text-sm font-semibold rounded-full hover:bg-[#002DFF]/6 active:scale-95 transition-all flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </motion.div>

      {/* Reminder watermark */}
      <motion.p
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-0 right-0 text-center text-[11px] font-medium tracking-wide"
        style={{ color: "var(--muted)", opacity: 0.4 }}
      >
        This is your gentle reminder to drink water and be kind to yourself ✦
      </motion.p>
    </section>
  );
}
