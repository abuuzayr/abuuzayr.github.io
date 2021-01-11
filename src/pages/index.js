import React from "react";
import Helmet from "react-helmet"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Hero from "../components/hero"

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <Helmet>
        <script>
          {`
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
              document.body.classList.add('dark')
            } else {
              document.body.classList.remove('dark')
            }
          `}
        </script>
      </Helmet>
      <Hero />
    </Layout>
  );
}

export default IndexPage;
