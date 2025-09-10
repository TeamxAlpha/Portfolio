import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Zohaib Ahmed </span>
            from <span className="purple"> Islamabad, Pakistan</span>
            <br />
            I am currently performing my duties as a software developer at Fiverr.
            <br />
            I have completed Bachelor (Bs) in Computer Science at Szabist, Islamabad.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every thing Happens for a Reason."{" "}
          </p>
          <footer className="blockquote-footer">ZohaibA.</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
