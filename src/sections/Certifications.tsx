import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Award, ArrowUpRight } from "lucide-react";

export function Certifications() {
  const { certifications } = PORTFOLIO_DATA;

  return (
    <section id="certifications" className="py-24 md:py-32 relative z-10 border-y border-white/5 bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <SectionHeader badge="Credentials" title="Certifications" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bento-card p-8 group flex flex-col justify-between hover:bg-white/[0.05]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-saas-purple/10 text-saas-purple flex items-center justify-center">
                    <Award size={24} />
                  </div>
                  <div className="text-xs font-mono text-white/40 border border-white/10 rounded-full px-3 py-1">
                    {cert.date}
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white tracking-tight mb-2">
                  {cert.title}
                </h4>
                
                <div className="text-sm font-medium text-saas-teal mb-4">
                  {cert.issuer}
                </div>
                
                <p className="text-white/60 text-sm leading-relaxed mb-8">
                  {cert.desc}
                </p>
              </div>
              
              <motion.a 
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05, paddingRight: "1.5rem" }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-saas-teal transition-all duration-300 mt-auto w-fit bg-white/[0.03] px-3 py-1.5 rounded-full border border-white/10 hover:border-saas-teal/50 hover:bg-saas-teal/10 overflow-hidden relative group"
              >
                <span className="absolute inset-0 bg-saas-teal/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center gap-2">
                  View Credential <ArrowUpRight size={14} className="group-hover:rotate-45 transition-transform duration-300" />
                </span>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
