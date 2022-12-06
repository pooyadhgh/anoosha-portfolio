import React from "react";
import cn from "classnames";
import { Instagram, Linkedin, EnvelopeFill } from "react-bootstrap-icons";
import styles from "./SocialMedia.module.scss";
import { SOCIAL_MEDIA } from "../../constants";

const SocialMedia = ({ className }) => {
  const { INSTAGRAM, LINKEDIN, EMAIL } = SOCIAL_MEDIA;

  return (
    <div className={cn(styles.container, className)}>
      <a href={INSTAGRAM}>
        <Instagram aria-label='Instagram' />
      </a>

      <a href={LINKEDIN}>
        <Linkedin aria-label='Linkedin' />
      </a>

      <a href={`mailto:${EMAIL}`}>
        <EnvelopeFill aria-label='GMail' />
      </a>
    </div>
  );
};

export default SocialMedia;
