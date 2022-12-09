import React from "react";
import { ContactHero, DocumentHead } from "../components";

const Contact = () => {
  const metadata = {
    title: "Anoosha Niki - Contact",
    description:
      "Contact Anoosha Niki: UI/UX designer based in Stockholm, Sweden",
    keywords:
      "Anoosha Niki, ui, ux, design, product design, ui designer, ux designer, ui ux designer in stockholm",
    canonicalUrl: "https://anoosha.design/contact",
  };

  return (
    <>
      <DocumentHead {...metadata} />
      <ContactHero />
    </>
  );
};

export default Contact;
