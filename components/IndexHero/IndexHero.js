import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "../Button";
import styles from "./IndexHero.module.scss";

const IndexHero = () => {
  return (
    <Row as='section' lg='2' className={styles.container}>
      <Col lg>
        <Image alt='UI/UX Design - Anoosha Niki' src='/images/index.png' fill />
      </Col>

      <Col lg>
        <Container className={styles.textContainer}>
          <h1>Hi, I'm Anoosha</h1>

          <p>I’m an UI/UX Designer based in Stockholm, Sweden.</p>
          <p>
            I intend to leverage my prior experience to bring a level of empathy
            and attention to detail that’s critical to making intuitive user
            experiences.
          </p>

          <Button href='/about'>Read more about me</Button>
        </Container>
      </Col>
    </Row>
  );
};

export default IndexHero;
