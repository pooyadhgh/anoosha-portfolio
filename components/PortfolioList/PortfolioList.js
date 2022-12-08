import React from "react";
import { PortfolioCard } from "../PortfolioCard";
import { Container } from "react-bootstrap";
import { PORTFOLIO } from "../../constants";
import styles from "./PortfolioList.module.scss";

const PortfolioList = ({ heading }) => {
  return (
    <Container as='section' className={styles.container}>
      {!!heading && <h2>{heading}</h2>}

      {PORTFOLIO.map((item) => {
        return <PortfolioCard {...item} key={item.title} />;
      })}
    </Container>
  );
};

export default PortfolioList;
