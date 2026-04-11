import { Navbar } from "@/components/Navbar";
import { HorizontalAbout } from "@/components/HorizontalAbout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Software Developer",
  description: "Learn more about my journey, skills, and experience as a Full Stack Developer.",
};

export default function AboutPage() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <HorizontalAbout />
      </main>
    </div>
  );
}
