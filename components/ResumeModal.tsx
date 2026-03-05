"use client";
import { resumeData } from "@/lib/data";

export default function ResumeModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: "fixed", inset: 0, zIndex: 500,
        background: "rgba(0,0,0,.7)", backdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem",
      }}
    >
      <div style={{
        background: "var(--bg2)", border: "1px solid var(--border2)",
        borderRadius: 20, padding: "2.5rem", maxWidth: 600, width: "100%",
        maxHeight: "80vh", overflowY: "auto", position: "relative",
      }}>
        <button onClick={onClose} style={{ position: "absolute", top: "1.2rem", right: "1.2rem", background: "none", border: "none", color: "var(--text2)", fontSize: "1.5rem", cursor: "pointer" }}>✕</button>
        <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.5rem", fontWeight: 800, marginBottom: ".4rem" }}>Resume</h2>
        <p style={{ fontSize: ".85rem", color: "var(--text2)", marginBottom: "2rem" }}>Ashwani Kumar Singh — Cloud Engineer</p>

        {[
          { title: "Contact", content: <p style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.8 }}>📞 {resumeData.basics.phone} · ✉ {resumeData.basics.email}<br/>🔗 linkedin.com/in/ashwani-k-singh · 📍 {resumeData.basics.location}</p> },
          { title: "Summary", content: <p style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.8 }}>Cloud Support professional with MS in Cloud Computing from National College of Ireland. Expertise in cloud services, scalable infrastructure design, and data analytics.</p> },
          { title: "Experience", content: resumeData.experience.map((exp, i) => (
            <div key={i} style={{ marginBottom: "1rem" }}>
              <strong style={{ color: "var(--text)" }}>{exp.role} — {exp.company}</strong><br/>
              <span style={{ fontSize: ".78rem", color: "var(--text3)" }}>{exp.dates} | {exp.location}</span>
              <ul style={{ marginTop: ".4rem", paddingLeft: "1rem" }}>
                {exp.bullets.slice(0,4).map((b, j) => <li key={j} style={{ fontSize: ".82rem", color: "var(--text2)", lineHeight: 1.6, marginBottom: ".2rem" }}>{b}</li>)}
              </ul>
            </div>
          ))},
          { title: "Education", content: resumeData.education.map((e, i) => <p key={i} style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.8, marginBottom: ".5rem" }}>{e.degree}<br/><em style={{ color: "var(--accent2)" }}>{e.school}</em> · {e.dates}</p>) },
          { title: "Certifications", content: <p style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.8 }}>{resumeData.certifications.map(c => c.name).join(" · ")}</p> },
          { title: "Skills", content: <p style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.8 }}>{resumeData.skills.flatMap(g => g.items).join(" · ")}</p> },
          { title: "Publications", content: <p style={{ fontSize: ".85rem", color: "var(--text2)", lineHeight: 1.8 }}>{resumeData.publications[0].title}</p> },
        ].map((sec, i) => (
          <div key={i} style={{ marginBottom: "1.5rem", paddingBottom: "1.5rem", borderBottom: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "Syne,sans-serif", fontSize: ".8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: ".12em", color: "var(--accent)", marginBottom: ".8rem" }}>{sec.title}</div>
            {sec.content}
          </div>
        ))}

        <button onClick={() => window.print()} style={{
          background: "linear-gradient(135deg,var(--accent),var(--accent2))", color: "#fff",
          border: "none", padding: ".8rem 2rem", borderRadius: 10,
          fontSize: ".88rem", cursor: "pointer", marginTop: "1.5rem", width: "100%",
        }}>🖨 Print / Save as PDF</button>
      </div>
    </div>
  );
}
