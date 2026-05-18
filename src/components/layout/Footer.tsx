import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 bg-black pt-24 pb-12 overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-saas-purple/20 blur-[120px] rounded-full pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          <div className="md:col-span-12 lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#home" className="text-3xl font-bold tracking-tighter text-white block mb-6">
                Mostafa Zahran.
              </a>
              <p className="text-white/50 text-base leading-relaxed max-w-sm mb-8">
                Crafting premium digital experiences through scalable frontend architecture and meticulous attention to detail. Built with React & Tailwind.
              </p>
            </div>
            
            <motion.button 
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ y: -20, scale: 0.8, opacity: 0 }}
              className="w-fit flex items-center gap-2 px-6 py-3 bg-white/[0.03] border border-white/10 rounded-full text-sm font-medium text-white/50 hover:text-white hover:bg-white/10 hover:border-saas-blue/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 group"
            >
              Back to top 
              <ArrowUpRight size={16} className="group-hover:-translate-y-2 transition-transform duration-300 group-hover:text-saas-blue group-hover:rotate-45" />
            </motion.button>
          </div>

          <div className="md:col-span-4 lg:col-span-2 lg:col-start-8">
            <h4 className="text-white font-semibold tracking-tight mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-semibold tracking-tight mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/50">
              {PORTFOLIO_DATA.socials.map((social) => (
                <li key={social.name}>
                  <a href={social.link} target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1 group">
                    {social.name}
                    <ArrowUpRight size={14} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Massive Text Watermark / Bottom Bar */}
        <div className="flex flex-col items-center border-t border-white/5 pt-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/40">
            <p>&copy; {new Date().getFullYear()} Mostafa Zahran. All rights reserved.</p>
            
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                Available for work
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
