import React from "react";
import { IndexHero, PortfolioList, ReachOut } from "../components";

const HomePage = () => {
  return (
    <>
      <IndexHero />
      <PortfolioList heading='My Portfolio' />
      <ReachOut />
    </>
  );
};

export default HomePage;
