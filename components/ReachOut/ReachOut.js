import React from "react";
import { Button } from "../Button";
import styles from "./ReachOut.module.scss";
import { links } from "../../content";

const ReachOut = () => {
  const contactMe = links.find((link) => link.id === "contact-me");
  const { link } = contactMe;

  return (
    <section className={styles.container}>
      <h2>Feel free to reach me out</h2>
      <p>
        Are you looking for designer to help you expand your company by meeting
        your user’s demands?
      </p>
      <p>I’m in.</p>

      <Button href={link}>Contact Me</Button>
    </section>
  );
};

export default ReachOut;
