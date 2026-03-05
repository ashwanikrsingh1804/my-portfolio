"use client";
import { useState, useEffect } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SectionDots from "@/components/SectionDots";
import Hero from "@/components/Hero";
import ImpactStrip from "@/components/ImpactStrip";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import ResumeModal from "@/components/ResumeModal";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [showModal, setShowModal] = useState(false);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  return (
    <>
      <Splash onDone={() => setSplashDone(true)} />
      <AnimatedBackground />
      <ScrollProgress />
      <SectionDots />
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main>
        <Hero onDownload={() => setShowModal(true)} />
        <ImpactStrip />

        <section id="about" style={{ position: "relative", zIndex: 1, padding: "6rem 2rem", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ marginBottom: "3.5rem" }}>
            <span style={{ fontFamily: "JetBrains Mono,monospace", fontSize: ".68rem", letterSpacing: ".3em", textTransform: "uppercase", color: "var(--accent)", display: "block", marginBottom: ".7rem" }}>// 01 — About</span>
            <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,4vw,3rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-.02em" }}>Cloud-native by design,<br/>data-driven by instinct.</h2>
            <div style={{ width: "3rem", height: 2, marginTop: "1rem", background: "linear-gradient(90deg,var(--accent),transparent)" }} />
          </div>
          <div style={{ maxWidth: 700 }}>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.2rem" }}>Our team at Bethel Digitech thrives on innovative cloud solutions, leveraging expertise in cloud services and a robust methodology honed during a Master of Science in Cloud Computing from the National College of Ireland.</p>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.2rem" }}>A dedication to skill development and data analytics drives the design and implementation of scalable cloud infrastructures, ensuring operational efficiency and security. Previously, as a Senior Risk Analyst at Swiggy, key strategies were developed enhancing risk mitigation, including advanced fraud detection systems.</p>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem" }}>This experience, coupled with an academic journey, grounds the approach to problem-solving with a strategic and data-driven mindset — aiming to contribute significantly to technological advancements and industry growth.</p>
          </div>
        </section>

        <Experience />
        <Achievements />
        <Skills />
        <Education />
        <Contact />
      </main>

      <footer style={{
        position: "relative", zIndex: 1, textAlign: "center", padding: "2.5rem",
        borderTop: "1px solid var(--border)", color: "var(--text3)",
        fontSize: ".78rem", fontFamily: "JetBrains Mono,monospace", letterSpacing: ".08em",
      }}>
        <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, color: "var(--accent)" }}>AKS</span>
        &nbsp;·&nbsp; Ashwani Kumar Singh &nbsp;·&nbsp; Cloud Engineer &nbsp;·&nbsp; Dublin, Ireland
      </footer>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden" style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100,
        background: "rgba(5,8,16,.92)", backdropFilter: "blur(20px)",
        borderTop: "1px solid var(--border)", padding: ".6rem 0",
      }}>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          {[["🏠","Hero","hero"],["💼","Work","experience"],["🏆","Impact","achievements"],["⚡","Skills","skills"],["✉","Contact","contact"]].map(([icon, label, target]) => (
            <button key={target} onClick={() => document.getElementById(target)?.scrollIntoView({ behavior: "smooth" })}
              style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: ".2rem", fontSize: ".58rem", letterSpacing: ".05em", textTransform: "uppercase", color: "var(--text3)", background: "none", border: "none", cursor: "pointer", padding: ".4rem .8rem" }}>
              <span style={{ fontSize: "1.1rem" }}>{icon}</span>
              <span>{label}</span>
            </button>
          ))}
        </div>
      </nav>

      {showModal && <ResumeModal onClose={() => setShowModal(false)} />}
    </>
  );
}
