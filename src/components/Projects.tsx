"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { id:"01", name:"Wellth",    tagline:"Financial & Emotional Wellness in a Single Platform.",   bg:"#EDE8F5", tech:["Next.js","TypeScript","Node.js","MongoDB"] },
  { id:"02", name:"TaskFlow",  tagline:"A Collaborative Kanban & Project Management SaaS.",     bg:"#FDF8EF", tech:["React","Express","PostgreSQL","Redis"] },
  { id:"03", name:"Planto",    tagline:"Simplifying Plant Care with Personalized Guidance.",     bg:"#EAF5EA", tech:["Next.js","Prisma","Tailwind CSS"] },
  { id:"04", name:"Buddy",     tagline:"Bridging the Gap Between Shelters & Pet Owners.",       bg:"#FFF2EC", tech:["React","Node.js","MongoDB"] },
];

export function Projects() {
  return (
    <section id="projects" style={{ backgroundColor: "var(--bg)" }} className="w-full py-24">
      <div style={{ maxWidth: 1120, margin: "0 auto", padding: "0 40px" }}>

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <p style={{ color:"#002DFF", fontSize:11, fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>
            Selected Work
          </p>
          <h2 style={{ color:"var(--fg)", fontSize:"clamp(40px,6vw,72px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1, fontFamily:"var(--font-bricolage),sans-serif" }}>
            Projects
          </h2>
        </div>

        {/* Cards */}
        <div style={{ display:"flex", flexDirection:"column", gap:24 }}>
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity:0, y:40 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true, margin:"-60px" }}
              transition={{ duration:0.6, delay:i*0.07, ease:[0.16,1,0.3,1] }}
              style={{
                backgroundColor: p.bg,
                borderRadius: 40,
                overflow: "hidden",
                display: "flex",
                flexDirection: "row",
                cursor: "pointer",
                transition: "transform 0.4s",
                width: "100%",
              }}
              whileHover={{ scale: 0.987 }}
            >
              {/* LEFT — info */}
              <div style={{ flex:"0 0 45%", padding:"40px 44px", display:"flex", flexDirection:"column", gap:16, justifyContent:"space-between" }}>
                {/* Faint number */}
                <div style={{ fontSize:96, fontWeight:900, lineHeight:1, color:"rgba(0,45,255,0.08)", fontFamily:"var(--font-bricolage),sans-serif", userSelect:"none" }}>
                  {p.id}
                </div>

                <div style={{ display:"flex", flexDirection:"column", gap:10, marginTop:-20 }}>
                  <h3 style={{ color:"#002DFF", fontSize:"clamp(28px,3.5vw,44px)", fontWeight:800, letterSpacing:"-0.03em", lineHeight:1, fontFamily:"var(--font-bricolage),sans-serif" }}>
                    {p.name}
                  </h3>
                  <p style={{ color:"rgba(10,10,10,0.6)", fontSize:15, lineHeight:1.65, fontWeight:500, maxWidth:280 }}>
                    {p.tagline}
                  </p>
                </div>

                <div style={{ display:"flex", flexWrap:"wrap", gap:8 }}>
                  {p.tech.map((t) => (
                    <span key={t} style={{
                      padding:"5px 12px", borderRadius:999, fontSize:11, fontWeight:600,
                      background:"rgba(255,255,255,0.75)", border:"1px solid rgba(0,0,0,0.1)", color:"rgba(10,10,10,0.6)"
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT — mockup */}
              <div style={{
                flex:"0 0 55%", margin:16, borderRadius:28, overflow:"hidden",
                background:"rgba(255,255,255,0.45)", border:"1px solid rgba(255,255,255,0.7)",
                display:"flex", alignItems:"center", justifyContent:"center", position:"relative", minHeight:220
              }}>
                <span style={{ color:"rgba(0,0,0,0.2)", fontSize:14, fontWeight:500, userSelect:"none" }}>Mockup Image</span>
                <div style={{
                  position:"absolute", top:14, right:14, width:36, height:36, borderRadius:"50%",
                  background:"#002DFF", display:"flex", alignItems:"center", justifyContent:"center",
                  opacity:0, transition:"opacity 0.3s, transform 0.3s", transform:"scale(0.7)"
                }}
                  className="group-hover:opacity-100"
                >
                  <ArrowUpRight size={16} color="white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
