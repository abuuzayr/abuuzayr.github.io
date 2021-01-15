import React from "react";
import { graphql, useStaticQuery } from "gatsby"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import SmallLogo from "../images/small.png";

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          linkedin
          github
        }
      }
    }
  `);
  return (
    <footer className="text-gray-700 body-font">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-gray-300">
          <img src={SmallLogo} className="h-5" />
          <span className="ml-3 text-xl">builtforfifty</span>
        </a>
        <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © abuuzayr / Muhammad Fawwaz
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a className="text-gray-500" href={site.siteMetadata.github} target="_blank" rel="noopener noreferrer">
            <FiGithub size={20} />
          </a>
          <a className="ml-3 text-gray-500" href={site.siteMetadata.linkedin} target="_blank" rel="noopener noreferrer">
            <FiLinkedin size={20} />
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
