"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { id: "home", label: "HOME", href: "/" },
  { id: "about", label: "ABOUT ME", href: "/about" },
  { id: "work", label: "RESUME", href: "https://drive.google.com/file/d/1gybao_59nsFNc-WltcNBF-7bo83tfIKP/view?usp=drivesdk" },
  { id: "contact", label: "CONTACT", href: "/contact", isSpecial: true },
];

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  React.useEffect(() => { setMounted(true); }, []);

  const nav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#")) {
      setOpen(false);
      if (pathname === "/") {
        e.preventDefault();
        const id = href.split("#")[1];
        const el = document.getElementById(id);
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    } else if (href === pathname) {
      if (href === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setOpen(false);
    } else {
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: "transparent", borderBottom: "none" }}
      className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-[var(--bg)]/80"
    >
      {/* ── Desktop: Portfolio left, links right ── */}
      <nav className="hidden md:flex items-center justify-between px-8 lg:px-16 h-24 w-full max-w-[1440px] mx-auto">
        {/* Left: Logo 'fS' */}
        <Link href="/" style={{
          color: "var(--fg)",
          fontFamily: "var(--font-anton), sans-serif",
          fontWeight: 400,
          fontSize: "28px",
          letterSpacing: "0.02em",
          textTransform: "uppercase"
        }} className="hover:opacity-80 transition-opacity">
          Portfolio
        </Link>

        {/* Right: Nav items */}
        <div className="flex items-center gap-6 lg:gap-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => nav(e, item.href)}
              className="text-[12px] font-bold tracking-widest transition-all"
              style={{
                color: item.isSpecial ? "#fff" : "var(--muted)",
                padding: item.isSpecial ? "12px 28px" : "8px",
                background: item.isSpecial ? "linear-gradient(to right, #00d2ff, #8b5cf6)" : "transparent",
                borderRadius: item.isSpecial ? "8px" : "0px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
              onMouseEnter={(e) => {
                if (!item.isSpecial) e.currentTarget.style.color = "#06b6d4";
                else e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                if (!item.isSpecial) e.currentTarget.style.color = "var(--muted)";
                else e.currentTarget.style.opacity = "1";
              }}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{ color: "var(--muted)", marginLeft: "8px" }}
              className="flex-none hover:text-[#06b6d4] transition-colors p-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile ── */}
      <nav className="flex md:hidden items-center justify-between px-6 h-20">
        <Link href="/" style={{ color: "var(--fg)", fontFamily: "var(--font-anton), sans-serif", fontWeight: 400, fontSize: "22px", textTransform: "uppercase", letterSpacing: "0.02em" }}>
          Portfolio
        </Link>
        <div className="flex items-center gap-4">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{ color: "var(--fg)" }}>
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          )}
          <button onClick={() => setOpen(!open)} style={{ color: "var(--fg)", fontWeight: 800, fontSize: 26 }}>
            {open ? "✕" : "≡"}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--card)" }}
            className="md:hidden overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => nav(e, item.href)}
                className="block px-6 py-5 text-[13px] font-bold tracking-widest"
                style={{ 
                  color: item.isSpecial ? "#06b6d4" : "var(--fg)", 
                  borderBottom: "1px solid var(--border)" 
                }}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
