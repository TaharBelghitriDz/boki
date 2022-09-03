import { extendTheme } from "@chakra-ui/react";

export default extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "'Josefin Sans', sans-serif;",
        bg: "#fbffff",
        color: "#242124",
        fontSize: "18px",
        m: "0",
        p: "0",
      },
    },
  },
  colors: {
    gray: "#9A9A9A",
    red: {
      500: "#EB4335",
      100: "#9B2915",
    },
    black: "#242124",
    yellow: "#FF9F1C",
    green: {
      600: "#5E7279",
      700: "#8EADB8",
      500: "#5E7279",
    },
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
    os: "400px",
    md: "768px",
    lg: "960px",
    xl: "1300px",
    "2xl": "1536px",
  },
});
