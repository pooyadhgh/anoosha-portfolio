import React from "react";
import {
  DocumentHead,
  IndexHero,
  PortfolioList,
  ReachOut,
} from "../components";

const HomePage = () => {
  const metadata = {
    title: "Anoosha Niki - UI/UX Designer",
    description:
      "Anoosha Niki Home Page: UI/UX designer based in Stockholm, Sweden",
    keywords:
      "Anoosha Niki, ui, ux, design, product design, ui designer, ux designer, ui ux designer in stockholm",
    canonicalUrl: "https://anoosha.design/",
  };

  return (
    <>
      <DocumentHead {...metadata} />
      <IndexHero />
      <PortfolioList heading='My Portfolio' />
      <ReachOut />
    </>
  );
};

export default HomePage;
