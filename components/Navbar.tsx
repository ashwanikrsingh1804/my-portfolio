"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["about","experience","achievements","skills","education","contact"];

export default function Navbar({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      let cur = "";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: ".8rem 2rem",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        backdropFilter: "blur(20px)",
        background: "rgba(5,8,16,0.6)",
        borderBottom: "1px solid var(--border)",
      }}>
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "var(--accent)", cursor: "pointer" }}
        >AKS</div>

        <ul style={{ display: "flex", gap: "2rem", listStyle: "none", margin: 0, padding: 0 }}
            className="hidden md:flex">
          {sections.map(id => (
            <li key={id}>
              <button
                onClick={() => scrollTo(id)}
                style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontSize: ".82rem", letterSpacing: ".06em", textTransform: "uppercase",
                  color: active === id ? "var(--text)" : "var(--text2)",
                  fontFamily: "inherit",
                  borderBottom: active === id ? "1px solid var(--accent)" : "1px solid transparent",
                  paddingBottom: 2, transition: "all .2s",
                }}
              >{id}</button>
            </li>
          ))}
        </ul>

        <div style={{ display: "flex", gap: ".8rem", alignItems: "center" }}>
          <button
            onClick={toggleTheme}
            style={{
              background: "var(--surface2)", border: "1px solid var(--border)",
              color: "var(--text2)", padding: ".4rem .8rem", borderRadius: 6,
              fontSize: ".75rem", cursor: "pointer",
              fontFamily: "JetBrains Mono, monospace",
            }}
          >{theme === "dark" ? "☀ Light" : "🌙 Dark"}</button>
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(true)}
            style={{ background: "none", border: "none", color: "var(--text)", fontSize: "1.5rem", cursor: "pointer" }}
          >☰</button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          style={{
            position: "fixed", inset: 0, zIndex: 200,
            background: "rgba(5,8,16,0.97)", backdropFilter: "blur(20px)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "2rem",
          }}
        >
          <button onClick={() => setMenuOpen(false)}
            style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", color: "var(--text2)", fontSize: "2rem", cursor: "pointer" }}>✕</button>
          {sections.map(id => (
            <button key={id} onClick={() => scrollTo(id)}
              style={{ background: "none", border: "none", fontFamily: "Syne,sans-serif", fontSize: "1.8rem", fontWeight: 700, color: "var(--text2)", cursor: "pointer" }}>
              {id}
            </button>
          ))}
        </motion.div>
      )}
    </>
  );
}
