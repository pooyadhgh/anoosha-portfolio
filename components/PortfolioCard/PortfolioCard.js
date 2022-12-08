import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PortfolioCard.module.scss";

const PortfolioCard = ({ title, description, year, image, id }) => {
  return (
    <Row className={styles.row} lg='2'>
      <Col lg className={styles.col}>
        <Container className={styles.imgContainer}>
          <Link href={`/portfolio/${id}`}>
            <Image src={image} alt={title} fill />
          </Link>
        </Container>
      </Col>

      <Col lg className={styles.col}>
        <Link href={`/portfolio/${id}`}>
          <h3>{title}</h3>
        </Link>

        <p>{description}</p>
        <p>
          <i>{year}</i>
        </p>
      </Col>
    </Row>
  );
};

export default PortfolioCard;
