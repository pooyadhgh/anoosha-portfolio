import React from "react";
import Link from "next/link";
import styles from "./Footer.module.scss";
import { SocialMedia } from "../SocialMedia";
import { links } from "../../content";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <SocialMedia className={styles.socialMedia} />

      <div className={styles.links}>
        {links.map((item) => (
          <Link key={item.id} href={item.link} className={styles.link} passHref>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
