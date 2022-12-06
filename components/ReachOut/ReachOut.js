import React from "react";
import { Button } from "../Button";
import { LINKS } from "../../constants";
import styles from "./ReachOut.module.scss";

const ReachOut = () => {
  const contactPage = LINKS.find((link) => link.id === "contact");
  const contactUrl = contactPage?.link || "#";

  return (
    <section className={styles.container}>
      <h2>Feel free to reach me out</h2>
      <p>
        Are you looking for designer to help you expand your company by meeting
        your user’s demands?
      </p>
      <p>I’m in.</p>

      <Button href={contactUrl}>Contact Me</Button>
    </section>
  );
};

export default ReachOut;
