import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { extendTheme } from "@chakra-ui/react";
import React from "react";

const config = {
  useSystemColorMode: true,
};

const theme = extendTheme({ config });

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Aboreto&family=Josefin+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <Head />
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
