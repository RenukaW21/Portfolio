"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const skills = [
  "React.js", "TypeScript", "JavaScript", "HTML & CSS",
  "Bootstrap", "Tailwind CSS", "Node.js", "Express.js",
  "REST APIs", "PHP", "Java", "MongoDB",
  "MySQL", "PostgreSQL", "SQLite", "Git",
];

// Each skill: [left%, top%, rotate-deg] — organic scatter, not a grid
const skillLayout: [number, number, number][] = [
  [2,  2,  -10], [35, 0,   5],  [62, 3,   12],
  [8,  18, 14],  [40, 16, -8],  [70, 14,  -5],
  [0,  34, -6],  [32, 32,  10], [60, 30,  -13],
  [10, 50, 9],   [38, 49, -12], [65, 48,   8],
  [4,  66, -7],  [36, 65,  14], [63, 64,  -9],
  [28, 80,  6],
];

const toolItems = [
  { label: "Git",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "GitHub",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { label: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { label: "React",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "MySQL",   icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const defines = [
  {
    num: "01.",
    title: "Backend Builder",
    desc: "I specialize in building robust backend systems — RESTful APIs, CRUD operations, and database management using Node.js, PHP, MySQL and MongoDB in production environments.",
  },
  {
    num: "02.",
    title: "Strong Fundamentals",
    desc: "Solid grounding in DSA, DBMS, OOP, and Operating Systems. I've solved 130+ LeetCode problems in Java and consistently apply CS fundamentals to write efficient, clean code.",
  },
  {
    num: "03.",
    title: "Full-Stack Capable",
    desc: "From pixel-perfect React interfaces to scalable Node.js APIs, I work across the entire stack. My Warehouse Management project handled 1000+ records with a 25% speed improvement.",
  },
  {
    num: "04.",
    title: "Achiever & Learner",
    desc: "97.78 percentile in Naukri Young Turks 2025, NPTEL Elite+Silver, and 2nd place at CodeFiesta. I stay ahead of the curve and bring that energy to every project I take on.",
  },
];

export function HorizontalAbout() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-58%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[450vh]"
      style={{ backgroundColor: "#F9F7F2" }}
    >
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex items-stretch h-screen">

          {/* ━━ 1: Left Blue Block ━━ */}
          <div
            className="flex-none bg-[#002DFF] flex items-center justify-center relative"
            style={{ width: "30vw" }}
          >
            <div className="absolute top-12 left-10 w-2 h-2 bg-white rounded-full opacity-80" />
            <h2
              className="text-[#F5F3ED] text-center uppercase"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(3rem, 5.5vw, 6rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "0.01em",
              }}
            >
              How It All<br />Started
            </h2>
          </div>

          {/* gap */}
          <div style={{ width: "8vw", flexShrink: 0 }} />

          {/* ━━ 2: Photo Card ━━ */}
          <div
            className="self-center flex-none relative"
            style={{ width: "24vw", height: "70vh", minWidth: 240 }}
          >
            <div
              className="relative w-full h-full overflow-hidden"
              style={{ borderRadius: 48, background: "#3B82F6" }}
            >
              <Image
                src="/images/renuka.jpg"
                alt="Renuka"
                fill
                sizes="24vw"
                className="object-cover object-top"
                style={{
                  filter: "grayscale(1) contrast(1.05) brightness(1.05)",
                  mixBlendMode: "multiply",
                }}
                priority
              />
            </div>
          </div>

          {/* gap */}
          <div style={{ width: "8vw", flexShrink: 0 }} />

          {/* ━━ 3: Narrative Text ━━ */}
          <div className="flex-none self-center flex flex-col justify-center gap-6" style={{ width: "36vw", minWidth: 300 }}>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.7, color: "var(--fg)", fontWeight: 400 }}>
              Hello! I&apos;m Renuka Warkade, a B.Tech Computer Science student
              at Madhav Institute of Technology &amp; Science, Gwalior (GPA 7.61),
              currently working as a Software Developer Intern at Elsner Technologies.
            </p>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.7, color: "var(--fg)", fontWeight: 400 }}>
              At Elsner, I build and maintain web applications using PHP &amp; MySQL,
              implement RESTful APIs, and collaborate with senior developers on
              real-world production systems.
            </p>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.7, color: "var(--fg)", fontWeight: 400 }}>
              I scored 97.78 percentile in the Naukri Campus Young Turks 2025
              Aptitude Test and hold an Elite+Silver recognition from NPTEL IIT Guwahati.
              I believe great software should feel effortless — for the user and the team.
            </p>
          </div>

          {/* gap */}
          <div style={{ width: "10vw", flexShrink: 0 }} />

          {/* ━━ 4: Know-More Panel (heading + toolkit | skills) ━━ */}
          <div
            className="self-center flex-none flex gap-6"
            style={{ width: "64vw", height: "80vh", minWidth: 600 }}
          >
            {/* Left col: heading + toolkit */}
            <div className="flex flex-col justify-between" style={{ width: "42%" }}>
              <div className="flex flex-col gap-4">
                <div className="w-3 h-3 rounded-full" style={{ background: "#002DFF" }} />
                <h2
                  style={{
                    fontFamily: "var(--font-bricolage), sans-serif",
                    fontSize: "clamp(2.2rem, 4vw, 4.8rem)",
                    fontWeight: 800,
                    lineHeight: 0.88,
                    letterSpacing: "-0.03em",
                    color: "var(--fg)",
                  }}
                >
                  Let&apos;s know<br />more about<br />me
                </h2>
              </div>

              {/* Toolkit card */}
              <div
                style={{
                  background: "#fff",
                  border: "1.5px solid #e0ddd5",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "20px 24px 14px" }}>
                  <h3 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
                    Toolkit
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#666" }}>
                    Tools that help me build amazing products.
                  </p>
                </div>
                <div
                  style={{
                    borderTop: "1.5px solid #e0ddd5",
                    padding: "14px 18px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 10,
                  }}
                >
                  {toolItems.map((t) => (
                    <div key={t.label} className="flex flex-col items-center gap-1">
                      <div
                        style={{
                          width: 42, height: 42, borderRadius: 12,
                          background: "#f5f5f5", display: "flex",
                          alignItems: "center", justifyContent: "center", padding: 7,
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={t.icon} alt={t.label} width={26} height={26} style={{ objectFit: "contain" }} />
                      </div>
                      <span style={{ fontSize: "0.56rem", color: "#888", textAlign: "center", lineHeight: 1.2 }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right col: Skills card */}
            <div
              className="flex flex-col"
              style={{ width: "38%", background: "#fff", border: "1.5px solid #e0ddd5", borderRadius: 28, overflow: "hidden" }}
            >
              <div style={{ padding: "20px 24px 14px" }}>
                <h3 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
                  Skills
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#666" }}>
                  Technologies I use to build amazing software.
                </p>
              </div>
              <div className="relative flex-1 mx-4 mb-4" style={{ minHeight: 0 }}>
                {skills.map((skill, i) => {
                  const [l, t, r] = skillLayout[i] ?? [0, 0, 0];
                  return (
                    <div
                      key={skill}
                      className="absolute bg-white font-medium"
                      style={{
                        transform: `rotate(${r}deg)`,
                        left: `${l}%`,
                        top: `${t}%`,
                        fontSize: "0.75rem",
                        whiteSpace: "nowrap",
                        color: "var(--fg)",
                        border: "1.5px solid #ccc",
                        borderRadius: 999,
                        padding: "6px 14px",
                        lineHeight: 1.4,
                      }}
                    >
                      {skill}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* gap */}
          <div style={{ width: "8vw", flexShrink: 0 }} />

          {/* ━━ 5: "What defines me" Panel ━━ */}
          <div
            className="self-center flex-none flex flex-col gap-10"
            style={{ width: "58vw", minWidth: 540 }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontSize: "clamp(2.8rem, 5vw, 5.5rem)",
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.03em",
                color: "var(--fg)",
              }}
            >
              What defines me
            </h2>

            {/* 2×2 grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px 48px",
              }}
            >
              {defines.map((d) => (
                <div key={d.num} className="flex flex-col gap-2">
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                      fontWeight: 700,
                      color: "var(--fg)",
                    }}
                  >
                    {d.num} {d.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      lineHeight: 1.7,
                      color: "var(--muted)",
                      fontWeight: 400,
                    }}
                  >
                    {d.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* right padding */}
          <div style={{ width: "15vw", flexShrink: 0 }} />

        </motion.div>
      </div>
    </section>
  );
}
