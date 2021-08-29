import { bgDarkBlue, textMid, sansFont, heights } from "../../theme";

const styles = {
  root: {
    // alignItems: 'center',
    display: "flex",
    flexDirection: "column",
    width: "100%",
    height: `calc(100vh - ${heights.navBar + heights.statusBar}px)`,
    // justifyContent: 'center',
    fontFamily: sansFont,
    // margin: '10px'
  },
  mdtext: {
    color: textMid,
    letterSpacing: "2px",
    margin: "10px 20px",
    padding: "0",
    textShadow: `5px 5px ${bgDarkBlue}`,
    userSelect: "none",
  },
};

export default styles;