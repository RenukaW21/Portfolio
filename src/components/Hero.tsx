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

export function Hero() {
  return (
    <section
      style={{ backgroundColor: "var(--bg)" }}
      className="w-full min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-6 md:px-12 lg:px-20"
    >
      {/* ─── Big text block ─── */}
      <div className="w-full flex flex-col items-center gap-2">
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
          Software Developer — building modern, scalable web applications.
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
