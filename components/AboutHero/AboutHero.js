import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./AboutHero.module.scss";

const AboutHero = () => {
  return (
    <Row as='section' lg='2' className={styles.container}>
      <Col lg>
        <Image alt='About Anoosha Niki' src='/images/about.png' fill />
      </Col>

      <Col lg>
        <Container className={styles.textContainer}>
          <h1>About me</h1>

          <p>
            I started my journey as an architect because of my strong desire to
            think out of the box and create new spaces.
          </p>
          <p>
            This mindset helped me to welcome new challenges and new experience
            without having fear of outcomes.
          </p>
          <p>
            I have always enjoyed engaging both the creative and analytical
            parts of my brain. Finding UX Design was the perfect mix of the two
            for me.
          </p>
        </Container>
      </Col>
    </Row>
  );
};

export default AboutHero;
