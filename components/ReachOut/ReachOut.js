import React from "react";
import { Container, Stack } from "react-bootstrap";
import { Button } from "../Button";
import { LINKS } from "../../constants";
import styles from "./ReachOut.module.scss";

const ReachOut = () => {
  return (
    <Container as='section'>
      <Stack className={styles.container} direction='vertical'>
        <h2>Feel free to reach me out</h2>
        <p>
          Are you looking for designer to help you expand your company by
          meeting your user’s demands?
        </p>
        <p>I’m in.</p>

        <Button href='/contact'>Contact Me</Button>
      </Stack>
    </Container>
  );
};

export default ReachOut;
