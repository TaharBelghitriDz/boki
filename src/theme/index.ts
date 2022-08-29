import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Josefin Sans', sans-serif;",
        bg: "#fbffff",
        color: "#242124",
        fontSize: "18px",
      },
    },
  },
  colors: {
    gray: "#9A9A9A",
    red: {
      100: "#EB4335",
      500: "#9B2915",
    },
    black: "#242124",
    yellow: "#FF9F1C",
  },
  fonst: {
    aboretp: "'Aboreto', cursive;",
  },
  fontSizes: {
    s: "16px",
    m: "18px",
    l: "23px",
    xl: "30px",
  },
  breakpoints: {
    start: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1300px",
    "2xl": "1536px",
  },
});
