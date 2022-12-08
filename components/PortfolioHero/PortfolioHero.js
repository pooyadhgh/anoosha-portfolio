import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PortfolioHero.module.scss";

const PortfolioHero = () => {
  return (
    <>
      <Row as='section' lg='2' className={styles.container}>
        <Col lg>
          <Image alt='Anoosha Niki Portfolio' src='/images/portfo.png' fill />
        </Col>

        <Col lg>
          <Container className={styles.textContainer}>
            <h1>My Portfolio</h1>
            <p>You can find my portfolio here.</p>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default PortfolioHero;
