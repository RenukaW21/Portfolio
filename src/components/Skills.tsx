"use client";

import { motion } from "framer-motion";
import { 
  Monitor, 
  Server, 
  Database, 
  Wrench, 
  Code2
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: <Monitor className="text-blue-500" size={28} />,
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Server className="text-purple-500" size={28} />,
    skills: ["Node.js", "Express.js", "RESTful APIs", "GraphQL"],
  },
  {
    title: "Database",
    icon: <Database className="text-green-500" size={28} />,
    skills: ["MongoDB", "PostgreSQL", "Prisma", "Mongoose"],
  },
  {
    title: "Languages",
    icon: <Code2 className="text-yellow-500" size={28} />,
    skills: ["JavaScript", "TypeScript", "Java", "PHP"],
  },
  {
    title: "Tools & DevOps",
    icon: <Wrench className="text-orange-500" size={28} />,
    skills: ["Git", "GitHub", "Docker", "Vercel", "Figma"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4"
          >
            My Tech Stack
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-16 h-1 bg-brand mx-auto rounded-full" 
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-card border border-border p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-brand/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-14 h-14 rounded-xl bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {category.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="px-3 py-1 bg-background border border-border rounded-lg text-sm font-medium text-foreground/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
