import React from "react";
import { Helmet } from "react-helmet";

const SEO = ({ dynamicTitle }) => {
  return (
    <Helmet>
      <title>{dynamicTitle}</title>
      <meta name="author" content="Sayan Maity" />
      <meta
        name="description"
        content="One Stop platform for women to excel their career in tech"
      />
      <meta
        name="keywords"
        content="Women, Career, Tech, AI-Assistance, Passwordless Authentication, One-2-One mentorship, Job Listings"
      />
      {/* Open Graph (Facebook) : */}
      <meta property="og:title" content="SheRise" />
      <meta
        property="og:description"
        content="One Stop platform for women to excel their career in tech"
      />
      <meta
        property="og:image"
        content="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/Banner.jpg?updatedAt=1689688547059"
      />
      <meta property="og:url" content="https://sherise.vercel.app/" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="SheRise" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter : */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://sherise.vercel.app/" />
      <meta property="twitter:title" content="SheRise" />
      <meta
        property="twitter:description"
        content="One Stop platform for women to excel their career in tech"
      />
      <meta
        property="twitter:image"
        content="https://ik.imagekit.io/sayancr777/tr:w-400/SheRise/Banner.jpg?updatedAt=1689688547059"
      />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />

      {/* Favicon : */}
      <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
    </Helmet>
  );
};

export default SEO;
