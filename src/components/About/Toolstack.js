import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
  SiAmazons3,
  SiAmazonaws,
  SiFirebase,
  SiNginx,
  SiExpo,
  SiRazorpay,
  SiCpanel,
  


  
} from "react-icons/si";

import { DiGit } from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={1}  className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiPostman />
      </Col>
      {/* <Col xs={4} md={1} className="tech-icons">
        <SiVercel />
      </Col> */}
      <Col xs={4} md={1} className="tech-icons">
        <SiHeroku />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAmazons3 />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiNginx />
      </Col>
      <Col xs={4} md={1} className="tech-icons">
        <SiExpo />
      </Col>
      {/* <Col xs={4} md={1} className="tech-icons">
        <SiRazorpay />
      </Col> */}
    
    </Row>
  );
}

export default Toolstack;
