import {
  bgMidBlue,
  textLightBlue,
  mSize,
  monoFont,
  breakpoints,
  widths,
} from "../../theme";

const styles = {
  "@global": {
    html: {
      fontSize: "62.5%",
    },
    body: {
      fontFamily: monoFont,
      fontSize: mSize,
      background: bgMidBlue,
      boxSizing: "border-box",
    },
    button: {
      cursor: "pointer",
      "&:disabled": {
        cursor: "default",
      },
    },
    a: {
      color: textLightBlue,
      textDecoration: "none",
      transition: "color 500ms ease",
      "&:visited": {
        color: textLightBlue,
      },
    },
    ".color-transform": {
      transform: "color 500ms ease",
    },
  },
  root: {
    position: "absolute",
    height: "100vh",
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      width: '100%',
    },
    width: `calc(100% - ${widths.leftBar}px)`,
    padding: 0,
    margin: 0,
  },
  content: {
    position: "relative",
    top: 0,
    left: `${widths.leftBar}px`,
    right: 0,
    width: "100%",
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      left: "0",
    },
  },
  explorerOpen: {
    left: `${widths.leftBar + widths.explorer}px`,
  },
};

export default styles;
