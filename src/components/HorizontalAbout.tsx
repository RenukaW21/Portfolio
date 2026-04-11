"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";

const skills = [
  "Next.js", "React", "TypeScript", "Node.js",
  "Express", "MongoDB", "Java", "PHP",
  "Git", "Docker", "Tailwind CSS", "REST APIs",
  "MySQL", "HTML & CSS", "JavaScript",
];

const skillRotations = [-12, 6, 10, -7, 15, -9, 4, -11, 8, -5, 13, -3, 9, -14, 5];

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
    title: "Problem Solver",
    desc: "At the core of my work is a drive to solve real problems. I break down complex requirements into clean, efficient solutions that users love interacting with.",
  },
  {
    num: "02.",
    title: "Performance Focused",
    desc: "Speed and accessibility are non-negotiable. Every decision I make — from architecture to UI — is driven by the goal of building fast, reliable software.",
  },
  {
    num: "03.",
    title: "Full-Stack Mindset",
    desc: "From crafting pixel-perfect interfaces to designing scalable APIs, I work across the entire stack. This broad perspective lets me build cohesive, end-to-end products.",
  },
  {
    num: "04.",
    title: "Lifelong Learner",
    desc: "Technology evolves fast and I love keeping up. I am always exploring new tools, frameworks, and patterns to bring fresh ideas to every project I touch.",
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
            style={{ width: "30vw", borderRadius: "0 72px 72px 0" }}
          >
            <div className="absolute top-12 left-10 w-2 h-2 bg-white rounded-full opacity-80" />
            <h2
              className="text-[#F5F3ED] text-center uppercase"
              style={{
                fontFamily: "var(--font-bricolage), sans-serif",
                fontSize: "clamp(2.6rem, 4.8vw, 5.2rem)",
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.02em",
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
              style={{ borderRadius: 48, background: "#4d77ff" }}
            >
              <Image
                src="/images/renuka.jpg"
                alt="Renuka"
                fill
                sizes="24vw"
                className="object-cover object-top"
                style={{ mixBlendMode: "luminosity" }}
                priority
              />
              <div
                className="absolute inset-0"
                style={{ background: "rgba(77, 119, 255, 0.45)", mixBlendMode: "multiply" }}
              />
            </div>
          </div>

          {/* gap */}
          <div style={{ width: "8vw", flexShrink: 0 }} />

          {/* ━━ 3: Narrative Text ━━ */}
          <div
            className="self-center flex-none flex flex-col justify-center gap-6"
            style={{ width: "36vw", minWidth: 300 }}
          >
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.7, color: "var(--fg)", fontWeight: 400 }}>
              Hello again! I&apos;m Renuka, a software developer who loves
              blending creativity and functionality into delightful user
              experiences. My journey started with a curiosity for how things
              work behind the screen.
            </p>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.7, color: "var(--fg)", fontWeight: 400 }}>
              Fast forward after graduating, I became fascinated by how
              well-crafted software could influence user interactions. This led
              me to Full Stack development, where I found my true passion.
            </p>
            <p style={{ fontSize: "clamp(1rem, 1.4vw, 1.25rem)", lineHeight: 1.7, color: "var(--fg)", fontWeight: 400 }}>
              I believe great software should feel like a conversation — natural,
              engaging, and always leaving you wanting more.
            </p>
          </div>

          {/* gap */}
          <div style={{ width: "10vw", flexShrink: 0 }} />

          {/* ━━ 4: Know-More Panel (heading + toolkit | skills) ━━ */}
          <div
            className="self-center flex-none flex gap-7"
            style={{ width: "62vw", height: "78vh", minWidth: 580 }}
          >
            {/* Left col: heading + toolkit */}
            <div className="flex flex-col justify-between" style={{ width: "44%" }}>
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
              className="flex flex-col flex-1"
              style={{ background: "#fff", border: "1.5px solid #e0ddd5", borderRadius: 28, overflow: "hidden" }}
            >
              <div style={{ padding: "20px 24px 14px" }}>
                <h3 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
                  Skills
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "#666" }}>
                  Technologies I use to build amazing software.
                </p>
              </div>
              <div className="relative flex-1 mx-3 mb-3">
                {skills.map((skill, i) => (
                  <div
                    key={skill}
                    className="absolute px-3 py-1.5 rounded-full bg-white font-medium"
                    style={{
                      transform: `rotate(${skillRotations[i % skillRotations.length]}deg)`,
                      left: `${(i % 3) * 30 + (i % 2) * 4}%`,
                      top: `${Math.floor(i / 3) * 22}%`,
                      fontSize: "0.78rem",
                      whiteSpace: "nowrap",
                      color: "var(--fg)",
                      border: "1.5px solid #ccc",
                    }}
                  >
                    {skill}
                  </div>
                ))}
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
