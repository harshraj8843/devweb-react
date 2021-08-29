import {
  breakpoints,
  midBlue,
  textLightBlue,
  textMid,
  mSize,
} from "../../theme";

const styles = {
  root: {
    maxWidth: "960px",
    padding: "0 20px",
    marginBottom: "200px",
    "& a:hover": {
      color: textMid,
    },
    "& li": {
      listStyle: "square",
    },
    [`@media screen and (max-width: ${breakpoints.desktop})`]: {
      marginLeft: 0,
    },
  },
  content: {
    color: textLightBlue,
    fontSize: mSize,
    "& h3": {
      color: midBlue,
    },
    "& ul": {
      "& li": {
        paddingBottom: "4px",
      },
      [`@media screen and (max-width: ${breakpoints.desktop})`]: {
        paddingLeft: "20px",
      },
    },
  },
};

export default styles;
