"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const isDecimal = target % 1 !== 0;
  useEffect(() => {
    let cur = 0;
    const step = target / 60;
    const t = setInterval(() => {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      setVal(cur);
    }, 25);
    return () => clearInterval(t);
  }, [target]);
  return <span>{isDecimal ? val.toFixed(1) : Math.floor(val)}{suffix}</span>;
}

export default function Hero({ onDownload }: { onDownload: () => void }) {
  return (
    <section id="hero" style={{
      position: "relative", zIndex: 1,
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center",
      padding: "6rem 2rem 4rem", textAlign: "center",
    }}>
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.7 }}>
        <span style={{
          fontFamily: "JetBrains Mono,monospace", fontSize: ".72rem", letterSpacing: ".3em",
          textTransform: "uppercase", color: "var(--accent3)",
          border: "1px solid rgba(0,212,170,.2)", padding: ".35rem 1rem",
          borderRadius: 100, marginBottom: "1.8rem", display: "inline-block",
          background: "rgba(0,212,170,.04)",
        }}>☁ Available for Cloud Engineering Roles</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
        style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(3rem,8vw,7rem)", fontWeight: 800, lineHeight: .95, letterSpacing: "-.03em", marginBottom: "1rem" }}
      >
        Ashwani<br />
        <span style={{ background: "linear-gradient(135deg,#4f8ef7,#7c6ff7,#00d4aa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
          Kumar Singh
        </span>
      </motion.h1>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
        style={{ fontSize: "clamp(1rem,2.5vw,1.4rem)", color: "var(--text2)", fontWeight: 300, marginBottom: "1.5rem", letterSpacing: ".02em" }}>
        Cloud Engineer · MS Cloud Computing · Node.js · Python
      </motion.p>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
        style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".72rem", letterSpacing: ".15em", color: "var(--text3)", marginBottom: ".5rem" }}>
        📍 {resumeData.basics.location}
      </motion.p>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
        style={{ maxWidth: 620, margin: "0 auto 2.5rem", color: "var(--text2)", lineHeight: 1.75, fontSize: "1rem" }}>
        Designing and implementing scalable cloud infrastructures that drive operational efficiency and security — with a data-driven mindset built across cloud engineering, risk analytics, and technical leadership.
      </motion.p>

      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.55 }}
        style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
        <a href="#experience" onClick={e => { e.preventDefault(); document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" }); }}
          style={{
            background: "linear-gradient(135deg,#4f8ef7,#7c6ff7)", color: "#fff", border: "none",
            padding: ".85rem 2rem", borderRadius: 10, fontSize: ".9rem", fontWeight: 500,
            cursor: "pointer", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: ".5rem",
            boxShadow: "0 4px 24px rgba(79,142,247,.25)", transition: "transform .2s,box-shadow .2s",
          }}>⚡ View Experience</a>
        <button onClick={onDownload}
          style={{
            background: "var(--surface)", color: "var(--text)",
            border: "1px solid var(--border2)", padding: ".85rem 2rem",
            borderRadius: 10, fontSize: ".9rem", fontWeight: 500, cursor: "pointer",
            display: "inline-flex", alignItems: "center", gap: ".5rem",
            backdropFilter: "blur(8px)",
          }}>⬇ Download Resume</button>
      </motion.div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
        style={{ display: "flex", gap: "2.5rem", justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { count: 8, suffix: "", label: "Years Exp." },
          { count: 60, suffix: "%", label: "Deploy Speed ↑" },
          { count: 99.9, suffix: "%", label: "Uptime" },
          { count: 10, suffix: "%", label: "Efficiency ↑" },
        ].map(s => (
          <div key={s.label} style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--accent)" }}>
              <Counter target={s.count} suffix={s.suffix} />
            </div>
            <div style={{ fontSize: ".75rem", color: "var(--text3)", letterSpacing: ".1em", textTransform: "uppercase" }}>{s.label}</div>
          </div>
        ))}
      </motion.div>

      <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}
        style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", opacity: .4, textAlign: "center" }}>
        <div style={{ fontSize: ".65rem", letterSpacing: ".2em", textTransform: "uppercase", color: "var(--text3)" }}>Scroll</div>
        <div style={{ fontSize: "1rem" }}>↓</div>
      </motion.div>
    </section>
  );
}
