import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import heroImage from "../../assets/images/index-hero.png";
import { Button } from "../Button";
import styles from "./IndexHero.module.scss";
import { LINKS } from "../../constants";

const IndexHero = () => {
  return (
    <Row lg='2' className={styles.container}>
      <Col lg>
        <Container className={styles.imageContainer}>
          <Image alt='UI/UX Design' src={heroImage} fill />
        </Container>
      </Col>

      <Col lg>
        <Container className={styles.textContainer}>
          <h1>Hi, I'm Anoosha</h1>

          <p>I’m an UI/UX Designer based in Sweden, Stockholm.</p>
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
