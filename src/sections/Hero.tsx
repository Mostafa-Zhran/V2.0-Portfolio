import { motion } from "framer-motion";
import { ArrowRight, Download, Code2, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function Hero() {
  const { name, description } = PORTFOLIO_DATA.hero;
  const firstName = name.split(' ')[0];

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-12 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-white/80 text-sm font-medium mb-8 border border-white/10 hover:bg-white/[0.05] transition-colors cursor-pointer"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saas-blue opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-saas-blue"></span>
          </span>
          Hi, I'm {firstName} — Available for new opportunities
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-6xl md:text-8xl font-extrabold tracking-tighter text-white max-w-5xl leading-[1.1] mb-8"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-saas-blue via-saas-purple to-saas-teal">digital products</span> that scale.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-xl md:text-2xl text-white/50 max-w-2xl mb-12 font-light"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center mt-4"
        >
          {/* Gamified Dynamic Button */}
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-full sm:w-auto p-[2px] rounded-full flex items-center justify-center group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-saas-blue via-saas-purple to-saas-teal rounded-full animate-[spin_3s_linear_infinite] opacity-70 group-hover:opacity-100 blur-[2px] transition-opacity duration-500" />
            <div className="absolute inset-0 bg-gradient-to-r from-saas-blue via-saas-purple to-saas-teal rounded-full animate-[spin_3s_linear_infinite]" />
            <div className="relative px-8 py-4 bg-black rounded-full flex items-center justify-center gap-2 w-full h-full transition-all duration-300 group-hover:bg-black/40 backdrop-blur-sm overflow-hidden">
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              <span className="text-white font-bold tracking-wide relative z-10">Start a project</span>
              <ArrowRight size={18} className="text-white group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300 relative z-10" />
            </div>
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1cvbja0XzkvCln5t5FHX6pAkIti64Q067/view?usp=drive_link"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-8 py-4 glass-card text-white font-semibold rounded-full hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition-all duration-300 flex items-center justify-center gap-2 group border border-white/10 relative overflow-hidden"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            <Download size={18} className="text-white/70 group-hover:text-white group-hover:-translate-y-1 transition-all duration-300" />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Tech Stack Pills - Floating */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-[15%] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-float shadow-[0_0_40px_rgba(59,130,246,0.1)]"
            style={{ animationDelay: "0s" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
          >
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center text-blue-400">
              <Terminal size={20} />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">.NET Core</div>
              <div className="text-white/40 text-xs">Backend</div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-[30%] right-[15%] glass-card px-4 py-3 rounded-2xl flex items-center gap-3 animate-float shadow-[0_0_40px_rgba(20,184,166,0.1)]"
            style={{ animationDelay: "2s" }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: "spring" }}
          >
            <div className="w-10 h-10 rounded-xl bg-teal-500/20 flex items-center justify-center text-teal-400">
              <Code2 size={20} />
            </div>
            <div className="text-left">
              <div className="text-white font-semibold text-sm">React JS</div>
              <div className="text-white/40 text-xs">Frontend</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
