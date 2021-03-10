import React from "react";
import { Helmet } from "react-helmet";
import { configureAnchors } from "react-scrollable-anchor";
import { createGlobalStyle } from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar } from "./Navbar";
import { Life } from "./Life";
import '../fonts/typography.css';
 
// Offset all anchors by -60 to account for a fixed header
// and scroll more quickly than the default 400ms
configureAnchors({ offset: -60 });

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

export const Layout = ({ target, children }) => (
  <div>
    <Life />
    <Helmet>
      <title>AM Portfolio</title>
    </Helmet>

    <GlobalStyle />
    <Navbar target={target} />

    {children}
  </div>
);
