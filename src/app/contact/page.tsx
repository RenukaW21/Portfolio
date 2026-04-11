import { Navbar } from "@/components/Navbar";
import { Contact } from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Software Developer",
  description: "Get in touch with me for collaborations or projects.",
};

export default function ContactPage() {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <Navbar />
      <main className="flex-grow flex items-center justify-center px-6 py-8 pt-48">
        <Contact />
      </main>
    </div>
  );
}
