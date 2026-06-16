import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { PROJECTS_DATA } from "../data";
import { ArrowUpRight, Folder, Layers, Calendar, ChevronRight } from "lucide-react";

interface ProjectsSectionProps {
  onContactNav: () => void;
}

export default function ProjectsSection({ onContactNav }: ProjectsSectionProps) {
  const [selectedTag, setSelectedTag] = useState<string>("ALL");

  const allTags = ["ALL", "Interactive", "Design", "Editorial", "Creative Technology"];

  // Mapping tags to item tags for precise matching
  const filteredProjects = selectedTag === "ALL"
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => {
        if (selectedTag === "Interactive") return p.category.includes("Exhibition") || p.tags.includes("Interaction");
        if (selectedTag === "Design") return p.tags.includes("Design") || p.category.includes("Experience");
        if (selectedTag === "Editorial") return p.category.includes("Editorial");
        if (selectedTag === "Creative Technology") return p.category.includes("Technology") || p.tags.includes("Audio Synthesis");
        return true;
      });

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    }
  };

  return (
    <section
      id="projects"
      className="relative min-h-screen pt-28 pb-20 md:py-32 w-full overflow-hidden bg-earth-cream border-t border-b border-white/10"
    >
      {/* Heavy overlapping block backing plates */}
      <div className="absolute top-0 right-0 w-[45%] h-full bg-[#141414] z-0 pointer-events-none" />
      <div className="absolute bottom-12 left-[10%] w-[350px] h-[350px] bg-earth-clay/5 blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-16 pb-8 border-b border-white/10">
          <div className="text-left">
            <div className="flex items-center gap-2 text-earth-clay font-mono text-xs tracking-widest uppercase mb-3">
              <Layers size={14} />
              SELECTED PROJECTS [2024-2026]
            </div>
            <h2 className="font-sans text-4xl md:text-5xl font-black text-earth-ink tracking-tighter uppercase mb-2">
              Curated Index
            </h2>
            <p className="font-sans text-xs md:text-sm tracking-wide text-earth-ink/65 max-w-xl uppercase">
              An inventory of digital artifacts, high-performance web systems, and creative spatial code layouts.
            </p>
          </div>

          {/* Tag filtering interface */}
          <div className="flex flex-wrap gap-2 pt-4 lg:pt-0">
            {allTags.map((tag) => {
              const isSelected = selectedTag === tag;
              return (
                <button
                  key={tag}
                  id={`filter-tag-${tag.replace(/\s+/g, "-")}`}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 font-mono text-[10px] tracking-widest uppercase transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? "bg-earth-clay text-white font-bold scale-102"
                      : "bg-[#141414] border border-white/10 text-earth-ink/75 hover:bg-white/5"
                  }`}
                >
                  {tag.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Overlapping Cards Grid */}
        <motion.div
          id="projects-list-container"
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              return (
                <motion.article
                  key={project.id}
                  id={`project-card-${project.id}`}
                  variants={cardVariants}
                  layout
                  exit={{ scale: 0.9, opacity: 0 }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative h-full flex flex-col justify-between"
                >
                  {/* Outer solid black backing shadow plate */}
                  <div className="absolute inset-0 bg-[#0A0A0A] translate-x-[6px] translate-y-[6px] transition-all duration-300 z-0 border border-white/5" />
                  
                  {/* Main contrast card box (Light slate and paper color for Section 2 content contrast) */}
                  <div className="relative bg-[#F5F5F5] text-[#0A0A0A] border border-white/10 p-6 md:p-8 flex flex-col justify-between h-full z-10 select-text transition-all shadow-xl group-hover:border-earth-clay">
                    
                    {/* Upper Metadata & Year block */}
                    <div className="flex justify-between items-center pb-4 border-b border-black/10 mb-6">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs font-bold text-earth-clay">
                          [{project.id}]
                        </span>
                        <div className="h-3 w-[1px] bg-black/15" />
                        <span className="font-mono text-[9px] uppercase tracking-widest text-[#F0F0F0] bg-[#141414] px-2 py-0.5 font-semibold">
                          {project.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-black/55 font-mono text-xs">
                        <Calendar size={12} />
                        <span>{project.year}</span>
                      </div>
                    </div>

                    {/* Middle Content blocks */}
                    <div className="flex-1 mt-2 mb-6">
                      <h3 className="font-sans text-2xl font-black text-[#0A0A0A] tracking-tight uppercase mb-3 group-hover:text-earth-clay transition-colors">
                        {project.title}
                      </h3>
                      <p className="font-sans text-xs md:text-sm text-black/75 leading-relaxed uppercase tracking-wider">
                        {project.description}
                      </p>
                    </div>

                    {/* Footer Tags & CTA Link plates */}
                    <div className="pt-6 border-t border-black/10 flex flex-wrap justify-between items-center gap-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 font-mono text-[9px] text-[#0A0A0A]/60">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-black/5 px-2 py-1"
                          >
                            #{tag.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      {/* Demo Action Button resembling a stamp plate */}
                      <button
                        id={`project-demo-btn-${project.id}`}
                        onClick={onContactNav}
                        className="flex items-center gap-1 text-[10px] uppercase font-mono font-bold text-[#0A0A0A] hover:text-earth-clay transition-colors cursor-pointer"
                      >
                        Explore Case
                        <ArrowUpRight
                          size={13}
                          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Layout bottom ornamental card footer */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 border border-white/10 p-8 bg-[#141414] flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-white/5 border border-white/10 text-earth-clay flex items-center justify-center">
              <Folder size={18} />
            </div>
            <div>
              <h4 className="font-sans font-black text-lg text-earth-ink uppercase tracking-tight">Need a tailored visual product?</h4>
              <p className="font-sans text-xs text-earth-ink/65 uppercase tracking-wide">Let's prototype custom layered transitions and high-end animations together.</p>
            </div>
          </div>
          <button
            id="projects-cta-contact-btn"
            onClick={onContactNav}
            className="flex items-center gap-2 bg-earth-clay text-white hover:bg-white hover:text-black px-6 py-3 font-mono text-xs tracking-wider uppercase transition-all cursor-pointer"
          >
            Start Conversation
            <ChevronRight size={14} />
          </button>
        </motion.div>

      </div>
    </section>
  );
}
