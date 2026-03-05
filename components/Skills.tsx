"use client";
import { resumeData } from "@/lib/data";
import Reveal from "./RevealWrapper";

export default function Skills() {
  return (
    <section id="skills" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".68rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: ".7rem" }}>// 04 — Skills</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>Technical Stack</h2>
          <div style={{ width: "3rem", height: 2, marginTop: "1rem", background: "linear-gradient(90deg,var(--accent),transparent)" }} />
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.5rem" }}>
        {resumeData.skills.map((group, i) => (
          <Reveal key={i} delay={(i % 4) * 0.1}>
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 14, padding: "1.5rem",
              transition: "border-color .3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = "var(--accent)")}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
            >
              <div style={{ fontFamily: "Syne,sans-serif", fontSize: ".85rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".1em", color: "var(--accent)", marginBottom: "1rem" }}>{group.group}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: ".5rem" }}>
                {group.items.map((item, j) => (
                  <span key={j} style={{
                    fontSize: ".78rem", padding: ".35rem .8rem", borderRadius: 6,
                    background: "var(--surface2)", border: "1px solid var(--border)",
                    color: "var(--text2)", transition: "all .2s", cursor: "default",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(79,142,247,.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(79,142,247,.2)"; (e.currentTarget as HTMLElement).style.color = "var(--accent)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "var(--surface2)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; (e.currentTarget as HTMLElement).style.color = "var(--text2)"; }}
                  >{item}</span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
