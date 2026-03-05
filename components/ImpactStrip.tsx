"use client";
import Reveal from "./RevealWrapper";

const impacts = [
  { num: "60%", desc: "Increase in deployment speed via IaC automation at Bethel Digitech" },
  { num: "99.9%", desc: "Uptime guaranteed through disaster recovery strategy" },
  { num: "10%", desc: "System efficiency improvement via CloudWatch optimization protocols" },
  { num: "HIPAA", desc: "Compliance enforced — strict cloud security policies & data safeguarding" },
];

export default function ImpactStrip() {
  return (
    <div style={{
      position: "relative", zIndex: 1,
      background: "linear-gradient(135deg,rgba(79,142,247,.08),rgba(124,111,247,.05))",
      borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)",
      padding: "2.5rem 2rem",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: "1.5rem" }}>
        {impacts.map((item, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div style={{
              background: "var(--surface)", border: "1px solid var(--border)",
              borderRadius: 12, padding: "1.5rem", textAlign: "center",
              transition: "transform .3s, box-shadow .3s",
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(79,142,247,0.15)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2.4rem", background: "linear-gradient(135deg,var(--accent),var(--accent3))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{item.num}</div>
              <div style={{ fontSize: ".82rem", color: "var(--text2)", marginTop: ".4rem", lineHeight: 1.5 }}>{item.desc}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
