import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import IntroSection from "./components/IntroSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import { Sparkles } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("intro");
  const [isLoading, setIsLoading] = useState(true);

  // Splash screen timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll handler for nav clicks
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Temporarily bypass intersection check to prevent flicker
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  // Setup active section observer
  useEffect(() => {
    const sections = ["intro", "projects", "contact"];
    const observers = sections.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          root: null,
          threshold: 0.35, // Trigger when 35% of the section is centered
        }
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
          obs.observer.disconnect();
        }
      });
    };
  }, []);

  return (
    <>
      {/* 1. ARTSY ENTRANCE SPLASH SCREEN */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ 
              y: "-100%", 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
            }}
            className="fixed inset-0 z-[100] bg-earth-ink text-earth-cream flex flex-col justify-between p-12 overflow-hidden"
          >
            {/* Top info stamp */}
            <div className="flex justify-between items-center w-full font-mono text-[10px] tracking-widest text-earth-cream/40">
              <span>CHRISTIAN CECIL • STUDIO WORK '26</span>
              <span>INDEX: 0% / LOADING</span>
            </div>

            {/* Centered large artistic title */}
            <div className="text-left max-w-4xl mx-auto w-full my-auto flex flex-col gap-6">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="flex items-center gap-3 text-earth-clay font-mono text-[11px] uppercase tracking-widest font-semibold"
                >
                  <Sparkles size={14} className="animate-pulse" />
                  Weaving Digital Tactile Canvases
                </motion.div>
              </div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                  className="font-sans text-5xl md:text-8xl font-black uppercase leading-[0.85] tracking-tighter"
                >
                  CHRISTIAN <br />
                  <span className="text-earth-clay">
                    CECIL 
                  </span>
                </motion.h2>
              </div>

              {/* Progress visual bar */}
              <div className="w-full h-[2px] bg-earth-cream/10 mt-8 relative rounded-full overflow-hidden">
                <motion.div
                  initial={{ left: "-100%" }}
                  animate={{ left: "0%" }}
                  transition={{ duration: 1.3, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-full bg-earth-clay"
                />
              </div>
            </div>

            {/* Bottom info stamps */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full gap-4 font-mono text-[9px] tracking-widest text-[#FAF8F5]/30">
              <p className="max-w-xs text-left">
                [03:06 UTC] SHAPING SPATIAL INTERACTIVE EXPERIENCES THROUGH THE HARMONY OF CODE AND COGNITIVE DESIGN.
              </p>
              <span>BUILT IN SPAIN • '26</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. MAIN CORE APPLICATION LAYOUT */}
      <div className="relative w-full min-h-screen bg-earth-cream overflow-y-auto selection:bg-earth-clay selection:text-earth-cream">
        
        {/* Navigation panel */}
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        {/* 3. THE 3 PORTFOLIO SECTIONS */}
        <div className="relative z-20 pointer-events-auto">
          {/* Section 1: Introduction Details & Portrait Picture */}
          <IntroSection
            onExploreProjects={() => handleNavigate("projects")}
          />

          {/* Section 2: Projects showcase */}
          <ProjectsSection onContactNav={() => handleNavigate("contact")} />

          {/* Section 3: Contact & Links */}
          <ContactSection />
        </div>

      </div>
    </>
  );
}

