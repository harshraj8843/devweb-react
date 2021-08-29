import { bgDarkBlue, textLightBlue, midBlue, sSize } from "../../theme";

const styles = {
  root: {
    background: bgDarkBlue,
    borderRadius: "4px",
    color: textLightBlue,
    display: "flex",
    margin: "8px",
    transition: "color 500ms ease",
    "&:hover": {
      background: bgDarkBlue,
    },
    "&:hover .icon": {
      color: midBlue,
    },
  },
  contents: {
    alignItems: "center",
    display: "flex",
    minHeight: "24px",
    padding: "6px 10px",
  },
  text: {
    fontSize: sSize,
    fontWeight: 400,
    marginLeft: "6px",
  },
  count: {
    fontSize: sSize,
    background: bgDarkBlue,
    borderRadius: "50%",
    marginLeft: "10px",
    padding: "4px 8px",
  },
};

export default styles;
