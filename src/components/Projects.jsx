import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import projects from "../projects";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <Container>
        <Row>
          {projects.map((proj) => (
            <Col md={4} sm={6} key={proj.id} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{proj.title}</Card.Title>
                  <Card.Text>{proj.description}</Card.Text>
                  <Button
                    variant="outline-info"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
