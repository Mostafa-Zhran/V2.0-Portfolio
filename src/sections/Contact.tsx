import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { Mail, ArrowRight } from "lucide-react";

export function Contact() {
  const { socials } = PORTFOLIO_DATA;

  const getIconClass = (name: string) => {
    switch (name.toLowerCase()) {
      case 'github': return 'fab fa-github';
      case 'linkedin': return 'fab fa-linkedin-in';
      case 'codeforces': return 'fas fa-code';
      case 'codewars': return 'fas fa-laptop-code';
      case 'facebook': return 'fab fa-facebook-f';
      default: return '';
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative z-10">
      <div className="container mx-auto px-6">
        <SectionHeader 
          badge="Contact" 
          title="Let's build together" 
          description="Have a project in mind or just want to say hi? I'm always open to discussing new opportunities."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bento-card p-10 lg:p-16 flex flex-col justify-center items-start glow-effect"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-8">
              <Mail size={32} />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">Start a conversation</h3>
            <p className="text-white/60 text-lg mb-10 max-w-md">
              Send me an email directly. I usually respond within 24 hours.
            </p>
            <motion.a 
              href="mailto:mostafazahran724@gmail.com" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full group overflow-hidden shadow-[0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_40px_rgba(255,255,255,0.6)] transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-[linear-gradient(110deg,transparent,25%,rgba(0,0,0,0.1),50%,transparent,75%,rgba(0,0,0,0.1))] bg-[length:200%_100%] animate-[shimmer_2s_infinite]"></span>
              <span className="relative flex items-center gap-2">
                Email Me <ArrowRight size={18} className="group-hover:translate-x-3 transition-transform duration-300" />
              </span>
            </motion.a>
          </motion.div>

          {/* Social Links Dock Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {socials.filter(s => s.name.toLowerCase() !== 'email').map((social, i) => {
              const iconClass = getIconClass(social.name);
              return (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bento-card p-6 flex flex-col items-center justify-center gap-4 group hover:bg-white/[0.06] transition-all"
                >
                  <div className="text-white/50 group-hover:text-white transition-colors scale-110 group-hover:scale-125 duration-300">
                    <i className={`${iconClass} text-3xl`}></i>
                  </div>
                  <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
