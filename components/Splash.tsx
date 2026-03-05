"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Splash({ onDone }: { onDone: () => void }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let prog = 0;
    const interval = setInterval(() => {
      prog += Math.random() * 15 + 5;
      if (prog >= 100) {
        prog = 100;
        clearInterval(interval);
        setTimeout(() => { setVisible(false); setTimeout(onDone, 600); }, 300);
      }
      setProgress(prog);
    }, 80);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "var(--bg)",
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: "2rem",
          }}
        >
          <motion.div
            animate={{ boxShadow: ["0 0 20px rgba(79,142,247,0.15)", "0 0 60px rgba(79,142,247,0.4)", "0 0 20px rgba(79,142,247,0.15)"] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: 90, height: 90, borderRadius: "50%",
              border: "1.5px solid var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontFamily: "Syne, sans-serif", fontSize: "2rem", fontWeight: 800,
              color: "var(--accent)",
            }}
          >
            AK
          </motion.div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: ".7rem", letterSpacing: ".25em", color: "var(--text3)", textTransform: "uppercase" }}>
            Initializing Portfolio
          </div>
          <div style={{ width: 200, height: 2, background: "var(--surface2)", borderRadius: 2, overflow: "hidden" }}>
            <motion.div
              style={{ height: "100%", background: "linear-gradient(90deg,var(--accent),var(--accent2))", borderRadius: 2 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05 }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
