import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = {
    Languages: ["JavaScript", "C++", "Python", "C", "HTML", "CSS"],
    Frameworks: ["React", "Node.js", "Express", "Bootstrap", "Tailwind CSS", "Django", "Flask", "FastAPI"],
    Databases: ["MongoDB", "MySQL", "AWS", "PostgreSQL"],
    Tools: ["Git", "GitHub", "Postman", "Tensorflow", "Figma",  "JIRA"],
  };

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skill-card">
            <h3 className="skill-category">{category}</h3>
            <div className="skill-chips">
              {list.map((item, index) => (
                <span key={index} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
