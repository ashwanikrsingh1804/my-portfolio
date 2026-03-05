"use client";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";
import Reveal from "./RevealWrapper";

const badgeStyle: Record<string, React.CSSProperties> = {
  Metrics: { background: "rgba(79,142,247,.12)", color: "var(--accent)", border: "1px solid rgba(79,142,247,.2)" },
  Win: { background: "rgba(0,212,170,.12)", color: "var(--accent3)", border: "1px solid rgba(0,212,170,.2)" },
  Leadership: { background: "rgba(240,192,64,.1)", color: "#f0c040", border: "1px solid rgba(240,192,64,.2)" },
  Project: { background: "rgba(124,111,247,.12)", color: "var(--accent2)", border: "1px solid rgba(124,111,247,.2)" },
};

export default function Achievements() {
  return (
    <section id="achievements" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".68rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: ".7rem" }}>// 03 — Achievements</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>Impact & Results</h2>
          <div style={{ width: "3rem", height: 2, marginTop: "1rem", background: "linear-gradient(90deg,var(--accent),transparent)" }} />
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.2rem" }}>
        {resumeData.achievements.map((a, i) => (
          <Reveal key={i} delay={(i % 4) * 0.1}>
            <motion.div
              whileHover={{ y: -4, boxShadow: "0 16px 48px rgba(79,142,247,0.15)" }}
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                borderRadius: 14, padding: "1.5rem", position: "relative", overflow: "hidden",
                cursor: "default", transition: "border-color .3s",
              }}
            >
              <span style={{
                position: "absolute", top: "1rem", right: "1rem",
                fontSize: ".62rem", fontFamily: "JetBrains Mono,monospace",
                letterSpacing: ".08em", textTransform: "uppercase",
                padding: ".2rem .6rem", borderRadius: 100,
                ...badgeStyle[a.badge],
              }}>{a.badge}</span>
              <div style={{ fontSize: "1.8rem", marginBottom: ".8rem" }}>{a.icon}</div>
              <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--accent)" }}>{a.num}</div>
              <div style={{ fontSize: ".9rem", fontWeight: 500, margin: ".3rem 0", color: "var(--text)" }}>{a.title}</div>
              <div style={{ fontSize: ".8rem", color: "var(--text3)", lineHeight: 1.5 }}>{a.context}</div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
