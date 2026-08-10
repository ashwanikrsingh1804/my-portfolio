"use client";
import { resumeData } from "@/lib/data";
import Reveal from "./RevealWrapper";

export default function Contact() {
  const contacts = [
    { icon: "📞", label: "Phone", value: resumeData.basics.phone, href: `tel:${resumeData.basics.phone}` },
    { icon: "✉", label: "Email", value: resumeData.basics.email, href: `mailto:${resumeData.basics.email}` },
    { icon: "in", label: "LinkedIn", value: "ashwani-k-singh", href: resumeData.basics.links.linkedin, isLinkedIn: true },
    { icon: "⌥", label: "GitHub", value: "ashwanikrsingh1804", href: resumeData.basics.links.github, isGitHub: true },
    { icon: "📍", label: "Location", value: resumeData.basics.location, href: null, isGreen: true },
  ];

  return (
    <section id="contact" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
      <Reveal>
        <div style={{ marginBottom: "3.5rem" }}>
          <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".68rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: ".7rem" }}>// 06 — Contact</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>Get In Touch</h2>
          <div style={{ width: "3rem", height: 2, marginTop: "1rem", background: "linear-gradient(90deg,var(--accent),transparent)" }} />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem", maxWidth: 800 }}>
          {contacts.map((c, i) => {
            const Tag = c.href ? "a" : "div" as any;
            return (
              <Tag
                key={i}
                {...(c.href ? { href: c.href, target: (c.isLinkedIn || c.isGitHub) ? "_blank" : undefined, rel: "noopener noreferrer" } : {})}
                style={{
                  background: "var(--surface)", border: "1px solid var(--border)",
                  borderRadius: 14, padding: "1.5rem",
                  display: "flex", alignItems: "center", gap: "1rem",
                  textDecoration: "none", color: "var(--text)",
                  transition: "all .3s", cursor: c.href ? "pointer" : "default",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLElement>) => {
                  if (c.href) {
                    e.currentTarget.style.borderColor = "var(--accent)";
                    e.currentTarget.style.background = "var(--surface2)";
                    e.currentTarget.style.transform = "translateX(3px)";
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLElement>) => {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.background = "var(--surface)";
                  e.currentTarget.style.transform = "none";
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 10, flexShrink: 0,
                  background: c.isLinkedIn
                    ? "linear-gradient(135deg,#0077b5,#005fa3)"
                    : c.isGitHub
                    ? "linear-gradient(135deg,#333,#111)"
                    : c.isGreen
                    ? "linear-gradient(135deg,var(--accent3),#00b38a)"
                    : "linear-gradient(135deg,var(--accent),var(--accent2))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: (c.isLinkedIn || c.isGitHub) ? ".75rem" : "1.1rem",
                  fontWeight: 700, color: "#fff",
                }}>{c.icon}</div>
                <div>
                  <div style={{ fontSize: ".72rem", color: "var(--text3)", marginBottom: ".2rem", fontFamily: "JetBrains Mono,monospace", letterSpacing: ".06em" }}>{c.label}</div>
                  <div style={{ fontSize: ".9rem", fontWeight: 500 }}>{c.value}</div>
                </div>
              </Tag>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
