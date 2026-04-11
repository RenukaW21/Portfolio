"use client";

import { motion } from "framer-motion";
import { Laptop, Briefcase, Rocket, Blocks } from "lucide-react";

const services = [
  {
    title: "Portfolio Websites",
    description: "Personalized, striking portfolios designed to showcase your work and attract high-value clients or recruiters.",
    icon: <Laptop className="w-10 h-10 text-blue-500 mb-6" />,
  },
  {
    title: "Business Websites",
    description: "Professional and conversion-optimized websites tailored to represent your brand and drive business growth.",
    icon: <Briefcase className="w-10 h-10 text-purple-500 mb-6" />,
  },
  {
    title: "Landing Pages",
    description: "High-performance landing pages with compelling design and structure to maximize your marketing campaigns.",
    icon: <Rocket className="w-10 h-10 text-orange-500 mb-6" />,
  },
  {
    title: "Full Stack UI Apps",
    description: "Complex, scalable, and responsive web applications built from scratch with modern frontend and backend technologies.",
    icon: <Blocks className="w-10 h-10 text-green-500 mb-6" />,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-card/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold tracking-tight mb-4"
          >
            What I Do
          </motion.h2>
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="w-16 h-1 bg-brand mx-auto rounded-full" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-10 rounded-3xl group hover:border-[var(--color-brand)] transition-colors relative overflow-hidden"
            >
              {/* Top Right gradient blob */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-brand/10 rounded-full blur-3xl group-hover:bg-brand/20 transition-colors" />
              
              <div className="relative z-10">
                {service.icon}
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 leading-relaxed text-lg">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
