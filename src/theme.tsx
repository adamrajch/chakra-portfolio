import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints, mode } from "@chakra-ui/theme-tools";
const fonts = { mono: `'Menlo', monospace` };

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});

const theme = extendTheme({
  colors: {
    black: "#16161D",
  },
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      html: {
        scrollBehavior: "smooth",
      },
      body: {
        fontFamily: "body",
        color: mode("black", "whiteAlpha.900")(props),
        // bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
    }),
  },
});

export default theme;
