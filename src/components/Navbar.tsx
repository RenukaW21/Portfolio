"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const NAV_ITEMS = [
  { id: "home", label: "Home", href: "/" },
  { id: "about", label: "About", href: "/about" },
  { id: "playground", label: "Playground", href: "/#projects", pill: true },
  { id: "work", label: "Work", href: "/#projects" },
  { id: "contact", label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const router = useRouter();

  React.useEffect(() => { setMounted(true); }, []);

  const nav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.split("#")[1];
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    } else if (href === pathname) {
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      setOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backgroundColor: "var(--bg)", borderBottom: "1px solid var(--border)" }}
      className="fixed top-0 inset-x-0 z-50"
    >
      {/* ── Desktop: Portfolio left, links right ── */}
      <nav className="hidden md:flex items-center justify-between px-8 lg:px-16 h-20 w-full">
        {/* Left: Portfolio (Bricolage font) */}
        <Link href="/" style={{
          color: "#002DFF",
          fontFamily: "var(--font-bricolage), sans-serif",
          fontWeight: 800,
          fontSize: "28px",
          letterSpacing: "-0.02em"
        }} className="hover:opacity-80 transition-opacity">
          Portfolio
        </Link>

        {/* Right: Nav items */}
        <div className="flex items-center gap-4 lg:gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onClick={(e) => nav(e, item.href)}
              className="text-[13.5px] font-semibold tracking-wide transition-all"
              style={{
                color: "#002DFF",
                padding: "8px 24px",
                border: "1.5px solid transparent",
                borderRadius: "999px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                lineHeight: "1",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#002DFF")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "transparent")}
            >
              {item.label}
            </Link>
          ))}

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              style={{ color: "#002DFF", marginLeft: "8px" }}
              className="flex-none hover:opacity-55 transition-opacity p-1"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
        </div>
      </nav>

      {/* ── Mobile ── */}
      <nav className="flex md:hidden items-center justify-between px-6 h-16">
        <Link href="/" style={{ color: "#002DFF", fontFamily: "var(--font-bricolage), sans-serif", fontWeight: 800, fontSize: "22px" }}>
          Portfolio
        </Link>
        <div className="flex items-center gap-3">
          {mounted && (
            <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} style={{ color: "#002DFF" }}>
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          )}
          <button onClick={() => setOpen(!open)} style={{ color: "#002DFF", fontWeight: 700, fontSize: 24 }}>
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
            style={{ borderTop: "1px solid var(--border)", backgroundColor: "var(--bg)" }}
            className="md:hidden overflow-hidden"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={(e) => nav(e, item.href)}
                className="block px-6 py-4 text-base font-semibold"
                style={{ color: "#002DFF", borderBottom: "1px solid var(--border)" }}
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
