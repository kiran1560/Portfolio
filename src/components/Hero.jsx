import React from "react";
import { Button } from "react-bootstrap";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section text-center">
      <h1>Hey, I'm <span>Kiranpreet Kaur</span></h1>
      <h2>Full Stack Developer</h2><br></br>
      <p>Building responsive and scalable web applications using the MERN stack and Python frameworks such as Flask and FastAPI.</p>
      <div className="hero-buttons">
        <Button variant="outline-info" href="#projects">View Projects</Button>
        <Button variant="info" href="#contact" className="ms-3">Let's Connect</Button>
      </div>
    </section>
  );
}
