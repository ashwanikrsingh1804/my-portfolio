"use client";
import { resumeData } from "@/lib/data";
import Reveal from "./RevealWrapper";

export default function Education() {
  return (
    <section id="education" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".68rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: ".7rem" }}>// 05 — Education</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>Academic Background</h2>
          <div style={{ width: "3rem", height: 2, marginTop: "1rem", background: "linear-gradient(90deg,var(--accent),transparent)" }} />
        </div>
      </Reveal>

      {/* Degrees */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
        {resumeData.education.map((e, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 14, padding: "2rem", transition: "border-color .3s, transform .3s",
            }}
              onMouseEnter={el => { el.currentTarget.style.borderColor = "var(--accent2)"; el.currentTarget.style.transform = "translateY(-3px)"; }}
              onMouseLeave={el => { el.currentTarget.style.borderColor = "var(--border)"; el.currentTarget.style.transform = "none"; }}
            >
              <div style={{ fontSize: "2rem", marginBottom: ".8rem" }}>{i === 0 ? "🎓" : "🏛"}</div>
              <div style={{ fontFamily: "Syne,sans-serif", fontSize: "1.1rem", fontWeight: 700, marginBottom: ".4rem" }}>{e.degree}</div>
              <div style={{ color: "var(--accent2)", fontSize: ".9rem", fontWeight: 500, marginBottom: ".3rem" }}>{e.school}</div>
              <div style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".7rem", color: "var(--text3)", letterSpacing: ".06em" }}>{e.dates}</div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Certifications */}
      <Reveal><h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Certifications</h3></Reveal>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: "1rem", marginBottom: "3rem" }}>
        {resumeData.certifications.map((c, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "1.2rem 1.5rem",
              display: "flex", alignItems: "flex-start", gap: "1rem",
              transition: "all .3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent3)"; e.currentTarget.style.background = "var(--surface2)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--surface)"; }}
            >
              <span style={{ fontSize: "1.5rem", flexShrink: 0, marginTop: ".1rem" }}>{c.icon}</span>
              <div>
                <div style={{ fontSize: ".85rem", color: "var(--text)", lineHeight: 1.4 }}>{c.name}</div>
                <div style={{ fontSize: ".72rem", color: "var(--text3)", marginTop: ".2rem", fontFamily: "JetBrains Mono,monospace" }}>{c.issuer}</div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Publications */}
      <Reveal><h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.3rem", fontWeight: 700, marginBottom: "1.5rem" }}>Publications</h3></Reveal>
      {resumeData.publications.map((p, i) => (
        <Reveal key={i}>
          <div style={{
            background: "var(--surface)", border: "1px solid var(--border)",
            borderRadius: 14, padding: "2rem",
            display: "flex", alignItems: "center", gap: "1.5rem",
            transition: "border-color .3s", maxWidth: 700,
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = "var(--accent)"}
            onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
          >
            <span style={{ fontSize: "2.5rem", flexShrink: 0 }}>📄</span>
            <div>
              <div style={{ fontFamily: "Syne,sans-serif", fontSize: "1.05rem", fontWeight: 700, marginBottom: ".4rem" }}>{p.title}</div>
              <div style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.55 }}>{p.description}</div>
            </div>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
