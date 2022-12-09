import React from "react";
import { DocumentHead, NotFound } from "../components";

const NotFoundPage = () => {
  const metadata = {
    title: "Anoosha Niki - 404 Not Found",
    description: "404 Not Found",
    keywords:
      "Anoosha Niki, ui, ux, design, product design, ui designer, ux designer, ui ux designer in stockholm",
  };

  return (
    <>
      <DocumentHead {...metadata} />
      <NotFound />
    </>
  );
};

export default NotFoundPage;
