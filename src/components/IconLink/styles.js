import { lbIconColor, green } from "../../theme";

const styles = {
  link: {
    color: lbIconColor,
    cursor: "pointer",
    marginBottom: "10px",
    transition: "color 100ms ease",
    "&:hover": {
      color: lbIconColor,
    },
    "&:last-of-type": {
      marginBottom: "20px",
    },
  },
  iconWrapper: {
    position: "relative",
    display: "inline-block",
  },
  icon: {
    padding: "10px",
  },
  badge: {
    position: "absolute",
    right: "4px",
    top: "4px",
    fontSize: "0.8em",
    backgroundColor: green,
    borderRadius: "4px",
    color: "#111",
    padding: "1px 2px",
    opacity: "0.9",
  },
};

export default styles;
