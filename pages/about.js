import React from "react";
import { AboutHero, DocumentHead } from "../components";

const About = () => {
  const metadata = {
    title: "Anoosha Niki - About",
    description:
      "About Anoosha Niki: UI/UX designer based in Stockholm, Sweden",
    keywords:
      "Anoosha Niki, ui, ux, design, product design, ui designer, ux designer, ui ux designer in stockholm",
    canonicalUrl: "https://anoosha.design/about",
  };

  return (
    <>
      <DocumentHead {...metadata} />
      <AboutHero />
    </>
  );
};

export default About;
