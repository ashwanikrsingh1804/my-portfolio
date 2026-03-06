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
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.2rem" }}>Cloud & Data Support Engineer with 7+ years of experience helping organizations build, operate, and scale reliable cloud and data platforms. I specialize in troubleshooting complex systems, optimizing cloud infrastructure, and supporting mission-critical applications across AWS, Azure, and modern data platforms.</p>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.2rem" }}>Currently working with Dublin Airport Authority as an Application Analyst, I support security and operational technology systems that power airport screening infrastructure. My work includes architecting and maintaining real-time image validation systems and integrating airline boarding pass validation with cloud-hosted eligibility services—helping improve automated passenger validation and reduce operational bottlenecks during peak hours.</p>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem", marginBottom: "1.2rem" }}>Previously at Bethel Digitech in Ireland, I worked as an AWS Cloud Engineer delivering cloud-native data integration and ETL solutions using AWS services, Python, Terraform, and Snowflake. I focused on resolving complex production issues, improving deployment reliability, and collaborating with engineering teams to optimize APIs and large-scale data pipelines.</p>
            <p style={{ color: "var(--text2)", lineHeight: 1.9, fontSize: "1rem" }}>Earlier in my career at Bundl Technologies (Swiggy), I developed Python and SQL-based data pipelines and analytics workflows to detect fraud patterns and support machine learning model evaluation, strengthening data-driven risk management processes. This experience, coupled with an academic journey, grounds the approach to problem-solving with a strategic and data-driven mindset — aiming to contribute significantly to technological advancements and industry growth.</p>
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
