import React from "react";
import Head from "next/head";

const DocumentHead = ({
  keywords,
  description,
  title,
  children,
  canonicalUrl,
}) => {
  return (
    <Head>
      <title>{title}</title>
      {!!keywords && <meta name='keywords' content={keywords} />}
      {!!description && <meta name='description' content={description} />}
      <meta property='og:title' content={title} />
      <meta property='og:locale' content='en-US' />
      <meta property='og:site_name' content='Anoosha Niki Home Page' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://anoosha.design' />
      <meta property='og:image' content='/images/logo.png' />
      {!!description && (
        <meta property='og:description' content={description} />
      )}
      <meta name='robots' content='index,follow' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />

      {!!canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
      <link rel='shortcut icon' href='/favicon.ico' />
      {children}
    </Head>
  );
};

export default DocumentHead;
