"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/data";
import Reveal from "./RevealWrapper";

const chipColors = ["accent","accent2","accent3"] as const;

export default function Experience() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="experience" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".68rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: ".7rem" }}>// 02 — Experience</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>Career Timeline</h2>
          <div style={{ width: "3rem", height: 2, marginTop: "1rem", background: "linear-gradient(90deg,var(--accent),transparent)" }} />
        </div>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {resumeData.experience.map((exp, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{
              background: "var(--surface)", border: `1px solid ${open === i ? "var(--accent)" : "var(--border)"}`,
              borderRadius: 16, overflow: "hidden",
              boxShadow: open === i ? "0 8px 40px var(--glow)" : "none",
              transition: "border-color .3s, box-shadow .3s",
            }}>
              <div
                onClick={() => setOpen(open === i ? null : i)}
                style={{ padding: "1.5rem 2rem", cursor: "pointer", display: "grid", gridTemplateColumns: "auto 1fr auto", gap: "1.2rem", alignItems: "center" }}
              >
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <div style={{ width: 14, height: 14, borderRadius: "50%", background: "linear-gradient(135deg,var(--accent),var(--accent2))", boxShadow: "0 0 12px var(--glow)", flexShrink: 0 }} />
                  <div style={{ width: 1, flex: 1, background: "var(--border)", minHeight: 20 }} />
                </div>
                <div>
                  <div style={{ fontFamily: "Syne,sans-serif", fontSize: "1.2rem", fontWeight: 700, marginBottom: ".25rem" }}>{exp.company}</div>
                  <div style={{ color: "var(--accent)", fontSize: ".9rem", fontWeight: 500, marginBottom: ".3rem" }}>{exp.role}</div>
                  <div style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".7rem", color: "var(--text3)", letterSpacing: ".06em", display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <span>📅 {exp.dates} ({exp.duration})</span>
                    <span>📍 {exp.location}</span>
                  </div>
                </div>
                <div style={{ fontSize: "1.2rem", color: open === i ? "var(--accent)" : "var(--text3)", transform: open === i ? "rotate(45deg)" : "none", transition: "transform .3s, color .3s" }}>+</div>
              </div>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ padding: "0 2rem 1.5rem" }}>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem", marginBottom: "1rem" }}>
                        {exp.chips.map((c, j) => (
                          <span key={j} style={{
                            fontSize: ".7rem", padding: ".3rem .8rem", borderRadius: 100,
                            background: "rgba(79,142,247,.1)", border: "1px solid rgba(79,142,247,.2)",
                            color: "var(--accent)", fontFamily: "JetBrains Mono,monospace", letterSpacing: ".05em",
                          }}>{c}</span>
                        ))}
                        {exp.highlights.map((h, j) => (
                          <span key={j} style={{
                            fontSize: ".7rem", padding: ".3rem .8rem", borderRadius: 100,
                            background: "rgba(240,192,64,.1)", border: "1px solid rgba(240,192,64,.2)",
                            color: "#f0c040", fontFamily: "JetBrains Mono,monospace", letterSpacing: ".05em",
                          }}>{h}</span>
                        ))}
                      </div>
                      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: ".65rem" }}>
                        {exp.bullets.map((b, j) => (
                          <li key={j} style={{ fontSize: ".9rem", color: "var(--text2)", lineHeight: 1.65, paddingLeft: "1.2rem", position: "relative" }}>
                            <span style={{ position: "absolute", left: 0, color: "var(--accent)", fontSize: "1rem" }}>›</span>
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
