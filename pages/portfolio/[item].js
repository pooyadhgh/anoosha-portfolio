import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { PORTFOLIO } from "../../constants";
import PortfolioCard from "../../components/PortfolioCard/PortfolioCard";
import { Link45deg } from "react-bootstrap-icons";
import styles from "./portfolio.module.scss";

const PortfolioItem = () => {
  const { query } = useRouter();
  const { item } = query;
  const portfolio = PORTFOLIO.find((portfolio) => portfolio.id === item);

  if (!portfolio) {
    return (
      <Container>
        <h1>Oops! I can&apos;t find the portfolio...</h1>

        <Link href='/portfolio'>
          <span>Go back to the portfolio list</span>
        </Link>
      </Container>
    );
  }

  const { title, description, image, screenshot, content, url, figma, id } =
    portfolio;

  // Next item card
  const index = PORTFOLIO.findIndex((portfolio) => portfolio.id === id);
  const isLastItem = index === PORTFOLIO.length - 1;
  const nextItem = PORTFOLIO[isLastItem ? index - 1 : index + 1];

  return (
    <Container as='section' className={styles.container}>
      <h1>{title}</h1>
      <p>{description}</p>

      {(figma || url) && (
        <a
          href={figma || url}
          rel='nofollow noopener noreferrer'
          target='_blank'
        >
          <Link45deg />
          <span>View More</span>
        </a>
      )}

      <Container className={styles.imageContainer}>
        <Image src={screenshot || image} alt={title} fill />
      </Container>

      {content && (
        <>
          <h2>What I did</h2>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </>
      )}

      <h2>{isLastItem ? "Previous" : "Next"}</h2>
      <PortfolioCard {...nextItem} />
    </Container>
  );
};

export default PortfolioItem;
