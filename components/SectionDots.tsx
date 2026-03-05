"use client";
import { useEffect, useState } from "react";

const sections = ["hero","about","experience","achievements","skills","education","contact"];

export default function SectionDots() {
  const [active, setActive] = useState("hero");
  useEffect(() => {
    const onScroll = () => {
      let cur = "hero";
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 200) cur = id;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="hidden md:flex" style={{
      position: "fixed", right: "1.5rem", top: "50%", transform: "translateY(-50%)",
      zIndex: 90, flexDirection: "column", gap: ".7rem",
    }}>
      {sections.map(id => (
        <div
          key={id}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
          title={id}
          style={{
            width: 7, height: 7, borderRadius: "50%", cursor: "pointer",
            background: active === id ? "var(--accent)" : "var(--text3)",
            boxShadow: active === id ? "0 0 8px var(--accent)" : "none",
            transition: "all .3s",
          }}
        />
      ))}
    </div>
  );
}
