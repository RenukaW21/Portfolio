"use client";

import { motion } from "framer-motion";
import { Code, ExternalLink, Bot, Sparkles } from "lucide-react";

export function HighlightProject() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[500px] bg-brand/10 blur-[100px] rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 flex items-center gap-3">
          <Sparkles className="text-brand animate-pulse" size={28} />
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Innovation</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative rounded-3xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden shadow-2xl shadow-brand/5"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-brand/5 via-transparent to-purple-500/5 pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row">
            {/* Project Image / Visual */}
            <div className="w-full lg:w-1/2 min-h-[300px] lg:min-h-[450px] relative p-8 flex items-center justify-center bg-background/50">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
              {/* Mockup UI for AI Voice Assistant */}
              <div className="relative z-10 w-full max-w-sm rounded-2xl bg-card border border-border shadow-2xl overflow-hidden flex flex-col">
                <div className="h-14 border-b border-border flex items-center px-4 bg-background/50">
                  <Bot className="text-brand mr-3" size={24} />
                  <span className="font-semibold">Jarvis AI Assistant</span>
                </div>
                <div className="p-6 flex flex-col gap-4">
                  <div className="bg-background border border-border p-3 rounded-xl rounded-tl-none self-start max-w-[80%] text-sm shadow-sm">
                    Hello! How can I help you today?
                  </div>
                  <div className="bg-brand text-white p-3 rounded-xl rounded-tr-none self-end max-w-[80%] text-sm shadow-sm">
                    Schedule a meeting with the design team tomorrow at 10 AM.
                  </div>
                  <div className="bg-background border border-border p-3 rounded-xl rounded-tl-none self-start max-w-[80%] text-sm shadow-sm">
                    <span className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      Action executing...
                    </span>
                    Meeting scheduled and calendar invitations sent!
                  </div>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2 p-10 lg:p-14 flex flex-col justify-center">
              <div className="inline-block px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-widest mb-6 w-max">
                Flagship Project
              </div>
              <h3 className="text-3xl font-extrabold mb-4 hover:text-brand transition-colors">Jarvis: Context-Aware Voice Assistant</h3>
              <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
                A highly advanced, AI-powered mobile and web assistant that processes natural language using Llama 3 via OpenRouter and Groq Whisper. It seamlessly bridges the gap between text-based cognition and native device actions, automating workflows like WhatsApp messaging and calendar booking safely.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {["Next.js", "TypeScript", "LLM Routing", "Voice-to-Text"].map((tech) => (
                  <span key={tech} className="px-3 py-1.5 bg-background border border-border rounded-md text-sm font-medium">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-[var(--color-brand)] hover:bg-[var(--color-brand-dark)] text-white rounded-xl font-semibold transition-all shadow-md">
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a href="#" className="flex items-center gap-2 px-6 py-3 bg-background hover:bg-card border border-border text-foreground rounded-xl font-semibold transition-all shadow-sm">
                  <Code size={18} />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
