import React from "react";
import Image from "next/image";
import cn from "classnames";
import { Col, Container, Row } from "react-bootstrap";
import styles from "./PortfolioCard.module.scss";

const PortfolioCard = ({ title, description, year, image }) => {
  return (
    <Row className={styles.row} lg='2'>
      <Col lg className={cn(styles.col, styles.imageCol)}>
        <div className={styles.imgContainer}>
          <Image src={image} fill />
        </div>
      </Col>

      <Col lg className={styles.col}>
        <h3>{title}</h3>
        <p>{description}</p>
        <p>
          <i>{year}</i>
        </p>
      </Col>
    </Row>
  );
};

export default PortfolioCard;
