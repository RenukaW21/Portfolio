import { Navbar } from "@/components/Navbar";
import { Skills } from "@/components/Skills";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Renuka Warkade",
  description: "My full tech stack — languages, frontend, backend, databases, and tools.",
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      <Navbar />
      {/* pt-20 clears the fixed 64px navbar */}
      <main style={{ paddingTop: 80 }}>
        <Skills />
      </main>
    </div>
  );
}
