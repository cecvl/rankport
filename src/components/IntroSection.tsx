import { motion } from "motion/react";
import { ArrowDown, Sparkles, MapPin, Briefcase, Eye } from "lucide-react";

interface IntroSectionProps {
  onExploreProjects: () => void;
}

export default function IntroSection({
  onExploreProjects,
}: IntroSectionProps) {
  // Container fade staggered variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Organic background block sliding variants for artsy look
  const blockLeftVariants = {
    hidden: { x: "-100%", rotate: -5 },
    visible: {
      x: "-20%",
      rotate: -2,
      transition: { duration: 1.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const blockRightVariants = {
    hidden: { x: "100%", rotate: 8 },
    visible: {
      x: "15%",
      rotate: 4,
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 md:py-24 overflow-hidden bg-earth-cream"
    >
      {/* Visual background overlapping artist blocks - sharp brutalist geometry from Professional Polish */}
      <motion.div
        id="bg-block-left"
        initial="hidden"
        animate="visible"
        variants={blockLeftVariants}
        className="absolute left-0 bottom-0 w-[45%] h-[80%] bg-earth-sand/20 border-r border-t border-white/5 z-0 pointer-events-none"
      />
      <motion.div
        id="bg-block-right"
        initial="hidden"
        animate="visible"
        variants={blockRightVariants}
        className="absolute right-0 top-12 w-[50%] h-[85%] bg-earth-clay/5 border-l border-b border-white/5 z-0 pointer-events-none"
      />

      {/* Circle details stamp */}
      <motion.div
        id="bg-badge-circle"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
                className="absolute right-[8%] top-[18%] w-24 h-24 rounded-full border border-white/10 hidden lg:flex items-center justify-center text-xs font-mono tracking-widest text-earth-ink/30 select-none animate-[spin_25s_linear_infinite]"
      >
        <span className="absolute">SYSTEMS</span>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-20 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          {/* LEFT COLUMN: Texts & bio description */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Introductory Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-earth-sand/40 border border-white/10 text-earth-clay font-mono text-xs tracking-widest uppercase mb-6"
            >
              <Sparkles size={12} className="text-earth-clay" />
              SOFTWARE ENGINEER // NAIROBI
            </motion.div>

            {/* Headline Title */}
            <motion.h1
              variants={itemVariants}
              className="font-sans text-6xl md:text-8xl font-black leading-[0.85] tracking-tighter uppercase text-earth-ink mb-6"
            >
              CHRISTIAN<br />
              <span className="text-earth-clay">
                CECIL O. ASUNA
              </span>
            </motion.h1>

            {/* Overlapping Text line block quote wrapper */}
            <motion.div
              variants={itemVariants}
              className="border-l-4 border-earth-clay pl-6 py-2 mb-8 max-w-xl"
            >
              <p className="font-sans uppercase text-sm md:text-base tracking-wide text-earth-ink/75 leading-relaxed">
                Crafting immersive digital narratives through brutalist geometry, refined interaction design, and fluid interactive paint simulations.
              </p>
            </motion.div>

            {/* Bio stats card */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl py-6 border-y border-white/10 mb-10 text-sm font-mono"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-earth-clay">
                  <Briefcase size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-earth-ink/40 uppercase text-xs tracking-wider">Role</span>
                  <span className="text-earth-ink font-semibold">Intern, SoftTech Solutions</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-earth-ink/65">
                  <MapPin size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-earth-ink/40 uppercase text-xs tracking-wider">Based In</span>
                  <span className="text-earth-ink font-semibold">Nairobi, Kenya</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center text-earth-clay">
                  <Eye size={14} />
                </div>
                <div className="flex flex-col">
                  <span className="text-earth-ink/40 uppercase text-xs tracking-wider">Availability</span>
                  <span className="text-earth-ink font-semibold">Available for Q4 '26</span>
                </div>
              </div>
            </motion.div>

            {/* Interactive actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-5 z-20"
            >
              {/* Primary scroll button */}
              <button
                id="explore-works-btn"
                onClick={onExploreProjects}
                className="group flex items-center gap-3 bg-[#141414] text-earth-ink border border-white/15 px-7 py-4 hover:bg-earth-clay hover:text-white hover:border-earth-clay hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-mono text-xs tracking-widest uppercase cursor-pointer shadow-2xl"
              >
                Explore Projects
                <ArrowDown
                  size={14}
                  className="group-hover:translate-y-1 transition-transform duration-300"
                />
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Overlapping Portrait Block */}
          <div className="lg:col-span-5 h-full flex justify-center z-10">
            <motion.div
              variants={itemVariants}
              className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5]"
            >
              {/* Back Block (Sage) - Overlapping behind */}
              <motion.div
                initial={{ rotate: -4, scale: 0.98 }}
                whileInView={{ rotate: -2, scale: 1 }}
                viewport={{ once: false }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-[#141414] border border-white/10 z-0"
              />

              {/* Offset shadow card (Ochre) */}
              <motion.div
                initial={{ x: -10, y: 10, rotate: 1 }}
                whileInView={{ x: 6, y: 6, rotate: 2 }}
                viewport={{ once: false }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 bg-transparent border border-white/10 z-0"
              />

              {/* Main content framing block with avatar */}
              <motion.div
                whileHover={{ scale: 1.01, rotate: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 bg-[#141414] border border-white/15 p-6 flex flex-col justify-between shadow-2xl z-10"
              >
                {/* Avatar Portrait container with clean overlay frames */}
                <div className="my-4 flex-1 overflow-hidden border border-white/10 relative group bg-black">
                  <img
                    src="/src/assets/images/profileimage.jpg"
                    alt="Christian Cecil Portrait"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-all duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-earth-clay/20 to-transparent pointer-events-none"></div>
                </div>

                {/* Portrait Label block */}
                <div className="flex justify-between items-end pt-3 border-t border-white/10 font-mono text-xs">
                  <div>
                   
                  </div>
                  
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
