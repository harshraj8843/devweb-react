import { bgDarkBlue, textMid, sansFont, heights, breakpoints } from "../../theme";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: `calc(100vh - ${heights.navBar + heights.statusBar}px)`,
    fontFamily: sansFont,
    overflow: "hidden",
  },
  mdtext: {
    color: textMid,
    letterSpacing: "2px",
    margin: "10px 20px",
    padding: "0",
    textShadow: `5px 5px ${bgDarkBlue}`,
    userSelect: "none",
  },
  repocard: {
    margin: "5px",
    height: "140px",
    width: "400px",
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      width: "340px",
    },
  },
};

export default styles;
