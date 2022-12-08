import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PortfolioHero.module.scss";
import heroImage from "../../assets/images/portfo-hero.png";
import { PortfolioList } from "../PortfolioList";

const PortfolioHero = () => {
  return (
    <>
      <Row lg='2' className={styles.container}>
        <Col lg>
          <Container className={styles.imageContainer}>
            <Image alt='UI/UX Design' src={heroImage} fill />
          </Container>
        </Col>

        <Col lg>
          <Container className={styles.textContainer}>
            <h1>My Portfolio</h1>
            <p>You can find my portfolio here.</p>
          </Container>
        </Col>
      </Row>

      <PortfolioList />
    </>
  );
};

export default PortfolioHero;
