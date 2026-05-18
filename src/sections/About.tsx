import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { GraduationCap, ArrowUpRight } from "lucide-react";

export function About() {
  const { stats, education } = PORTFOLIO_DATA;
  const { points } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="About Me" 
          title="Driven by logic. Designed with care." 
          description="I'm a full-stack developer who loves building products that solve real problems while delivering exceptional user experiences."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 bento-card p-8 md:p-12 glow-effect flex flex-col justify-center"
          >
            <div className="space-y-6 text-white/70 text-lg leading-relaxed">
              {points.map((point, i) => (
                <div key={i} className="flex gap-4">
                  <div className="text-saas-blue mt-1">
                    <point.icon size={20} />
                  </div>
                  <div>
                    {point.text.split(/(\*\*.*?\*\*)/).map((part, index) => 
                      part.startsWith('**') && part.endsWith('**') ? (
                        <span key={index} className="text-white font-medium">{part.slice(2, -2)}</span>
                      ) : part
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Stats Column */}
          <div className="flex flex-col gap-6">
            {stats.slice(0, 2).map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 + 0.1 }}
                className="bento-card p-8 flex-1 flex flex-col justify-center items-center text-center group"
              >
                <div className="text-5xl font-bold tracking-tighter text-white mb-2 group-hover:scale-110 transition-transform duration-500">
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 bento-card p-8 md:p-12 mt-6"
          >
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <GraduationCap className="text-saas-purple" />
                Education Path
              </h3>
              <a href="https://linkedin.com/in/mostafa-tamer-zahran" target="_blank" className="text-sm text-white/50 hover:text-white flex items-center gap-1 transition-colors">
                View Full LinkedIn <ArrowUpRight size={14} />
              </a>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {education.map((item, i) => (
                <div key={i} className="relative group">
                  <div className="w-10 h-10 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center mb-6 group-hover:border-saas-purple/50 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-saas-purple opacity-50 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  {/* Connection Line (Desktop) */}
                  {i < education.length - 1 && (
                    <div className="hidden md:block absolute top-5 left-10 w-[calc(100%-1rem)] h-px bg-white/10" />
                  )}

                  <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                  <div className="text-saas-blue text-sm font-medium mb-2">{item.org}</div>
                  <div className="text-white/40 text-xs font-mono mb-4">{item.date}</div>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
