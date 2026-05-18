import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({ badge, title, description, align = "center" }: SectionHeaderProps) {
  return (
    <div className={`mb-16 md:mb-24 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 text-white/70 text-xs font-semibold uppercase tracking-widest mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-saas-blue" />
        {badge}
      </motion.div>
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6"
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/50 text-lg md:text-xl max-w-2xl"
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
