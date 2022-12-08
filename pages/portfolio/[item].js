import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { PORTFOLIO } from "../../constants";
import styles from "./portfolio.module.scss";

const PortfolioItem = () => {
  const { query } = useRouter();
  const { item } = query;
  const portfolio = PORTFOLIO.find((portfolio) => portfolio.id === item);

  if (!portfolio) {
    return (
      <Container>
        <h1>Oops! I can't find the portfolio...</h1>

        <Link href='/portfolio'>
          <span>Go back to the portfolio list</span>
        </Link>
      </Container>
    );
  }

  const { title, description, image, detail } = portfolio;

  return (
    <Container as='section' className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>

      <Container className={styles.imageContainer}>
        <Image src={image} alt={title} fill />
      </Container>

      <h2>What I did</h2>
      <p>{detail}</p>
    </Container>
  );
};

export default PortfolioItem;
