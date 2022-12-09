import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <Container className={styles.container}>
      <h1>Oops! Something went wrong</h1>

      <Link href='/'>
        <span>Go back to the index page</span>
      </Link>
    </Container>
  );
};

export default NotFound;
