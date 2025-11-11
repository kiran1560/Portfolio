import React from "react";
import "./Certificates.css";

export default function Certificates() {
  const achievements = [
    "AWS & Udacity — Generative AI Certificate (2025)",
    "IBM Full Stack Software Developer Certification (2025)",
    "MERN Stack Front To Back: Full Stack React, Redux & Node.js ",
    "Data Analysis with Python",
    "Databases and SQL for Data Science with Python"
  ];

  return (
    <section id="certificates" className="cert-section text-center">
      <div className="container">
        <h2 className="section-title">Certificates</h2>
        <div className="underline"></div>
        <ul className="cert-list mt-4">
          {achievements.map((item, idx) => (
            <li key={idx} className="cert-item">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
