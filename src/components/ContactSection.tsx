import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, Github, Linkedin, Mail, FileText, Globe, Play } from "lucide-react";

interface ContactSectionProps {}

export default function ContactSection({}: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate artsy network dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const socialLinks = [
    {
      id: "gmail",
      label: "Email Draft",
      value: "christiancecil.dev@gmail.com",
      href: "mailto:christiancecil.dev@gmail.com",
      icon: <Mail size={16} />,
      color: "hover:bg-earth-clay hover:text-earth-cream"
    },
    {
      id: "github",
      label: "Digital Repository",
      value: "github.com/cecvl",
      href: "https://github.com/cecvl",
      icon: <Github size={16} />,
      color: "hover:bg-earth-ink hover:text-earth-cream"
    },
    {
      id: "linkedin",
      label: "B2B Registry",
      value: "linkedin.com/in/christian-cecil",
      href: "https://www.linkedin.com/in/christian-cecil?utm_source=share_via&utm_content=profile&utm_medium=member_android",
      icon: <Linkedin size={16} />,
      color: "hover:bg-earth-sage hover:text-earth-cream"
    },
    {
      id: "cv",
      label: "Curriculum Vitae",
      value: "Read CV / Resume '26",
      href: "#",
      icon: <FileText size={16} />,
      color: "hover:bg-earth-ochre hover:text-earth-cream"
    }
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen pt-28 pb-24 md:py-32 w-full overflow-hidden bg-[#0A0A0A] border-t border-white/10"
    >
      {/* Structural visual background blocks */}
      <div className="absolute top-1/4 left-10 w-[20%] h-[40%] bg-earth-clay/5 blur-3xl z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10 select-text">
        
        {/* Title details */}
        <div className="flex flex-col items-start text-left mb-16 pb-8 border-b border-white/10">
          <span className="font-mono text-sm tracking-widest text-earth-clay font-semibold uppercase mb-3 flex items-center gap-2">
            <Globe size={13} />
            ACTION & CONNECTION
          </span>
          <h2 className="font-sans text-4xl md:text-5xl font-black text-earth-ink tracking-tighter uppercase">
            Initiate Contact
          </h2>
          <p className="font-sans text-sm md:text-base tracking-wide text-earth-ink/65 mt-2 max-w-xl uppercase">
          discuss digital design commissions, request custom creative software prototyping, or coordinate visual strategy.
          </p>
        </div>

        {/* Action content split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Structural contact form */}
          <div className="lg:col-span-7 bg-[#141414] border border-white/10 p-6 md:p-8 relative">
            <div className="absolute inset-x-0 -top-3 flex justify-center">
              <span className="bg-earth-clay text-white font-mono text-xs tracking-widest uppercase px-4 py-1 border border-white/10">
                SECURE RELAY CHANNEL
              </span>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="contact-form"
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 pt-4 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-name" className="font-mono text-xs uppercase tracking-widest text-[#F0F0F0]/60 font-bold pl-1">
                        Your Name
                      </label>
                      <input
                        id="form-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="EMILY MZIMELA"
                        className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:border-earth-clay outline-none transition-all duration-300 placeholder:text-white/20 text-[#F0F0F0]"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="form-email" className="font-mono text-xs uppercase tracking-widest text-[#F0F0F0]/60 font-bold pl-1">
                        Your Email Address
                      </label>
                      <input
                        id="form-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="emilymzimela@gmail.com"
                        className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:border-earth-clay outline-none transition-all duration-300 placeholder:text-white/20 text-[#F0F0F0]"
                      />
                    </div>
                  </div>

                  {/* Message textarea */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="form-message" className="font-mono text-xs uppercase tracking-widest text-[#F0F0F0]/60 font-bold pl-1">
                      Briefing / Message
                    </label>
                    <textarea
                      id="form-message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the scope of the interactive layout or digital product..."
                      className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:border-earth-clay outline-none transition-all duration-300 placeholder:text-white/20 text-[#F0F0F0] resize-none"
                    />
                  </div>

                  {/* Submit buttons */}
                  <button
                    id="submit-form-btn"
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-3 bg-white text-black hover:bg-earth-clay hover:text-white py-4 font-mono text-sm tracking-widest uppercase cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                        DISPATCHING...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={13} />
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                // Success message block
                <motion.div
                  key="success-form"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="py-12 px-4 text-center flex flex-col items-center justify-center gap-6"
                >
                  <div className="w-16 h-16 bg-white/5 text-earth-clay flex items-center justify-center border border-white/10">
                    <CheckCircle2 size={32} />
                  </div>
                  <div>
                    <h3 className="font-sans text-2xl font-black text-earth-ink uppercase tracking-tight">
                      Dispatch Successful
                    </h3>
                    <p className="font-sans text-sm md:text-base text-earth-ink/75 max-w-md mt-2 leading-relaxed uppercase tracking-wide">
                      Thank you, <span className="font-bold text-earth-clay">{formData.name}</span>! Your message has been routed to our active layouts channel.
                    </p>
                  </div>
                  <button
                    id="reset-form-btn"
                    onClick={() => {
                      setFormData({ name: "", email: "", message: "" });
                      setIsSubmitted(false);
                    }}
                    className="px-5 py-2.5 bg-[#141414] text-white hover:bg-white hover:text-black transition-all font-mono text-xs tracking-widest uppercase cursor-pointer border border-white/10"
                  >
                    Send Another Response
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* RIGHT: Overlapping social badges AND Paint Paintbrush Control center */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Social registries list */}
            <div className="space-y-4 text-left">
              <h3 className="font-mono text-sm tracking-widest text-[#F0F0F0]/50 uppercase pl-1">
                Visual & Code Registries
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.id}
                    id={`social-link-${link.id}`}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center justify-between p-4 bg-[#141414] border border-white/10 hover:border-earth-clay/60 cursor-pointer transition-all duration-300 shadow-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-white/10 text-earth-clay">
                        {link.icon}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="font-mono text-xs uppercase tracking-widest font-bold text-white/40">
                          {link.label}
                        </span>
                        <span className="font-mono text-sm font-bold text-[#F0F0F0] tracking-wider truncate max-w-[200px] md:max-w-xs uppercase">
                          {link.value}
                        </span>
                      </div>
                    </div>
                    <div className="w-8 h-8 border border-white/10 flex items-center justify-center text-xs text-white/50">
                      <Play size={10} className="ml-0.5" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Vintage copyright footer plates */}
        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-[#F0F0F0]/40 uppercase tracking-widest">
          <p>© 2026 CHRISTIAN CECIL OCHIENG ASUNA</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-earth-clay">back to top</a>
            <span>•</span>
            
          </div>
        </div>

      </div>
    </section>
  );
}
