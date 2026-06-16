import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Compass, Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "intro", label: "DETAIL & PIC" },
    { id: "projects", label: "RECENT WORKS" },
    { id: "contact", label: "TALK & LINKS" },
  ];

  return (
    <motion.header
      id="app-header"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-earth-cream/90 backdrop-blur-md py-4 border-b border-earth-ink/5"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo / Monogram */}
        <button
          id="logo-btn"
          onClick={() => onNavigate("intro")}
          className="group flex items-center gap-3 cursor-pointer select-none"
        >
          <div className="w-9 h-9 rounded-full bg-earth-ink text-earth-cream flex items-center justify-center font-serif font-bold text-lg overflow-hidden relative">
            <motion.span
              animate={{ rotate: isScrolled ? 360 : 0 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="inline-block"
            >
              C
            </motion.span>
          </div>
          <div className="flex flex-col text-left">
            <span className="font-serif font-bold text-sm tracking-wider text-earth-ink">
              CREATIONS BY CC
            </span>
            <span className="font-mono text-[10px] tracking-widest text-earth-ink/60 uppercase">
              Portfolio
            </span>
          </div>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id} className="relative">
                  <button
                    id={`nav-item-${item.id}`}
                    onClick={() => onNavigate(item.id)}
                    className={`px-4 py-2 text-xs font-medium tracking-widest uppercase transition-colors duration-300 relative z-10 cursor-pointer ${
                      isActive ? "text-earth-cream font-semibold" : "text-earth-ink/75 hover:text-earth-ink"
                    }`}
                  >
                    {item.label}
                  </button>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-earth-ink rounded-lg z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <div className="h-4 w-[1px] bg-earth-ink/20"></div>

          <button
            id="nav-availability-btn"
            onClick={() => onNavigate("contact")}
            className="flex items-center gap-2 px-4 py-2 border border-earth-ink/20 rounded-full hover:bg-earth-ink hover:text-earth-cream transition-all duration-300 font-mono text-[10px] tracking-wider uppercase cursor-pointer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Hire Me
            <ArrowUpRight size={12} />
          </button>
        </nav>

        {/* Mobile Hamburger Trigger */}
        <button
          id="mobile-menu-trigger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center border border-earth-ink/10 rounded-full bg-earth-cream hover:bg-earth-sand transition-all cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          id="mobile-nav-panel"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden w-full bg-earth-cream border-b border-earth-ink/15 absolute top-full left-0 z-40 overflow-hidden shadow-xl"
        >
          <div className="px-6 py-8 flex flex-col gap-6">
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      id={`mobile-nav-item-${item.id}`}
                      onClick={() => {
                        onNavigate(item.id);
                        setMobileMenuOpen(false);
                      }}
                      className={`text-left w-full py-2 px-4 rounded-lg font-serif text-lg flex items-center justify-between transition-colors ${
                        isActive
                          ? "bg-earth-ink text-earth-cream font-bold"
                          : "text-earth-ink hover:bg-earth-sand/50"
                      }`}
                    >
                      <span>{item.label}</span>
                      {isActive && <Compass size={16} className="text-earth-clay animate-spin" />}
                    </button>
                  </li>
                );
              })}
            </ul>

            <div className="h-[1px] w-full bg-earth-ink/10"></div>

            <button
              id="mobile-nav-availability-btn"
              onClick={() => {
                onNavigate("contact");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-4 border border-earth-ink rounded-lg bg-earth-ink text-earth-cream hover:bg-earth-ink/95 font-mono text-xs tracking-wider uppercase cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              Available For Projects
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
