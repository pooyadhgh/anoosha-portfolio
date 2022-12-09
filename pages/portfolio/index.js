import React from "react";
import { DocumentHead, PortfolioHero, PortfolioList } from "../../components";

const Portfolio = () => {
  const metadata = {
    title: "Anoosha Niki - Portfolio",
    description:
      "Anoosha Niki Portfolio: UI/UX designer based in Stockholm, Sweden",
    keywords:
      "Anoosha Niki, ui, ux, design, product design, ui designer, ux designer, ui ux designer in stockholm",
    canonicalUrl: "https://anoosha.design/portfolio",
  };

  return (
    <>
      <DocumentHead {...metadata} />
      <PortfolioHero />
      <PortfolioList />
    </>
  );
};

export default Portfolio;
