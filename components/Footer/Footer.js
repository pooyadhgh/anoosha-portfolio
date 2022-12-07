import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { SocialMedia } from "../SocialMedia";
import { LINKS } from "../../constants";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <Container as='footer' className={styles.container}>
      <SocialMedia className={styles.socialMedia} />

      <div className={styles.links}>
        {LINKS.map((item) => (
          <Link key={item.id} href={item.link} className={styles.link} passHref>
            {item.label}
          </Link>
        ))}
      </div>
    </Container>
  );
};

export default Footer;
