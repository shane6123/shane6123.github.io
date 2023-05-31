import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shane Alam </span>
            from <span className="purple"> Kanpur ,Uttar Pradesh.</span>
            <br />I'm a final year Student from {" "}
            <span className="purple">Allenhouse Intitution of Technology.
            </span>
            <br />
            Working as
            <span className="purple"> MERN Stack Developer </span> 
            at <span className="purple"> Androcoders </span>  .
            Interested in <span className="purple">Competitive Programming</span> and <span className="purple">Problem Solving</span> .
         




            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shane Alam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
