import React from "react";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./ContactHero.module.scss";

const ContactHero = () => {
  return (
    <>
      <Row as='section' lg='2' className={styles.container}>
        <Col lg>
          <div className={styles.imageContainer}>
            <Image
              alt='Anoosha Niki Contact Information'
              src='/images/contact.png'
              fill
            />
          </div>
        </Col>

        <Col lg>
          <Container className={styles.textContainer}>
            <h1>Let&apos;s chat!</h1>
            <p>
              Please send me an email to:{" "}
              <a href='mailto:anoosha.niki@gmail.com'>anoosha.niki@gmail.com</a>
            </p>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default ContactHero;
