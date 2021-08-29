import React from "react";
import { createUseStyles } from "react-jss";
import SEO from "../SEO";
import styles from "./styles";

const useStyles = createUseStyles(styles);

const Container = ({ seo, children }) => {
  const classes = useStyles();

  return (
    <>
      {!!seo && <SEO {...seo} />}
      <div className={classes.root}>
        <div className={classes.content}>{children}</div>
      </div>
    </>
  );
};

export default Container;
