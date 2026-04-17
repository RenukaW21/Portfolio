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

const toolItems = [
  { label: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { label: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { label: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { label: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { label: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  { label: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { label: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { label: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
];

const defines = [
  {
    num: "01.",
    title: "Backend Builder",
    desc: "I specialize in building robust backend systems - RESTful APIs, CRUD operations, and database management using Node.js, PHP, MySQL and MongoDB in production environments.",
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
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex h-screen items-stretch">
          <div
            className="relative flex-none flex items-center justify-center"
            style={{ width: "30vw", background: "linear-gradient(135deg, #00d2ff, #3a7bd5)" }}
          >
            <div className="absolute left-10 top-12 h-2 w-2 rounded-full bg-white opacity-80" />
            <h2
              className="text-center uppercase text-[#F5F3ED]"
              style={{
                fontFamily: "var(--font-anton), sans-serif",
                fontSize: "clamp(3rem, 5.5vw, 6rem)",
                fontWeight: 400,
                lineHeight: 0.95,
                letterSpacing: "0.01em",
              }}
            >
              How It All
              <br />
              Started
            </h2>
          </div>

          <div style={{ width: "8vw", flexShrink: 0 }} />

          <div
            className="relative self-center flex-none"
            style={{ width: "24vw", height: "70vh", minWidth: 240 }}
          >
            <div
              className="relative h-full w-full overflow-hidden"
              style={{ borderRadius: 48, background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <Image
                src="/images/renuka.jpg"
                alt="Renuka"
                fill
                sizes="24vw"
                className="object-cover object-top"
                style={{
                  filter: "grayscale(0.5) contrast(1.1) brightness(0.9)",
                }}
                priority
              />
            </div>
          </div>

          <div style={{ width: "8vw", flexShrink: 0 }} />

          <div
            className="flex-none self-center flex flex-col justify-center gap-6"
            style={{ width: "36vw", minWidth: 300 }}
          >
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
              I believe great software should feel effortless - for the user and the team.
            </p>
          </div>

          <div style={{ width: "10vw", flexShrink: 0 }} />

          <div
            className="self-center flex-none flex gap-6"
            style={{ width: "64vw", height: "80vh", minWidth: 600 }}
          >
            <div className="flex flex-col justify-between" style={{ width: "42%" }}>
              <div className="flex flex-col gap-4">
                <div className="h-3 w-3 rounded-full" style={{ background: "#06b6d4" }} />
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
                  Let&apos;s know
                  <br />
                  more about
                  <br />
                  me
                </h2>
              </div>

              <div
                style={{
                  background: "var(--card)",
                  border: "1.5px solid var(--border)",
                  borderRadius: 28,
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "20px 24px 14px" }}>
                  <h3 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
                    Toolkit
                  </h3>
                  <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--muted)" }}>
                    Tools that help me build amazing products.
                  </p>
                </div>
                <div
                  style={{
                    borderTop: "1px solid var(--border)",
                    padding: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: 16,
                  }}
                >
                  {toolItems.map((tool) => (
                    <div key={tool.label} className="group flex cursor-pointer flex-col items-center gap-2">
                      <div
                        className="transition-transform duration-300 group-hover:scale-110 group-hover:bg-[rgba(255,255,255,0.05)]"
                        style={{
                          width: 54,
                          height: 54,
                          borderRadius: 16,
                          background: "rgba(255,255,255,0.02)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 12,
                          border: "1px solid var(--border)",
                          boxShadow: "inset 0 1px 1px rgba(255,255,255,0.05)",
                        }}
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={tool.icon}
                          alt={tool.label}
                          width={30}
                          height={30}
                          style={{ objectFit: "contain", filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))" }}
                        />
                      </div>
                      <span style={{ fontSize: "0.65rem", color: "var(--muted)", textAlign: "center", fontWeight: 500, letterSpacing: "0.02em" }}>
                        {tool.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="flex flex-col"
              style={{ width: "38%", background: "var(--card)", border: "1.5px solid var(--border)", borderRadius: 28, overflow: "hidden" }}
            >
              <div style={{ padding: "20px 24px 14px" }}>
                <h3 style={{ fontFamily: "var(--font-bricolage), sans-serif", fontSize: "1.4rem", fontWeight: 800, color: "var(--fg)", marginBottom: 6 }}>
                  Skills
                </h3>
                <p style={{ fontSize: "0.9rem", lineHeight: 1.6, color: "var(--muted)" }}>
                  Technologies I use to build amazing software.
                </p>
              </div>
              <div className="mx-6 mb-8 flex w-full flex-1 flex-wrap content-end justify-center gap-3" style={{ minHeight: 0 }}>
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className="cursor-default font-medium transition-transform duration-200 hover:scale-105"
                    style={{
                      fontSize: "0.8rem",
                      color: "var(--fg)",
                      border: "1px solid var(--border)",
                      background: "rgba(255, 255, 255, 0.03)",
                      backdropFilter: "blur(4px)",
                      borderRadius: 999,
                      padding: "8px 18px",
                      letterSpacing: "0.01em",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ width: "8vw", flexShrink: 0 }} />

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

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "32px 48px",
              }}
            >
              {defines.map((define) => (
                <div key={define.num} className="flex flex-col gap-2">
                  <h3
                    style={{
                      fontFamily: "var(--font-bricolage), sans-serif",
                      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                      fontWeight: 700,
                      color: "var(--fg)",
                    }}
                  >
                    <span style={{ color: "#06b6d4", marginRight: 8 }}>{define.num}</span>
                    {define.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
                      lineHeight: 1.7,
                      color: "var(--muted)",
                      fontWeight: 400,
                    }}
                  >
                    {define.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div style={{ width: "15vw", flexShrink: 0 }} />
        </motion.div>
      </div>
    </section>
  );
}
