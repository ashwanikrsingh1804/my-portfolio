"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setPct((window.scrollY / max) * 100);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position: "fixed", top: 0, left: 0, height: 2, zIndex: 200,
      background: "linear-gradient(90deg,#4f8ef7,#7c6ff7,#00d4aa)",
      width: `${pct}%`, transition: "width .1s linear",
    }} />
  );
}
