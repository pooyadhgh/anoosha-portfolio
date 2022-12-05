import React from "react";
import { Instagram, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import cn from "classnames";
import styles from "./SocialMedia.module.scss";
import { socialMedia } from "../../content";

const SocialMedia = ({ className }) => {
  const { instagram, linkedin, email } = socialMedia;

  return (
    <div className={cn(styles.container, className)}>
      <a href={instagram}>
        <Instagram aria-label='Instagram' />
      </a>

      <a href={linkedin}>
        <Linkedin aria-label='Linkedin' />
      </a>

      <a href={`mailto:${email}`}>
        <EnvelopeFill aria-label='GMail' />
      </a>
    </div>
  );
};

export default SocialMedia;
